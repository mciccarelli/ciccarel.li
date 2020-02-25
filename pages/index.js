import React, { useState, useEffect } from 'react';
import { Layout, Intro, Projects, Background, Feed } from '../components';
import { motion, useViewportScroll, useTransform } from 'framer-motion';
import { scrollToTop } from '../lib/utils';
import { API_URL } from '../lib/constants';
import fetch from 'isomorphic-unfetch';
import useDimensions from 'react-use-dimensions';

const Index = ({ data }) => {
  const { scrollYProgress } = useViewportScroll();
  const [projectRef, { y: projectTop }] = useDimensions();
  const [isComplete, setIsComplete] = useState(false);
  const [isVisible, toggle] = useState({ arrow: true, projects: false });
  const yRange = useTransform(scrollYProgress, [0, 0.9], [0, 1]);

  useEffect(() => {
    yRange.onChange(v => {
      setIsComplete(v >= 1);
      toggle({
        arrow: v <= 0.05, // 5%
        projects: v >= 0.1, // 10%
      });
    });
  }, [yRange]);

  const variants = {
    visible: {
      opacity: 1,
      y: 0,
    },
    hidden: {
      opacity: 0,
      y: -50,
      transition: {
        duration: 0.33,
      },
    },
  };

  // filter out projects from activity feed data
  const projects = data.filter(item => item.type === 'project');

  return (
    <Layout>
      <section>
        <Intro />
        <motion.span
          className="text-2xl text-gray-400 user-select-none w-4 cursor-pointer"
          initial="visible"
          animate={isVisible.arrow ? 'visible' : 'hidden'}
          variants={variants}
          onClick={() => scrollToTop(projectTop)}
        >
          &darr;
        </motion.span>
      </section>
      <section ref={projectRef}>
        <Projects items={projects} show={isVisible.projects} />
      </section>
      <section>
        <Background />
      </section>
      <section>
        <Feed items={data} isComplete={isComplete} />
      </section>
      <style jsx global>{`
        section {
          @apply flex flex-col py-12 justify-center;
        }
      `}</style>
    </Layout>
  );
};

Index.getInitialProps = async () => {
  const r = await fetch(`${API_URL}/activity`);
  const data = await r.json();

  return { data };
};

export default Index;

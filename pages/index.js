import React, { useState, useEffect } from 'react';
import { Layout, Intro, Projects, Feed } from '../components';
import { API_URL } from '../lib/constants';
import { motion, useViewportScroll, useTransform } from 'framer-motion';
import fetch from 'isomorphic-unfetch';

const Index = ({ data }) => {
  const [hideArrow, setHideArrow] = useState(false);
  const [showProjects, setShowProjects] = useState(false);
  const { scrollYProgress } = useViewportScroll();
  const yRange = useTransform(scrollYProgress, [0, 0.9], [0, 1]);

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

  useEffect(() => {
    yRange.onChange(v => {
      // scrolled 5% the page
      setHideArrow(v >= 0.05);
      // scrolled 30% the page
      setShowProjects(v >= 0.3);
    });
  }, [yRange]);

  // filter out projects from activity feed data
  const projects = data.filter(x => x.feedSource === 'project');

  return (
    <Layout>
      <section>
        <Intro />
        <Feed items={data} />
        <motion.div
          initial="visible"
          animate={hideArrow ? 'hidden' : 'visible'}
          variants={variants}
          className="hidden md:block fixed bottom-0 left-0 p-6 md:p-12 text-xl text-gray-200 pointer-events-none"
        >
          ↓
        </motion.div>
      </section>
      <section>
        <Projects items={projects} show={showProjects} />
      </section>
      <style jsx>{`
        section {
          @apply .flex flex-col .min-h-screen;
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

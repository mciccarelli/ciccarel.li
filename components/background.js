const Background = () => (
  <div className="max-w-lg mb-12">
    <h5>— info</h5>
    <div className="flex flex-col">
      <div className="mb-8">
        <p>
          with more than a decade of experience working in various software
          engineering roles, industries, and with world-renowned brands such as
          VICE, Pentagram, GREY, and Condé Nast—I take on a variety of
          disciplines in the process of creating meaningful digital products.
        </p>
        <p>
          beyond user flows, information architecture and wireframes,
          prototypes, and production-level development, I’m a{' '}
          <strong>JAMstack</strong> specialist. headless cms platforms,
          serverless, lambda functions, React and Vue.js, static site
          generators, etc. I’m also comfortable developing for server-side
          technologies. if you need help putting together an API with node.js or
          python, then I’m still your guy.
        </p>
        <p>
          whatever your requirements are, I'm happy to help plan, build and
          deliver projects that are fast, secure and reliable.
        </p>
        <p>
          <a
            className="font-bold opacity-100"
            href="mailto:m@ciccarel.li?subject=Hi Michael, I'd like to hire you"
            title="send email"
          >
            get in touch &rarr;
          </a>
        </p>
      </div>
    </div>
    <style jsx>{`
      p {
        @apply text-gray-200 mb-8;
      }
    `}</style>
  </div>
);

export default Background;

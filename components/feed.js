const Feed = () => {
  return (
    <div className="flex flex-col mb-40">
      <h2 className="mb-8">
        - Activity Feed <span className="text-grey-dark">(4/122)</span>
      </h2>
      <ul className="legend">
        <li className="api">API</li>
        <li className="twitter">Twitter</li>
        <li className="instagram">Instagram</li>
        <li className="github">Github</li>
      </ul>
      <style jsx>{`
        .legend {
          @apply .flex .mb-12;
        }
        .legend li {
          @apply .flex .items-center .mr-6;
        }
        .legend li:before {
          @apply .mr-2 .shadow;
          content: '';
          width: 0.75em;
          height: 0.75em;
          border-radius: 50%;
        }
        .legend li.api:before {
          @apply .bg-purple-light;
        }
        .legend li.github:before {
          @apply .bg-github;
        }
        .legend li.twitter:before {
          @apply .bg-twitter;
        }
        .legend li.instagram:before {
          @apply .bg-instagram;
        }
      `}</style>
    </div>
  );
};

export default Feed;

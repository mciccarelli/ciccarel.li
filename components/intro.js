import Link from 'next/link';

const Intro = () => (
  <div className="flex flex-col">
    <h2 className="mb-8">— Michael Ciccarelli </h2>
    <p className="mb-4 max-w-2xl">
      A creative developer specializing in high-performant server-side rendered
      web sites and apps with a focus on modularity, responsive, and interactive
      content. Based in <strike>Brooklyn</strike> Miami, where he runs a small
      dev studio and usually works as a remote contractor.
    </p>
    <p className="flex text-grey-dark text-sm italic mb-12">
      [!] Currently accepting new projects for 2020.
      <Link href="/contact">
        <a className="flex items-center ml-2">
          <span className="mr-1">Inquire </span>
          <svg
            style={{ transform: 'scale(0.7)' }}
            width="21"
            height="14"
            viewBox="0 0 21 14"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M14.9996 1.34315L20.6565 7L14.9996 12.6569"
              stroke="currentColor"
            ></path>
            <path d="M0 7H20" stroke="currentColor"></path>
          </svg>
        </a>
      </Link>
    </p>
  </div>
);

export default Intro;

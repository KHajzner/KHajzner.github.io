import "../Skeleton/Skeleton.scss";
export const EnvelopeIcon = () => {
  return (
    <a className="social" href="mailto:khajzner@wp.pl">
      <svg id="envelope" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
        <path d="m21,5v-1H3v1H1v14h1v1h20v-1h1V5h-2Zm-11,7v-1h-1v-1h-1v-1h-1v-1h-1v-1h-1v-1h14v1h-1v1h-1v1h-1v1h-1v1h-1v1h-1v1h-2v-1h-1Zm-6-5v1h1v1h1v1h1v1h1v1h1v1h1v1h1v1h2v-1h1v-1h1v-1h1v-1h1v-1h1v-1h1v-1h1v-1h1v11H3V7h1Z" />
      </svg>
    </a>
  );
};

export const GitHubIcon = () => {
  return (
    <a
      className="social"
      href="https://github.com/KHajzner"
      target="_blank"
      rel="noopener noreferrer"
    >
      <svg id="Github" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
        <polygon points="23 9 23 15 22 15 22 17 21 17 21 19 20 19 20 20 19 20 19 21 18 21 18 22 16 22 16 23 15 23 15 18 14 18 14 17 15 17 15 16 17 16 17 15 18 15 18 14 19 14 19 9 18 9 18 6 16 6 16 7 15 7 15 8 14 8 14 7 10 7 10 8 9 8 9 7 8 7 8 6 6 6 6 9 5 9 5 14 6 14 6 15 7 15 7 16 9 16 9 18 7 18 7 17 6 17 6 16 4 16 4 17 5 17 5 19 6 19 6 20 9 20 9 23 8 23 8 22 6 22 6 21 5 21 5 20 4 20 4 19 3 19 3 17 2 17 2 15 1 15 1 9 2 9 2 7 3 7 3 5 4 5 4 4 5 4 5 3 7 3 7 2 9 2 9 1 15 1 15 2 17 2 17 3 19 3 19 4 20 4 20 5 21 5 21 7 22 7 22 9 23 9" />
      </svg>
    </a>
  );
};

export const LinkedInIcon = () => {
  return (
    <a
      className="social"
      href="https://www.linkedin.com/in/kalina-hajzner-386a4222b/"
      target="_blank"
      rel="noopener noreferrer"
    >
      <svg id="linkedin" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
        <path d="m22,2v-1H2v1h-1v20h1v1h20v-1h1V2h-1Zm-9,10v8h-3v-11h3v1h1v-1h4v1h1v10h-3v-8h-3Zm-9-4v-3h3v3h-3Zm3,1v11h-3v-11h3Z" />
      </svg>
    </a>
  );
};

export const BookIcon = () => {
  return (
    <svg id="book-heart" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
      <polygon points="18 6 18 9 17 9 17 10 16 10 16 11 15 11 15 12 14 12 14 13 13 13 13 14 12 14 12 13 11 13 11 12 10 12 10 11 9 11 9 10 8 10 8 9 7 9 7 6 8 6 8 5 11 5 11 6 12 6 12 7 13 7 13 6 14 6 14 5 17 5 17 6 18 6" />
      <path d="m20,17h1v-1h1V2h-1v-1H4v1h-1v1h-1v18h1v1h1v1h17v-1h1v-1h-1v-1h-1v-3Zm-2,4H5v-1h-1v-2h1v-1h13v4ZM4,3h16v12H4V3Z" />
    </svg>
  );
};

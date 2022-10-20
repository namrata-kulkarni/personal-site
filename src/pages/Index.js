import React from 'react';
import { Link } from 'react-router-dom';

import Main from '../layouts/Main';

const Index = () => (
  <Main
    description={"Namrata Kulkarni's personal website. New York based Stanford ICME graduate, "
      + 'co-founder and CTO of Arthena, and YC Alumni.'}
  >
    <article className="post" id="index">
      <header>
        <div className="title">
          <h2 data-testid="heading"><Link to="/">About this site</Link></h2>
          <p>
            A beautiful, responsive, statically-generated,
            react application written with modern Javascript.
          </p>
        </div>
      </header>
      <p> Welcome to my website. Please feel free to read more <Link to="/about">about me</Link>,
        or you can check out my {' '}
        <Link to="/resume">resume</Link>, {' '}
        <Link to="/projects">projects</Link>, {' '}
        or <Link to="/contact">contact</Link> me.
      </p>
      <p>
        I’m a UI/UX designer with experience in UX research, UI design, and front-end development.
        I create inclusive experiences to bridge the gap between people and technology and strive to
        align creative vision with business strategy.
        I believe in advocating for the user through research and empathy and translating core
        customer needs into meaningful, inclusive interactions.
      </p>
    </article>
  </Main>
);

export default Index;

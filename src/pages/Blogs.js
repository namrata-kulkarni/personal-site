import React from 'react';
import { Link } from 'react-router-dom';

import Main from '../layouts/Main';

import Cell from '../components/Blogs/Cell';
import data from '../data/blogs';

const Blogs = () => (
  <Main
    title="Blogs"
    description="Learn about my blogs."
  >
    <article className="post" id="blogs">
      <header>
        <div className="title">
          <h2 data-testid="heading"><Link to="/vlogs">Blogs</Link></h2>
          <p>A selection of blogs that I&apos;m not too ashamed of</p>
        </div>
      </header>
      {data.map((project) => (
        <Cell
          data={project}
          key={project.title}
        />
      ))}
    </article>
  </Main>
);

export default Blogs;

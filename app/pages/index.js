import React from 'react';
import Link from 'next/link';
import Layout from '../components/layout';
import Container from '../components/container';

export default () => (
  <Layout>
    <Container>
      <h1>next.js starter</h1>
      <Link href="/posts">
        <a>
          All Posts
        </a>
      </Link>
      <ul>
        <li>
          <Link
            href={{ pathname: '/posts', query: { id: '2' } }}
            as="/posts/2"
          >
            <a>post #2</a>
          </Link>
        </li>
        <li>
          <Link
            href={{ pathname: '/posts', query: { id: '10' } }}
            as="/posts/10"
          >
            <a>post #10</a>
          </Link>
        </li>
      </ul>
    </Container>
  </Layout>
);

import React from 'react'
import Link from 'next/link'
import Layout from '../components/layout';


export default () => (
  <Layout>
    <div className="example">
      <h1>index.js</h1>
      <Link href="/posts">
        <a>
          All Posts
        </a>
      </Link>
      <ul>
        <li>
          <Link
            href={{pathname: '/posts', query: { id: '2' }}}
            as='/posts/2'
          >
            <a>post #2</a>
          </Link>
        </li>
        <li>
          <Link
            href={{pathname: '/posts', query: { id: '10' }}}
            as='/posts/10'
          >
            <a>post #10</a>
          </Link>
        </li>
      </ul>
    </div>
  </Layout>
)

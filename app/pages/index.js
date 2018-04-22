import React from 'react';
import Link from 'next/link';
import axios from 'axios';
import Layout from '../components/layout';
import Container from '../components/container';
import PostList from '../components/post-list';

export default class Home extends React.Component {

  static async getInitialProps({ query }) {
    const call = await axios.get('https://jsonplaceholder.typicode.com/posts');
    const data = await call.data;

    // only return first 4 posts
    const filteredData = data.filter((d, index) => index < 4);

    return { query, data: filteredData };
  }

  render() {
    // console.log(this.props.data)
    return (
      <Layout>
        <Container>
          <h1>next.js starter</h1>
          <Link href="/posts">
            <a>
              All Posts
            </a>
          </Link>
          <PostList posts={this.props.data} />
        </Container>
      </Layout>
    );
  }
}

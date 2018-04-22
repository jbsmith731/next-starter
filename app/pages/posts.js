import React, { Component } from 'react';
import axios from 'axios';
import Layout from '../components/layout';
import Container from '../components/container';
import PostList from '../components/post-list';

export default class extends Component {

  static async getInitialProps({ query }) {
    const call = await axios.get('https://jsonplaceholder.typicode.com/posts');
    const data = await call.data;

    return { query, data };
  }

  render() {
    return (
      <Layout>
        <Container>
          <div>
            <h1>Blog Post Listing</h1>
            <PostList posts={this.props.data} />
          </div>
        </Container>
      </Layout>
    );

  }
}

import React, { Component } from 'react';
import axios from 'axios';
import Layout from '../components/layout';
import Container from '../components/container';

export default class extends Component {

  static async getInitialProps({ query }) {
    const call = await axios.get(`https://jsonplaceholder.typicode.com/posts/${query.id}`);
    const data = await call.data;

    return { query, data };
  }

  render() {
    const { data } = this.props;

    return (
      <Layout>
        <Container>
          <div>
            <h1>{data.title}</h1>
            <h6>Blog post #{data.id}</h6>
            <p>
              {data.body}
            </p>
          </div>
        </Container>
      </Layout>
    );

  }
}

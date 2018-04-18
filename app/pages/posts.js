import React, { Component } from 'react';
import { Link } from '../routes';
import Layout from '../components/layout';
import Container from '../components/container';

const hello = {
  en: 'hello',
  es: 'hola',
};

const SinglePost = props => (
  <Layout url={props.url.asPath}>
    <Container>
      <div>
        <h1>My blog post #{props.postId}</h1>
        <div>{hello[props.lang]}</div>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
          tempor incididunt ut labore et dolore magna aliqua.
        </p>
      </div>
    </Container>
  </Layout>
);

export default class extends Component {

  static getInitialProps({ query }) {
    const queries = {
      lang: query.lang ? query.lang : 'en',
    };

    if (query) {
      queries.postId = query.id;
    }
    return queries;
  }

  render() {
    const {
      postId,
      url,
      lang,
    } = this.props;

    if (postId) {
      return <SinglePost {...this.props} />;
    }
    return (
      <Layout url={url.asPath}>
        <Container>
          <div>
            <h1>Blog Post Listing</h1>
            <ul>
              <li>
                <Link
                  route="posts"
                  params={{ id: '2', lang }}
                >
                  <a>post #2</a>
                </Link>
              </li>
              <li>
                <Link
                  route="posts"
                  params={{ id: '10', lang }}
                >
                  <a>post #10</a>
                </Link>
              </li>
            </ul>
          </div>
        </Container>
      </Layout>
    );

  }
}

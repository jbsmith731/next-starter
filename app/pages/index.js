import React from 'react';
import { Link } from '../routes';
import Layout from '../components/layout';
import Container from '../components/container';

export default class extends React.PureComponent {

  static getInitialProps({ query }) {
    const queries = {
      lang: query.lang ? query.lang : 'en',
    };

    return queries;
  }

  render() {
    const {
      url,
      lang,
    } = this.props;

    return (
      <Layout url={url.asPath}>
        <Container>
          <h1>next.js starter</h1>
          <h4>Language: {lang}</h4>
          <Link route="posts" params={{ lang }}>
            <a>
              All Posts
            </a>
          </Link>
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
        </Container>
      </Layout>
    );
  }
}

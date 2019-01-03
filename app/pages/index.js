import React from 'react';
import { Link } from '../routes';
import Container from '../components/container';

export default class extends React.PureComponent {

  state = {
    counter: 0,
  };

  increase = () => {
    this.setState(prevState => ({
      counter: prevState.counter + 1,
    }));
  }

  render() {
    return (
      <main>
        <Container>
          <h1>next.js starter</h1>
          <Link route="/posts">
            <a>
              All Posts
            </a>
          </Link>
          <ul>
            <li>
              <Link route="/posts/2">
                <a>post #2</a>
              </Link>
            </li>
            <li>
              <Link route="/posts/10">
                <a>post #10</a>
              </Link>
            </li>
          </ul>

          <button onClick={this.increase}>increase &rarr;</button> {this.state.counter}
        </Container>
      </main>
    );
  }
}

import React from 'react';
import PropTypes from 'prop-types';
import { Link } from '../../routes';

import s from './PostList.scss';

const PostList = props => (
  <ul className={s.postList}>
    {
      props.posts.map(post => (
        <li key={post.id}>
          <Link
            route="post"
            params={{ id: post.id }}
          >
            <a>Post #{post.id}</a>
          </Link>
        </li>
      ))
    }
  </ul>
);

PostList.propTypes = {
  posts: PropTypes.array,
};

export default PostList;

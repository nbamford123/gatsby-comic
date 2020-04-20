import React from 'react';
import { css } from '@emotion/core';

import Layout from '../components/layout';
import usePosts from '../hooks/usePosts';
import PostPreview from '../components/postPreview';
import Insta from '../components/insta';

const Index = () => {
  const posts = usePosts();
  return (
    <>
      <Layout>
        <div
          css={css`
            display: flex;
          `}
        >
          <h2Blog</h2>
          {posts.map(post => (
            <PostPreview key={post.slug} post={post} />
          ))}
          <Insta />
        </div>
      </Layout>
    </>
  );
};

export default Index;
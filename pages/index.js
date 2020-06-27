import React from 'react'
import withLayout from '../src/components/withLayout'
import Title from '../src/components/Title'
import Description from '../src/components/Description'
import PostListContainer from '../src/containers/posts/PostListContainer'

const Page = () => (
  <>
    <Title>인기 있어요!</Title>
    <Description>인기 있는 음악입니다.</Description>
    <PostListContainer />
  </>
)

export default withLayout(Page)

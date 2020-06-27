import React from 'react'
import withLayout from '../src/components/withLayout'
import Title from '../src/components/hgroup/Title'
import Description from '../src/components/hgroup/Description'
import List from '../src/containers/music/List'

const Page = () => (
  <>
    <Title>인기 있어요!</Title>

    <Description>인기 있는 음악입니다.</Description>

    <List />
  </>
)

export default withLayout(Page)

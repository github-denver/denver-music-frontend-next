import React from 'react'
import PropTypes from 'prop-types'
// import Link from 'next/link'
import styled from 'styled-components'
import Thumbnail from '../Thumbnail'
import List from '../List'

const Read = styled.div`
  position: relative;
  margin-top: 88px;
`

const Result = ({ loading, error, post, onPlayPlayer }) => {
  console.log('posts → PostRead.js → error: ', error)
  if (error) {
    return <p>에러가 발생하였습니다.</p>
  }

  console.log('posts → PostRead.js → loading: ', loading)
  if (loading || !post) {
    return null
  }

  return (
    <>
      <Read>
        <Thumbnail post={post} className="group_album" />
        <List list={post} onPlayPlayer={onPlayPlayer} />
      </Read>
    </>
  )
}

Result.propTypes = {
  loading: PropTypes.any,
  error: PropTypes.any,
  post: PropTypes.any,
  onPlayPlayer: PropTypes.any
}

export default Result

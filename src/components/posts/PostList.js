import React from 'react'
import PropTypes from 'prop-types'
import Link from 'next/link'
import styled from 'styled-components'

const StylePostItem = styled.li`
  display: inline-block;
  width: 198px;
  padding: 16px 0 0 16px;
  box-sizing: border-box;
  vertical-align: top;
`

const StylePostList = styled.ul`
  margin: -16px 0 0 -16px;
  .link_local {
    display: block;
    padding: 16px;
    background-color: #272727;
  }

  .thumbnail {
    display: block;
    width: 150px;
    height: 150px;
    background-color: #333;
  }

  .subject {
    display: inline-block;
    margin-top: 16px;
    font-size: 14px;
    font-weight: bold;
    color: #fff;
  }

  .description {
    margin-top: 8px;
    font-size: 12px;
    color: #b3b3b3;
  }
`

const PostItem = ({ post }) => {
  // const { title } = post

  return (
    <StylePostItem>
      <Link href="/">
        <a className="link_local">
          <span
            className="thumbnail"
            style={{
              backgroundImage: `url(http://localhost:3001/uploads/${post.thumbnail})`,
              backgroundPosition: '50% 50%',
              backgroundSize: `auto 100%`
            }}></span>
          <strong className="subject">{post.subject}</strong>
          <p className="description">{post.regdate}</p>
        </a>
      </Link>
    </StylePostItem>
  )
}

PostItem.propTypes = {
  post: PropTypes.any
}

const PostList = ({ loading, error, posts }) => {
  if (error) {
    return (
      <StylePostList>
        <li>에러가 발생하였습니다.</li>
      </StylePostList>
    )
  }

  return (
    <>
      {/* 읽어들이는 중이 아니고 목록(type: Array)이 존재한다면.. */}
      {!loading && posts && (
        <StylePostList>
          {posts.list.map((post, index) => (
            <PostItem post={post} key={index} />
          ))}
        </StylePostList>
      )}
    </>
  )
}

PostList.propTypes = {
  loading: PropTypes.any,
  error: PropTypes.any,
  posts: PropTypes.any
}

export default PostList

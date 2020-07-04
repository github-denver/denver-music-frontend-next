import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import Button from '../components/Button'

const Styled = {}

Styled.Group = styled.div`
  &.thumbnail_local {
    position: absolute;
    top: 0;
    left: 0;
    width: 320px;
    text-align: center;
  }
`

Styled.Box = styled.span`
  display: block;
  height: 320px;
  font-size: 16px;
  font-weight: 700;
  color: transparent;
  background-color: #282828;

  .outer_cell {
    width: 100%;
    height: 100%;
  }
`

Styled.Subject = styled.strong`
  display: block;
  margin-top: 12px;
  font-size: 20px;
  font-weight: bold;
  color: #fff;
  word-break: keep-all;

  &:first-child {
    margin-top: 0;
  }
`

Styled.Writer = styled.p`
  display: block;
  margin-top: 12px;
  font-size: 14px;
  color: #b3b3b3;
`

const Thumbnail = (props) => {
  const { name, subject, thumbnail } = props.post.result[0]

  return (
    <Styled.Group {...props}>
      <Styled.Box
        style={{
          backgroundImage: `url( ${thumbnail})`,
          backgroundPosition: '50% 50%',
          backgroundSize: `auto 100%`
        }}>
        <div className="outer_cell">
          <div className="inner_cell">{subject}</div>
        </div>
      </Styled.Box>

      <Styled.Subject>{subject}</Styled.Subject>

      <Styled.Writer>{name}</Styled.Writer>

      <Button style={{ marginTop: '12px' }}>재생하기</Button>
    </Styled.Group>
  )
}

Thumbnail.propTypes = {
  post: PropTypes.any
}

export default Thumbnail

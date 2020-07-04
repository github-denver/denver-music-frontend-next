import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
// import Song from './music/Song'
import Song from './Song'

const Styled = {}

Styled.Group = styled.div`
  overflow-x: hidden;
  overflow-y: auto;
  position: absolute;
  top: -4px;
  right: 0;
  left: 352px;
  bottom: -4px;
  padding: 4px 36px 4px 4px;
`

Styled.List = styled.ul``

Styled.Item = styled.li``

const List = ({ list, onPlayPlayer }) => {
  const { result } = list

  return (
    <Styled.Group>
      <Styled.List>
        {result.map((song, index) => {
          return (
            <Styled.Item key={index}>
              <Song song={song} onPlayPlayer={onPlayPlayer} />
            </Styled.Item>
          )
        })}
      </Styled.List>
    </Styled.Group>
  )
}

List.propTypes = {
  list: PropTypes.any,
  onPlayPlayer: PropTypes.any
}

export default List

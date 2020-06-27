import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
// import Song from './music/Song'
import Song from './Song'

const Styled = {}

Styled.Group = styled.div`
  padding-left: 320px;
`

Styled.Scroll = styled.div`
  overflow-x: hidden;
  overflow-y: auto;
`

Styled.List = styled.ul`
  margin: 4px 4px 4px 72px;
`

Styled.Item = styled.li``

const List = ({ list, onPlayPlayer }) => {
  const { result } = list

  return (
    <Styled.Group>
      <Styled.Scroll>
        <Styled.List>
          {result.map((song, index) => {
            return (
              <Styled.Item key={index}>
                <Song song={song} onPlayPlayer={onPlayPlayer} />
              </Styled.Item>
            )
          })}
        </Styled.List>
      </Styled.Scroll>
    </Styled.Group>
  )
}

List.propTypes = {
  list: PropTypes.any,
  onPlayPlayer: PropTypes.any
}

export default List

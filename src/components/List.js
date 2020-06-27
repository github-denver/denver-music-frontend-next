import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import Song from './Song'

const Group = styled.div`
  padding-left: 320px;
`

const Scroll = styled.div`
  overflow-x: hidden;
  overflow-y: auto;
`

const List = styled.ul`
  margin: 4px 4px 4px 72px;
`

const Item = styled.li``

const Result = ({ list, onPlayPlayer }) => {
  const { result } = list

  return (
    <Group>
      <Scroll>
        <List>
          {result.map((song, index) => {
            return (
              <Item key={index}>
                <Song song={song} onPlayPlayer={onPlayPlayer} />
              </Item>
            )
          })}
        </List>
      </Scroll>
    </Group>
  )
}

Result.propTypes = {
  list: PropTypes.any,
  onPlayPlayer: PropTypes.any
}

export default Result

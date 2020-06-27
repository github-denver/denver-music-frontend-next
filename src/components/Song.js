import React from 'react'
import PropTypes from 'prop-types'
// import Link from 'next/link'
import styled from 'styled-components'

const Song = styled.a`
  display: block;
  position: relative;
  padding: 24px 16px;
  color: #fff;
  word-break: break-all;

  &:hover,
  &:focus {
    background-color: #343434;
  }

  .emph_l {
    display: block;
    position: relative;
    padding-left: 26px;
    font-style: normal;
  }

  .icon_global {
    position: absolute;
    top: 2px;
    left: 0;
    width: 18px;
    height: 18px;
    background-color: #fff;
  }
`
const Result = ({ song, onPlayPlayer }) => {
  const { subject, writer, time, upload2 } = song
  console.log('Song.js → subject: ', subject)
  console.log('Song.js → writer: ', writer)
  console.log('Song.js → time: ', time)
  console.log('Song.js → upload2: ', upload2)

  const test123 = (event) => {
    const value = event.currentTarget.children[0].value
    console.log('Song.js → value: ', value)

    onPlayPlayer(value)
  }

  return (
    <Song href="#" onClick={test123}>
      <input type="hidden" className="tf_l" value={upload2} />

      <em className="emph_l">
        <span className="icon_global">아이콘</span>
        <span className="txt_l">{subject}</span>
      </em>

      <span className="txt_l">{writer}</span>

      <span className="txt_l">{time}</span>
    </Song>
  )
}

Result.propTypes = {
  song: PropTypes.any,
  onPlayPlayer: PropTypes.any
}

export default Result

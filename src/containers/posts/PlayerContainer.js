import React from 'react'
import PropTypes from 'prop-types'
import { useEffect } from 'react'
import { withRouter } from 'next/router'
import { useSelector, useDispatch } from 'react-redux'
import Player from '../../components/Player'
// import { playPlayer, pausePlayer, stopPlayer } from '../../modules/player'

const Result = ({ location }) => {
  console.log('PlayerContainer.js → location: ', location)

  const dispatch = useDispatch()

  const url = useSelector((state) => state.player)
  console.log('PlayerContainer.js → url: ', url)

  useEffect(() => {
    console.log('PlayerContainer.js → useEffect(() => { .. })')
  }, [dispatch, url])

  return <Player />
}

Result.propTypes = {
  location: PropTypes.any
}

export default withRouter(Result)

import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

const Contents = styled.div`
  height: 100%;
  padding: 36px;
  box-sizing: border-box;
`

const Result = (props) => <Contents>{props.children}</Contents>

Result.propTypes = {
  children: PropTypes.any
}

export default Result

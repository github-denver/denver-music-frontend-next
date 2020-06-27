import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

const Container = styled.section`
  overflow: auto;
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  z-index: 10;
  margin: 0 0 120px 240px;
  background-color: #121212;
`

const Result = (props) => <Container>{props.children}</Container>

Result.propTypes = {
  children: PropTypes.any
}

export default Result

import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

const Footer = styled.div`
  position: fixed;
  right: 0;
  bottom: 0;
  left: 0;
  z-index: 10;
  height: 120px;
  font-size: 14px;
  color: #fff;
  background-color: #282828;
  text-align: right;
`

const Result = (props) => <Footer>{props.children}</Footer>

Result.propTypes = {
  children: PropTypes.any
}

export default Result

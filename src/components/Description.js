import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

const Description = styled.p`
  font-size: 14px;
  color: #b3b3b3;
`

const Result = (props) => <Description>{props.children}</Description>

Result.propTypes = {
  children: PropTypes.any
}

export default Result

import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

const Title = styled.h2`
  margin-top: 32px;
  font-size: 28px;
  font-weight: bold;
  color: #fff;

  &:first-child {
    margin-top: 0;
  }
`

const Result = (props) => <Title>{props.children}</Title>

Result.propTypes = {
  children: PropTypes.any
}

export default Result

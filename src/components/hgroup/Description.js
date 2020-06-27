import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

const Styled = {}

Styled.Description = styled.p`
  margin: 12px 0;
  font-size: 14px;
  color: #b3b3b3;
`

const Description = (props) => (
  <Styled.Description>{props.children}</Styled.Description>
)

Description.propTypes = {
  children: PropTypes.any
}

export default Description

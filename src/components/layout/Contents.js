import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

const Contents = styled.div`
  padding: 16px 32px;
`

const Result = (props) => <Contents>{props.children}</Contents>

Result.propTypes = {
  children: PropTypes.any
}

export default Result

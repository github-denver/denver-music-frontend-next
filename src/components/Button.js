import React from 'react'
import PropTypes from 'prop-types'
import styled, { css } from 'styled-components'
import Link from 'next/link'
import palette from '../lib/styles/palette'

const buttonStyle = css`
  padding: 13px 32px;
  border: 0 none;
  border-radius: 4px;
  font-size: 16px;
  font-weight: bold;
  line-height:1;
  color: #fff;
  cursor: pointer;

  background: ${palette.gray[8]};
  &:hover {
    background: ${palette.gray[6]};
  }
  ${(props) =>
    props.fullWidth &&
    css`
      padding-top: 0.75rem;
      padding-bottom: 0.75rem;
      width: 100%;
      font-size: 1.125rem;
    `}

  ${(props) =>
    props.cyan &&
    css`
      background: ${palette.cyan[5]};
      &:hover {
        background: ${palette.cyan[4]};
      }
    `}

  ${(props) =>
    props.green &&
    css`
      background: ${palette.green[6]};
      &:hover {
        background: ${palette.green[5]};
      }
    `}
`

const StyledButton = styled.button`
  ${buttonStyle}
`

const StyledLink = styled(Link)`
  ${buttonStyle}
`

const Button = (props) => {
  return props.to ? (
    <StyledLink
      {...props}
      cyan={props.cyan ? 1 : 0}
      green={props.green ? 1 : 0}
    />
  ) : (
    <StyledButton {...props} />
  )
}

Button.propTypes = {
  to: PropTypes.any,
  cyan: PropTypes.any,
  green: PropTypes.any
}

export default Button

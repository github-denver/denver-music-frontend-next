import React from 'react'
import Link from 'next/link'
import styled from 'styled-components'

const Location = styled.ul`
  background-color: #0a0a0a;
  font-size: 0;

  li {
    display: inline-block;
    margin: 4px;
    vertical-align: top;
  }

  .link_local {
    display: block;
    width: 52px;
    height: 52px;
    color: #fff;
  }
`

const Result = () => (
  <Location>
    <li>
      <Link href="/">
        <a className="link_local">
          <span className="icon_global"></span>
          <span className="text_local">이전</span>
        </a>
      </Link>
    </li>
    <li>
      <Link href="/">
        <a className="link_local">
          <span className="icon_global"></span>
          <span className="text_local">다음</span>
        </a>
      </Link>
    </li>
  </Location>
)

export default Result

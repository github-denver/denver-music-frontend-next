import React from 'react'
import Link from 'next/link'
import styled from 'styled-components'

const Header = styled.header`
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  z-index: 10;
  width: 240px;
  background-color: #030303;
`

const Menu = styled.ul`
  li {
    padding: 0 8px;
  }

  a {
    display: block;
    padding: 4px 16px;
  }

  .icon_global {
    width: 32px;
    height: 32px;
    margin-right: 16px;
    background-color: #fff;
    vertical-align: middle;
  }

  .text_local {
    display: inline-block;
    font-size: 14px;
    color: #ccc;
    vertical-align: middle;
  }

  a:hover,
  a:focus {
    background-color: #282828;
  }

  a:hover .text_local,
  a:focus .text_local {
    color: #fff;
  }
`

const H1 = styled.h1`
  margin: 12px 0;
  text-align: center;

  .link_logo {
    display: inline-block;
    padding: 12px;
    font-size: 24px;
    color: #fff;
  }
`

const Result = () => (
  <Header>
    <H1>
      <Link href="/">
        <a className="link_logo">
          <span className="icon_global"></span>
          <span className="text_local">덴버뮤직</span>
        </a>
      </Link>
    </H1>
    <Menu>
      <li>
        <Link href="/">
          <a>
            <span className="icon_global"></span>
            <span className="text_local">홈</span>
          </a>
        </Link>
      </li>
      <li>
        <Link href="/[page]" as="/library">
          <a>
            <span className="icon_global"></span>
            <span className="text_local">내 라이브러리</span>
          </a>
        </Link>
      </li>
      <li>
        <Link href="/[page]" as="/search">
          <a>
            <span className="icon_global"></span>
            <span className="text_local">검색하기</span>
          </a>
        </Link>
      </li>
    </Menu>
  </Header>
)

export default Result

import React from 'react'
import Header from './layout/Header'
import Container from './layout/Container'
import Contents from './layout/Contents'
import Location from './layout/Location'
import Footer from './layout/Footer'
import PlayerContainer from '../containers/posts/PlayerContainer'

const withLayout = (Page) => {
  return function _withLayout() {
    _withLayout.displayName = 'withLayout'

    return (
      <div>
        <Header></Header>

        <Container>
          <Location></Location>

          <Contents>
            <Page />
          </Contents>
        </Container>

        <Footer>
          <PlayerContainer></PlayerContainer>
        </Footer>
      </div>
    )
  }
}

export default withLayout

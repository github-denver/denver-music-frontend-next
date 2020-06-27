import React from 'react'
import { useRouter } from 'next/router'
import withLayout from '../../../src/components/withLayout'
import PostReadContainer from '../../../src/containers/posts/PostReadContainer'

const Page = () => {
  const router = useRouter()
  console.log('[page] → read → [number.js] → router: ', router)

  const { number } = router.query
  console.log('[page] → read → [number.js] → number: ', number)

  return (
    <>
      <PostReadContainer number={number} />
    </>
  )
}

export default withLayout(Page)

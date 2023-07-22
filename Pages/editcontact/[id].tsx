import { NextPage } from 'next'
import { useRouter } from 'next/router'
import React from 'react'

const ContatcId: NextPage = () => {
  const router = useRouter();
  const {id} = router.query
  return (
    <div>[id]</div>
  )
}

export default ContatcId
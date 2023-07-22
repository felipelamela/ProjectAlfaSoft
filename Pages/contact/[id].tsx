import { NextPage } from 'next'
import { useRouter } from 'next/router'
import React from 'react'
import useFetchContact from '../../src/Utilits/useFetchContact'

const ContatcId: NextPage = () => {
  const router = useRouter();
  const { id } = router.query
  const { data } = useFetchContact(id)
  console.log(data)

  return (
    <div></div>
  )
}

export default ContatcId
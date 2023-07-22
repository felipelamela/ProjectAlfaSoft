import { NextPage } from 'next'
import { useRouter } from 'next/router'
import React from 'react'
import useFetchContact from '../../src/Utilits/useFetchContact'

const ContatcId: NextPage = () => {
  const router = useRouter();
  const { id } = router.query
  const { data } = useFetchContact(id)
  console.log(id)
  console.log(data)

  if (data === null) return <p>loading</p>
  return (
    <>
      {data.map((item, index) => (
        <div key={index}>
          <p>{item.nome}</p>
          <p>{item.email}</p>
          <p>{item.contato}</p>
          <p>{item.id}</p>
          <p>{item.img}</p>
        </div>
      ))}

    </>

  )
}

export default ContatcId
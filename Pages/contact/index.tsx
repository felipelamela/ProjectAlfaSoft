import { NextPage } from 'next'
import { useRouter } from 'next/router'
import React from 'react'
import useFetchContact from '../../src/Utilits/useFetchContact'

const Contatc: NextPage = () => {
  const router = useRouter();
  const { id } = router.query
  const { data } = useFetchContact(id)

  if (data === null) return <p>loading</p>
  return (
    <main>
      {data.map((item, index) => (
        <div key={index}>
          <p>{item.nome}</p>
          <p>{item.email}</p>
          <p>{item.contato}</p>
          <p>{item.id}</p>
          <p>{item.img}</p>
        </div>
      ))}

    </main>

  )
}

export default Contatc
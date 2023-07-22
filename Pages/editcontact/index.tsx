import { NextPage } from 'next'
import { useRouter } from 'next/router'
import React from 'react'
import Input from '../../src/Components/GlobalComponents/Input/Input'
import useFetchContact from '../../src/Utilits/useFetchContact'

const ContatcId: NextPage = () => {
  const router = useRouter();
  const { id } = router.query
  const { data } = useFetchContact('id')

  const [nome, setNome] = React.useState('')
  const [contato, setContato] = React.useState('')
  const [email, setEmail] = React.useState('')
  const [img, setImg] = React.useState('')

  async function handleSubmit(id: number, nome: string, contato: string, email: string, img: string) {

    try {
      const response = await fetch("http://localhost:3000/api/usercontact", {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ id: id, nome: nome, email: email, contato: contato, img: img }),
      });
      if (!response.ok) {
        const errorMessage = await response.json();
        throw new Error(errorMessage.message);
      }
      const updatedUser = await response.json();
      console.log('Usuário atualizado:', updatedUser);
    } catch (error) {
      console.error('Erro ao atualizar o usuário:', error.message);
    }
    router.push('/')
  }

  if (data == null) return <p>loading</p>
  return (
    <form onSubmit={e => handleSubmit(Number(id), nome, contato, email, img)}>
      <Input
        type='text'
        nome='Nome'
        text={nome}
        setText={setNome}
      />
      <Input
        type='number'
        nome='Contato'
        text={contato}
        setText={setContato}
      />
      <Input
        type='email'
        nome='E-mail'
        text={email}
        setText={setEmail}
      />
      <Input
        type='text'
        nome='Imagem'
        text={img}
        setText={setImg}
      />
      <button>Adicionar Contato</button>

    </form>
  )
}

export default ContatcId
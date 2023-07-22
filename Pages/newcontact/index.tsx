"use client"
import React from "react"
import Input from "../../src/Components/GlobalComponents/Input/Input"


const index = () => {
  const [nome, setNome] = React.useState('')
  const [contato, setContato] = React.useState('')
  const [email, setEmail] = React.useState('')
  const [img, setImg] = React.useState('')


  function handleSubmit(e) {
    e.preventDefault()
    const modelo = {
      nome: nome,
      contato: contato,
      email: email,
      img: img
    }

    fetch("/api/usercontact", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(modelo),
    })
      .then((response) => {
        if (!response.ok) {
          throw new Error("Erro ao criar novo usuário.");
        }
        return response.json();
      })
      .then((data) => {
        console.log("Novo usuário criado:", data);
      })
      .catch((error) => {
        console.error("Erro:", error.message);
      });

  }


  return (
    <form onSubmit={handleSubmit}>
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

export default index
import React from 'react'
import { useRouter } from 'next/router';
import useFetch from '../../../Utilits/useFetch';
import Link from 'next/link';

interface CardContactProps {
  id: number,
  nome: string,
  contato: number,
  email: string,
}


const CardContact: React.FC<CardContactProps> = ({ id, nome, contato, email }) => {
  const router = useRouter();

  function handleDelete() {
    fetch("/api/usercontact", {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ id: id }),
    })
      .then((response) => {
        if (!response.ok) {
          throw new Error("Erro ao excluir usuário.");
        }
        return response.json();
      })
      .then((data) => {

        console.log(data.message);
      })
      .catch((error) => {
        console.error("Erro:", error.message);
      });
    router.push('/')
  }

  function handleDetail(id) {
    router.push({
      pathname: "/contact",
      query: { id },
    })
  }
  function handleEdit(id) {
    router.push({
      pathname: "/editcontact",
      query: { id },
    })
  }

  return (
    <>
      <div className="contanier">
        <p className="element" id="first-element" > {id}</p >
        <p className="nome">{nome}</p>
        <p className="contato">{contato}</p>
        <p className="email">{email}</p>
        <div className='containerImg'>
          <img onClick={e => handleEdit(id)} src="/img/edicao.svg" alt="" />
          <img onClick={handleDelete} src="/img/delete.svg" alt="" />
          <img onClick={e => handleDetail(id)} src="/img/more.svg" alt="" />
        </div>
      </div >
      <style jsx>{`
     .contanier {
      display: flex;
      justify-content: space-between;
      border-bottom:1px solid rgba(0,0,0,0.5);
      }           
      .element,
      .nome,
      .contato,
      .email,
      .edição {
        padding:1rem 10px;
        max-width: 300px;

        color:black;
        text-align: start;
      }
      .nome,.email{
        width:100%;
        max-width:100px
      }
      .email{
        width:100%;
        max-width:150px
      }
      .contato{
        width:100%;
        max-width:100px
      }
      .edicao{
        max-width:80px;
        width:100%
      }
      
      .element {
        width: 30px;
      }
      img{
        max-width:25px;
        padding: .3rem .8rem;
        cursor:pointer;

      }
    
      .containerImg{
        align-self: center;
      }
  
  `}</style>

    </>
  )
}

export default CardContact
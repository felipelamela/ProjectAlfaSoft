import React from 'react'
import { useRouter } from 'next/router';

interface CardContactProps {
  id: number,
  nome: string,
  contato: number,
  email: string,
}


const CardContact: React.FC<CardContactProps> = ({ id, nome, contato, email }) => {
  const router = useRouter();
  function handleDelete() {

  }

  function handleDetail() {
    router.push(`/contact/${id}`)
  }
  function handleEdit() {
    router.push(`/editcontact/${id}`)
  }

  return (
    <>
      <div className="contanier">
        <p className="element" id="first-element">{id}</p>
        <p className="nome">{nome}</p>
        <p className="contato">{contato}</p>
        <p className="email">{email}</p>
        <div className='containerImg'>
          <img onClick={handleEdit} src="/img/edicao.svg" alt="" />
          <img onClick={handleDelete} src="/img/delete.svg" alt="" />
          <img onClick={handleDetail} src="/img/more.svg" alt="" />
        </div>
      </div>
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
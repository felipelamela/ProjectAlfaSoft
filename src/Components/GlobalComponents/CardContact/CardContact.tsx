import React from 'react'

interface CardContactProps {
  id: number,
  Name: string,
  Contato: number
  Email: string
}


const CardContact: React.FC<CardContactProps> = ({ id, Name, Contato, Email }) => {

  function handleDelete() {

  }

  return (
    <>
      <div className="contanier">
        <p className="element" id="first-element">{id}</p>
        <p className="nome">{Name}</p>
        <p className="contato">{Contato}</p>
        <p className="email">{Email}</p>
        <div className='containerImg'>
          <img src="/img/edicao.svg" alt="" />
          <img onClick={handleDelete} src="/img/delete.svg" alt="" />
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
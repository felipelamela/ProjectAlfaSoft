"use client"

import CardContact from "../../GlobalComponents/CardContact/CardContact"
import useFetch from "../../../Utilits/useFetch";



const SectionTableContact = () => {

  const { data, error, isLoading } = useFetch("/data/contact.json");

  console.log(data)


  if (data === null) return <p>Loading..</p>

  return (
    <>
      <section>
        <div className='containerEdicao' >
          <div>

          </div>
          <div className="contanier">
            <span className="element">Id</span>
            <span className="nome">Nome</span>
            <span className="contato">Contato</span>
            <span className="email">E-mail</span>
            <span className="edicao">Edição</span>
          </div>

          {data.map((item, index) => (
            <CardContact
              key={index}
              id={item.id}
              Name={item.Name}
              Contato={item.Contato}
              Email={item.Email}
            />

          ))}


        </div>



      </section>

      <style jsx>{`

      .containerEdicao{
        max-width:700px;
        width:100%;
        margin: 3rem auto;
        box-shadow: 1px 1px 5px 0px rgba(0,0,0,0.5);
      }           
      .contanier {
        display: flex;
        padding:1rem 0;
        justify-content: space-between;
        background: rgba(0,0,0,0.2) ;
        border-bottom:1px solid rgba(0,0,0,0.3);
      }         
      .element,
      .nome,
      .contato,
      .email,
      .edicao {
        padding: 10px;
        color:white;
        text-align: start;
      }

      .nome{
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
      .element{
        width: 30px;
      }           
      `}</style>

    </>
  )
}

export default SectionTableContact
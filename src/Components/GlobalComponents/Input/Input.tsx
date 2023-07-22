interface InputProps{
  nome: string,
  type: string,
  text: string,
  setText: Function
}


const Input:React.FC<InputProps> = ({nome, type, text, setText}) => {
  return (
    <>

      <label htmlFor={nome}>{nome}</label>
      <input type={type} value={text} onChange={e => setText(e.target.value)}/>
      <style jsx>{`
      
          
      `}</style>
    
    </>
  )
}

export default Input
import React from "react"
interface TextProps{
  Text : string
}

const Text: React.FC<TextProps> = ({Text}) => {
  return (
    <>
      <p>{Text}</p>
      <style jsx></style>
    </>
  )
}

export default Text
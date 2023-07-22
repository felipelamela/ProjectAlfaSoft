import React from "react";
import SectionEdicaoCar from "../src/Components/SectionComponents/SectionTable/SectionTable";

export default function Page() {
  return (
    <>
      <main>
        <SectionEdicaoCar />
      </main>

      <style jsx>{`
      main{
        height:100vh;
        background: rgb(91,15,144);
        background: linear-gradient(0deg, rgba(91,15,144,1) 0%, rgba(84,55,170,1) 10%, rgba(84,56,171,1) 22%, rgba(67,157,236,1) 100%);
      }
      
      `}</style>

    </>



  )
}
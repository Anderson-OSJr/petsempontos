import Image from "next/image"

export default function Home() {
  return (
    <>
      <div className=" bg-violet-50/60 min-w-full py-8"> 
        
          <Image  src="/images/girafademontar.png"
                  width={340}
                  height={500}
                  alt="Girafinha de Montar"
                  className="mx-auto rounded-xl
                            shadow-md shadow-violet-500"/>                
        
      </div>      
    </>
  )
}
import Image from "next/image"

export default function Home() {
  return (
    <>
      <div className="bg-yellow-200 min-w-full min-h-screen fixed top-24"> 
        
          <Image  src="/images/girafademontar.png"
                  width={240}
                  height={500}
                  alt="Girafinha de Montar"
                  className="my-7 mx-auto rounded-xl
                            shadow-lg shadow-yellow-700"/>                
        
      </div>      
    </>
  )
}
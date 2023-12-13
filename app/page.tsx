import Image from "next/image"
import Link from "next/link"

export default function Home() {
  return (
    <>
      <div className=" bg-violet-50 min-w-full py-8 items-center"> 
        
          <Image  src="/images/girafademontar.png"
                  width={240}
                  height={300}
                  alt="Girafinha de Montar"
                  className="mx-auto rounded-xl
                            shadow-md shadow-violet-300"/>

          <div className=" mx-auto mt-4 text-center w-60 bg-violet-200 rounded-xl p-2
                          drop-shadow-xl shadow-violet-800">
            <Link href="">
              <p className="text-violet-900 text-xl" >Meus amiguinhos</p>
            </Link>
          </div>               
        
      </div>      
    </>
  )
}
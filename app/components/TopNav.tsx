import Image from "next/image"
const TopNav = () => {
  return (
    <>
    
        <div className="">
            
            <div className="flex flex-row bg-violet-50 min-w-full
                            shadow-md shadow-violet-300">

              <Image  src="/images/crochet.png"
                                width={30}
                                height={80}
                                alt="Coração de Crochê"
                                className="mx-auto my-auto"/>

                <div className = "py-6 mx-auto  text-5xl text-center text-violet-700 [text-shadow:2px_2px_2px_var(--tw-shadow-color)] shadow-violet-300">
                                  Pets em Pontos 
                </div>

                <Image  src="/images/crochet.png"
                                width={30}
                                height={80}
                                alt="Coração de Crochê"
                                className="mx-auto my-auto"/>
                                
            </div>
        </div>        

    </>
  )
}

export default TopNav
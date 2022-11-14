// interface HomeProps{
//   count: number
// }
import Image from 'next/image'
import appPreview from '../assets/app-nlw-copa-preview.png'
import LogoImage from '../assets/logo.svg'
import AvatarImage from '../assets/avatares.png'
import IconImage from '../assets/icon.svg'

export default function Home() {
  return (
      <div className="max-w-[1124px] h-screen mx-auto grid grid-cols-2 items-center gap-28">
        <main>
        <Image 
          src={LogoImage} 
          alt="Logo NLW-copa"
        />
        <h1 className="mt-14 text-white text-5xl f ont-bold leading-tight">
          Crie seu próprio bolão e compartilhe com os amigos
        </h1>


        <div className="mt-10 flex items-center gap-2">
          <Image src={AvatarImage} alt="" quality="100"/>
          <strong className="text-gray-100 text-xl">
            <span className="text-ignite-500">+12.592</span> pessoas já estão usando
          </strong> 
        </div>
          <form className="mt-10 flex gap-2">
            <input
              className="flex-1 px-6 py-4 rounded bg-gray-800 border border-gray-600 text-sm"
              type="text" 
              required placeholder="Qual o nome do seu bolão" 
            />
            <button 
              type="submit" 
              className="bg-yellow-500 px-6 py-4 rounded text-gray-900 font-bold text-sm uppercase hover:bg-yellow-700"
            >Criar meu bolão</button>
          </form>

        <p className="text-gray-300 mt-4 text-sm leading-relaxed">
          Após criar seu bolão, você receberá um código único que poderá usar para convidar outras pessoas 🚀
        </p>

        <div className="mt-10 pt-10 border-t border-gray-600 flex justify-between text-gray-100">
          <div className="flex items-center gap-6">
            <Image src={IconImage} alt="" />
            <div className="flex flex-col">
              <span className="font-bold text-2xl">+2.034</span>
              <span>Bolões criados</span>
            </div>
          </div>

          <div className="w-px h-14 bg-gray-600"/>

          <div className="flex items-center gap-6">
            <Image src={IconImage} alt="" />
              <div className="flex flex-col">
                <span className="font-bold text-2xl">+2.034</span>
                <span>Palṕites enviados</span>
              </div>
          </div>
        </div>
        </main>
        <Image 
          src={appPreview} 
          alt="Uma previa da aplicação móvel do nlw copa"
          quality="100"
        />
      </div>
  )
}

// export const getServerSideProps = async () => {
//   const response = await fetch('http://localhost:3333/pools/count')
//   const data  = await response.json()
  
//   console.log(data)

//   return{
//     props: {
//       count: data.count
//     }
//   }
// }

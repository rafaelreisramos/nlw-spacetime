import Image from 'next/image'

import nlwLogo from '../assets/logo-nlw-spacetime.svg'

export function Hero() {
  return (
    <div className="max-w-[60%] space-y-5">
      <Image src={nlwLogo} alt="NLW spacetime" />

      <div>
        <h1 className="text-5xl font-bold leading-tight text-gray-50">
          Sua cápsula do tempo
        </h1>
        <p className="mt-1 text-lg leading-relaxed">
          Colecione momentos marcantes da sua jornada e compartilhe (se quiser)
          com o mundo!
        </p>
      </div>

      <a
        href=""
        className="inline-block rounded-full bg-green-500 px-5 py-3 font-alt text-sm uppercase leading-none text-gray-900 hover:bg-green-600"
      >
        cadastrar lembrança
      </a>
    </div>
  )
}

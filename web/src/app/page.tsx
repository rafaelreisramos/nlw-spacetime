import Image from 'next/image'
import { User } from 'lucide-react'

import nlwLogo from '../assets/logo-nlw-spacetime.svg'

export default function Home() {
  return (
    <main className="grid grid-cols-2">
      <section className="relative flex flex-col items-start justify-between overflow-hidden border-r border-white/10 bg-[url(../assets/bg-stars.svg)] bg-cover px-28 py-16">
        <div className="absolute right-0 top-1/2 h-[288px] w-[526px] -translate-y-1/2 translate-x-1/2 rounded-full bg-purple-700 opacity-50 blur-full" />

        <div className="absolute bottom-0 right-2 top-0 w-2 bg-stripes" />
        <header className="flex items-center gap-3">
          <div className="flex h-10 w-10 items-center justify-center rounded-full bg-gray-400">
            <User className="h-5 w-5 text-gray-500" />
          </div>
          <p className="max-w-[50%] text-sm leading-snug">
            <a
              href=""
              className="underline transition-colors hover:text-gray-50"
            >
              Crie sua conta
            </a>{' '}
            e salve suas memórias!
          </p>
        </header>

        <div className="max-w-[60%] space-y-5">
          <Image src={nlwLogo} alt="NLW spacetime" />

          <div>
            <h1 className="text-5xl font-bold leading-tight text-gray-50">
              Sua cápsula do tempo
            </h1>
            <p className="mt-1 text-lg leading-relaxed">
              Colecione momentos marcantes da sua jornada e compartilhe (se
              quiser) com o mundo!
            </p>
          </div>

          <a
            href=""
            className="inline-block rounded-full bg-green-500 px-5 py-3 font-alt text-sm uppercase leading-none text-gray-900 hover:bg-green-600"
          >
            cadastrar lembrança
          </a>
        </div>
        <footer className="text-sm leading-relaxed text-gray-200">
          Feito com 💜 no NLW da{' '}
          <a
            target="_blank"
            href="https://rocketseat.com.br"
            rel="noreferrer"
            className="underline hover:text-gray-100"
          >
            Rocketseat
          </a>
        </footer>
      </section>

      <section className="flex min-h-screen flex-col items-center justify-center bg-[url(../assets/bg-stars.svg)] bg-cover p-16 leading-relaxed">
        <p className="max-w-[45%] text-center">
          Você ainda não registrou nenhuma lembrança, comece a{' '}
          <a href="" className="underline hover:text-gray-50">
            criar agora
          </a>
          !
        </p>
      </section>
    </main>
  )
}

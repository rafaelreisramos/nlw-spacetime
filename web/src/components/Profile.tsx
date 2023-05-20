import Image from 'next/image'
import { getUser } from '@/lib/auth'

export function Profile() {
  const { name, avatarUrl } = getUser()

  return (
    <header className="flex items-center gap-3">
      <Image
        src={avatarUrl}
        width={40}
        height={40}
        alt=""
        className="h-10 w-10 rounded-full"
      />
      <p className="max-w-[80%] text-sm leading-snug">
        {name}
        <a
          href="/api/auth/logout"
          className="block text-red-400 hover:text-red-500"
        >
          Quero sair
        </a>
      </p>
    </header>
  )
}

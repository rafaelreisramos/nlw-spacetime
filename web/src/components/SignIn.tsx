import { User } from 'lucide-react'

export function SignIn() {
  return (
    <header className="flex items-center gap-3">
      <div className="flex h-10 w-10 items-center justify-center rounded-full bg-gray-400">
        <User className="h-5 w-5 text-gray-500" />
      </div>
      <p className="max-w-[50%] text-sm leading-snug">
        <a
          href={`https://github.com/login/oauth/authorize?client_id=${process.env.NEXT_PUBLIC_GITHUB_CLIENT_ID}`}
          className="underline transition-colors hover:text-gray-50"
        >
          Crie sua conta
        </a>{' '}
        e salve suas memórias!
      </p>
    </header>
  )
}

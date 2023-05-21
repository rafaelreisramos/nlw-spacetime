import React, { useEffect } from 'react'
import { Text, TouchableOpacity, View } from 'react-native'
import { useAuthRequest, makeRedirectUri } from 'expo-auth-session'
import * as SecureStore from 'expo-secure-store'
import { useRouter } from 'expo-router'

import NLWLogo from '../src/assets/logo-nlw-spacetime.svg'
import { api } from '../src/lib/api'

const discovery = {
  authorizationEndpoint: 'https://github.com/login/oauth/authorize',
  tokenEndpoint: 'https://github.com/login/oauth/access_token',
  revocationEndpoint:
    'https://github.com/settings/connections/applications/5310103c3b433fa343c4',
}

export default function App() {
  const router = useRouter()

  const [, response, signInWithGithub] = useAuthRequest(
    {
      clientId: '5310103c3b433fa343c4',
      scopes: ['identity'],
      redirectUri: makeRedirectUri({
        scheme: 'nlw-spacetime',
      }),
    },
    discovery,
  )

  async function handleRegister(code: string) {
    try {
      const response = await api.post('/register', { code })
      const { token } = response.data
      SecureStore.setItemAsync('token', token)
      router.push('/memories')
    } catch (error) {
      console.error(error)
    }
  }

  useEffect(() => {
    // console.log(
    //   makeRedirectUri({
    //     scheme: 'nlw-spacetime',
    //   }),
    // )

    if (response?.type === 'success') {
      const { code } = response.params
      handleRegister(code)
    }
  }, [handleRegister, response])

  return (
    <View className="flex-1 items-center px-8 py-10">
      <View className="flex-1 items-center justify-center gap-6">
        <NLWLogo />

        <View className="space-y-2">
          <Text className="text-center font-title text-2xl leading-tight text-gray-50">
            Sua cápsula do tempo
          </Text>
          <Text className="text-center font-body text-base leading-relaxed text-gray-100">
            Colecione momentos marcantes da sua jornada e compartilhe (se
            quiser) com o mundo!
          </Text>
        </View>

        <TouchableOpacity
          activeOpacity={0.7}
          className="rounded-full bg-green-500 px-5 py-2"
          onPress={() => signInWithGithub()}
        >
          <Text className="font-alt text-sm uppercase text-gray-900">
            COMEÇAR A CADASTRAR
          </Text>
        </TouchableOpacity>
      </View>

      <Text className="text-center font-body text-sm leading-relaxed text-gray-200">
        Feito com 💜 no NLW da Rocketseat
      </Text>
    </View>
  )
}

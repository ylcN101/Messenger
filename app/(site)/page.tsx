import Image from 'next/image'
import AuthForm from './components/AuthForm'
import { TiMessages } from 'react-icons/ti'
import { BsMessenger } from 'react-icons/bs'

export default function Home() {
  return (
    <div className="flex flex-col min-h-full justify-center py-12 sm:px-6 lg:px-8 bg-gray-100">
      <div className="sm:mx-auto sm:w-full sm:max-w-md">
        <BsMessenger className="mx-auto h-12 w-auto text-gray-900" />
        <h2 className="mt-6 text-center text-3xl font-bold tracking-tight text-gray-900">
          Sign in to your account
        </h2>
      </div>
      <AuthForm />
    </div>
  )
}

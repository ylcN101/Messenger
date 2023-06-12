'use client'
import axios from 'axios'
import Button from '@/app/components/inputs/Button'
import Input from '@/app/components/inputs/Input'
import { useCallback, useState, useEffect } from 'react'
import { useForm, FieldValues, SubmitHandler } from 'react-hook-form'
import { BsGithub, BsGoogle } from 'react-icons/bs'
import AuthSocialButton from './AuthSocialButton'
import { toast } from 'react-hot-toast'
import { signIn, useSession } from 'next-auth/react'
import { useRouter } from 'next/navigation'
import LoadingModal from '@/app/components/LoadingModal'

type Variant = 'LOGIN' | 'REGISTER'

const AuthForm = () => {
  const session = useSession()
  const router = useRouter()
  const [variant, setVariant] = useState<Variant>('LOGIN')
  const [isLoading, setIsLoading] = useState(false)

  useEffect(() => {
    if (session?.status === 'authenticated') {
      router.push('/users')
    }
  }, [session?.status, router])

  const toggleVariant = useCallback(() => {
    if (variant === 'LOGIN') {
      setVariant('REGISTER')
    } else {
      setVariant('LOGIN')
    }
  }, [variant])

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FieldValues>({
    defaultValues: { name: '', email: '', password: '' },
  })

  const onSubmit: SubmitHandler<FieldValues> = async (data) => {
    setIsLoading(true)
    if (!data) {
      toast.error('Error creating account')
      return
    }

    if (variant === 'REGISTER') {
      try {
        await axios.post('/api/register', data)
        await signIn('credentials', data)
      } catch (error) {
        toast.error('Error creating account')
      } finally {
        setIsLoading(false)
      }
    }

    if (variant === 'LOGIN') {
      try {
        const response = await signIn('credentials', {
          ...data,
          redirect: false,
        })
        if (response?.error) {
          toast.error(response.error)
          return
        }
        if (response?.ok) {
          toast.success('Logged in successfully')
          router.push('/users')
          return
        }
      } catch (error) {
        console.log(error)
      } finally {
        setIsLoading(false)
      }
    }
  }

  const socialActions = async (action: string) => {
    setIsLoading(true)
    try {
      const response = await signIn(action, { redirect: false })
      if (response?.error) {
        toast.error("Couldn't sign in with social media")
        return
      }
      if (response?.ok) {
        toast.success('Logged in successfully')
        return
      }
    } catch (error) {
      console.log(error)
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <>
      {isLoading && <LoadingModal />}
      <div
        className="
  mt-8
  sm:mx-auto
  sm:w-full
  sm:max-w-md
  ">
        <div
          className="
    bg-white
    px-4
    py-8
    shadow
    sm:rounded-lg
    sm:px-10
    ">
          <form className="space-y-6" onSubmit={handleSubmit(onSubmit)}>
            {variant === 'REGISTER' && (
              <Input
                disabled={isLoading}
                register={register}
                errors={errors}
                required
                id="name"
                label="Name"
              />
            )}
            <Input
              disabled={isLoading}
              register={register}
              errors={errors}
              required
              id="email"
              label="Email address"
              type="email"
            />
            <Input
              disabled={isLoading}
              register={register}
              errors={errors}
              required
              id="password"
              label="Password"
              type="password"
            />
            <div>
              <Button disabled={isLoading} fullWidth type="submit">
                {variant === 'LOGIN' ? 'Sign in' : 'Register'}
              </Button>
            </div>
          </form>
          <div className="mt-6">
            <div className="relative">
              <div className="absolute inset-0 flex items-center">
                <div className="w-full border-t border-gray-300" />
              </div>
              <div className="relative flex justify-center text-sm">
                <span className="bg-white px-2 text-gray-500">
                  Or continue with
                </span>
              </div>
            </div>
            <div className="mt-6 flex gap-2">
              <AuthSocialButton
                icon={BsGithub}
                onClick={() => socialActions('github')}
              />
              <AuthSocialButton
                icon={BsGoogle}
                onClick={() => socialActions('google')}
              />
            </div>
          </div>
          <div className="flex gap-2 justify-center text-sm mt-6 px-2 text-gray-500">
            <div className="">
              {variant === 'LOGIN'
                ? 'New to Messenger?'
                : 'Already have an account?'}
            </div>
            <div onClick={toggleVariant} className="underline cursor-pointer">
              {variant === 'LOGIN' ? 'Create an acoount' : 'Login'}
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default AuthForm

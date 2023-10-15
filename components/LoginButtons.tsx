"use client"
import { signIn, signOut } from 'next-auth/react'
import { Button } from '@/components/ui/button'
import { experimental_useFormStatus as useFormStatus } from 'react-dom'
import { newUser } from '@/lib/actions'

export const LoginButton = ({session}:any) => {
  const { pending } = useFormStatus()

  return (
    <Button 
      disabled={pending} 
      onClick={() => {
        signIn() 
        newUser()
      }} 
      className='loginButton bg-green-400'
      >
      {pending ? 'Loading...' : 'Sign In'}
    </Button>
  )
}

export const LogoutButton = () => {
  return (
    <Button variant='destructive' onClick={() => signOut()} className='logoutButton'>Sign Out</Button>
  )
}
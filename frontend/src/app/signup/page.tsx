import SignUpFormModal from '@/components/Auth/SignUpFormModel'
import React from 'react'
import RootLayout from '../RootLayout'

const SignUpPage = () => {
  return (
    <RootLayout>
    <div>
    <SignUpFormModal isOpen={false} onClose={function (): void {
              throw new Error('Function not implemented.')
          } }/>
   </div>
   </RootLayout>
  )
}

export default SignUpPage
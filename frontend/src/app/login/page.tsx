
import LoginFormModal from '@/components/LogInFormModal'
import React from 'react'
import RootLayout from '../RootLayout'

const LogIn = () => {
  return (
    <RootLayout>
   <div>
    <LoginFormModal isOpen={false} onClose={function (): void {
              throw new Error('Function not implemented.')
          } }/>
   </div>
</RootLayout>
  )
}

export default LogIn
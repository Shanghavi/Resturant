import ContactForm from '@/components/Contact/ContactForm'
import Info from '@/components/Contact/Info'
import React from 'react'
import RootLayout from '../RootLayout'

const ContactPage = () => {
  return (
    <RootLayout>
    <div className=" mb-20">
       <ContactForm/>
         <Info/> 
     
    </div>
    </RootLayout>
  )
}

export default ContactPage
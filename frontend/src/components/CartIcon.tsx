import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const CartIcon = () => {
  return (
    <Link href="/cart">
    <div className='relative w-5 h-5'>
         <Image src="/cart.png" alt="" fill />
    </div>
    </Link>
  )
}

export default CartIcon
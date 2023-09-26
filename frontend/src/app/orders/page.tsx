import React from 'react'
import EmptyLayout from '../EmptyLayout'
import OrderTable from '@/components/OrderTable'

const OrderPage = () => {
  return (
    <EmptyLayout>
    <div>
      <OrderTable />
    </div>
    </EmptyLayout>
  )
}

export default OrderPage
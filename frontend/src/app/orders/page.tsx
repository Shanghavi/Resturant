import React from 'react'
import EmptyLayout from '../EmptyLayout'
import OrderTable from '@/components/Admin/OrderTable'

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
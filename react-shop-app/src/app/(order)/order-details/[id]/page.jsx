import React from 'react'

const OrderDetails = ({ params, searchParams }) => {
    const { hello } = searchParams;
    const { id } = params;
    // http://localhost:3000/order-details/2?hello=hi

  return (
    <div>
      OrderDetails {id} {hello}
    </div>
  )
}

export default OrderDetails

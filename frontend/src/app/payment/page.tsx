// import Payment from '@/components/Payment'
// import StripePaymentForm from '@/components/StripePaymentForm'
// import React from 'react'

// const PaymentPage = () => {
//   return (
//     // <div><Payment/></div>
//     <div className="bg-gray-100 min-h-screen flex justify-center items-center">
//       <div className="w-full max-w-lg p-8 bg-white rounded shadow-lg">
//         <h1 className="text-2xl font-semibold mb-4">Payment Form</h1>
//         <StripePaymentForm />
//       </div>
//     </div>
//   )
// }

// export default PaymentPage

// "use client";

// import { NextPage } from 'next';
// import { loadStripe } from '@stripe/stripe-js';
// import { Elements } from '@stripe/react-stripe-js';
// import PaymentForm from '@/components/StripePayment';

// const stripePromise = loadStripe(process.env.NEXT_PUBLIC_STRIPE_PUBLIC_KEY || '');

// const PaymentPage: NextPage = () => {
//   return (
//     <div className="min-h-screen flex items-center justify-center">
//       <Elements stripe={stripePromise}>
//         <PaymentForm />
//       </Elements>
//     </div>
//   );
// };

// export default PaymentPage;

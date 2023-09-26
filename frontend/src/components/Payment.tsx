import React from 'react'

const Payment = () => {
  return (
    <div className="w-[1674px] h-[1896px] relative">
    <div className="w-[1674px] h-[1896px] left-0 top-0 absolute bg-zinc-100 rounded-[15px] shadow border border-neutral-200" />
    <div className="w-[1459px] h-[156px] left-[113px] top-[1429px] absolute">
        <div className="w-[1459px] h-[156px] left-0 top-0 absolute bg-emerald-800 rounded-[15px] border" />
        <div className="w-[373px] h-[109px] left-[570px] top-[23px] absolute text-zinc-100 text-[64px] font-extrabold font-['Martel'] uppercase">PAY NOW</div>
    </div>
    <div className="w-[1472.77px] h-[294.24px] left-[99.23px] top-[337.76px] absolute">
        <div className="w-[1472.77px] h-[230.77px] left-0 top-[63.46px] absolute bg-zinc-100 rounded-[15px] border border-green-500" />
        <div className="w-[475.92px] h-[126.93px] left-[38.59px] top-[-0px] absolute bg-zinc-100" />
        <div className="w-[450.19px] h-[51.92px] left-[64.31px] top-[37.50px] absolute text-black text-5xl font-normal font-['Roboto'] uppercase">Name on card</div>
    </div>
    <div className="w-[1472.77px] h-[284.33px] left-[99.23px] top-[663.67px] absolute">
        <div className="w-[1472.77px] h-[223px] left-0 top-[61.32px] absolute bg-zinc-100 rounded-[15px] border border-green-500" />
        <div className="w-[475.92px] h-[122.65px] left-[38.59px] top-0 absolute bg-zinc-100" />
        <div className="w-[450.19px] h-[50.18px] left-[64.31px] top-[36.24px] absolute text-black text-5xl font-normal font-['Roboto'] uppercase">CARD NUMBER</div>
    </div>
    <div className="w-[689.77px] h-[301.79px] left-[99.23px] top-[992.55px] absolute">
        <div className="w-[689.77px] h-[236.70px] left-0 top-[65.09px] absolute bg-zinc-100 rounded-[15px] border border-green-500" />
        <div className="w-[327.07px] h-[130.18px] left-[38.86px] top-0 absolute bg-zinc-100" />
        <div className="w-[453.37px] h-[53.26px] left-[64.77px] top-[38.46px] absolute text-neutral-600 text-5xl font-normal font-['Roboto'] uppercase">EXP DATE</div>
        <div className="w-[463.09px] h-[112.43px] left-[106.87px] top-[144.98px] absolute text-stone-300 text-[40px] font-light font-['Roboto'] capitalize">MM / YY</div>
    </div>
    <div className="w-[720.68px] h-[279.03px] left-[851px] top-[992.24px] absolute">
        <div className="w-[720.68px] h-[218.85px] left-0 top-[60.18px] absolute bg-zinc-100 rounded-[15px] border border-green-500" />
        <div className="w-[192.86px] h-[120.37px] left-[40.60px] top-[-0px] absolute bg-zinc-100" />
        <div className="w-[165.79px] h-[49.24px] left-[67.67px] top-[35.56px] absolute text-neutral-600 text-5xl font-normal font-['Roboto'] uppercase">CVV</div>
    </div>
    <div className="w-[1353px] h-[156.74px] left-[113px] top-[94.80px] absolute text-black text-[70px] font-semibold font-['Roboto']">Confirm Payment</div>
    <img className="w-[825px] h-[207.30px] left-[811px] top-[44.24px] absolute" src="https://via.placeholder.com/825x207" />
</div> 
  )
}

export default Payment
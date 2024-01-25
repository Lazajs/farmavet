'use client'

import { NotificationCTX } from '@/context/NotificationCTX'
import { useEffect, useState } from 'react'
import { createPortal } from 'react-dom'
import Link from 'next/link'

const Close = (props: {onClick: ()=> void, className: string}) => (<svg {...props} xmlns="http://www.w3.org/2000/svg" width="21" height="21" fill="none"><path stroke="#fff" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5067" d="m14.5317 6.4375-8.1372 8.125m0-8.125 8.1372 8.125"/></svg>)
const Check = (props: {className?: string}) => (<svg {...props} xmlns="http://www.w3.org/2000/svg" width="22" height="22" fill="none"><g clipPath="url(#a)"><mask id="b" width="21" height="21" x="0" y="0" maskUnits="userSpaceOnUse"><path fill="#fff" stroke="#fff" strokeLinejoin="round" strokeWidth="2.009" d="M10.7913 19.7083a8.9555 8.9555 0 0 0 3.4342-.6798 8.944 8.944 0 0 0 2.9097-1.9441 8.9272 8.9272 0 0 0 1.947-2.9054 8.9161 8.9161 0 0 0 .6808-3.429 8.9184 8.9184 0 0 0-.6808-3.429 8.9293 8.9293 0 0 0-1.947-2.9055 8.9438 8.9438 0 0 0-2.9097-1.944 8.9551 8.9551 0 0 0-3.4342-.6799 8.9556 8.9556 0 0 0-3.4342.6799 8.9448 8.9448 0 0 0-2.9097 1.944 8.9297 8.9297 0 0 0-1.947 2.9054 8.9192 8.9192 0 0 0-.6808 3.4291 8.918 8.918 0 0 0 .6808 3.429 8.929 8.929 0 0 0 1.947 2.9054 8.9448 8.9448 0 0 0 2.9097 1.9441 8.9554 8.9554 0 0 0 3.4342.6798Z"/><path stroke="#000" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.009" d="m7.2024 10.75 2.6915 2.6875 5.383-5.375"/></mask><g mask="url(#b)"><path fill="#5C9706" d="M.0234 0h21.5322v21.5H.0234V0Z"/></g></g><defs><clipPath id="a"><path fill="#fff" d="M.0232-.0001h21.532v21.5H.0233z"/></clipPath></defs></svg>)

const NOTIFICATIONS = {
  ADDED_TO_CART: (
    <div className='flex justify-between w-[90%] h-full items-center xl:justify-normal'>
      <Check className='xl:scale-150 xl:absolute xl:left-[20px] xl:top-1/2 xl:-translate-y-1/2'/>
      <p className='text-textWhite font-normal text-[13px] w-[135px] bg-transparent xl:w-fit xl:max-w-[250px] xl:text-[20px] xl:h-[50px] xl:ml-10'>¡El producto se ha añadido a tu carrito!</p>
      <Link href={'/cart'} className='whitespace-nowrap xl:text-[20px] text-[13px] font-bold underline xl:ml-auto cursor-pointer'>Ir al carrito</Link>
    </div>
  )
}

export type NotificationOption = keyof typeof NOTIFICATIONS

export default function NotificationProvider ({ children }: {children: React.ReactNode}) {
  const [chosen, setChosen] = useState<null | NotificationOption>(null)

  const displayNotification = (value: NotificationOption) => setChosen(value)
  const closeNotification = () => setChosen(null)

  useEffect(() => {
    const timeout = setTimeout(() => {
      if (chosen) closeNotification()
    }, 1500)

    return () => clearTimeout(timeout)
  }, [chosen])

  return (
    <NotificationCTX.Provider value={{ displayNotification, closeNotification }}>
      {children}
      {
        chosen
          ? createPortal(
            <div className='fixed left-1/2 -translate-x-1/2 bottom-[20px] lg:left-[700px] xl2:left-[70%] lg:translate-x-0 lg:bg-[#343333] lg:right-[20px] lg:top-[150px] lg:bottom-full z-50 bg-[#343333] w-fit rounded-[8px] text-textWhite'>
              <div className='relative min-w-[300px] w-[340px] xl:w-[450px] xl:h-[115px] min-h-[75px] bg-[#343333] rounded-[8px] p-[15px]'>
                {NOTIFICATIONS[chosen]}
                <Close onClick={closeNotification} className='absolute right-[15px] top-1/2 -translate-y-1/2 cursor-pointer' />
              </div>
            </div>
            , document.body)
          : ''
      }

    </NotificationCTX.Provider>
  )
}

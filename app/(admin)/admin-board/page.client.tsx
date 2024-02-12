'use client'

import { dmSerif } from '@/utils/fonts'
import { useEffect, useState } from 'react'
import bcrypt from 'bcrypt'

export default function AdminBoardClient ({ children }: {children: React.ReactNode}) {
  const [session, setSession] = useState<string | null>(null)

  // useEffect(()=> {
  //   const session = localStorage.getItem('ad-session')
  //   if (session)
  // }, [])

  return (
    <>
      <h1 className={`${dmSerif.className} font-bold mt-10 text-2xl text-center md:text-3xl`}>Panel de administración</h1>
      <main className="block mx-auto max-w-[1440px] min-h-screen my-10 border-primary border-[1px] rounded-[20px] py-[16px]">
        {children}
      </main>
    </>
  )
}

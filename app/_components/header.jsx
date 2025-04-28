"use client"
import React from 'react'
import Image from 'next/image';
import { Button } from '@/components/ui/Button';
import {UserButton, useUser} from "@clerk/nextjs" ;
import Link from 'next/link';
function header() {
  const {user,isSignedIn}=useUser();
  return (
    <div className='p-5 flex justify-between items-center border shadow-sm'>
      <Image src={'./logo.svg'}
      alt='logo'
      width={160}
      height={100}/>
      {
        isSignedIn?
        <UserButton/> : 
        <Link href={'/sign-in'}>
      <Button>Get Started</Button>
      </Link>
}
    </div>
  )
}

export default header

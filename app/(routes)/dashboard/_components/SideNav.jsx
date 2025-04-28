"use client"
import { UserButton } from '@clerk/nextjs';
import { LayoutGrid ,PiggyBank, ReceiptText, ShieldCheck } from 'lucide-react'
import Image from 'next/image'
import { usePathname } from 'next/navigation';
import React, { useEffect } from 'react'
import Link from 'next/link';

function SideNav() {
const menuList = [
    { id: 1, name: 'Dashboard', icon: LayoutGrid ,path:'/dashboard'},  // was Icon before
    { id: 2, name: 'Budgets', icon: PiggyBank,path:'/dashboard/Budgets' },
    { id: 3, name: 'Expenses', icon: ReceiptText,path:'/dashboard/Expenses' },
    { id: 4, name: 'Upgrade', icon: ShieldCheck,path:'/dashboard/Upgrade' }
  ];
  const path=usePathname(); 
  useEffect(()=>
{
    console.log(path)
},[path])
  return (
    <div className='h-screen p-5 border shadow-sm'>
     <Image src={'/logo.svg'}
     alt='logo'
     width={160}
     height={100}/>
     <div className='mt-5'>
        {menuList.map((menu) => (
            <Link href={menu.path}>
        <h2
            key={menu.id}
            className={`flex gap-2 items-center text-gray-500 font-medium
                mb-2
            p-5 cursor-pointer rounded-md
            hover:text-primary hover:bg-blue-100 ${path==menu.path&&'text-primary bg-blue-100'}`
        }>
            <menu.icon/>
            {menu.name}
    </h2>
    </Link>
))}
     </div>
     <div className='fixed bottom-10 p-5 flex gap-2 tems-center'>
     <UserButton/>
     Profile
    </div>
    </div>

  )
}

export default SideNav

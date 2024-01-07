"use client"
import { File, Shield, Upload } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'
import React, { useState } from 'react'

function SideNav({closeSideBar}) {
    const menuList=[
        {
            id:1,
            name:'Upload',
            icon: Upload,
            path:'/upload',
        },
        {
            id:2,
            name:'Files',
            icon: File,
            path:'/files',
        },
        {
            id:3,
            name:'Upgrade',
            icon:Shield,
            path:'/upgrade',
        },
    ]
    const [activeIndex, setActiveIndex]=useState(0);
  return (
    <div className='shadow-sm border-r h-full'>
        <div className='p-5 border-b'>
        <Image src='/log.svg' width={150} height={100}/>
        </div>
        <div className='flex flex-col float-left w-full'>
        {menuList.map((item,index)=>(
            <Link href={item.path}>
            <button key={index} className={`flex gap-2 p-4 px-6 hover:bg-greem-200  w-full text-cyan-800 ${activeIndex==index?'bg-cyan-950 text-green-300':null}`} onClick={()=>{setActiveIndex(index)}}>
                <item.icon/>
                <h2>{item.name}</h2>
            </button>
            </Link>
        ))}
        </div>
    </div>
  )
}

export default SideNav
// import { Button } from '@/shadcn-ui/components/ui/button'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const BackButton = () => {
  return (
    <Link href="javascript:history.back()" className='hidden lg:inline'>
    {/* <Button className="fixed top-0 left-10 mt-10 w-auto h-auto !rounded-full !z-50 "><Image width={50} height={50} alt="back-icon" src="/assets/back.svg" /></Button> */}
    </Link>
  )
}

export default BackButton
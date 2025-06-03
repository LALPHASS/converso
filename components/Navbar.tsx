import Link  from 'next/link'
import Image from 'next/image'
import logo from '@/public/images/logo.svg'
import NavItems from './NavItems'

import {
  ClerkProvider,
  SignInButton,
  SignedIn,
  SignedOut,
  UserButton,
} from '@clerk/nextjs'

const  Navbar = () => {
  return (
    <nav className='navbar'>
        <Link href='/'>
            <div className='flex items-center gap-2 cursor-pointer'>
                <Image src={logo} alt='logo' width={46} height={44}/>
            </div>
        </Link>
        <div className='flex items-center gap-8'>
            <NavItems  />
            <SignedOut>
              
                <SignInButton>
                  <button className='btn-signin'>Sign In</button>
                </SignInButton>
              
            </SignedOut>
            <SignedIn>
              
                <UserButton />
              
            </SignedIn>
           
        </div>
    </nav>
  )  
}

export default Navbar
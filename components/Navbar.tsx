"use client"
import HomeSVG from '../public/svg/home.svg'
import GallerySVG from '../public/svg/gallery.svg'
import CalendarSVG from '../public/svg/calendar.svg'
import ContactSVG from '../public/svg/mail.svg'
import Link from 'next/link'


export default function Navbar() {
  return(
    <nav className='flex-col justify-around'>
      <Link href='/'>
        <HomeSVG width={50} height={50} />
      </Link>
      <Link href='/gallery'>
        <GallerySVG width={50} height={50} />
      </Link>
      <Link href='/schedule'>
        <CalendarSVG width={50} height={50} />
      </Link>
      <Link href='/contact'>
        <ContactSVG width={50} height={50} />
      </Link>
    </nav>
  )
}
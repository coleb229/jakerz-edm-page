import Image from 'next/image'
import JakerzIcon from '../../public/jakerz-icon.png'

export default function Contact() {
  return (
    <main className="h-screen">
      <Image src={JakerzIcon} width={400} height={400} id='jakerz' alt='Jakerz-icon' />
      <h1 className="text-9xl mx-auto text-white">Contact</h1>
    </main>
  )
}
import Image from 'next/image'
import JakerzIcon from '../public/jakerz-icon.png'

export default function Home() {
  return (
    <main className="h-screen">
      <h2 id='header-route'>/Home</h2>
      <Image src={JakerzIcon} width={400} height={400} id='jakerz' alt='Jakerz-icon' />
      <h1 className="text-9xl mx-auto text-white">Jakerz</h1>
    </main>
  )
}
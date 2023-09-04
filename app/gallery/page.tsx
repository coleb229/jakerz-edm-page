"use client"
import Image from 'next/image'
import img1 from '@/public/images/img1.png'

export default function Gallery() {

  const expandImage = (e) => {
    const img = e.target
    img.classList.toggle('expanded')
  }

  return (
    <main className="h-screen">
      <div id='content'>
        <h2>Gallery</h2>
        <table id='gallery' className='m-5'>
          <tr className=''>
            <td onClick={expandImage}>
              <Image src={img1} width={400} height={400} alt='img1' />
            </td>
            <td onClick={expandImage}>
              <Image src={img1} width={400} height={400} alt='img1' />
            </td>
            <td onClick={expandImage}>
              <Image src={img1} width={400} height={400} alt='img1' />
            </td>
            <td onClick={expandImage}>
              <Image src={img1} width={400} height={400} alt='img1' />
            </td>
          </tr>
          <tr className=''>
            <td onClick={expandImage}>
              <Image src={img1} width={400} height={400} alt='img1' />
            </td>
            <td onClick={expandImage}>
              <Image src={img1} width={400} height={400} alt='img1' />
            </td>
            <td onClick={expandImage}>
              <Image src={img1} width={400} height={400} alt='img1' />
            </td>
            <td onClick={expandImage}>
              <Image src={img1} width={400} height={400} alt='img1' />
            </td>
          </tr>
          <tr className=''>
            <td onClick={expandImage}>
              <Image src={img1} width={400} height={400} alt='img1' />
            </td>
            <td onClick={expandImage}>
              <Image src={img1} width={400} height={400} alt='img1' />
            </td>
            <td onClick={expandImage}>
              <Image src={img1} width={400} height={400} alt='img1' />
            </td>
            <td onClick={expandImage}>
              <Image src={img1} width={400} height={400} alt='img1' />
            </td>
          </tr>
        </table>
      </div>
    </main>
  )
}

"use client"
import Image from 'next/image'
import img1 from '@/public/images/img1.png'

export default function Gallery() {

  const expandImage = (e: any) => {
    const img = e.target
    const nav = document.querySelector('nav')
    img.classList.toggle('expanded')
    if (nav?.style.display === 'none') {
      nav.style.display = 'flex';
    }else if (nav) {
      nav.style.display = 'none';
    }
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

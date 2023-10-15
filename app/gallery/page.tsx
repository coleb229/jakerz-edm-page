"use client"
import Image from 'next/image'
import img1 from '@/public/images/img1.png'
import img2 from '@/public/images/img2.png'
import img3 from '@/public/images/img3.png'
import img4 from '@/public/images/img4.png'
import img5 from '@/public/images/img5.png'
import img6 from '@/public/images/img6.png'
import img7 from '@/public/images/img7.png'
import img8 from '@/public/images/img8.png'
import img9 from '@/public/images/img9.png'
import img10 from '@/public/images/img10.png'
import img11 from '@/public/images/img11.png'

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
      <h2 id='header-route'>/gallery</h2>
      <div id='content'>
        <div id='gallery-container'>
          <table id='gallery' className='m-5'>
            <tr className=''>
              <td onClick={expandImage}>
                <Image className='gallery-img' src={img1} width={400} height={400} alt='img1' />
              </td>
              <td onClick={expandImage}>
                <Image className='gallery-img' src={img2} width={400} height={400} alt='img2' />
              </td>
              <td onClick={expandImage}>
                <Image className='gallery-img' src={img3} width={400} height={400} alt='img3' />
              </td>
              <td onClick={expandImage}>
                <Image className='gallery-img' src={img4} width={400} height={400} alt='img4' />
              </td>
            </tr>
            <tr className=''>
              <td onClick={expandImage}>
                <Image className='gallery-img' src={img5} width={400} height={400} alt='img5' />
              </td>
              <td onClick={expandImage}>
                <Image className='gallery-img' src={img6} width={400} height={400} alt='img6' />
              </td>
              <td onClick={expandImage}>
                <Image className='gallery-img' src={img7} width={400} height={400} alt='img7' />
              </td>
              <td onClick={expandImage}>
                <Image className='gallery-img' src={img8} width={400} height={400} alt='img8' />
              </td>
            </tr>
            <tr className=''>
              <td onClick={expandImage}>
                <Image className='gallery-img' src={img9} width={400} height={400} alt='img9' />
              </td>
              <td onClick={expandImage}>
                <Image className='gallery-img' src={img10} width={400} height={400} alt='img10' />
              </td>
              <td onClick={expandImage}>
                <Image className='gallery-img' src={img11} width={400} height={400} alt='img11' />
              </td>
              <td onClick={expandImage}>
                <Image className='gallery-img' src={img11} width={400} height={400} alt='img12' />
              </td>
            </tr>
          </table>
        </div>
      </div>
    </main>
  )
}

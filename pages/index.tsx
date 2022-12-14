import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import panda from '../assets/images/panda.webp';
import Nav from '../components/Nav'
import { BsArrowDown } from 'react-icons/bs';
import Thumbnail from '../components/Thumbnail';
import Footer from '../components/Footer';
import Link from 'next/link';

export default function Home() {
  return (
    <div className='w-full h-screen p-4 md:p-6'>
      <Head>
        <title>Home</title>
      </Head>
      <main className='w-full h-full'>
        <Nav/>
        <div className='flex p-4 md:p-8 w-full h-5/6 flex-col flex-col-reverse sm:flex-row'>
          <div className={`${styles.div2} opacity-0 w-full h-2/4 flex justify-evenly flex-col sm:h-full sm:w-2/4`}>
            <h1 className='text-2xl md:text-4xl lg:text-5xl'>Be a better developer, read better articles</h1>
            <h1 className='text-1xl md:text-3xl lg:text-4xl text-neutral-400'>Find all my writings here</h1>
            <div className='w-full mt-4 flex items-center justify-start gap-4'>
              <input className='w-3/4 p-4 outline-0 brd border-2 rounded-full bg-transparent text-md lg:p-8 lg:text-2xl' type="text" placeholder='Search articles'/>
              <a href='#articles'><div className='p-4 rounded-full flex items-center transition-all hover:bg-neutral-400 justify-center'>
                <BsArrowDown size={'30px'}/>
              </div></a>
            </div>
          </div>
          <div className={`${styles.div1} opacity-0 w-full h-2/4 flex justify-evenly items-center sm:h-full sm:w-2/4`}>
            <Image className='w-3/5' src={panda} alt="panda"/>
          </div>
        </div>
      </main>
      <main className='w-full h-fit' id="articles">
        <div className='p-4 md:p-8 w-full h-full'>
          <div className='w-full h-1/5'>
            <h1 className='text-2xl md:text-4xl lg:text-5xl'>New articles</h1>
          </div>
          <div className='w-full mt-16 h-4/5 flex gap-8 items-center justify-start flex-col lg:flex-row'>
            <Link className='w-full md:w-1/4' href="/read"><Thumbnail/></Link>
          </div>
        </div>
      </main>
      <main className='w-full h-full'>
        <div className='p-4 md:p-8 w-full h-full'>
            <Footer/>
        </div>
      </main>
    </div>
  )
}

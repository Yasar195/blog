import Nav from "../../components/Nav"
import Head from "next/head"
import Loading from "../../components/Loading"
import { BsArrowLeft } from 'react-icons/bs'
import Link from "next/link"
import styles from '../../styles/Read.module.css'
import ReactMarkdown from "react-markdown"

export default function Read(){

    return(
        <div className='relative w-full h-screen p-4 md:p-6'>
            <Head>
                <title>Read</title>
            </Head>
            <Nav/>
            <main className="w-full h-fit p-8 flex items-stretch flex-col">
                <div className='max-w-screen-lg h-full'>
                    <Link href='/'><div className={`${styles.back} w-3/5 md:w-1/4 flex items-center justify-evenly mb-6`}>
                        <BsArrowLeft size={'20px'}/>
                        <h1 className="text-sm md:text-xl lg:text-2xl">Back to Home</h1>
                    </div></Link>
                    <div className="w-full h-full">
                    </div>
                </div>
            </main>
            <Loading/>
        </div>
    )
}
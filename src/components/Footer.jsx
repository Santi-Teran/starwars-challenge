import Link from 'next/link';
import Image from 'next/image';
import { FaRegCopyright } from "react-icons/fa6";
import { HiLightningBolt } from "react-icons/hi";
import { FaGithub, FaLinkedin } from "react-icons/fa";


export default function Footer() {
  return (
    <div className='flex justify-between star-wars-gradient p-2 text-white'>
      <div className='flex items-center gap-x-2'>
        <FaRegCopyright />
        <p className="text-sm lg:text-base">2024 Santiago Teran. Done with</p>
        <HiLightningBolt className="text-yellow-500"/>
      </div>
      <div className='flex text-lg lg:text-xl items-center gap-x-3'>
        <Link href={'https://github.com/Santi-Teran'} target='_BLANK'><FaGithub /></Link>
        <Link href={'https://www.linkedin.com/in/santi-teran/'} target='_BLANK'><FaLinkedin /></Link>
        <Link href={'https://santiteran.vercel.app/'} target='_BLANK'><Image src={'/logo-solo.png'} alt='Logo' width={20} height={10}/></Link>
      </div>
    </div>
  )
}

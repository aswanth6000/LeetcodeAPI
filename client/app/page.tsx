import Image from 'next/image'
import { Navbar } from '../components/Navbar'
import { Poppins } from 'next/font/google'
import  {ParticlesComponent} from '@/components/particles'
const poppins = Poppins({
  weight: '700',
  subsets: ['latin'],
})
export default function Home() {
  return (
    <main className={`h-screen overflow-hidden w-full bg-black ${poppins.className}`} >
      <Navbar/>
     <ParticlesComponent/>
      <div className='h-screen w-full flex justify-center align-middle mt-56'>
      <p className='text-white text-4xl'>
      your personal dashboard for tracking coding progress.
      </p>
      </div>
    </main>
  )
}

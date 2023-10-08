import About from '@/components/About'
import Copyright from '@/components/Copyright'
import Faq from '@/components/Faq'
import Footer from '@/components/Footer'
import Hero from '@/components/Hero'
import How from '@/components/How'
import Testimonials from '@/components/Testimonials'


export default function Home() {
  return (
    <div className='overflow-hidden max-w-[100rem] mx-auto bg-page'>
      <Hero />
      <About />
      <How />
      <Faq />
      <Testimonials />
      <Footer/>
      <Copyright/> 
    </div>
  )
}

import React,{useEffect} from 'react'
import AOS from 'aos'
import 'aos/dist/aos.css';
import ContactForm from '../ContactForm';

const Contact = () => {

  useEffect(() => {
    AOS.init();
  }, [])

  return (
    <div id="Contact" className='bg-black text-white'>
        <ContactForm/>
    </div>
  )
}

export default Contact
import React from 'react'
import { Fade } from "react-awesome-reveal";

const FaqSection = () => {
  return (
       <section className='home-content-faq'>
           <Fade triggerOnce duration="500" >
   
             <h3 className='home-content-faq__title'>Frequently asked questions.</h3>
             <div className='home-content-faq__questions'>
               <p className='home-content-faq__text'>
                 <span className='home-content-faq__text home-content-faq__text--question'>Is it free?: </span>
                 Yes, Debian is completely free of charge. Almost everything in Debian is also open-source.
               </p>
               <p className='home-content-faq__text'>
                 <span className='home-content-faq__text home-content-faq__text--question'>Will it work on my computer?: </span>
                 Yes, Debian works on most computers. It can also be run from a live USB stick to make sure everything works fine without having to install anything.
               </p>
               <p className='home-content-faq__text'>
                 <span className='home-content-faq__text home-content-faq__text--question'>Can I keep Windows?: </span>
                 Yes, you can have both Windows and Debian. A menu asks you which one to use when you start the computer.
               </p>
               <p className='home-content-faq__text'>
                 <span className='home-content-faq__text home-content-faq__text--question'>Will it suit my needs?: </span>
                 Hopefully. Debian comes with what most people need out of the box as well as easy access to more than 60,000 software packages and 7,800 games.
               </p>
             </div>
   
           </Fade>
         </section>
  )
}

export default FaqSection
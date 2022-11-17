import Head from "next/head";
import AboutUs from "../Components/AboutUs";
import Blog from "../Components/Blog";

import Contact from "../Components/Contact";
import Homepage from "../Components/Homepage";
import Services from "../Components/Services";
import Sidebar from "../Components/Sidebar";
import ScrollToTop from "react-scroll-to-top";
import Team from "../Components/Team";
import Footer from "../Components/Footer";
import Creation from "../Components/Creation";
import Script from 'next/script'



export default function Home() {
  return (
      <>  

        <Head>
          <title> AppiLab | Developpement Web & Mobile</title>
          <meta name='description' content='Appilab Application ' />

          <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=DM+Sans:wght@400;500;700&display=swap"></link>
          <link href="https://fonts.googleapis.com/css2?family=Roboto:wght@300;900&display=swap" rel="stylesheet"></link>
          <link rel="stylesheet" href="https://demos.creative-tim.com/notus-js/assets/vendor/@fortawesome/fontawesome-free/css/all.min.css"></link>
          <link rel='icon' href='/favicon.ico'/>
        </Head>
        <Script type="module" src="https://unpkg.com/ionicons@5.5.2/dist/ionicons/ionicons.esm.js"></Script>
          <Script nomodule src="https://unpkg.com/ionicons@5.5.2/dist/ionicons/ionicons.js"></Script>
        <div className='flex '>
        <div className="sm:h-screen sm:sticky top-0 rounded-lg p-0.5 sm:bg-gradient-to-tr from-purple-500 to-lime-400">
        <div className='h-screen -mb-2 rounded-lg bg-black text-purple-500 z-9999'>

        <Sidebar />
          </div>
          </div>
        <div className="md:flex-1 ">
         <div className="sm:px-12 px-5 mx-auto overflow-hidden max-w-md md:max-w-[100%] dark:text-white">
            <Homepage/>
            <br/>
            <br/>
            <AboutUs/>
            <div>

            <Services/>
            </div>
     
            <div>

            <Creation/>
            </div>
            <div>

            <Team/>
            </div>
            <Blog/>
            <div className="pt-24 pb-36">

            <Contact/>
            </div>
           </div>
            <div>

            <Footer/>
            </div>
            <div/>
            <ScrollToTop smooth />
         
    </div>
    </div>
      </>
  )
}

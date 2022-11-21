import React from 'react'


const Contact = () => {
  return (
    <div  className="h-screen md:pt-24 sm:pt-36 mb-12 " id="Contact">
      <h1 className='md:text-5xl sm:text-4xl text-3xl'>Contactez <span className='text-purple-500'> Nous</span></h1>
      <br/>
    <hr className='bg-lime-400 w-20 h-1'/>
    <br/>
   
        <div class="max-w-6xl mx-auto sm:px-6 lg:px-12 border border-lime-400 rounded-lg p-10">
            <div class="mt-2 overflow-hidden">
                <div class="grid grid-cols-1 md:grid-cols-2">
                    <div class="p-6 mr-2 bg-gray-100 dark:bg-black sm:rounded-lg">
                  
                        <br/>
                        <p className='tracking-[.10em] '>Veuillez Remplir le formulaire de contact , un de nos collaborateur va vous contacter dans les plus bref delais, ou contacter nous sur le numero ci dessous</p>
       
                        <div class="flex items-center mt-8 text-lime-400">
                        <ion-icon name="location-outline" size="large"></ion-icon>
                            <div class="ml-4 text-md tracking-wide font-semibold w-40 text-gray-400">
                                Acme Inc, Street, State,
                                Postal Code
                            </div>
                        </div>

                        <div class="flex items-center mt-4 text-lime-400">
                        <ion-icon name="call-outline" size="large"></ion-icon>
                            <div class="ml-4 text-md tracking-wide text-gray-400 font-semibold w-40">
                                +44 1234567890
                            </div>
                        </div>

                        <div class="flex items-center mt-2  text-lime-400">
                        <ion-icon name="mail-outline" size="large"></ion-icon>

                            <div class="ml-4 text-md tracking-wide text-gray-400 font-semibold w-40">
                                info@appilab.com
                            </div>
                        </div>
                    </div>

                   
    <form action="https://api.web3forms.com/submit" class="mt-10 ">
 

      <input type="hidden" name="access_key" value="YOUR_ACCESS_KEY_HERE" /> 
      <div class="grid gap-6 sm:grid-cols-2  ">
        <div class="relative z-0">
          <input type="text" name="name" class="peer block w-full appearance-none text-gray-800 dark:text-white border-0 border-b border-gray-500 bg-transparent py-2.5 px-0 text-sm  focus:border-blue-600 focus:outline-none focus:ring-0" placeholder=" " />
          <label class="absolute top-3 -z-10 origin-[0] -translate-y-6 scale-75 transform text-sm text-gray-500 dark:text-white duration-300 peer-placeholder-shown:translate-y-0 peer-placeholder-shown:scale-100 peer-focus:left-0 peer-focus:-translate-y-6 peer-focus:scale-75 peer-focus:text-blue-600 peer-focus:dark:text-blue-500">Your name</label>
        </div>
        <div class="relative z-0">
          <input type="text" name="email" class="peer block w-full appearance-none text-gray-800 dark:text-white border-0 border-b border-gray-500 bg-transparent py-2.5 px-0 text-sm  focus:border-blue-600 focus:outline-none focus:ring-0" placeholder=" " />
          <label class="absolute top-3 -z-10 origin-[0] -translate-y-6 scale-75 transform text-sm text-gray-500 dark:text-white duration-300 peer-placeholder-shown:translate-y-0 peer-placeholder-shown:scale-100 peer-focus:left-0 peer-focus:-translate-y-6 peer-focus:scale-75 peer-focus:text-blue-600 peer-focus:dark:text-blue-500">Your email</label>
        </div>
        <div class="relative z-0 col-span-2">
          <textarea name="message" rows="5" class="peer block w-full appearance-none text-gray-800 dark:text-white  border-0 border-b border-gray-500 bg-transparent py-2.5 px-0 text-sm  focus:border-blue-600 focus:outline-none focus:ring-0" placeholder=" "></textarea>
          <label class="absolute top-3 -z-10 origin-[0] -translate-y-6 scale-75 transform text-sm text-gray-500  dark:text-white duration-300 peer-placeholder-shown:translate-y-0 peer-placeholder-shown:scale-100 peer-focus:left-0 peer-focus:-translate-y-6 peer-focus:scale-75 peer-focus:text-blue-600 peer-focus:dark:text-blue-500">Your message</label>
        </div>
      </div>
      <button type="submit" class="mt-8 bg-black px-10 py-2 text-white font-bold tracking-[.10em]  p-4 rounded-lg hover:scale-125 ease-in-out duration-300  border border-lime-400 dark:text-white">Envoyer</button>
    </form>
                </div>
            </div>
        </div>
  
    </div>
  )
}

export default Contact
import classNames from 'classnames'
import { Link} from 'react-scroll'
import { BsChevronDoubleLeft , BsFillPeopleFill , BsPencilSquare ,BsEnvelope, BsFillAwardFill, BsMoonFill, BsSunFill} from "react-icons/bs";
import { BiHome , BiCodeBlock} from "react-icons/bi";
import React, { useState , useEffect } from 'react'
import { useTheme } from "next-themes"

        const menuItems=[
            {id:1, label:"Bienvenue", icon:<BiHome/>, link:"home"},
            {id:2, label:"Qui Sommes Nous", icon:<BsFillPeopleFill/>, link:"AboutUs"},
            {id:3, label:"Nos Services", icon:<BiCodeBlock/>, link:"Services"},
            {id:4, label:"Notre Equipe", icon:<BsFillAwardFill/>, link:"Team"},
            {id:5, label:"Blog", icon:<BsPencilSquare/>, link:"Blog"},
            {id:6, label:"Contactez Nous", icon:<BsEnvelope/>, link:"Contact"},
         
            

        ]

function Sidebar() {
    const [toggleCollapse,setToggleCollapse] = useState(false)
    const [mobileNav , setMobileNav] = useState(false)

    const { systemTheme , theme, setTheme }= useTheme();
    const [mounted,setMounted ]= useState(false);

    useEffect(()=>{
        setMounted(true);
    },[]);

   // const router = useRouter()

    //const activeMenu = useMemo(()=>menuItems.find(menu=>menu.link === router.pathname),[router.pathname])

    const wrapperClasses = classNames(" hidden sm:flex px-4 pt-9 pb-4 flex flex-col duration-300 ",
    {  
        ['w-64'] : !toggleCollapse,
        ['w-20'] : toggleCollapse
      });

    const collapseIconClasses = classNames('top-10 fixed bg-white dark:bg-slate-900 text-slate-900 dark:text-gray-300 rounded-full ml-1  p-2 cursor-pointer',{
        "rotate-180":toggleCollapse, 
    })  


    const toggleSidebar = () => {
        setToggleCollapse(!toggleCollapse)
    } 

    const navItemClasses= (menu) =>{
        return classNames(
            "flex items-center cursor-pointer hover: border-b-white w-full overflow-hidden whitespace-nowrap",
           /* {
                ["border-b-white"]:activeMenu.id === menu.id
          }*/
        )

    };
    const currentTheme = theme === 'system' ? systemTheme : theme;

    const glowingClasses = classNames('absolute -inset-1 bg-gradient-to-r from-lime-600 to-purple-600 rounded-full blur brightness-150 py-5 opacity-0 hover:opacity-40 duration-500 z-50')  



  return (
    <>
      <div className={wrapperClasses}>
        <div className='flex justify-between items-center relative '>
            <div>
                <div className={classNames('text-4xl font-bold md:mt-7 px-5 mt-2 fixed text-white gap-x-6',{hidden: toggleCollapse})}>
             
                    Appi<span className='text-purple-500 '>LAB</span> </div>
            </div>
            <div className='absolute -inset-1 bg-gradient-to-r from-[#00ff00] to-purple-600 rounded-full blur brightness-150 py-5 opacity-0 hover:opacity-40 duration-500 left-72 -right-9'></div>
            <div>
                <BsChevronDoubleLeft size={30} className={collapseIconClasses} onClick={toggleSidebar}/>
            </div>

        </div> 
       
       <div className='flex flex-col fixed top-52'>
            {menuItems.map(({icon:icon, ...menu}) => {
                //const classes=navItemClasses(menu);
                return(
                    
                    <div className='flex items-center cursor-pointer hover: border-b-white w-full overflow-hidden whitespace-nowrap'>
                        <div className='hidden sm:flex py-5 px-5'>
                            
                            <Link to={menu.link} smooth={true} offset={-100} duration={500} >
                            <div className="flex relative gap-2 items-center w-full">
                               
                                <div className={glowingClasses}></div>
                                <div className=' relative text-2xl  hover:rotate-180 duration-300'>
                                    {icon}
                                </div>
                           
                                {!toggleCollapse && (
                                    
                                    <span className='text-md hover:underline hover:underline-offset-8 text-white  font-medium tracking-[.10em] hover:border-b-white'>
                                        {menu.label}
                                    </span>
                                )}
                            </div>
                        </Link>
                      
                        </div>
                    </div>
                   
                )
            })} 
               
        </div>
        <div className='flex border border-slate-900 left-9 cursor-pointer rounded p-2 items-center fixed bottom-7 hover:ring-4 hover:ring-gray-200 duration-300 '>
          {!mounted ? null : ""}
             {currentTheme == 'dark'? (
                
                <button onClick={()=>setTheme('light')}>
                         
                         <BsSunFill/>
                     </button>
             
                 ) : (
                <button onClick={()=>setTheme('dark')}>
                         <BsMoonFill/>
                     </button>
              
             )
     
          }
        </div>
        </div> 

   
       {/* Mobile Menu*/}

   
        <div className=' w-full dark:bg-black bg-white fixed top-0 sm:hidden flex items-center justify-between pt-4 mx-auto px-4 z-30'>
            <div className='flex-1 cursor-pointer  '>
             {!mounted ? null : ""}
             {currentTheme == 'dark'? (
                
                <button onClick={()=>setTheme('light')}>
                         
                         <BsSunFill/>
                     </button>
             
                 ) : (
                <button onClick={()=>setTheme('dark')}>
                         <BsMoonFill/>
                     </button>
              
             )
     
          }
        </div>
      
            <div className='flex-1  text-3xl cursor-pointer  relative text-right'
                onClick={()=>setMobileNav(!mobileNav)}>
                <ion-icon  name={mobileNav ? 'close':'menu'}></ion-icon>
            </div>

      <ul className={`lg:hidden md:hidden absolute bg-white text-black dark:bg-black dark:text-white  z-[-1] left-0 w-full pl-9 transition-all duration-500 ease-in ${mobileNav ? 'top-6 ':'top-[-490px]'}`}>
        {
          menuItems.map((menu)=>(
            <Link to={menu.link} smooth={true} offset={-100} duration={500} >

            <li key={menu.label} className='text-xl my-7'>
              <div className='text-bold cursor-pointer hover:text-gray-400 duration-500'>{menu.label}</div>
            </li>
            </Link>
          ))
        }

  
      </ul>
      
      </div>
      
      

</>
       
    
  )
        }

export default Sidebar
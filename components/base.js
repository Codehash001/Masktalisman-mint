import Image from 'next/image'
import { useState,useEffect } from "react"
import { AiOutlineClose, AiOutlineMenu } from 'react-icons/ai';
import {Link} from 'react-scroll/modules';
import Mint from './mint'
import Overview from './overview'


export default function Base () {


const[nav, setNav] = useState(false)

const handleNav = () => {
  setNav(!nav);
}

const [toggleState, setToggleState] = useState(1);

   const toggleTab = (index) =>{
    setToggleState (index);
    setNav(false);
   }



  
  return (
  <>
   <div className='w-screen h-screen flex justify-end font-Archivo overflow-x-hidden relative'>
   
       	  <div className={nav? 'absolute top-0 z-20 filter backdrop-blur-lg md:w-[50%] w-full h-screen flex flex-col items-end' : 'hidden'}>
    	  	<div className='flex flex-col items-center bg-white w-[70%] md:w-[100%] h-screen md:p-8 p-5'>
    	  	   <div className='w-full h-auto flex items-center justify-between'> 
    	  	     <img onClick={() => toggleTab(1)} src='/Logo.jpeg' className='h-[40px]'/>
    	  	     <AiOutlineClose size={18} className='cursor-pointer' onClick={handleNav}/>
    	  	   </div>
    	  	   <h1 onClick={() => toggleTab(1)} className='md:text-[25px] text-[15px] mt-5 cursor-pointer hover:bg-gradient-to-r from-purple-500 to-pink-500 hover:bg-clip-text hover:text-transparent'>Home</h1>
    	  	   <a href='/policy'><h1 className='md:text-[25px] text-[15px] mt-5 hover:bg-gradient-to-r from-purple-500 to-pink-500 hover:bg-clip-text hover:text-transparent'>Privacy Policy</h1></a>
    	  	   <a href='/terms'><h1 className='md:text-[25px] text-[15px] mt-5 hover:bg-gradient-to-r from-purple-500 to-pink-500 hover:bg-clip-text hover:text-transparent'>Terms & Condition</h1></a>
    	  	   <button type="button" className="mt-10 text-white dark:text-black font-semibold bg-gradient-to-r from-purple-500 to-pink-500 hover:bg-gradient-to-l focus:ring-4 focus:outline-none focus:ring-purple-200 dark:focus:ring-purple-800 rounded-sm text-sm px-5 py-2.5 text-center"
    	  onClick={() => toggleTab(3)}>
    	  Mint an NFT
    	  </button>
    	  
    	   <div className='flex flex-row items-center justify-between w-[100px] px-2 mt-10'>
     <a target='_blank' rel="noreferrer" href='https://twitter.com/MaskTalismanNFT'><svg xmlns="http://www.w3.org/2000/svg"  className="w-8 h-8" viewBox="0 0 24 24" ><path fill="#000" d="M19.633 7.997c.013.175.013.349.013.523 0 5.325-4.053 11.461-11.46 11.461-2.282 0-4.402-.661-6.186-1.809.324.037.636.05.973.05a8.07 8.07 0 0 0 5.001-1.721 4.036 4.036 0 0 1-3.767-2.793c.249.037.499.062.761.062.361 0 .724-.05 1.061-.137a4.027 4.027 0 0 1-3.23-3.953v-.05c.537.299 1.16.486 1.82.511a4.022 4.022 0 0 1-1.796-3.354c0-.748.199-1.434.548-2.032a11.457 11.457 0 0 0 8.306 4.215c-.062-.3-.1-.611-.1-.923a4.026 4.026 0 0 1 4.028-4.028c1.16 0 2.207.486 2.943 1.272a7.957 7.957 0 0 0 2.556-.973 4.02 4.02 0 0 1-1.771 2.22 8.073 8.073 0 0 0 2.319-.624 8.645 8.645 0 0 1-2.019 2.083z"></path></svg></a>
    <a target='_blank' rel="noreferrer" href='https://discord.gg/tshBMw9pcf'><svg xmlns="http://www.w3.org/2000/svg"  className="w-8 h-8" viewBox="0 0 24 24" ><path fill="#000" d="M14.82 4.26a10.14 10.14 0 0 0-.53 1.1 14.66 14.66 0 0 0-4.58 0 10.14 10.14 0 0 0-.53-1.1 16 16 0 0 0-4.13 1.3 17.33 17.33 0 0 0-3 11.59 16.6 16.6 0 0 0 5.07 2.59A12.89 12.89 0 0 0 8.23 18a9.65 9.65 0 0 1-1.71-.83 3.39 3.39 0 0 0 .42-.33 11.66 11.66 0 0 0 10.12 0q.21.18.42.33a10.84 10.84 0 0 1-1.71.84 12.41 12.41 0 0 0 1.08 1.78 16.44 16.44 0 0 0 5.06-2.59 17.22 17.22 0 0 0-3-11.59 16.09 16.09 0 0 0-4.09-1.35zM8.68 14.81a1.94 1.94 0 0 1-1.8-2 1.93 1.93 0 0 1 1.8-2 1.93 1.93 0 0 1 1.8 2 1.93 1.93 0 0 1-1.8 2zm6.64 0a1.94 1.94 0 0 1-1.8-2 1.93 1.93 0 0 1 1.8-2 1.92 1.92 0 0 1 1.8 2 1.92 1.92 0 0 1-1.8 2z"></path></svg></a>

    </div>
</div>
    	  </div>
   
        <div className='hidden md:flex w-[50%] h-screen  overflow-hidden fixed top-0 left-0 z-30'>
    <div className='h-full p-8'>
      <img src='/bg.jpeg' className='h-full w-auto object-cover rounded-lg'/>
    </div>
    </div>
    
    <div className='w-full md:w-[50%] h-screen md:px-5 pt-5 filter backdrop-blur-sm md:backdrop-blur-none'>
    	<div className='w-full h-[50px] md:px-8 px-5 flex justify-between items-center bg-white '>
    	  <img onClick={() => toggleTab(1)} src='/Logo.jpeg' className='h-[40px] cursor-pointer'/>
    	  <div className='flex items-center justify-end'>
    	    <h1 onClick={() => toggleTab(2)} className='text-[18px] font-medium cursor-pointer hover:bg-gradient-to-r from-purple-500 to-pink-500 hover:bg-clip-text hover:text-transparent'>About</h1>
    	    <h1 onClick={() => toggleTab(3)} className='text-[18px] font-medium mx-5 md:mx-8 cursor-pointer hover:bg-gradient-to-r from-purple-500 to-pink-500 hover:bg-clip-text hover:text-transparent'>Mint</h1>
    	    <AiOutlineMenu size={18} className='cursor-pointer' onClick={handleNav}/>
    	  </div>
    	  
    	</div>
    	
    	{
    	toggleState == 3 ? 
    	(
    	<div className='w-full h-full px-8 flex flex-col justify-start items-center mt-[10px]'>
    	<Mint/>
    	</div>
    	): toggleState == 2 ? 
    	(
    	<div className='w-full h-full px-8 flex flex-col justify-start items-center mt-6'>
    	<Overview/>
    	</div>
    	) :
    	(<div className='w-full h-full md:px-8 px-5 flex flex-col justify-start items-center md:pt-[100px] pt-5 overflow-hidden'>
    	  <h1 className='text-lg text-gray-800'>Welcome to</h1>
    	  <h1 className='text-black md:text-[64px] text-4xl font-bold md:mt-6'>MaskTalisman</h1>
    	  <h1 className='md:text-xl text-lg font-medium md:mt-5 mt-2 text-center'>A must-see masterpiece that you won't want to miss!</h1>
    	  
    	  <p className='text-lg md:mt-6 mt-2 text-center'>
    	     MaskTalisman is a collection of 335 Mask NFTs—unique digital collectibles living on the Polygon blockchain. Each holder will receive one MaskAvatar NFT per each MaskTalisman NFT held. Max 20/wallet.
    	  </p>
    	  
    	   <div className='md:hidden h-auto w-full mt-4 px-2'>
      <img src='/bg.jpeg' className='w-full h-auto object-cover rounded-md'/>
    </div>
    
    	  <button type="button" className="md:mt-10 mt-6 text-white dark:text-black font-semibold bg-gradient-to-r from-purple-500 to-pink-500 hover:bg-gradient-to-l focus:ring-4 focus:outline-none focus:ring-purple-200 dark:focus:ring-purple-800 rounded-sm text-sm px-5 py-2.5 text-center"
    	  onClick={() => toggleTab(3)}>
    	  Grab Your NFT now
    	  </button>
    	  
    	  <div className='flex flex-row items-center justify-between w-[100px] px-2 mt-10'>
    <a target='_blank' rel="noreferrer" href='https://twitter.com/MaskTalismanNFT'><svg xmlns="http://www.w3.org/2000/svg"  className="w-8 h-8 hover:scale-100" viewBox="0 0 24 24" ><path fill="#000" d="M19.633 7.997c.013.175.013.349.013.523 0 5.325-4.053 11.461-11.46 11.461-2.282 0-4.402-.661-6.186-1.809.324.037.636.05.973.05a8.07 8.07 0 0 0 5.001-1.721 4.036 4.036 0 0 1-3.767-2.793c.249.037.499.062.761.062.361 0 .724-.05 1.061-.137a4.027 4.027 0 0 1-3.23-3.953v-.05c.537.299 1.16.486 1.82.511a4.022 4.022 0 0 1-1.796-3.354c0-.748.199-1.434.548-2.032a11.457 11.457 0 0 0 8.306 4.215c-.062-.3-.1-.611-.1-.923a4.026 4.026 0 0 1 4.028-4.028c1.16 0 2.207.486 2.943 1.272a7.957 7.957 0 0 0 2.556-.973 4.02 4.02 0 0 1-1.771 2.22 8.073 8.073 0 0 0 2.319-.624 8.645 8.645 0 0 1-2.019 2.083z"></path></svg></a>
    <a target='_blank' rel="noreferrer" href='https://discord.gg/tshBMw9pcf'><svg xmlns="http://www.w3.org/2000/svg"  className="w-8 h-8 hover:scale-110" viewBox="0 0 24 24" ><path fill="#000" d="M14.82 4.26a10.14 10.14 0 0 0-.53 1.1 14.66 14.66 0 0 0-4.58 0 10.14 10.14 0 0 0-.53-1.1 16 16 0 0 0-4.13 1.3 17.33 17.33 0 0 0-3 11.59 16.6 16.6 0 0 0 5.07 2.59A12.89 12.89 0 0 0 8.23 18a9.65 9.65 0 0 1-1.71-.83 3.39 3.39 0 0 0 .42-.33 11.66 11.66 0 0 0 10.12 0q.21.18.42.33a10.84 10.84 0 0 1-1.71.84 12.41 12.41 0 0 0 1.08 1.78 16.44 16.44 0 0 0 5.06-2.59 17.22 17.22 0 0 0-3-11.59 16.09 16.09 0 0 0-4.09-1.35zM8.68 14.81a1.94 1.94 0 0 1-1.8-2 1.93 1.93 0 0 1 1.8-2 1.93 1.93 0 0 1 1.8 2 1.93 1.93 0 0 1-1.8 2zm6.64 0a1.94 1.94 0 0 1-1.8-2 1.93 1.93 0 0 1 1.8-2 1.92 1.92 0 0 1 1.8 2 1.92 1.92 0 0 1-1.8 2z"></path></svg></a>

    </div>
    	</div>)
    	}
    </div>
    
      
   </div>
  </>
  )
}


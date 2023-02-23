import Head from 'next/head'
import Image from 'next/image'

import styles from '@/styles/Home.module.css'

export default function blog(){
    return(
        <>

        
        <div className="flex justify-center items-center h-screen bg-indigo-600 shadow-[0_35px_60px_-15px_rgba(0,0,0,0.3)]" >
        
           <div className="w-96 h-100 p-6 shadow-lg bg-white rounded-md ">

            <div className='text-center justify-center text-3x1'>
            <h1 className="text-black block font-semibold mb-2">LOGIN</h1>
            
            </div>
            <div className='object-center'>
            <img className="object-center mx-auto my-4" src="/images/99.png" alt="gambar" width={70} height={70} />
            </div>

               <div className='mb-5'>
            <label className=" text-black block text-base mb-5"></label>
            <input className=" text-black my-8 w-full bg-white border-b border-grey mb-5 focus:outline-none pb-1 pl-1 hover:border-cyan-500" placeholder="Username"type="text" /><br />
            
            <label  className='text-black block text-base mb-2'></label>
            <input className="text-black w-full bg-white border-b border-grey mb-2 focus:outline-none pb-1 pl-1 hover:border-cyan-500" placeholder="Password"type="password" name="" id="" />
               
               </div>

               <div className='mt-5 flex justify-between items-center'>
                   <div>
                     <input type="checkbox" />
                     <label className="text-black " htmlFor="">remember me</label>
                    </div>

                    <div>
                      <a href="#" className='text-black text-indigo-800 font-semibold'>Forgot Password</a>
                    </div>
                </div>

                 <div>
                    <a href="/home"><button className=' border-2 border-indigo-700 bg-indigo-700 mt-5 text-white py-1 w-full bg-cyan-600 rounded-md hover:bg-transparent hover:text-black'>Submit</button></a>
                </div> 

                

            </div>

            

        </div>
        
        
        </>
    )
}
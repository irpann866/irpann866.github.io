export default function home() {
    return (
        <>
            <div className="h-max bg-gradient-to-r from-violet-500 to-fuchsia-500 ">
                

                <div>
                    <button className="border-2 border-indigo-700 bg-indigo-700 mt-5 ml-5 text-white 
            py-1 w-full bg-transparent border-none">
                    </button>
                </div>

{/* <div className=" relative">
                    <div> <button className="container h-5 w-52 ml-96   border border-black   mt-14 rounded-full absolute top-0 left-14 overflow"></button>
                        <div className="flex justify-between w-56 ">
                            
                        <img src="images/cari.png " className=" w-5 h-5" alt="gambar" />
                        <p className="text-black text-left ">Cari</p>
                        </div>
                    </div>
                </div> */}
                

                <div className="container h-8 w-1/2 bg-white mt-7 ml-10 rounded-full">
                    <div className="ml-10 w-48">
                    <div className="relative">
                        <img src="images/cari.png" className="absolute top-2 left-96 w-5 h-5" alt="" />
                <input type="search"  className=" rounded-full  px-3  absolute top-1 left-96 bg-transparent border border-black"/>
                </div>
                        <div className=" flex justify-between">
                            <a href="#" className="text-black">Home</a>
                            <a href="#" className="text-black">About</a>
                            <a href="#" className="text-black">Contact</a>
                        </div>
                        
                    </div>
                </div>

                <div className=" ml-10 flex justify-between">
                    <div className="font-medium text-6xl mt-36">
                        <p className="mb-5">DESIGN </p>
                        <p>& WEB DEVELOPMENT</p>
                    </div>
                    <img src="images/web1.png" alt="gambar" className="w-1/3 h-1/3 mr-20 " />
                    
                </div>
            </div>

            <div className="h-max bg-white pt-24 pl-52   pb-24 flex space-x-16 ">

                <div className="box-border h-68 w-60 p-4 border rounded-md border-black relative ">
                    <span className="absolute pl-20 pt-5">
                        <img src="images/web.png" alt="gambar" className="w-16 h-10  " />
                    </span>
                    
                    <div className="text-black text-center pt-20">
                        <a href="/web" className="underline decoration-solid text-xl font-semibold">WEB</a>
                        <p className="text-sm pt-2">Design web dibuat oleh orang yang ahli dibidangnya dengan mempertimbangkan kebutuhan user</p>
                        <a href="/web"> <button className=' border-2 border-indigo-700 bg-indigo-700 mt-5 text-white  w-full bg-cyan-600 rounded-full text-xs hover:bg-transparent hover:text-black'>Detail</button></a>
                       
                    </div>
                </div>

                <div className="box-border h-68 w-60 p-4 border rounded-md border-black relative ">
                    <span className="absolute px-20">
                        <img src="images/mobile.png" alt="gambar" className="w-20 h-16   pl-1/2 " />
                    </span>
                    
                    <div className="text-black text-center pt-20">
                        <a href="/mobile" className="underline decoration-solid text-xl font-semibold ">Mobile</a>
                        <p className="text-sm pt-2">layanan mobile app menyediakan UI/UX design yang user friendly dan mudah dipahami oleh user</p>
                        <a href="/mobile"><button className=' border-2 border-indigo-700 bg-indigo-700 mt-5 text-white  w-full bg-cyan-600 rounded-full text-xs hover:bg-transparent hover:text-black'>Detail</button></a>
                        
                    </div>
                </div>

                <div className="box-border h-68 w-60 p-4 border rounded-md border-black relative ">
                    <span className="absolute px-20">
                        <img src="images/video.png" alt="gambar" className="w-16 h-14 pl-1/2 " />
                    </span>
                    
                    <div className="text-black text-center pt-20">
                        <a href="/grafis" className="underline decoration-solid text-xl font-semibold">Design</a>
                        <p className="text-sm pt-2" >Layanan Design grafis mulai dari design logo, famplet, banner, edit foto sesuai dengan request pelanggan </p>
                        <a href="/grafis"><button className=' border-2 border-indigo-700 bg-indigo-700 mt-5 text-white  w-full bg-cyan-600 rounded-full text-xs hover:bg-transparent hover:text-black'>Detail</button></a>
                        
                    </div>
                </div>

            </div>


            <div className="h-max bg-blue-700 pt-14 pb-14">
                <div className="text-center">
                <h1 className="text-2xl font-sans-ui pb-5">ABOUT US</h1>
                <div className="scale-x-50">
                <p className="text-xl">kami menyediakan berbagai design yang cukup menarik mulai dari UI/UX design baik berbasis web ataupun mobile. projeck yang disajikan dikerjakan oleh 
                    para designer profesional sehingga menghasilkan projek yang berkualitas baik</p></div>
                    </div>
            </div>

<div className="bg-white pt-12 pb-12 ">
<div className="relative">
        <img src="images/komunikasi.png" alt="gambar" className="absolute top-5 right-8 w-2/5 h-96"/>
    </div>
    <h1 className="text-black  ml-60 text-xl font-semibold">CONTACT </h1>
    <div className="flex">

    <input type="text" className="w-1/5 h-12 text-black rounded-lg bg-white border-solid border border-gray-600 ml-5 pl-3 
    mt-5 hover:bg-gray-500 " placeholder="Nama"/>

    <input type="Email" className="w-1/5 h-12 rounded-lg bg-white border-solid border border-gray-600 ml-5 pl-3 
    mt-5 hover:bg-gray-500 text-black" placeholder="Email"/></div>

<input type="text" className="w-5/12 h-12 rounded-lg bg-white border-solid border border-gray-600 ml-5 pl-3 
    mt-5 hover:bg-gray-500 text-black" placeholder="Subject"/>
    <div>
    <input type="text" className="w-5/12 h-80 rounded-lg bg-white border-solid border border-gray-600 ml-5 pl-3 
    mt-5 hover:bg-gray-500 text-black " placeholder="Kritik Dan Saran"/></div>
    
    
    
</div>

<div className="h-max bg-gray-500 pt-12 pl-24   pb-6 flex space-x-48 ">
      <div className="box-border h-64 w-56 p-4 border-none rounded-md border-black bg-transparent">
        <h1 className="text-black pb-3 text-2xl font-semibold" >Designku</h1>
        <p className="text-black ">Situs Yang melayanai dibidang jasa</p>
        <div className="flex h-max ">
            <a href="#"><img src="images/facebook.png" alt="" className="w-8 h-14 pt-4 hover:bg-black rounded-full" /></a>
            <a href="#"><img src="images/instagram.png" alt="" className="w-14 h-16 pt-2 pl-2 hover:bg-black rounded-full" /></a>
            <a href="#"><img src="images/twitter.png" alt="" className="w-14 h-16 pl-1 pt-2 hover:bg-black rounded-full" /></a>
        
        
        
        </div>
      </div>

      <div className="box-border h-64 w-56 p-4 border-none rounded-md border-black bg-transparent">
        <h1 className="text-black pb-3 text-2xl font-semibold">Services</h1>
        <li className="text-black">UI/UX Design</li>
        <li className="text-black">Web Design</li>
        <li className="text-black">Design Grafis</li>
      </div>

      <div className="box-border h-64 w-56 p-4 border-none rounded-md border-black bg-transparent">
        <h1 className="text-black pb-3 text-2xl font-semibold">Usefull Link</h1>
        <li className="text-black" >About</li>
        <li className="text-black">Contact</li>
        <li className="text-black">Feature</li>
      </div>

      </div>

      <div className="h-max bg-black">
        <p className="text-center pb-2 pt-2">Copyright 2023 All right | This Template made with Irpan Nurrohman</p>
      </div>

        </>
    )
}
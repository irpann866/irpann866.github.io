export default function grafis() {
    return (
        <>
        <div className="w-full h-full bg-white">
            <div className="text-black font-semibold  text-3xl pb-2 text-center pt-5">Design Web </div>
        <div className="container px-6 mx-auto py-5 bg-white sm:flex ">
            <div className=" rounded-md shadow-lg overflow-hidden mb-10">
                <img src="images/l.jpg"  className="w-full" alt="gambar" />
                <div className="px-6 py-4">
                    <div className="text-black font-semibold  text-xl pb-2">Web graphic Design </div>
                    <p className="text-black text-sm">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sed culpa enim tenetur, voluptate ad nobis, in natus consequatur quia labore ducimus dolorem, blanditiis numquam facere fugiat quisquam accusantium? Ipsam, velit.</p>
                </div>
            </div>

            <div className=" rounded-md shadow-lg overflow-hidden mb-10 ml-2">
                <img src="images/l2.png"  className="w-full" alt="gambar" />
                <div className="px-6 py-4">
                    <div className="text-black font-semibold  text-xl pb-2">Better Landing Page </div>
                    <p className="text-black text-sm">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sed culpa enim tenetur, voluptate ad nobis, in natus consequatur quia labore ducimus dolorem, blanditiis numquam facere fugiat quisquam accusantium? Ipsam, velit.</p>
                </div>
            </div>

            <div className=" rounded-md shadow-lg overflow-hidden mb-5 ml-2">
                <img src="images/l3.jpg"  className="w-full" alt="gambar" />
                <div className="px-6 py-4">
                    <div className="text-black font-semibold  text-xl pb-2">Appsperia </div>
                    <p className="text-black text-sm">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sed culpa enim tenetur, voluptate ad nobis, in natus consequatur quia labore ducimus dolorem, blanditiis numquam facere fugiat quisquam accusantium? Ipsam, velit.</p>
                </div>
            </div>

            
            

          

           

        </div>

        

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
        <p className="text-center pb-2 pt-2  ">Copyright 2023 All right | This Template made with Irpan Nurrohman</p>
      </div>
        </>
    )
}
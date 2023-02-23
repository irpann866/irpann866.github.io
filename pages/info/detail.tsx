import styles from '../styles/home.module.css';

import image from 'next/image';


export default function Home() {
    return (
      <>
      <div className="h-14 bg-gradient-to-r from-sky-500 to-indigo-500 max-w-max max-h-max">
      </div>

      
      
      <div className="container px-5 mx-auto">

        <div className="border rounded-lg shadow-lg p-10">
        <img src="/images/0.png" alt="gambar" width={100} height={100} />
          <p>website adalah sebuah sarana digital yang dapat mempermudah pengguna dalam mengakses 
            informasi yang akurat dan realtime. serta dapat diakses dimana saja dan kapan saja
            selama ada internet </p>
        </div>

      </div>
      
      </>
    )
  }
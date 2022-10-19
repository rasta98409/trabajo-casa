import { IonIcon } from '@ionic/react'
import React from 'react'
import { BsWhatsapp } from "react-icons/bs"
import logo from '../assets/img/logo.png'



IonIcon

export const Inicio = () => {
  return (
    <>
        <header className=' text-white  p-1'>
            <div className=' rounded-lg flex p-10  justify-evenly  h-20 items-center bg-black '>
                
                <div className='flex items-center gap-4'>
                <img className=' h-20' src={logo} alt="Logo" />
                <h2 className=' font-bold font-mono text-2xl '>Mondino Broker</h2>
                
                </div>

                <div className=' flex '>
                <ul className='flex font-mono font-bold  tracking-[2px] space-x-12 '>
                    <li className=''>Home</li>
                    <li>Comprar</li>
                    <li>Vender</li>
                    <li>Alquilar</li>
                    <li>Contacto</li>
                    
                    
                    
                </ul>
                <a className=' ml-8 font-mono font-bold gap-2 items-center   flex'> <BsWhatsapp /> +57 123455677</a>
                
                </div>
            </div>
        </header>
    </>
  )
}

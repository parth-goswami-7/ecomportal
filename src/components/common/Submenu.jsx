import React from 'react'
import { Popover, Transition } from '@headlessui/react'
import { Fragment, useEffect, useState } from 'react'
import axios from 'axios'

const Submenu = (props) => {
    //debugger
    var setcat = props.cat;
    
    const[subdata, setSubdata] = useState([])
    useEffect(() => {
      axios.get(`https://fakestoreapi.com/products/category/${setcat}`)
      //axios.get('https://fakestoreapi.com/products/category/jewelery')

      .then((res) => setSubdata(res.data))      
      console.log(subdata)  
    },[]);    
  
  return (
    <>
        
                             <Transition
                             as={Fragment}
                             enter="transition ease-out duration-200"
                             enterFrom="opacity-0"
                             enterTo="opacity-100"
                             leave="transition ease-in duration-150"
                             leaveFrom="opacity-100"
                             leaveTo="opacity-0"
                           >
                             <Popover.Panel className="absolute inset-x-0 top-full text-sm text-gray-500 z-10">
                               {/* Presentational element used to render the bottom shadow, if we put the shadow on the actual panel it pokes out the top, so we use this shorter element to hide the top of the shadow */}
                               <div className="absolute inset-0 top-1/2 bg-white shadow" aria-hidden="true"/>                          
                               <div className="relative bg-white">
                                 <div className="mx-auto max-w-7xl px-8">
                                   <div className="grid grid-cols-2 gap-x-8 gap-y-10 py-16">
                                     {/* <div className="col-start-2 grid grid-cols-2 gap-x-8">
                                       {
                                         subdata
                                       .map((item) => (
                                         <div key={item.title} className="group relative text-base sm:text-sm">
                                           <div className="aspect-h-1 aspect-w-1 overflow-hidden rounded-lg bg-gray-100 group-hover:opacity-75">
                                             <img
                                               src={item.image}
                                               alt={item.image}
                                               className="object-cover object-center"
                                             />
                                           </div>
                                           <a href={item.href} className="mt-6 block font-medium text-gray-900">
                                             <span className="absolute inset-0 z-10" aria-hidden="true" />
                                             {item.title}
                                           </a>
                                           <p aria-hidden="true" className="mt-1">
                                             Shop now
                                           </p>
                                         </div>
                                       ))}
                                     </div> */}
                                     <div className="row-start-1 grid grid-cols-3 gap-x-8 gap-y-10 text-sm">                                      
                                       {
                                         subdata
                                         .map((section) => (
                                         <div key={section.title}>
                                           <p id={`${section.title}-heading`} className="font-medium text-gray-900">
                                             {section.title}
                                           </p>
                                           {/* <ul
                                             role="list"
                                             aria-labelledby={`${section.title}-heading`}
                                             className="mt-6 space-y-6 sm:mt-4 sm:space-y-4"
                                           >
                                             {
                                               subdata
                                               .map((item) => (
                                               <li key={item.title} className="flex">
                                                 <a href={item.href} className="hover:text-gray-800">
                                                   {item.title}
                                                 </a>
                                               </li>
                                             ))}
                                           </ul> */}
                                         </div>
                                       ))}
                                     </div>
                                   </div>
                                 </div>
                               </div>
                             </Popover.Panel>
                           </Transition>
            
    </>
  )
}

export default Submenu
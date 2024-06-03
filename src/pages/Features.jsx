import axios from 'axios'
import React, { useEffect, useState } from 'react'

const Features = () => {
  //   const products = [
  //       {
  //         id: 1,
  //         name: 'Basic Tee',
  //         href: '#',
  //         imageSrc: 'https://tailwindui.com/img/ecommerce-images/product-page-01-related-product-01.jpg',
  //         imageAlt: "Front of men's Basic Tee in black.",
  //         price: '$35',
  //         color: 'Black',
  //       },
  //       {
  //           id: 2,
  //           name: 'Nomad Tumbler',
  //           href: '#',
  //           price: '$35',
  //           imageSrc: 'https://tailwindui.com/img/ecommerce-images/category-page-04-image-card-02.jpg',
  //           imageAlt: 'Olive drab green insulated bottle with flared screw lid and flat top.',
  //         },
  //         {
  //           id: 3,
  //           name: 'Focus Paper Refill',
  //           href: '#',
  //           price: '$89',
  //           imageSrc: 'https://tailwindui.com/img/ecommerce-images/category-page-04-image-card-03.jpg',
  //           imageAlt: 'Person using a pen to cross a task off a productivity paper card.',
  //         },
  //         {
  //           id: 4,
  //           name: 'Machined Mechanical Pencil',
  //           href: '#',
  //           price: '$35',
  //           imageSrc: 'https://tailwindui.com/img/ecommerce-images/category-page-04-image-card-04.jpg',
  //           imageAlt: 'Hand holding black machined steel mechanical pencil with brass tip and top.',
  //         }
  //       // More products...
  // ]
  const[products, setProducts] = useState([])
  useEffect(() => {
    axios.get('https://fakestoreapi.com/products')
    .then((res) => setProducts(res.data))
    //console.log(data)
  },[])
  return (
    
    <div className="bg-white">
      <div className="mx-auto max-w-2xl px-4 py-8 sm:px-6 lg:max-w-7xl lg:px-8">
        <h2 className="text-2xl font-bold tracking-tight text-gray-900">Features & New Arrivals</h2>

        <div className="mt-6 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">
          {products
          .slice(12,20)
          .sort((a,b) => b.id - a.id)
          .map((product) => (
            <div key={product.id} className="group relative">
              <div className="aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-md bg-gray-200 lg:aspect-none group-hover:opacity-75 lg:h-80">
                <img
                  src={product.image}
                  alt={product.category}
                  className="h-full w-full object-cover object-center lg:h-full lg:w-full"
                />
              </div>
              <div className="mt-4 flex justify-between">
                <div>
                  <h3 className="text-sm text-gray-700">
                    <a href={product.href}>
                      <span aria-hidden="true" className="absolute inset-0" />
                      {product.title}
                    </a>
                  </h3>
                  <p className="mt-1 text-sm text-gray-500">{product.category}</p>
                </div>
                <p className="text-sm font-medium text-gray-900">{product.price}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default Features
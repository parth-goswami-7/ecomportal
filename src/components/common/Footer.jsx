import React from 'react'

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-8">
    <div className="container mx-auto px-4">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
        <div className="col-span-1">
          <h3 className="text-lg font-bold mb-4">Company Mission 1</h3>
          <p className="text-sm">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </div>
        <div className="col-span-1">
          <h3 className="text-lg font-bold mb-4">Company Mission 2</h3>
          <p className="text-sm">Integer quis semper nisl, vitae venenatis eros.</p>
        </div>
        <div className="col-span-1">
          <h3 className="text-lg font-bold mb-4">Company Mission 3</h3>
          <p className="text-sm">Proin fermentum, justo et venenatis tristique.</p>
        </div>
        <div className="col-span-1">
          <h3 className="text-lg font-bold mb-4">Company Mission 4</h3>
          <p className="text-sm">Nulla facilisi. Ut consectetur velit a sapien fringilla.</p>
        </div>
      </div>
      <div className="mt-8 flex justify-center">
        <ul className="flex flex-wrap justify-center items-center mr-8">
          <li className="mx-4 relative">
            <a href="/" className="text-sm text-gray-400 hover:text-white">Home</a>
            <ul className="absolute left-0 ml-1 mt-2 bg-gray-800 p-2 rounded-md hidden">
              <li><a href="#" className="text-sm text-gray-400 hover:text-white">Submenu 1</a></li>
              <li><a href="#" className="text-sm text-gray-400 hover:text-white">Submenu 2</a></li>
              <li><a href="#" className="text-sm text-gray-400 hover:text-white">Submenu 3</a></li>
            </ul>
          </li>
          <li className="mx-4 relative">
            <a href="#" className="text-sm text-gray-400 hover:text-white">About</a>
            <ul className="absolute left-0 ml-1 mt-2 bg-gray-800 p-2 rounded-md hidden">
              <li><a href="#" className="text-sm text-gray-400 hover:text-white">Submenu 1</a></li>
              <li><a href="#" className="text-sm text-gray-400 hover:text-white">Submenu 2</a></li>
              <li><a href="#" className="text-sm text-gray-400 hover:text-white">Submenu 3</a></li>
            </ul>
          </li>
          <li className="mx-4 relative">
            <a href="#" className="text-sm text-gray-400 hover:text-white">Services</a>
            <ul className="absolute left-0 ml-1 mt-2 bg-gray-800 p-2 rounded-md hidden">
              <li><a href="#" className="text-sm text-gray-400 hover:text-white">Submenu 1</a></li>
              <li><a href="#" className="text-sm text-gray-400 hover:text-white">Submenu 2</a></li>
              <li><a href="#" className="text-sm text-gray-400 hover:text-white">Submenu 3</a></li>
            </ul>
          </li>
          <li className="mx-4 relative">
            <a href="/Contact" className="text-sm text-gray-400 hover:text-white">Contact</a>
            <ul className="absolute left-0 ml-1 mt-2 bg-gray-800 p-2 rounded-md hidden">
              <li><a href="#" className="text-sm text-gray-400 hover:text-white">Submenu 1</a></li>
              <li><a href="#" className="text-sm text-gray-400 hover:text-white">Submenu 2</a></li>
              <li><a href="#" className="text-sm text-gray-400 hover:text-white">Submenu 3</a></li>
            </ul>
          </li>
        </ul>
        
        <div>
          <a href="#" className="text-sm text-gray-400 hover:text-white mr-4">
            <i className="fab fa-facebook"></i>
          </a>
          <a href="#" className="text-sm text-gray-400 hover:text-white mr-4">
            <i className="fab fa-twitter"></i>
          </a>
          <a href="#" className="text-sm text-gray-400 hover:text-white mr-4">
            <i className="fab fa-instagram"></i>
          </a>
        </div>
      </div>
    </div>
  </footer>


  )
}

export default Footer
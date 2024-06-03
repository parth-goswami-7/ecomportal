import React from 'react'

const HeroSection = () => {
  return (
    <>
    <section class="bg-gray-900 text-white py-20">
    <div class="container mx-auto px-4">
        <div class="flex flex-col lg:flex-row items-center justify-between">
            <div class="lg:w-1/2">
                <h1 class="text-4xl lg:text-6xl font-bold mb-4">Welcome to Our Website</h1>
                <p class="text-lg mb-6">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam nec vehicula risus. Vivamus id ex at lectus euismod rutrum.</p>
                <a href="#" class="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded inline-block">Learn More</a>
            </div>
            <div class="lg:w-1/2 lg:mt-0 mt-8">
                <img src="hero-image.jpg" alt="Hero Image" class="rounded-lg shadow-lg"/>
            </div>
        </div>
    </div>
  
</section>

</>

  )
}

export default HeroSection
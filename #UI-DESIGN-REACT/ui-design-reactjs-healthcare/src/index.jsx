import { useState } from 'react'
import './App.css'
import { Link } from 'react-router-dom'
import { CiFacebook, CiInstagram  } from "react-icons/ci";


function index() {

  return (
    <>
<div class="bg-gray-100">
    <section class="mx-auto px-10 py-10">
        <div class="flex flex-col md:flex-row items-center gap-8">
          
            <div class="w-full md:w-1/2">
                <img 
                    src="https://www.shutterstock.com/shutterstock/videos/1109713317/thumb/1.jpg?ip=x480" 
                    alt="Medical professional" 
                    class="w-full h-auto rounded-lg shadow-lg object-cover"
                />
            </div>
            
            <div class="w-full md:w-1/2">
                <h2 class="text-3xl font-bold text-gray-800 mb-4">Medical Excellence</h2>
                <p class="text-gray-600 leading-relaxed">
                    Our healthcare services are dedicated to providing top-notch medical care with compassion and expertise. 
                    We offer a wide range of treatments and personalized care plans to ensure the well-being of our patients. 
                    With state-of-the-art facilities and a team of experienced professionals, we strive to deliver the best 
                    healthcare experience tailored to your needs.
                </p>
            </div>
        </div>
    </section>
</div>

            <footer className="bg-blue-500/80 text-white py-12 ">
              <div className="container mx-auto px-6 md:px-12">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                  <div>
                    <h3 className="text-2xl font-bold mb-4">Quick Links</h3>
                    <ul className="space-y-2">
                      <li><a href="" className="link-hover">Login</a></li>
                      <li><a href="" className="link-hover">Signup</a></li>
                      <li><a href="" className="link-hover">Team</a></li>
                      <li><a href="" className="link-hover">Our History</a></li>
                    </ul>
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold mb-4">Contact Info</h3>
                    <ul className="space-y-2 text-gray-200">
                      <li><a href="mailto:adityasng420.ak@gmail.com"><i className="fas fa-envelope mr-2"></i>support@healthcare.com</a></li>
                      <li><a href="tel:+918083079692"><i className="fas fa-phone mr-2"></i> +91 98765 54321</a></li>
                      <li><i className="fas fa-map-marker-alt mr-2"></i> India & Global</li>
                    </ul>
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold mb-4">Stay Connected</h3>
                    <div className="flex space-x-4 mt-4">
                      <a href="" className="social-icon">
                        <CiFacebook className='text-2xl' />
                      </a>
                      <a href="" className="social-icon">
                        <CiInstagram  className='text-2xl' />
                      </a>
                    </div>
                  </div>
                </div>
                <div className="border-t border-gray-300 mt-6 pt-6 text-center text-gray-200">
                  <p>© 2025. All copyrights reserved.</p>
                </div>
              </div>
            </footer>
    </>
  )
}

export default index

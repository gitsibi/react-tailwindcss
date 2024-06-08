/* eslint-disable no-unused-vars */
import React from 'react';
const App = () => {
  return (
    <div>
      <nav className="bg-blue-600 p-6 text-gray-100">
        <div className="flex items-center justify-between">
          <div className="text-3xl font-semibold">Kalvium</div>
            <div className="flex items-center">
               <a href="#" className="mr-6 hover:text-blue-200">About Us</a>
               <a href="#" className="mr-6 hover:text-blue-200">Contacts</a>
               <a href="#" className="hover:text-blue-200">Courses</a>
               <button className="ml-6 px-5 py-3 bg-gray-100 text-blue-600 rounded-lg hover:bg-gray-200 hover:text-blue-800">Login</button>
            </div>
        </div>
      </nav>
      <div className="container mx-auto mt-6 px-4">
        <button className="bg-green-500 hover:bg-green-400 text-white font-bold py-3 px-6 rounded">
          Button One
        </button>
        <div className="bg-yellow-100 border border-yellow-400 text-yellow-800 px-5 py-4 rounded my-6" role="alert">
          <strong className="font-bold">Alert!</strong>
          <span className="block sm:inline"> This is awesome!</span>
        </div>
        <div className="max-w-md mx-auto flex p-8 bg-white rounded-xl shadow-lg">
          <img src="https://s3.ap-south-1.amazonaws.com/kalvi-education.github.io/front-end-web-development/Kalvium-Logo.png" alt="" className="h-16 w-16" />
          <div className="ml-8 pt-2">
            <h4 className="text-3xl text-gray-800">Kalvium Store</h4>
            <p className="text-lg text-gray-500">You have a new course!</p>
          </div>
        </div>
        <footer className="bg-gray-300 text-center lg:text-left mt-12 p-6">
          <div className="text-gray-800">
            <p className="text-center">&copy; 2021 <a className="text-blue-600" href="https://kalvium.com/">Kalvium</a></p>
          </div>
        </footer>
      </div>
    </div>
  );
}
export default App;

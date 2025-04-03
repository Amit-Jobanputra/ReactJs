import React from "react";
import "./Amit.css"; // Ensure this file does not override Tailwind styles
const Home = () => {
        return(
            <>
                <div id="Home" className="h-screen flex justify-center items-center bg-gray-800 ">
                <div className="bg-gray-900 p-6 text-center rounded-3xl ">
                    <h1 className="text-white text-4xl mb-4">Amit Jobanputra</h1>
                    <p className="text-white text-2xl mb-6">"Blending creativity and precision to build impactful Web Deveplor solutions."</p>
                    <a href="#About" className="bg-blue-600 text-white px-5 py-2 hover:shadow-2xl hover:shadow-blue-400">View More</a>
                </div>
                </div>
            </>
        )

}

export default Home;
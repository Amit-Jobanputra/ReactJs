
import "./Amit.css"; // Ensure this file does not override Tailwind styles
export const About = () => {
        return(
            <>
                    
            <div id="About" className="h-screen flex justify-center items-center bg-gray-800 ">
                <div>
                    <h1 className="text-gray-300 text-4xl text-center mb-10">About Me</h1>
                    <h2 className="text-white text-2xl text-center mb-20">I'm A Web Developer</h2>  
                    <h3 className="text-white text-xl text-center mb-10">I’m a web developer who thrives on solving problems with elegant code, designing seamless experiences, and bringing innovative ideas to life on the web.</h3>
                    <div className="justify-content-center flex text-white p-15">
                        <div className="bg-gray-900 p-6 text-justify text-3xl mr-5 rounded-3xl w-150 h-auto">
                            <h1>Name :- Amit Jobaputra</h1>
                            <h1>Age :- 21</h1>
                            <h1>Location :- Rajkot</h1> 
                            <h1>E-mail :- amit.jobanputra75@gmail.com</h1>
                            <h1>Phone :- 9408417575</h1>
                        </div>
                        <div className="bg-gray-900 p-6 text-justify text-2xl mr-5 rounded-3xl w-145 h-auto">
                            <h1>Degree :- Bachelor In Computra Application</h1>
                            <h1>Persentage :- 83.11 </h1>
                            <h1>University :- Bhakta Kavi Narsinh Mehta</h1> 
                            <h1>College :- Shri V. J. Modha College of Information Technology</h1>
                            <h1>City :- Porbandar</h1>
                        </div>
                    </div>
                </div>
            </div>
            </>
        )
}
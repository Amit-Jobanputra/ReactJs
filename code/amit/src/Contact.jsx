import "./Amit.css";
export const Contact = () => {
  return (
    <>
      <div
        id="Contact"
        className="h-screen flex justify-center items-center bg-gray-800 "
      >
        <div>
          <h1 className="text-gray-300 text-4xl text-center mb-10">
            Contact Me
          </h1>
          <h2 className="text-white text-2xl text-center mb-20">
            "Let’s connect—your next great idea might just start here!"
          </h2>
          <div className="justify-content-center flex text-white p-15">
            <div className="bg-gray-900 p-6 text-justify text-3xl mr-5 rounded-3xl w-150 h-auto">
              <div>
                <h1>E-mail :- amit.jobanputra75@gmail.com</h1>
              </div>
              <div>
                <h1>Phone :- 9408417575</h1>
              </div>
              <div>
                <h3>
                  Address :- Riya Road ,Rameshwar Park Street no:-2 ,Near Roshan
                  Banglow
                </h3>
              </div>
            </div>
            <div className="bg-gray-900 p-6 text-justify text-3xl mr-5 rounded-3xl w-152 h-auto">
              <div>
                <label className="text-2xl">Your Name:- </label>
                <input
                  type="text"
                  className="w-96 h-10 rounded-3xl p-2"
                  placeholder="Enter Your Name"
                />
              </div>
              <div>
                <label className="text-2xl">Your Email:- </label>
                <input
                  type="text"
                  className="w-96 h-10 rounded-3xl p-2"
                  placeholder="Enter Your Email"
                />
              </div>
              <div>
                <label className="text-2xl">Your Subject:- </label>
                <input
                  type="text"
                  className="w-96 h-10 rounded-3xl p-2"
                  placeholder="Enter Your Subject"
                />
              </div>
              <div>
                <label className="text-2xl">Your Message:- </label>
                <input
                  type="text"
                  className="w-96 h-10 rounded-3xl p-2"
                  placeholder="Enter YourMessage"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

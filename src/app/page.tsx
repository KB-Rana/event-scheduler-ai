'use client';
import PrivacyPopup from "../components/privacy";

const HomePage = () => {
  const handleLogin = () => {
    // const clientId = '831367647050-21h30lcqo96hcqmb4esorqg41lfbsouj.apps.googleusercontent.com';
    // const redirectUri = 'http://localhost:3000/api/auth/callback';
    // const scope = 'https://www.googleapis.com/auth/drive';
    // const responseType = 'code';
    // const state = 'random_state_string';

    // const url = `https://accounts.google.com/o/oauth2/v2/auth?client_id=${clientId}&redirect_uri=${redirectUri}&response_type=${responseType}&scope=${scope}&state=${state}&prompt=login`;
    
    // window.location.href = url;
    window.location.href = '/api/auth/google';
  };

  return (
    <div className="bg-gray-100 min-h-screen">
      <h1 className="text-4xl font-bold text-gray-900 text-center py-2.5 px-0 shadow-md bg-gray-100 ">
        <span className="relative inline-block w-fit px-4 pb-2 text-gray-900 before:absolute before:bottom-0 before:left-1/2 before:w-10/12 before:h-1 before:bg-gradient-to-r before:from-blue-500 before:to-purple-500 before:rounded-full before:-translate-x-1/2">
          Event Scheduler AI
        </span>
      </h1>
      <div className="flex flex-col-reverse md:flex-row items-center justify-between px-6 md:px-20 py-10 bg-gray-100 gap-3 lg:h-[80vh]">
        {/* Left Side - About Us & Login */}
        <div className="w-full md:w-1/2 space-y-6">
          <h1 className="text-4xl font-bold text-gray-900">About AI Agent</h1>
          <p className="text-gray-700 text-lg leading-relaxed">
            This AI agent is designed for insurance companies to help them sell
            their products efficiently. It provides chat support, offering
            customers detailed information about various insurance products.
            Additionally, the agent facilitates appointment scheduling by
            booking calendar slots with a Google Meet link for both customers
            and sales executives .
          </p>

          {/* Google Login Button */}
          <button
            className="border border-transparent flex items-center gap-2 bg-gray-900 text-white  hover:bg-white  hover:text-gray-900  hover:border-gray-900   px-5 py-2 rounded-lg shadow-md transition duration-300  w-full sm:w-auto font-medium"
            onClick={handleLogin}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              x="0px"
              y="0px"
              width="50"
              height="50"
              viewBox="0 0 48 48"
            >
              <path
                fill="#FFC107"
                d="M43.611,20.083H42V20H24v8h11.303c-1.649,4.657-6.08,8-11.303,8c-6.627,0-12-5.373-12-12c0-6.627,5.373-12,12-12c3.059,0,5.842,1.154,7.961,3.039l5.657-5.657C34.046,6.053,29.268,4,24,4C12.955,4,4,12.955,4,24c0,11.045,8.955,20,20,20c11.045,0,20-8.955,20-20C44,22.659,43.862,21.35,43.611,20.083z"
              ></path>
              <path
                fill="#FF3D00"
                d="M6.306,14.691l6.571,4.819C14.655,15.108,18.961,12,24,12c3.059,0,5.842,1.154,7.961,3.039l5.657-5.657C34.046,6.053,29.268,4,24,4C16.318,4,9.656,8.337,6.306,14.691z"
              ></path>
              <path
                fill="#4CAF50"
                d="M24,44c5.166,0,9.86-1.977,13.409-5.192l-6.19-5.238C29.211,35.091,26.715,36,24,36c-5.202,0-9.619-3.317-11.283-7.946l-6.522,5.025C9.505,39.556,16.227,44,24,44z"
              ></path>
              <path
                fill="#1976D2"
                d="M43.611,20.083H42V20H24v8h11.303c-0.792,2.237-2.231,4.166-4.087,5.571c0.001-0.001,0.002-0.001,0.003-0.002l6.19,5.238C36.971,39.205,44,34,44,24C44,22.659,43.862,21.35,43.611,20.083z"
              ></path>
            </svg>
            Login with Google
          </button>
        </div>

        {/* Right Side - Image */}
        <div className="w-full md:w-1/2 flex justify-center md:justify-end mt-8 md:mt-0">
          <img
            src="https://www.avivaindia.com/sites/default/files/Types-of-Insurance.jpg"
            alt="Insurance"
            width={500}
            height={400}
            className="rounded-lg shadow-lg lg:w-fit"
          />
          <PrivacyPopup />
        </div>
      </div>
    </div>
  );
};

export default HomePage;

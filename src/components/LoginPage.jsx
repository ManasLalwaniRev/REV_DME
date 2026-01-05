
// import React, { useState } from 'react';

// const API_BASE_URL = 'http://localhost:5000/api'; // Your backend API base URL
// //  const API_BASE_URL = 'https://rev-lumina.onrender.com/api';

// const LoginPage = ({ onLoginSuccess }) => { // Renamed prop to onLoginSuccess for consistency
//   const [username, setUsername] = useState('');
//   const [password, setPassword] = useState('');
//   const [error, setError] = useState('');
//   const [loading, setLoading] = useState(false); // New state for loading indicator

//   const handleLogin = async (e) => { // Made function asynchronous
//     e.preventDefault(); // Prevent default form submission
//     setLoading(true); // Set loading to true
//     setError(''); // Clear previous errors

//     try {
//       const response = await fetch(`${API_BASE_URL}/login`, {
//         method: 'POST',
//         headers: {
//           'Content-Type': 'application/json',
//         },
//         body: JSON.stringify({ username, password }),
//       });

//       if (!response.ok) {
//         const errorData = await response.json();
//         throw new Error(errorData.message || 'Login failed');
//       }

//       const data = await response.json();
//       // On successful login, pass user ID, username, and role to App.jsx
//       onLoginSuccess(data.userId, data.username, data.role, data.avatar); 
//     } catch (err) {
//       console.error('Login error:', err);
//       setError(err.message || 'An unexpected error occurred during login.');
//     } finally {
//       setLoading(false); // Set loading to false regardless of success or failure
//     }
//   };

//   return (
//     <div className="flex flex-col items-center justify-center min-h-screen w-full bg-gradient-to-br from-blue-200 via-purple-200 to-pink-200 p-4 sm:p-8">
//       <div className="bg-white p-6 sm:p-10 rounded-3xl shadow-2xl text-center max-w-lg w-full transform transition-all duration-300 ease-in-out scale-95 sm:scale-100"> {/* Changed max-w-md to max-w-lg */}
//         <h1 className="text-4xl sm:text-5xl font-extrabold text-gray-800 mb-8 sm:mb-12 leading-normal"> {/* Changed 'leading-tight' to 'leading-normal' */}
//           <span className="block text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600">
//             Lumina Vendor Portal Login {/* Updated title text */}
//           </span>
//         </h1>
//         <form onSubmit={handleLogin} className="space-y-6"> {/* Changed onClick to onSubmit for form */}
//           <div>
//             <label htmlFor="username" className="sr-only">Username</label>
//             <input
//               type="text"
//               id="username"
//               className="w-full p-4 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-400 transition duration-150 ease-in-out"
//               placeholder="Username"
//               value={username}
//               onChange={(e) => setUsername(e.target.value)}
//               required
//             />
//           </div>
//           <div>
//             <label htmlFor="password" className="sr-only">Password</label>
//             <input
//               type="password"
//               id="password"
//               className="w-full p-4 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-400 transition duration-150 ease-in-out"
//               placeholder="Password"
//               value={password}
//               onChange={(e) => setPassword(e.target.value)}
//               required
//             />
//           </div>
//           {error && <p className="text-red-500 text-sm">{error}</p>}
//           <button
//             type="submit" // Changed type to submit
//             className="w-full bg-blue-600 hover:bg-blue-700 text-white font-extrabold py-4 px-8 rounded-2xl shadow-lg transition duration-300 ease-in-out transform hover:-translate-y-1 hover:scale-105 focus:outline-none focus:ring-4 focus:ring-opacity-75 focus:ring-blue-500"
//             disabled={loading} // Disable button while loading
//           >
//             {loading ? 'Logging in...' : 'Login'}
//           </button>
//         </form>
//       </div>
//     </div>
//   );
// };

// export default LoginPage;


// STABLE 1 starts //

// import React, { useState } from 'react';

// const API_BASE_URL = 'http://localhost:5000/api';

// const LoginPage = ({ onLoginSuccess }) => {
//   const [username, setUsername] = useState('');
//   const [password, setPassword] = useState('');
//   const [error, setError] = useState('');
//   const [loading, setLoading] = useState(false);

//   const handleLogin = async (e) => {
//     e.preventDefault();
//     setLoading(true);
//     setError('');

//     try {
//       const response = await fetch(`${API_BASE_URL}/login`, {
//         method: 'POST',
//         headers: {
//           'Content-Type': 'application/json',
//         },
//         body: JSON.stringify({ username, password }),
//       });

//       if (!response.ok) {
//         const errorData = await response.json();
//         throw new Error(errorData.message || 'Login failed');
//       }

//       const data = await response.json();
//       // Pass all user data, including avatar, to the parent on success
//       onLoginSuccess(data.userId, data.username, data.role, data.avatar); 
//     } catch (err) {
//       console.error('Login error:', err);
//       setError(err.message || 'An unexpected error occurred during login.');
//     } finally {
//       setLoading(false);
//     }
//   };

//   return (
//     <div className="flex flex-col items-center justify-center min-h-screen w-full bg-gradient-to-br from-blue-200 via-purple-200 to-pink-200 p-4 sm:p-8">
//       <div className="bg-white p-6 sm:p-10 rounded-3xl shadow-2xl text-center max-w-lg w-full">
//         <h1 className="text-4xl sm:text-5xl font-extrabold text-gray-800 mb-8 sm:mb-12">
//           <span className="block text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600">
//             Lumina Expense Management 
//           </span>
//         </h1>
//         <form onSubmit={handleLogin} className="space-y-6">
//           <div>
//             <label htmlFor="username" className="sr-only">Username</label>
//             <input
//               type="text"
//               id="username"
//               className="w-full p-4 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-400"
//               placeholder="Username"
//               value={username}
//               onChange={(e) => setUsername(e.target.value)}
//               required
//             />
//           </div>
//           <div>
//             <label htmlFor="password" className="sr-only">Password</label>
//             <input
//               type="password"
//               id="password"
//               className="w-full p-4 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-400"
//               placeholder="Password"
//               value={password}
//               onChange={(e) => setPassword(e.target.value)}
//               required
//             />
//           </div>
//           {error && <p className="text-red-500 text-sm">{error}</p>}
//           <button
//             type="submit"
//             className="w-full bg-blue-600 hover:bg-blue-700 text-white font-extrabold py-4 px-8 rounded-2xl shadow-lg transition duration-300 ease-in-out transform hover:-translate-y-1"
//             disabled={loading}
//           >
//             {loading ? 'Logging in...' : 'Login'}
//           </button>
//         </form>
//       </div>
//     </div>
//   );
// };

// export default LoginPage;


// STABLE 1 ends //

// console.log("VITE_API_BASE_URL VALUE:", import.meta.env.VITE_API_BASE_URL); 
// import React, { useState } from 'react';

// // const API_BASE_URL = 'http://localhost:5000/api';
// const API_BASE_URL = import.meta.env.VITE_API_BASE_URL;

// const LoginPage = ({ onLoginSuccess }) => {
//   const [username, setUsername] = useState('');
//   const [password, setPassword] = useState('');
//   const [error, setError] = useState('');
//   const [loading, setLoading] = useState(false);

//   const handleLogin = async (e) => {
//     e.preventDefault();
//     setLoading(true);
//     setError('');

//     try {
//       // const response = await fetch(`${API_BASE_URL}/login`, {
//          const response = await fetch(`${import.meta.env.VITE_API_BASE_URL}/login`, {
//         method: 'POST',
//         headers: {
//           'Content-Type': 'application/json',
//         },
//         body: JSON.stringify({ username, password }),
//       });

//       if (!response.ok) {
//         const errorData = await response.json();
//         throw new Error(errorData.message || 'Login failed');
//       }

//       const data = await response.json();
//       // This function remains unchanged and passes all data to the parent
//       onLoginSuccess(data.userId, data.username, data.role, data.avatar); 
//     } catch (err) {
//       console.error('Login error:', err);
//       setError(err.message || 'An unexpected error occurred during login.');
//     } finally {
//       setLoading(false);
//     }
//   };

//   return (
//     // --- New Dark Gradient Background ---
//     <div className="flex flex-col items-center justify-center min-h-screen w-full bg-gradient-to-r from-blue-200 via-purple-300 to-purple-200 p-4">
//     {/* // <div className="flex flex-col items-center justify-center min-h-screen w-full bg-gradient-to-br from-blue-400 via-pink-300 to-blue-600 p-4"> */}
//       {/* --- New "Glass" Login Card --- */}
//       <div className="bg-white/10 backdrop-blur-lg p-8 sm:p-10 rounded-2xl shadow-2xl text-center max-w-md w-full border border-white/20">
        
//         {/* --- Logo --- */}
//         <div className="flex justify-center mb-6">
//             <img 
//                 src="/Lumina_logo.png" // Make sure your logo is in the /public folder
//                 alt="Lumina Logo" 
//                 className="h-14"
//             />
//         </div>
        
//         {/* --- Title --- */}
//         <h1 className="text-3xl sm:text-4xl font-bold text-gray-100 mb-8">
//           Expense Management
//         </h1>

//         {/* --- Form (Functionality is unchanged) --- */}
//         <form onSubmit={handleLogin} className="space-y-6">
//           <div>
//             <label htmlFor="username" className="sr-only">Username</label>
//             <input
//               type="text"
//               id="username"
//               className="w-full p-3 bg-gray-700/50 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500"
//               placeholder="Username"
//               value={username}
//               onChange={(e) => setUsername(e.target.value)}
//               required
//             />
//           </div>
//           <div>
//             <label htmlFor="password" className="sr-only">Password</label>
//             <input
//               type="password"
//               id="password"
//               className="w-full p-3 bg-gray-700/50 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500"
//               placeholder="Password"
//               value={password}
//               onChange={(e) => setPassword(e.target.value)}
//               required
//             />
//           </div>
          
//           {error && <p className="text-red-500 text-sm">{error}</p>}
          
//           <button
//             type="submit"
//             className="w-full bg-gradient-to-r from-blue-600 to-sky-500 hover:from-blue-700 hover:to-sky-600 text-white font-bold py-3 px-8 rounded-lg shadow-lg transition-all duration-300 transform hover:-translate-y-1 disabled:opacity-50"
//             disabled={loading}
//           >
//             {loading ? 'Logging in...' : 'Login'}
//           </button>
//         </form>
//       </div>
//     </div>
//   );
// };

// export default LoginPage;



import React, { useState } from 'react';
// Import the mock users defined in Step 1
import { MOCK_USERS } from '../mockData';


const LoginPage = ({ onLoginSuccess }) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);

  const handleLogin = (e) => {
    e.preventDefault();
    setLoading(true);
    setError('');

    // Simulate a brief network delay for the demo feel
    setTimeout(() => {
      // Look for the user in our hardcoded mock data
      const user = MOCK_USERS.find(
        (u) => u.username === username && u.password === password
      );

      if (user) {
        // If found, call the success handler with user details
        onLoginSuccess(user.userId, user.username, user.role, user.avatar);
      } else {
        // If not found, show an error message
        setError('Invalid username or password. Please try again.');
      }
      setLoading(false);
    }, 800); 
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen w-full bg-gradient-to-r from-white-500 via-white-300 to-blue-200 p-4">
      <div className="bg-white/10 backdrop-blur-lg p-8 sm:p-10 rounded-2xl shadow-2xl text-center max-w-md w-full border border-white/20">
        
        <div className="flex justify-center mb-6">
            <img 
                src="/Lumina_logo-removebg-preview.png" 
                alt="Lumina Logo" 
                className="h-18"
            />
        </div>
        
        <h2 className="text-3xl sm:text-4xl font-bold text-gray-600 mb-8">
        MDM Portal
        </h2>

        <form onSubmit={handleLogin} className="space-y-6">
          <div>
            <label htmlFor="username" className="sr-only">Username</label>
            <input
              type="text"
              id="username"
              className="w-full p-3 bg-black-700/50 border border-gray-600 rounded-lg text-black placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              required
            />
          </div>
          <div>
            <label htmlFor="password" className="sr-only">Password</label>
            <input
              type="password"
              id="password"
              className="w-full p-3 bg-black-700/50 border border-gray-600 rounded-lg text-black placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>
          
          {error && <p className="text-red-500 text-sm">{error}</p>}
          
          <button
            type="submit"
            className="w-full bg-gradient-to-r from-blue-600 to-sky-500 hover:from-blue-700 hover:to-sky-600 text-white font-bold py-3 px-8 rounded-lg shadow-lg transition-all duration-300 transform hover:-translate-y-1 disabled:opacity-50"
            disabled={loading}
          >
            {loading ? 'Logging in...' : 'Login'}
          </button>
        </form>
        
        {/* Helper text for the demo */}
        {/* <div className="mt-6 p-3 bg-white/5 rounded text-xs text-gray-300 italic">
          Demo Access: admin / password123
        </div> */}
      </div>
    </div>
  );
};

export default LoginPage;
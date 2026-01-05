// import React from 'react';
// import { Save, Truck } from 'lucide-react';

// const VendorForm = () => {
//   const handleSubmit = (e) => {
//     e.preventDefault();
//     alert("Vendor Setup data saved! (Demo Mode)");
//   };

//   return (
//     <div className="p-4 sm:p-6 bg-gray-50 min-h-screen">
//       <div className="max-w-[95%] mx-auto bg-white shadow-2xl rounded-2xl overflow-hidden border border-gray-200">
        
//         {/* Header Section */}
//         <div className="bg-blue-600 p-6 text-white text-center">
//           <h1 className="text-2xl font-extrabold uppercase tracking-tight">
//             Vendor Setup Form
//           </h1>
//           <p className="text-blue-100 mt-1 text-sm">Supply Chain Management - Revolve LLC Proprietary</p>
//         </div>

//         <form onSubmit={handleSubmit} className="p-8 space-y-10">
          
//           {/* Section A: Vendor Identification */}
//           <section className="space-y-6">
//             <h2 className="text-lg font-bold text-blue-800 border-b-2 border-blue-200 pb-1">A. General Information</h2>
//             <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              
//               <div className="space-y-1">
//                 <label className="text-xs font-bold text-gray-500 uppercase">Vendor ID</label>
//                 <input className="w-full p-2 border border-gray-300 rounded-lg text-sm outline-none focus:ring-1 focus:ring-blue-500" type="text" placeholder="Assign ID..." />
//               </div>

//               <div className="space-y-1">
//                 <label className="text-xs font-bold text-gray-500 uppercase">Vendor Name</label>
//                 <input className="w-full p-2 border border-gray-300 rounded-lg text-sm outline-none focus:ring-1 focus:ring-blue-500" type="text" />
//               </div>

//               <div className="space-y-1">
//                 <label className="text-xs font-bold text-gray-500 uppercase">Long Name</label>
//                 <input className="w-full p-2 border border-gray-300 rounded-lg text-sm outline-none focus:ring-1 focus:ring-blue-500" type="text" />
//               </div>

//               <div className="space-y-1">
//                 <label className="text-xs font-bold text-gray-500 uppercase">Vendor Employee</label>
//                 <input className="w-full p-2 border border-gray-300 rounded-lg text-sm outline-none focus:ring-1 focus:ring-blue-500" type="text" placeholder="Internal contact..." />
//               </div>

//               <div className="space-y-1">
//                 <label className="text-xs font-bold text-gray-500 uppercase">Terms</label>
//                 <input className="w-full p-2 border border-gray-300 rounded-lg text-sm outline-none focus:ring-1 focus:ring-blue-500" type="text" placeholder="e.g., Net 30" />
//               </div>

//               <div className="space-y-1">
//                 <label className="text-xs font-bold text-gray-500 uppercase">Pay When Paid</label>
//                 <select className="w-full p-2 border border-gray-300 rounded-lg text-sm outline-none focus:ring-1 focus:ring-blue-500">
//                   <option>No</option>
//                   <option>Yes</option>
//                 </select>
//               </div>

//             </div>
//           </section>

//           {/* Section B: Tax & 1099 Information */}
//           <section className="space-y-6">
//             <h2 className="text-lg font-bold text-blue-800 border-b-2 border-blue-200 pb-1">B. Tax & 1099 Information</h2>
//             <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              
//               <div className="space-y-1">
//                 <label className="text-xs font-bold text-gray-500 uppercase">Tax ID / EIN</label>
//                 <input className="w-full p-2 border border-gray-300 rounded-lg text-sm outline-none focus:ring-1 focus:ring-blue-500" type="text" />
//               </div>

//               <div className="space-y-1">
//                 <label className="text-xs font-bold text-gray-500 uppercase">1099 Name</label>
//                 <input className="w-full p-2 border border-gray-300 rounded-lg text-sm outline-none focus:ring-1 focus:ring-blue-500" type="text" />
//               </div>

//               <div className="space-y-1">
//                 <label className="text-xs font-bold text-gray-500 uppercase">Print 1099 Form</label>
//                 <select className="w-full p-2 border border-gray-300 rounded-lg text-sm outline-none focus:ring-1 focus:ring-blue-500">
//                   <option>No</option>
//                   <option>Yes</option>
//                 </select>
//               </div>
//             </div>
//           </section>

//           {/* Section C: Contact Information */}
//           <section className="space-y-6">
//             <h2 className="text-lg font-bold text-blue-800 border-b-2 border-blue-200 pb-1">C. Contact Information</h2>
//             <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              
//               <div className="space-y-1 md:col-span-3">
//                 <label className="text-xs font-bold text-gray-500 uppercase">Address</label>
//                 <textarea className="w-full p-2 border border-gray-300 rounded-lg text-sm outline-none focus:ring-1 focus:ring-blue-500" rows="2"></textarea>
//               </div>

//               <div className="space-y-1">
//                 <label className="text-xs font-bold text-gray-500 uppercase">Phone Number</label>
//                 <input className="w-full p-2 border border-gray-300 rounded-lg text-sm outline-none focus:ring-1 focus:ring-blue-500" type="tel" />
//               </div>

//               <div className="space-y-1">
//                 <label className="text-xs font-bold text-gray-500 uppercase">Other Number</label>
//                 <input className="w-full p-2 border border-gray-300 rounded-lg text-sm outline-none focus:ring-1 focus:ring-blue-500" type="tel" />
//               </div>

//               <div className="space-y-1">
//                 <label className="text-xs font-bold text-gray-500 uppercase">Email Address</label>
//                 <input className="w-full p-2 border border-gray-300 rounded-lg text-sm outline-none focus:ring-1 focus:ring-blue-500" type="email" />
//               </div>

//             </div>
//           </section>

//           {/* Section D: Banking Information */}
//           <section className="space-y-6">
//             <h2 className="text-lg font-bold text-blue-800 border-b-2 border-blue-200 pb-1">D. Banking Information</h2>
//             <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              
//               <div className="space-y-1">
//                 <label className="text-xs font-bold text-gray-500 uppercase">Bank ID / Routing</label>
//                 <input className="w-full p-2 border border-gray-300 rounded-lg text-sm outline-none focus:ring-1 focus:ring-blue-500" type="text" />
//               </div>

//               <div className="space-y-1">
//                 <label className="text-xs font-bold text-gray-500 uppercase">Bank Account Number</label>
//                 <input className="w-full p-2 border border-gray-300 rounded-lg text-sm outline-none focus:ring-1 focus:ring-blue-500" type="text" />
//               </div>

//               <div className="space-y-1">
//                 <label className="text-xs font-bold text-gray-500 uppercase">Bank Name</label>
//                 <input className="w-full p-2 border border-gray-300 rounded-lg text-sm outline-none focus:ring-1 focus:ring-blue-500" type="text" />
//               </div>

//               <div className="space-y-1">
//                 <label className="text-xs font-bold text-gray-500 uppercase">ACH Code</label>
//                 <input className="w-full p-2 border border-gray-300 rounded-lg text-sm outline-none focus:ring-1 focus:ring-blue-500" type="text" />
//               </div>

//             </div>
//           </section>

//           {/* Submit Footer */}
//           <div className="flex justify-end gap-4 pt-6 border-t border-gray-100">
//              <button type="button" className="px-6 py-2 border border-gray-300 rounded-xl text-gray-600 font-bold hover:bg-gray-100 transition-all text-sm">
//                Save as Draft
//              </button>
//              <button type="submit" className="flex items-center gap-2 px-8 py-2 bg-blue-600 text-white font-extrabold rounded-xl shadow-lg hover:bg-blue-700 transform transition-all active:scale-95 text-sm">
//                <Truck size={18} />
//                Submit Vendor Setup
//              </button>
//           </div>
//         </form>
//       </div>
//     </div>
//   );
// };

// export default VendorForm;


import React from 'react';
import { Save, Truck, UserCircle, LogOut,Upload } from 'lucide-react';

const VendorForm = ({ 
  userName = 'Admin', 
  userAvatar, 
  handleLogout 
}) => {
    
  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Vendor Setup data saved! (Demo Mode)");
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-black p-4 sm:p-6 lg:p-8 text-gray-100 flex justify-center items-start">
      <div className="bg-white p-6 rounded-xl shadow-2xl w-full max-w-full text-gray-800">
        
        {/* --- HEADER SECTION --- */}
        <div className="flex justify-between items-center mb-8">
          {/* Left: Title */}
          <div className="w-1/3">
            <h1 className="text-3xl font-bold">
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-blue-800 to-blue-600">
                Vendor Setup
              </span>
            </h1>
          </div>

          {/* Center: Logo */}
          <div className="w-1/3 flex justify-center">
            <img 
              src="/Lumina_logo.png" 
              alt="Lumina Logo" 
              className="h-12 opacity-100"
            />
          </div>

          {/* Right: User Profile & Logout */}
          <div className="w-1/3 flex justify-end items-center gap-4">
            <div className="flex items-center gap-3 bg-gray-100 p-3 rounded-lg">
              {userAvatar ? (
                <img src={userAvatar} alt="User Avatar" className="w-10 h-10 rounded-full object-cover" />
              ) : (
                <UserCircle size={32} className="text-gray-500" />
              )}
              <span className="text-lg font-medium text-gray-700 hidden sm:block">
                Welcome, {userName}
              </span>
            </div>
            <button 
              onClick={handleLogout} 
              className="p-3 bg-red-100 hover:bg-red-200 rounded-full text-red-600 transition-colors"
              title="Logout"
            >
              <LogOut size={20} />
            </button>
          </div>
        </div>

        {/* --- FORM SECTION --- */}
        <form onSubmit={handleSubmit} className="space-y-10">
          
          {/* Section A: Vendor Identification */}
          <section className="space-y-6">
            <h2 className="text-lg font-bold text-blue-800 border-b-2 border-blue-200 pb-1">A. General Information</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              
              <div className="space-y-1">
                <label className="text-xs font-bold text-gray-500 uppercase">Vendor ID</label>
                <input className="w-full p-2 border border-gray-300 rounded-lg text-sm outline-none focus:ring-1 focus:ring-blue-500" type="text" placeholder="Assign ID..." />
              </div>

              <div className="space-y-1">
                <label className="text-xs font-bold text-gray-500 uppercase"> Vendor Name <span className="text-red-500">*</span> </label>
                <input className="w-full p-2 border border-gray-300 rounded-lg text-sm outline-none focus:ring-1 focus:ring-blue-500" type="text" />
              </div>

              <div className="space-y-1">
                <label className="text-xs font-bold text-gray-500 uppercase">Long Name</label>
                <input className="w-full p-2 border border-gray-300 rounded-lg text-sm outline-none focus:ring-1 focus:ring-blue-500" type="text" />
              </div>

              <div className="space-y-1">
                <label className="text-xs font-bold text-gray-500 uppercase">Vendor Employee</label>
                <input className="w-full p-2 border border-gray-300 rounded-lg text-sm outline-none focus:ring-1 focus:ring-blue-500" type="text" placeholder="Internal contact..." />
              </div>

              <div className="space-y-1">
                <label className="text-xs font-bold text-gray-500 uppercase">Terms</label>
                <input className="w-full p-2 border border-gray-300 rounded-lg text-sm outline-none focus:ring-1 focus:ring-blue-500" type="text" placeholder="e.g., Net 30" />
              </div>

              <div className="space-y-1">
                <label className="text-xs font-bold text-gray-500 uppercase">Pay When Paid</label>
                <select className="w-full p-2 border border-gray-300 rounded-lg text-sm outline-none focus:ring-1 focus:ring-blue-500 bg-white">
                  <option>No</option>
                  <option>Yes</option>
                </select>
              </div>

            </div>
          </section>

          {/* Section B: Tax & 1099 Information */}
          <section className="space-y-6">
            <h2 className="text-lg font-bold text-blue-800 border-b-2 border-blue-200 pb-1">B. Tax & 1099 Information</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              
              <div className="space-y-1">
                <label className="text-xs font-bold text-gray-500 uppercase">Tax ID / EIN<span className="text-red-500">*</span></label>
                <input className="w-full p-2 border border-gray-300 rounded-lg text-sm outline-none focus:ring-1 focus:ring-blue-500" type="text" />
              </div>

              <div className="space-y-1">
                <label className="text-xs font-bold text-gray-500 uppercase">1099 Name<span className="text-red-500">*</span></label>
                <input className="w-full p-2 border border-gray-300 rounded-lg text-sm outline-none focus:ring-1 focus:ring-blue-500" type="text" />
              </div>

              <div className="space-y-1 md:col-span-2">
                <label className="text-xs font-bold text-gray-500 uppercase">Print 1099 Form</label>
                <select className="w-full p-2 border border-gray-300 rounded-lg text-sm outline-none focus:ring-1 focus:ring-blue-500 bg-white">
                  <option>No</option>
                  <option>Yes</option>
                </select>
              </div>
            </div>
          </section>

          {/* Section C: Contact Information */}
          <section className="space-y-6">
            <h2 className="text-lg font-bold text-blue-800 border-b-2 border-blue-200 pb-1">C. Contact Information</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              
              <div className="space-y-1 md:col-span-3">
                <label className="text-xs font-bold text-gray-500 uppercase">Address</label>
                <textarea className="w-full p-2 border border-gray-300 rounded-lg text-sm outline-none focus:ring-1 focus:ring-blue-500" rows="2"></textarea>
              </div>

              <div className="space-y-1">
                <label className="text-xs font-bold text-gray-500 uppercase">Phone Number</label>
                <input className="w-full p-2 border border-gray-300 rounded-lg text-sm outline-none focus:ring-1 focus:ring-blue-500" type="tel" />
              </div>

              <div className="space-y-1">
                <label className="text-xs font-bold text-gray-500 uppercase">Other Number</label>
                <input className="w-full p-2 border border-gray-300 rounded-lg text-sm outline-none focus:ring-1 focus:ring-blue-500" type="tel" />
              </div>

              <div className="space-y-1">
                <label className="text-xs font-bold text-gray-500 uppercase">Email Address</label>
                <input className="w-full p-2 border border-gray-300 rounded-lg text-sm outline-none focus:ring-1 focus:ring-blue-500" type="email" />
              </div>

            </div>
          </section>

          {/* Section D: Banking Information */}
          <section className="space-y-6">
            <h2 className="text-lg font-bold text-blue-800 border-b-2 border-blue-200 pb-1">D. Banking Information</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              
              <div className="space-y-1">
                <label className="text-xs font-bold text-gray-500 uppercase">Bank ID / Routing</label>
                <input className="w-full p-2 border border-gray-300 rounded-lg text-sm outline-none focus:ring-1 focus:ring-blue-500" type="text" />
              </div>

              <div className="space-y-1">
                <label className="text-xs font-bold text-gray-500 uppercase">Bank Account Number</label>
                <input className="w-full p-2 border border-gray-300 rounded-lg text-sm outline-none focus:ring-1 focus:ring-blue-500" type="text" />
              </div>

              <div className="space-y-1">
                <label className="text-xs font-bold text-gray-500 uppercase">Bank Name</label>
                <input className="w-full p-2 border border-gray-300 rounded-lg text-sm outline-none focus:ring-1 focus:ring-blue-500" type="text" />
              </div>

              <div className="space-y-1">
                <label className="text-xs font-bold text-gray-500 uppercase">ACH Code</label>
                <input className="w-full p-2 border border-gray-300 rounded-lg text-sm outline-none focus:ring-1 focus:ring-blue-500" type="text" />
              </div>

            </div>
          </section>

          {/* --- FOOTER BUTTONS --- */}
          <div className="flex justify-end gap-4 pt-6 border-t border-gray-100">
            
          <button 
                type="submit" 
                className="flex items-center gap-2 px-8 py-2.5 bg-gradient-to-r from-blue-500 to-blue-600 hover:from-blue-600 hover:to-blue-700 text-white font-extrabold rounded-lg shadow-md transform transition-all active:scale-95 text-sm"
              >
                <Upload size={18} />
  Attach for Bank Information              
  </button>
            <button 
                type="submit" 
                className="flex items-center gap-2 px-8 py-2.5 bg-gradient-to-r from-blue-500 to-blue-600 hover:from-blue-600 hover:to-blue-700 text-white font-extrabold rounded-lg shadow-md transform transition-all active:scale-95 text-sm"
              >
                <Upload size={18} />
  Add W-9              
  </button>
              <button 
                type="button" 
                className="px-6 py-2.5 border border-gray-300 rounded-lg text-gray-600 font-bold hover:bg-gray-100 transition-all text-sm shadow-sm"
              >
                Save as Draft
              </button>
              <button 
                type="submit" 
                className="flex items-center gap-2 px-8 py-2.5 bg-gradient-to-r from-blue-500 to-blue-600 hover:from-blue-600 hover:to-blue-700 text-white font-extrabold rounded-lg shadow-md transform transition-all active:scale-95 text-sm"
              >
                <Truck size={18} />
                Submit Vendor Setup
              </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default VendorForm;
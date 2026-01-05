// import React from 'react';
// import { Save, UserPlus } from 'lucide-react';

// const EmployeeOnboardingForm = () => {
//   const handleSubmit = (e) => {
//     e.preventDefault();
//     alert("Employee Onboarding data saved! (Demo Mode)");
//   };

//   return (
//     <div className="p-4 sm:p-6 bg-gray-50 min-h-screen">
//       <div className="max-w-[95%] mx-auto bg-white shadow-2xl rounded-2xl overflow-hidden border border-gray-200">
        
//         {/* Header Section */}
//         <div className="bg-blue-600 p-6 text-white text-center">
//           <h1 className="text-2xl font-extrabold uppercase tracking-tight">
//             Employee Onboarding Form
//           </h1>
//           <p className="text-blue-100 mt-1 text-sm">Internal Human Resources - Revolve LLC Proprietary</p>
//         </div>

//         <form onSubmit={handleSubmit} className="p-8 space-y-10">
          
//           {/* Section A: Employment Status & Identification */}
//           <section className="space-y-6">
//             <h2 className="text-lg font-bold text-blue-800 border-b-2 border-blue-200 pb-1">A. Employment Information</h2>
//             <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              
//               <div className="space-y-1">
//                 <label className="text-xs font-bold text-gray-500 uppercase">New or Existing Employee?</label>
//                 <select className="w-full p-2 border border-gray-300 rounded-lg text-sm outline-none focus:ring-1 focus:ring-blue-500">
//                   <option>Select...</option>
//                   <option>New Employee</option>
//                   <option>Existing Employee</option>
//                 </select>
//               </div>

//               <div className="space-y-1">
//                 <label className="text-xs font-bold text-gray-500 uppercase">Employee's Full Name</label>
//                 <input className="w-full p-2 border border-gray-300 rounded-lg text-sm outline-none focus:ring-1 focus:ring-blue-500" type="text" placeholder="First Last" />
//               </div>

//               <div className="space-y-1">
//                 <label className="text-xs font-bold text-gray-500 uppercase">Costpoint Employee ID</label>
//                 <input className="w-full p-2 border border-gray-300 rounded-lg text-sm outline-none focus:ring-1 focus:ring-blue-500" type="text" />
//               </div>

//               <div className="space-y-1">
//                 <label className="text-xs font-bold text-gray-500 uppercase">New Hire Date</label>
//                 <input className="w-full p-2 border border-gray-300 rounded-lg text-sm outline-none focus:ring-1 focus:ring-blue-500" type="date" />
//               </div>

//               <div className="space-y-1">
//                 <label className="text-xs font-bold text-gray-500 uppercase">Supervisor Name & ID</label>
//                 <input className="w-full p-2 border border-gray-300 rounded-lg text-sm outline-none focus:ring-1 focus:ring-blue-500" type="text" placeholder="Name (ID#)" />
//               </div>

//               <div className="space-y-1">
//                 <label className="text-xs font-bold text-gray-500 uppercase">Job Title</label>
//                 <input className="w-full p-2 border border-gray-300 rounded-lg text-sm outline-none focus:ring-1 focus:ring-blue-500" type="text" />
//               </div>

//             </div>
//           </section>

//           {/* Section B: Classification & Compensation */}
//           <section className="space-y-6">
//             <h2 className="text-lg font-bold text-blue-800 border-b-2 border-blue-200 pb-1">B. Compensation & Classification</h2>
//             <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              
//               <div className="space-y-1">
//                 <label className="text-xs font-bold text-gray-500 uppercase">Employment Type</label>
//                 <select className="w-full p-2 border border-gray-300 rounded-lg text-sm outline-none focus:ring-1 focus:ring-blue-500">
//                   <option>Regular</option>
//                   <option>Temporary</option>
//                   <option>Part-time</option>
//                 </select>
//               </div>

//               <div className="space-y-1">
//                 <label className="text-xs font-bold text-gray-500 uppercase">Pay Basis</label>
//                 <select className="w-full p-2 border border-gray-300 rounded-lg text-sm outline-none focus:ring-1 focus:ring-blue-500">
//                   <option>Salaried</option>
//                   <option>Hourly</option>
//                 </select>
//               </div>

//               <div className="space-y-1">
//                 <label className="text-xs font-bold text-gray-500 uppercase">FLSA Classification</label>
//                 <select className="w-full p-2 border border-gray-300 rounded-lg text-sm outline-none focus:ring-1 focus:ring-blue-500">
//                   <option>Exempt</option>
//                   <option>Non-Exempt</option>
//                 </select>
//               </div>

//               <div className="space-y-1">
//                 <label className="text-xs font-bold text-gray-500 uppercase">Salary / Hourly Rate ($)</label>
//                 <input className="w-full p-2 border border-gray-300 rounded-lg text-sm outline-none focus:ring-1 focus:ring-blue-500" type="text" placeholder="0.00" />
//               </div>

//               <div className="space-y-1 lg:col-span-2">
//                 <label className="text-xs font-bold text-gray-500 uppercase">Leave / Benefits Plan</label>
//                 <input className="w-full p-2 border border-gray-300 rounded-lg text-sm outline-none focus:ring-1 focus:ring-blue-500" type="text" />
//               </div>
//             </div>
//           </section>

//           {/* Section C: Personal Information */}
//           <section className="space-y-6">
//             <h2 className="text-lg font-bold text-blue-800 border-b-2 border-blue-200 pb-1">C. Personal Details</h2>
//             <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              
//               <div className="space-y-1">
//                 <label className="text-xs font-bold text-gray-500 uppercase">Gender</label>
//                 <select className="w-full p-2 border border-gray-300 rounded-lg text-sm outline-none focus:ring-1 focus:ring-blue-500">
//                   <option>Select...</option>
//                   <option>Male</option>
//                   <option>Female</option>
//                   <option>Other</option>
//                   <option>Prefer not to say</option>
//                 </select>
//               </div>

//               <div className="space-y-1">
//                 <label className="text-xs font-bold text-gray-500 uppercase">Date of Birth</label>
//                 <input className="w-full p-2 border border-gray-300 rounded-lg text-sm outline-none focus:ring-1 focus:ring-blue-500" type="date" />
//               </div>

//               <div className="space-y-1">
//                 <label className="text-xs font-bold text-gray-500 uppercase">Identifies as Disabled/Blind?</label>
//                 <select className="w-full p-2 border border-gray-300 rounded-lg text-sm outline-none focus:ring-1 focus:ring-blue-500">
//                   <option>No</option>
//                   <option>Yes</option>
//                 </select>
//               </div>

//               <div className="space-y-1 md:col-span-2">
//                 <label className="text-xs font-bold text-gray-500 uppercase">Mailing Address</label>
//                 <input className="w-full p-2 border border-gray-300 rounded-lg text-sm outline-none focus:ring-1 focus:ring-blue-500" type="text" />
//               </div>

//               <div className="space-y-1">
//                 <label className="text-xs font-bold text-gray-500 uppercase">Email Address</label>
//                 <input className="w-full p-2 border border-gray-300 rounded-lg text-sm outline-none focus:ring-1 focus:ring-blue-500" type="email" />
//               </div>

//               <div className="space-y-1 md:col-span-3">
//                 <label className="text-xs font-bold text-gray-500 uppercase">Emergency Contacts (Full Name, Phone, Relationship)</label>
//                 <textarea className="w-full p-2 border border-gray-300 rounded-lg text-sm outline-none focus:ring-1 focus:ring-blue-500" rows="2" placeholder="List up to 2 contacts..."></textarea>
//               </div>

//             </div>
//           </section>

//           {/* Section D: Project & Location */}
//           <section className="space-y-6">
//             <h2 className="text-lg font-bold text-blue-800 border-b-2 border-blue-200 pb-1">D. Project Assignment</h2>
//             <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
//               <div className="space-y-1">
//                 <label className="text-xs font-bold text-gray-500 uppercase">Charging Project</label>
//                 <input className="w-full p-2 border border-gray-300 rounded-lg text-sm outline-none focus:ring-1 focus:ring-blue-500" type="text" />
//               </div>
//               <div className="space-y-1">
//                 <label className="text-xs font-bold text-gray-500 uppercase">Labor Location</label>
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
//                <UserPlus size={18} />
//                Complete Onboarding
//              </button>
//           </div>
//         </form>
//       </div>
//     </div>
//   );
// };

// export default EmployeeOnboardingForm;


import React from 'react';
import { UserPlus, LogOut, UserCircle, Briefcase, User, MapPin, DollarSign } from 'lucide-react';

const EmployeeOnboardingForm = ({ userName = 'Admin', userAvatar, handleLogout }) => {
  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Employee Onboarding data saved!");
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-black p-2 sm:p-4 text-gray-100 flex justify-center items-start">
      
      {/* Main Container - Widened to 98% for maximum space */}
      <div className="bg-white rounded-xl shadow-2xl w-full max-w-[98%] text-gray-800 overflow-hidden">
        
        {/* --- STICKY Header Section --- */}
        <div className="sticky top-0 z-50 bg-white/95 backdrop-blur-sm px-8 py-6 border-b border-gray-100 flex justify-between items-center shadow-sm">
          <div className="w-1/3">
            <h1 className="text-3xl font-extrabold text-blue-900 tracking-tight ">
              Employee Onboarding
            </h1>
          </div>
          
          <div className="w-1/3 flex justify-center">
            <img src="/Lumina_logo.png" alt="REVOLVE" className="h-12 object-contain" />
          </div>

          <div className="w-1/3 flex justify-end items-center gap-4">
            <div className="flex items-center gap-3 bg-gray-50 p-2 px-4 rounded-lg border border-gray-200 shadow-sm">
              {userAvatar ? <img src={userAvatar} className="w-10 h-10 rounded-full" /> : <UserCircle size={28} className="text-gray-400" />}
              <span className="text-md font-semibold text-gray-700 hidden sm:block">Welcome, {userName}</span>
            </div>
            <button onClick={handleLogout} className="p-3 bg-red-50 hover:bg-red-100 rounded-full text-red-600 transition-colors shadow-sm">
              <LogOut size={20} />
            </button>
          </div>
        </div>

        {/* Scrollable Form Content */}
        <form onSubmit={handleSubmit} className="p-8 space-y-12">
          
          {/* Section A: Employment Information */}
          <section>
            <div className="flex items-center gap-2 mb-6">
              <div className="bg-blue-900 p-1.5 rounded-md text-white">
                <Briefcase size={18} />
              </div>
              <h2 className="text-xl font-bold text-gray-800 uppercase tracking-tight">A. Employment Information</h2>
            </div>
            
            {/* Grid widened to 4 columns on large screens to use the extra space */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 bg-gray-50 p-6 rounded-xl border border-gray-100">
              <div className="flex flex-col gap-1.5">
                <label className="text-xs font-black text-gray-400 uppercase tracking-widest">Status</label>
                <select className="w-full p-2.5 bg-white border border-gray-200 rounded-lg text-sm focus:ring-2 focus:ring-blue-600 outline-none shadow-sm transition-all">
                  <option>Select...</option>
                  <option>New Employee</option>
                  <option>Existing Employee</option>
                </select>
              </div>

              <div className="flex flex-col gap-1.5">
                <label className="text-xs font-black text-gray-400 uppercase tracking-widest">Full Name</label>
                <input className="w-full p-2.5 bg-white border border-gray-200 rounded-lg text-sm focus:ring-2 focus:ring-blue-600 outline-none shadow-sm" type="text" placeholder="First Last" />
              </div>

              <div className="flex flex-col gap-1.5">
                <label className="text-xs font-black text-gray-400 uppercase tracking-widest">Costpoint ID</label>
                <input className="w-full p-2.5 bg-white border border-gray-200 rounded-lg text-sm focus:ring-2 focus:ring-blue-600 outline-none shadow-sm" type="text" />
              </div>

              <div className="flex flex-col gap-1.5">
                <label className="text-xs font-black text-gray-400 uppercase tracking-widest">New Hire Date</label>
                <input className="w-full p-2.5 bg-white border border-gray-200 rounded-lg text-sm focus:ring-2 focus:ring-blue-600 outline-none shadow-sm" type="date" />
              </div>

              <div className="flex flex-col gap-1.5">
                <label className="text-xs font-black text-gray-400 uppercase tracking-widest">Supervisor Name & ID</label>
                <input className="w-full p-2.5 bg-white border border-gray-200 rounded-lg text-sm focus:ring-2 focus:ring-blue-600 outline-none shadow-sm" type="text" placeholder="Name (ID#)" />
              </div>

              <div className="flex flex-col gap-1.5">
                <label className="text-xs font-black text-gray-400 uppercase tracking-widest">Job Title</label>
                <input className="w-full p-2.5 bg-white border border-gray-200 rounded-lg text-sm focus:ring-2 focus:ring-blue-600 outline-none shadow-sm" type="text" />
              </div>

              <div className="flex flex-col gap-1.5">
                <label className="text-xs font-black text-gray-400 uppercase tracking-widest">Effective Date</label>
                <input className="w-full p-2.5 bg-white border border-gray-200 rounded-lg text-sm focus:ring-2 focus:ring-blue-600 outline-none shadow-sm" type="date" />
              </div>

            </div>
          </section>

          {/* Section B: Compensation & Classification */}
          <section>
            <div className="flex items-center gap-2 mb-6">
              <div className="bg-blue-900 p-1.5 rounded-md text-white">
                <DollarSign size={18} />
              </div>
              <h2 className="text-xl font-bold text-gray-800 uppercase tracking-tight">B. Compensation & Classification</h2>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 xl:grid-cols-5 gap-6 bg-gray-50 p-6 rounded-xl border border-gray-100">
              <div className="flex flex-col gap-1.5">
                <label className="text-xs font-black text-gray-400 uppercase tracking-widest">Employment Type</label>
                <select className="w-full p-2.5 bg-white border border-gray-200 rounded-lg text-sm outline-none focus:ring-2 focus:ring-blue-600 shadow-sm">
                  <option>Regular</option>
                  <option>Temporary</option>
                  <option>Part-time</option>
                </select>
              </div>

              <div className="flex flex-col gap-1.5">
                <label className="text-xs font-black text-gray-400 uppercase tracking-widest">Pay Basis</label>
                <select className="w-full p-2.5 bg-white border border-gray-200 rounded-lg text-sm outline-none focus:ring-2 focus:ring-blue-600 shadow-sm">
                  <option>Salaried</option>
                  <option>Hourly</option>
                </select>
              </div>

              <div className="flex flex-col gap-1.5">
                <label className="text-xs font-black text-gray-400 uppercase tracking-widest">FLSA</label>
                <select className="w-full p-2.5 bg-white border border-gray-200 rounded-lg text-sm outline-none focus:ring-2 focus:ring-blue-600 shadow-sm">
                  <option>Exempt</option>
                  <option>Non-Exempt</option>
                </select>
              </div>

              <div className="flex flex-col gap-1.5">
                <label className="text-xs font-black text-gray-400 uppercase tracking-widest">Rate ($)</label>
                <input className="w-full p-2.5 bg-white border border-gray-200 rounded-lg text-sm outline-none focus:ring-2 focus:ring-blue-600 shadow-sm" type="text" placeholder="0.00" />
              </div>

              <div className="flex flex-col gap-1.5 xl:col-span-1">
                <label className="text-xs font-black text-gray-400 uppercase tracking-widest">Benefits Plan</label>
                <input className="w-full p-2.5 bg-white border border-gray-200 rounded-lg text-sm outline-none focus:ring-2 focus:ring-blue-600 shadow-sm" type="text" />
              </div>
            </div>
          </section>

          {/* Section C: Personal Details */}
          <section>
            <div className="flex items-center gap-2 mb-6">
              <div className="bg-blue-900 p-1.5 rounded-md text-white">
                <User size={18} />
              </div>
              <h2 className="text-xl font-bold text-gray-800 uppercase tracking-tight">C. Personal Details</h2>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 xl:grid-cols-4 gap-6 bg-gray-50 p-6 rounded-xl border border-gray-100">
              <div className="flex flex-col gap-1.5">
                <label className="text-xs font-black text-gray-400 uppercase tracking-widest">Gender</label>
                <select className="w-full p-2.5 bg-white border border-gray-200 rounded-lg text-sm focus:ring-2 focus:ring-blue-600 outline-none shadow-sm">
                  <option>Select...</option>
                  <option>Male</option>
                  <option>Female</option>
                  <option>Other</option>
                  <option>Prefer not to say</option>
                </select>
              </div>

              <div className="flex flex-col gap-1.5">
                <label className="text-xs font-black text-gray-400 uppercase tracking-widest">DOB</label>
                <input className="w-full p-2.5 bg-white border border-gray-200 rounded-lg text-sm focus:ring-2 focus:ring-blue-600 outline-none shadow-sm" type="date" />
              </div>

              <div className="flex flex-col gap-1.5">
                <label className="text-xs font-black text-gray-400 uppercase tracking-widest">Disabled/Blind?</label>
                <select className="w-full p-2.5 bg-white border border-gray-200 rounded-lg text-sm focus:ring-2 focus:ring-blue-600 outline-none shadow-sm">
                  <option>No</option>
                  <option>Yes</option>
                </select>
              </div>

              <div className="flex flex-col gap-1.5">
                <label className="text-xs font-black text-gray-400 uppercase tracking-widest">Email Address</label>
                <input className="w-full p-2.5 bg-white border border-gray-200 rounded-lg text-sm focus:ring-2 focus:ring-blue-600 outline-none shadow-sm" type="email" />
              </div>

              <div className="flex flex-col gap-1.5 md:col-span-2">
                <label className="text-xs font-black text-gray-400 uppercase tracking-widest">Mailing Address</label>
                <input className="w-full p-2.5 bg-white border border-gray-200 rounded-lg text-sm focus:ring-2 focus:ring-blue-600 outline-none shadow-sm" type="text" />
              </div>

              <div className="flex flex-col gap-1.5 md:col-span-2">
                <label className="text-xs font-black text-gray-400 uppercase tracking-widest">Emergency Contacts</label>
                <textarea className="w-full p-2.5 bg-white border border-gray-200 rounded-lg text-sm focus:ring-2 focus:ring-blue-600 outline-none shadow-sm" rows="1" placeholder="Name, Phone, Relationship..."></textarea>
              </div>
            </div>
          </section>

          {/* Section D: Project Assignment */}
          <section>
            <div className="flex items-center gap-2 mb-6">
              <div className="bg-blue-900 p-1.5 rounded-md text-white">
                <MapPin size={18} />
              </div>
              <h2 className="text-xl font-bold text-gray-800 uppercase tracking-tight">D. Charge Assignment</h2>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 bg-gray-50 p-6 rounded-xl border border-gray-100">
              <div className="flex flex-col gap-1.5">
                <label className="text-xs font-black text-gray-400 uppercase tracking-widest">Charging Project</label>
                <input className="w-full p-2.5 bg-white border border-gray-200 rounded-lg text-sm focus:ring-2 focus:ring-blue-600 outline-none shadow-sm" type="text" />
              </div>
              <div className="flex flex-col gap-1.5">
                <label className="text-xs font-black text-gray-400 uppercase tracking-widest">Labor Location</label>
                <input className="w-full p-2.5 bg-white border border-gray-200 rounded-lg text-sm focus:ring-2 focus:ring-blue-600 outline-none shadow-sm" type="text" />
              </div>


              <div className="flex flex-col gap-1.5">
                <label className="text-xs font-black text-gray-400 uppercase tracking-widest">PLC Code</label>
                <input className="w-full p-2.5 bg-white border border-gray-200 rounded-lg text-sm focus:ring-2 focus:ring-blue-600 outline-none shadow-sm" type="text" />
              </div>

                <div className="flex flex-col gap-1.5">
                <label className="text-xs font-black text-gray-400 uppercase tracking-widest">Home Organization</label>
                <input className="w-full p-2.5 bg-white border border-gray-200 rounded-lg text-sm focus:ring-2 focus:ring-blue-600 outline-none shadow-sm" type="text" />
              </div>


            </div>
          </section>

          {/* --- Submit Footer --- */}
          <div className="pt-6 border-t border-gray-100 flex justify-start gap-4">
             <button type="submit" className="flex items-center gap-2 bg-gradient-to-r from-blue-800 to-blue-900 text-white font-black py-3.5 px-10 rounded-xl shadow-xl hover:from-blue-900 hover:to-black transition-all transform hover:-translate-y-1 active:scale-95 uppercase tracking-widest text-sm">
               <UserPlus size={20} />
               Complete Onboarding
             </button>
             <button type="button" className="px-10 py-3.5 border-2 border-gray-200 rounded-xl text-gray-400 font-black hover:bg-gray-50 transition-all uppercase tracking-widest text-sm">
               Save Draft
             </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default EmployeeOnboardingForm;
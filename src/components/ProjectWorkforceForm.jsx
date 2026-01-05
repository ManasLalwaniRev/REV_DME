// import React from 'react';
// import { Save, Plus, Trash2 } from 'lucide-react';

// const ProjectWorkforceForm = () => {
//   const handleSubmit = (e) => {
//     e.preventDefault();
//     alert("Project & Workforce data saved locally! (Demo Mode)");
//   };

//   return (
//     <div className="p-4 sm:p-6 bg-gray-50 min-h-screen">
//       <div className="max-w-[95%] mx-auto bg-white shadow-2xl rounded-2xl overflow-hidden border border-gray-200">
        
//         {/* Header Section */}
//         <div className="bg-blue-600 p-6 text-white">
//           <h1 className="text-2xl font-extrabold uppercase tracking-tight text-center">
//             Project & Workforce Management
//           </h1>
//           <p className="text-center text-blue-100 mt-1 text-sm">Internal Use Only - Revolve LLC Proprietary</p>
//         </div>

//         <form onSubmit={handleSubmit} className="p-8 space-y-10">
          
//           {/* Section 1: Project Details (Your 11 Specific Fields) */}
//           <section className="space-y-6">
//             <h2 className="text-lg font-bold text-blue-800 border-b-2 border-blue-200 pb-1">A. Project Details</h2>
//             <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              
//               <div className="space-y-1">
//                 <label className="text-xs font-bold text-gray-500 uppercase">Is this Prime or Sub Contract?</label>
//                 <select className="w-full p-2 border border-gray-300 rounded-lg text-sm focus:ring-1 focus:ring-blue-500 outline-none">
//                   <option>Select Option...</option>
//                   <option>Prime</option>
//                   <option>Sub Contract</option>
//                 </select>
//               </div>

//               <div className="space-y-1">
//                 <label className="text-xs font-bold text-gray-500 uppercase">Who is the Project Manager?</label>
//                 <input className="w-full p-2 border border-gray-300 rounded-lg text-sm focus:ring-1 focus:ring-blue-500 outline-none" type="text" placeholder="Enter name..." />
//               </div>

//               <div className="space-y-1">
//                 <label className="text-xs font-bold text-gray-500 uppercase">Effective Date of the Project</label>
//                 <input className="w-full p-2 border border-gray-300 rounded-lg text-sm focus:ring-1 focus:ring-blue-500 outline-none" type="date" />
//               </div>

//               <div className="space-y-1 lg:col-span-2">
//                 <label className="text-xs font-bold text-gray-500 uppercase">Contract Numbers (Prime, Sub, PO, TO)</label>
//                 <input className="w-full p-2 border border-gray-300 rounded-lg text-sm focus:ring-1 focus:ring-blue-500 outline-none" type="text" placeholder="e.g. Prime #123, PO #456..." />
//               </div>

//               <div className="space-y-1">
//                 <label className="text-xs font-bold text-gray-500 uppercase">Is this an 8(a) Contract?</label>
//                 <select className="w-full p-2 border border-gray-300 rounded-lg text-sm focus:ring-1 focus:ring-blue-500 outline-none">
//                   <option>No</option>
//                   <option>Yes</option>
//                 </select>
//               </div>

//               <div className="space-y-1">
//                 <label className="text-xs font-bold text-gray-500 uppercase">Project Type</label>
//                 <input className="w-full p-2 border border-gray-300 rounded-lg text-sm focus:ring-1 focus:ring-blue-500 outline-none" type="text" placeholder="e.g. T&M, FFP..." />
//               </div>

//               <div className="space-y-1">
//                 <label className="text-xs font-bold text-gray-500 uppercase">Costpoint Org for Project</label>
//                 <input className="w-full p-2 border border-gray-300 rounded-lg text-sm focus:ring-1 focus:ring-blue-500 outline-none" type="text" />
//               </div>

//               <div className="space-y-1">
//                 <label className="text-xs font-bold text-gray-500 uppercase">Period of Performance</label>
//                 <div className="flex gap-2">
//                   <input className="w-1/2 p-2 border border-gray-300 rounded-lg text-xs" type="date" />
//                   <input className="w-1/2 p-2 border border-gray-300 rounded-lg text-xs" type="date" />
//                 </div>
//               </div>

//               <div className="space-y-1">
//                 <label className="text-xs font-bold text-gray-500 uppercase">Modification Number</label>
//                 <input className="w-full p-2 border border-gray-300 rounded-lg text-sm focus:ring-1 focus:ring-blue-500 outline-none" type="text" />
//               </div>

//               <div className="space-y-1 lg:col-span-2">
//                 <label className="text-xs font-bold text-gray-500 uppercase">Purpose of the MOD</label>
//                 <input className="w-full p-2 border border-gray-300 rounded-lg text-sm focus:ring-1 focus:ring-blue-500 outline-none" type="text" />
//               </div>

//               <div className="space-y-1 lg:col-span-3">
//                 <label className="text-xs font-bold text-gray-500 uppercase">Are there multiple CLINS? (If yes, list numbers)</label>
//                 <textarea className="w-full p-2 border border-gray-300 rounded-lg text-sm focus:ring-1 focus:ring-blue-500 outline-none" rows="2" placeholder="List all CLIN numbers here..."></textarea>
//               </div>

//             </div>
//           </section>

//           {/* Section 2: Workforce Information (Updated Columns) */}
//           <section className="space-y-6">
//             <div className="flex justify-between items-center border-b-2 border-blue-200 pb-1">
//               <h2 className="text-lg font-bold text-blue-800">B. Workforce Information</h2>
//               <button type="button" className="text-blue-700 px-3 py-1 rounded-md hover:bg-blue-100 flex items-center gap-2 text-xs font-bold transition-colors">
//                 <Plus size={14} /> Add Resource
//               </button>
//             </div>
            
//             <div className="overflow-x-auto border border-gray-200 rounded-xl shadow-inner">
//               <table className="min-w-full divide-y divide-gray-200 text-sm">
//                 <thead className="bg-gray-50">
//                   <tr>
//                     <th className="px-4 py-3 text-left font-bold text-gray-600 uppercase text-xs">Employee / Vendor Employee</th>
//                     <th className="px-4 py-3 text-left font-bold text-gray-600 uppercase text-xs">Labor Category (PLC)</th>
//                     <th className="px-4 py-3 text-left font-bold text-gray-600 uppercase text-xs">Project / CLIN Description</th>
//                     <th className="px-4 py-3 text-left font-bold text-gray-600 uppercase text-xs">Billing Rate ($)</th>
//                     <th className="px-4 py-3 text-left font-bold text-gray-600 uppercase text-xs">PoP (Start & End Date)</th>
//                     <th className="px-4 py-3 text-center font-bold text-gray-600 uppercase text-xs">Action</th>
//                   </tr>
//                 </thead>
//                 <tbody className="divide-y divide-gray-200 bg-white">
//                   {[1, 2, 3].map(row => (
//                     <tr key={row} className="hover:bg-gray-50 transition-colors">
//                       <td className="p-2"><input className="w-full p-1 border border-transparent hover:border-gray-200 rounded text-sm focus:ring-1 focus:ring-blue-500" type="text" placeholder="Full name..." /></td>
//                       <td className="p-2"><input className="w-full p-1 border border-transparent hover:border-gray-200 rounded text-sm focus:ring-1 focus:ring-blue-500" type="text" placeholder="PLC Category..." /></td>
//                       <td className="p-2"><input className="w-full p-1 border border-transparent hover:border-gray-200 rounded text-sm focus:ring-1 focus:ring-blue-500" type="text" placeholder="Description..." /></td>
//                       <td className="p-2"><input className="w-full p-1 border border-transparent hover:border-gray-200 rounded text-sm focus:ring-1 focus:ring-blue-500" type="text" placeholder="0.00" /></td>
//                       <td className="p-2">
//                         <div className="flex gap-1">
//                           <input className="w-full p-1 border border-transparent hover:border-gray-200 rounded text-[10px]" type="date" />
//                           <input className="w-full p-1 border border-transparent hover:border-gray-200 rounded text-[10px]" type="date" />
//                         </div>
//                       </td>
//                       <td className="p-2 text-center">
//                         <button type="button" className="text-gray-400 hover:text-red-500 transition-colors">
//                           <Trash2 size={16} className="mx-auto" />
//                         </button>
//                       </td>
//                     </tr>
//                   ))}
//                 </tbody>
//               </table>
//             </div>
//           </section>

//           {/* Submit Footer */}
//           <div className="flex justify-end gap-4 pt-6 border-t border-gray-100">
//              <button type="button" className="px-6 py-2 border border-gray-300 rounded-xl text-gray-600 font-bold hover:bg-gray-100 transition-all text-sm">
//                Save as Draft
//              </button>
//              <button type="submit" className="flex items-center gap-2 px-8 py-2 bg-blue-600 text-white font-extrabold rounded-xl shadow-lg hover:bg-blue-700 transform transition-all active:scale-95 text-sm">
//                <Save size={18} />
//                Submit Project & Workforce
//              </button>
//           </div>
//         </form>
//       </div>
//     </div>
//   );
// };

// export default ProjectWorkforceForm;



//  Green Excel Version


// import React, { useState } from 'react';
// import { Save, UserCircle, LogOut, Plus, Trash2 } from 'lucide-react';

// const ProjectWorkforceForm = ({ userName = 'Admin', userAvatar, handleLogout }) => {
//   const [workforceRows, setWorkforceRows] = useState([
//     { id: Date.now(), employee: '', exProj: '', exProjName: '', exPlc: '', exPlcName: '', newProj: '', newProjName: '', newPlc: '', newPlcName: '', rate: '', remarks: '' }
//   ]);

//   const addRow = () => setWorkforceRows([...workforceRows, { id: Date.now(), employee: '', exProj: '', exProjName: '', exPlc: '', exPlcName: '', newProj: '', newProjName: '', newPlc: '', newPlcName: '', rate: '', remarks: '' }]);

//   return (
//     <div className="min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-black p-4 sm:p-6 lg:p-8 text-gray-100 flex justify-center items-start">
//       <div className="bg-white p-6 rounded-xl shadow-2xl w-full max-w-full text-gray-800">
        
//         {/* --- Unified Global Header --- */}
//         <div className="flex justify-between items-center mb-6">
//           <div className="w-1/3">
//             <h1 className="text-3xl font-extrabold text-blue-800 uppercase tracking-tight">
//               Project & Workforce
//             </h1>
//           </div>
//           <div className="w-1/3 flex justify-center">
//             <img src="/Lumina_logo.png" alt="Lumina Logo" className="h-12" />
//           </div>
//           <div className="w-1/3 flex justify-end items-center gap-4">
//             <div className="flex items-center gap-3 bg-gray-100 p-3 rounded-lg border border-gray-200">
//               {userAvatar ? <img src={userAvatar} className="w-10 h-10 rounded-full" /> : <UserCircle size={32} className="text-gray-500" />}
//               <span className="text-lg font-medium text-gray-700 hidden sm:block">Welcome, {userName}</span>
//             </div>
//             <button onClick={handleLogout} className="p-3 bg-red-100 hover:bg-red-200 rounded-full text-red-600 transition-colors">
//               <LogOut size={20} />
//             </button>
//           </div>
//         </div>

//         {/* --- Section A: Project Details (The 11 Fields) --- */}
//         <div className="bg-gray-100 p-6 rounded-lg shadow-sm mb-8">
//           <h2 className="text-sm font-bold text-gray-500 uppercase tracking-widest mb-4 border-b border-gray-300 pb-2">A. Project Details</h2>
//           <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
//             <div className="flex flex-col gap-1">
//               <label className="text-xs font-bold text-gray-600 uppercase">Project Manager</label>
//               <input type="text" className="p-2 border border-gray-300 rounded focus:ring-1 focus:ring-blue-500 outline-none bg-white" />
//             </div>
//             <div className="flex flex-col gap-1">
//               <label className="text-xs font-bold text-gray-600 uppercase">Effective Date</label>
//               <input type="date" className="p-2 border border-gray-300 rounded focus:ring-1 focus:ring-blue-500 outline-none bg-white" />
//             </div>
//             <div className="flex flex-col gap-1">
//               <label className="text-xs font-bold text-gray-600 uppercase">Prime/Sub Contract</label>
//               <select className="p-2 border border-gray-300 rounded bg-white"><option>Prime</option><option>Sub</option></select>
//             </div>
//             <div className="flex flex-col gap-1">
//               <label className="text-xs font-bold text-gray-600 uppercase">8(a) Contract?</label>
//               <select className="p-2 border border-gray-300 rounded bg-white"><option>No</option><option>Yes</option></select>
//             </div>
//           </div>
//           {/* Add more fields here to complete the 11 fields... */}
//         </div>

//         {/* --- Section B: Workforce Table (Complex Headers) --- */}
//         <div className="flex justify-between items-center mb-4">
//           <h2 className="text-sm font-bold text-gray-500 uppercase tracking-widest">B. Workforce Management</h2>
//           <button onClick={addRow} className="flex items-center gap-2 bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 shadow-md text-sm font-bold">
//             <Plus size={16} /> Add Resource
//           </button>
//         </div>

//         <div className="overflow-x-auto rounded-lg border border-gray-300 shadow-inner">
//           <table className="min-w-full border-collapse">
//             <thead>
//               {/* Row 1 Headers */}
//               <tr className="bg-gray-800 text-white text-[10px] uppercase tracking-tighter">
//                 <th rowSpan={2} className="p-2 border border-gray-600 min-w-[150px]">Employee Name / Vendor Employee</th>
//                 <th colSpan={2} className="p-2 border border-gray-600">Existing Project</th>
//                 <th colSpan={2} className="p-2 border border-gray-600">Existing PLC</th>
//                 <th colSpan={2} className="p-2 border border-gray-600 bg-blue-700">New / Proposed Project</th>
//                 <th colSpan={2} className="p-2 border border-gray-600 bg-blue-700">New PLC</th>
//                 <th rowSpan={2} className="p-2 border border-gray-600">Billing Rate</th>
//                 <th rowSpan={2} className="p-2 border border-gray-600">Remarks</th>
//                 <th rowSpan={2} className="p-2 border border-gray-600">Action</th>
//               </tr>
//               {/* Row 2 Headers */}
//               <tr className="bg-gray-700 text-white text-[9px] uppercase">
//                 <th className="p-2 border border-gray-600">Project</th>
//                 <th className="p-2 border border-gray-600">Project Name</th>
//                 <th className="p-2 border border-gray-600">PLC</th>
//                 <th className="p-2 border border-gray-600">PLC Name</th>
//                 <th className="p-2 border border-gray-600 bg-blue-800">Project</th>
//                 <th className="p-2 border border-gray-600 bg-blue-800">Project Name</th>
//                 <th className="p-2 border border-gray-600 bg-blue-800">PLC</th>
//                 <th className="p-2 border border-gray-600 bg-blue-800">PLC Name</th>
//               </tr>
//             </thead>
//             <tbody className="bg-white text-[11px]">
//               {workforceRows.map((row, index) => (
//                 <tr key={row.id} className={index % 2 === 0 ? 'bg-white' : 'bg-gray-50'}>
//                   <td className="p-1 border border-gray-200"><input type="text" className="w-full p-1 outline-none border border-transparent focus:border-blue-400" /></td>
//                   <td className="p-1 border border-gray-200"><input type="text" className="w-full p-1 outline-none" /></td>
//                   <td className="p-1 border border-gray-200"><input type="text" className="w-full p-1 outline-none" /></td>
//                   <td className="p-1 border border-gray-200"><input type="text" className="w-full p-1 outline-none" /></td>
//                   <td className="p-1 border border-gray-200"><input type="text" className="w-full p-1 outline-none" /></td>
//                   <td className="p-1 border border-gray-200 bg-blue-50"><input type="text" className="w-full p-1 outline-none bg-transparent" /></td>
//                   <td className="p-1 border border-gray-200 bg-blue-50"><input type="text" className="w-full p-1 outline-none bg-transparent" /></td>
//                   <td className="p-1 border border-gray-200 bg-blue-50"><input type="text" className="w-full p-1 outline-none bg-transparent" /></td>
//                   <td className="p-1 border border-gray-200 bg-blue-50"><input type="text" className="w-full p-1 outline-none bg-transparent" /></td>
//                   <td className="p-1 border border-gray-200"><input type="text" className="w-full p-1 outline-none" placeholder="$0.00" /></td>
//                   <td className="p-1 border border-gray-200"><input type="text" className="w-full p-1 outline-none" /></td>
//                   <td className="p-1 border border-gray-200 text-center">
//                     <button onClick={() => setWorkforceRows(workforceRows.filter(r => r.id !== row.id))} className="text-red-500 hover:text-red-700"><Trash2 size={16} /></button>
//                   </td>
//                 </tr>
//               ))}
//             </tbody>
//           </table>
//         </div>

//         <div className="mt-8 flex justify-start">
//           <button className="flex items-center gap-2 bg-gradient-to-r from-blue-500 to-blue-600 text-white font-bold py-3 px-8 rounded-lg shadow-lg hover:from-blue-600 hover:to-blue-700 transform transition hover:-translate-y-0.5">
//             <Save size={20} /> Save Project & Workforce
//           </button>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default ProjectWorkforceForm;


/////////////////////////////////////////////

// import React, { useState } from 'react';
// import { Save, UserCircle, LogOut, Plus, Trash2, Briefcase, Users } from 'lucide-react';

// const ProjectWorkforceForm = ({ userName = 'admin', userAvatar, handleLogout }) => {
//   const [workforce, setWorkforce] = useState([
//     { id: 1, name: '', existingProj: '', existingPlc: '', newProj: '', newPlc: '', rate: '' }
//   ]);

//   const addResource = () => {
//     setWorkforce([...workforce, { id: Date.now(), name: '', existingProj: '', existingPlc: '', newProj: '', newPlc: '', rate: '' }]);
//   };

//   return (
//     <div className="min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-black p-4 sm:p-6 lg:p-8 text-gray-100 flex justify-center items-start">
//       {/* <div className="bg-white p-8 rounded-xl shadow-2xl w-full max-w-7xl text-gray-800"> */}
//       <div className="bg-white p-8 rounded-xl shadow-2xl w-full max-w-[95%] text-gray-800">
        
//         {/* --- Header Section (Accountant Style) --- */}
//         <div className="flex justify-between items-center mb-10 border-b border-gray-100 pb-6">
//           <div className="w-1/3">
//             <h1 className="text-3xl font-extrabold text-blue-800 tracking-tight uppercase">
//               Project & Workforce
//             </h1>
//           </div>
//           <div className="w-1/3 flex justify-center">
//             <img src="/Lumina_logo.png" alt="REVOLVE" className="h-12 object-contain" />
//           </div>
//           <div className="w-1/3 flex justify-end items-center gap-4">
//             <div className="flex items-center gap-3 bg-gray-50 p-3 rounded-lg border border-gray-200 shadow-sm">
//               {userAvatar ? <img src={userAvatar} className="w-10 h-10 rounded-full" /> : <UserCircle size={32} className="text-gray-400" />}
//               <span className="text-lg font-medium text-gray-700 hidden sm:block">Welcome, {userName}</span>
//             </div>
//             <button onClick={handleLogout} className="p-3 bg-red-50 hover:bg-red-100 rounded-full text-red-600 transition-colors shadow-sm">
//               <LogOut size={20} />
//             </button>
//           </div>
//         </div>

//         <form className="space-y-12">
//           {/* --- Section 1: Project Details (Form Layout) --- */}
//           <section>
//             <div className="flex items-center gap-2 mb-6">
//               <div className="bg-blue-800 p-1.5 rounded-md text-white">
//                 <Briefcase size={18} />
//               </div>
//               <h2 className="text-xl font-bold text-gray-800 uppercase tracking-tight">Project Prerequisite Details</h2>
//             </div>
            
//             <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-6 bg-gray-50 p-6 rounded-xl border border-gray-100">
//               <div className="flex flex-col gap-1.5">
//                 <label className="text-xs font-black text-gray-400 uppercase tracking-widest">Project Manager</label>
//                 <input type="text" className="w-full p-2.5 bg-white border border-gray-200 rounded-lg text-sm focus:ring-2 focus:ring-blue-600 outline-none transition-all shadow-sm" placeholder="Enter name..." />
//               </div>
              
//               <div className="flex flex-col gap-1.5">
//                 <label className="text-xs font-black text-gray-400 uppercase tracking-widest">Effective Date</label>
//                 <input type="date" className="w-full p-2.5 bg-white border border-gray-200 rounded-lg text-sm focus:ring-2 focus:ring-blue-600 outline-none transition-all shadow-sm" />
//               </div>

//               <div className="flex flex-col gap-1.5">
//                 <label className="text-xs font-black text-gray-400 uppercase tracking-widest">Contract Type</label>
//                 <select className="w-full p-2.5 bg-white border border-gray-200 rounded-lg text-sm focus:ring-2 focus:ring-blue-600 outline-none shadow-sm">
//                   <option>Prime Contract</option>
//                   <option>Subcontract</option>
//                 </select>
//               </div>

//               <div className="flex flex-col gap-1.5 lg:col-span-2">
//                 <label className="text-xs font-black text-gray-400 uppercase tracking-widest">Applicable Contract Numbers</label>
//                 <input type="text" className="w-full p-2.5 bg-white border border-gray-200 rounded-lg text-sm focus:ring-2 focus:ring-blue-600 outline-none shadow-sm" placeholder="Prime, Sub, PO, TO numbers..." />
//               </div>

//               <div className="flex flex-col gap-1.5">
//                 <label className="text-xs font-black text-gray-400 uppercase tracking-widest">8(a) Status</label>
//                 <select className="w-full p-2.5 bg-white border border-gray-200 rounded-lg text-sm focus:ring-2 focus:ring-blue-600 outline-none shadow-sm">
//                   <option>No</option>
//                   <option>Yes</option>
//                 </select>
//               </div>

//               <div className="flex flex-col gap-1.5">
//                 <label className="text-xs font-black text-gray-400 uppercase tracking-widest">Costpoint Org</label>
//                 <input type="text" className="w-full p-2.5 bg-white border border-gray-200 rounded-lg text-sm focus:ring-2 focus:ring-blue-600 outline-none shadow-sm" />
//               </div>

//               <div className="flex flex-col gap-1.5">
//                 <label className="text-xs font-black text-gray-400 uppercase tracking-widest">Modification Number</label>
//                 <input type="text" className="w-full p-2.5 bg-white border border-gray-200 rounded-lg text-sm focus:ring-2 focus:ring-blue-600 outline-none shadow-sm" />
//               </div>

//               <div className="flex flex-col gap-1.5">
//                 <label className="text-xs font-black text-gray-400 uppercase tracking-widest">Purpose of MOD</label>
//                 <input type="text" className="w-full p-2.5 bg-white border border-gray-200 rounded-lg text-sm focus:ring-2 focus:ring-blue-600 outline-none shadow-sm" />
//               </div>
//             </div>
//           </section>

//           {/* --- Section 2: Workforce Information (Clean Table) --- */}
//           <section>
//             <div className="flex justify-between items-center mb-6">
//               <div className="flex items-center gap-2">
//                 <div className="bg-blue-800 p-1.5 rounded-md text-white">
//                   <Users size={18} />
//                 </div>
//                 <h2 className="text-xl font-bold text-gray-800 uppercase tracking-tight">Resource Allocation</h2>
//               </div>
//               <button type="button" onClick={addResource} className="flex items-center gap-2 bg-gray-800 hover:bg-black text-white px-4 py-2 rounded-lg text-xs font-bold transition-all shadow-md">
//                 <Plus size={16} /> Add New Resource
//               </button>
//             </div>

//             <div className="overflow-x-auto rounded-xl border border-gray-200 shadow-lg">
//               <table className="min-w-full divide-y divide-gray-200">
//                 <thead className="bg-gray-100">
//                   <tr className="text-[10px] font-black text-gray-500 uppercase tracking-widest">
//                     <th className="px-6 py-4 text-left">Employee / Vendor Name</th>
//                     <th className="px-6 py-4 text-left">Existing Proj / PLC</th>
//                     <th className="px-6 py-4 text-left">Proposed Proj / PLC</th>
//                     <th className="px-6 py-4 text-left">Billing Rate</th>
//                     <th className="px-6 py-4 text-center">Actions</th>
//                   </tr>
//                 </thead>
//                 <tbody className="bg-white divide-y divide-gray-100">
//                   {workforce.map((row) => (
//                     <tr key={row.id} className="hover:bg-blue-50/50 transition-colors">
//                       <td className="px-6 py-3">
//                         <input type="text" className="w-full p-2 border border-transparent focus:border-gray-300 rounded outline-none text-sm font-medium" placeholder="Name..." />
//                       </td>
//                       <td className="px-6 py-3">
//                         <div className="flex flex-col gap-1">
//                           <input type="text" className="w-full p-1 border border-transparent focus:border-gray-200 text-xs text-gray-500" placeholder="Project ID/PLC" />
//                         </div>
//                       </td>
//                       <td className="px-6 py-3">
//                         <div className="flex flex-col gap-1">
//                           <input type="text" className="w-full p-1 border border-transparent focus:border-gray-200 text-xs text-blue-700 font-bold" placeholder="New ID/PLC" />
//                         </div>
//                       </td>
//                       <td className="px-6 py-3 text-sm font-bold text-gray-700">$0.00</td>
//                       <td className="px-6 py-3 text-center">
//                         <button type="button" onClick={() => setWorkforce(workforce.filter(r => r.id !== row.id))} className="text-red-400 hover:text-red-600 p-1">
//                           <Trash2 size={18} />
//                         </button>
//                       </td>
//                     </tr>
//                   ))}
//                 </tbody>
//               </table>
//             </div>
//           </section>

//           {/* --- Submit Footer --- */}
//           <div className="pt-6 border-t border-gray-100 flex justify-start">
//              <button type="submit" className="flex items-center gap-2 bg-gradient-to-r from-blue-700 to-blue-800 text-white font-black py-3.5 px-10 rounded-xl shadow-xl hover:from-blue-800 hover:to-black transition-all transform hover:-translate-y-1 active:scale-95 uppercase tracking-widest text-sm">
//                <Save size={20} />
//                Save Project & Workforce
//              </button>
//           </div>
//         </form>
//       </div>
//     </div>
//   );
// };

// export default ProjectWorkforceForm;


// import React, { useState } from 'react';
// import { Save, UserCircle, LogOut, Plus, Trash2, Briefcase, Users, DollarSign } from 'lucide-react';

// const ProjectWorkforceForm = ({ userName = 'Admin User', userAvatar, handleLogout }) => {
//   // --- State for Project Prerequisite Details ---
//   const [projectData, setProjectData] = useState({
//     projectManager: '',
//     effectiveDate: '',
//     contractType: 'Prime Contract',
//     contractNumbers: '',
//     status8a: 'No',
//     costpointOrg: '',
//     modNumber: '',
//     purposeOfMod: ''
//   });

//   // --- State for Workforce Table ---
//   const [workforce, setWorkforce] = useState([
//     { id: 1, name: '', existingProj: '', existingPlc: '', newProj: '', newPlc: '', rate: '0.00' }
//   ]);

//   // --- Handlers ---
//   const handleProjectChange = (e) => {
//     const { name, value } = e.target;
//     setProjectData(prev => ({ ...prev, [name]: value }));
//   };

//   const addResource = () => {
//     setWorkforce([
//       ...workforce,
//       { id: Date.now(), name: '', existingProj: '', existingPlc: '', newProj: '', newPlc: '', rate: '0.00' }
//     ]);
//   };

//   const updateWorkforceRow = (id, field, value) => {
//     setWorkforce(prev => 
//       prev.map(row => row.id === id ? { ...row, [field]: value } : row)
//     );
//   };

//   const removeResource = (id) => {
//     if (workforce.length > 1) {
//       setWorkforce(workforce.filter(r => r.id !== id));
//     }
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     console.log("Saving Project Data:", projectData);
//     console.log("Saving Workforce Data:", workforce);
//     alert("Data saved successfully!");
//   };

//   return (
//     <div className="min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-black p-4 sm:p-6 lg:p-8 text-gray-100 flex justify-center items-start font-sans">
//       <div className="bg-white p-8 rounded-2xl shadow-2xl w-full max-w-[95%] text-gray-800 border border-gray-200">
        
//         {/* --- Header Section --- */}
//         <div className="flex flex-col md:flex-row justify-between items-center mb-10 border-b border-gray-100 pb-8 gap-6">
//           <div className="md:w-1/3">
//             <h1 className="text-3xl font-black text-blue-900 tracking-tight uppercase leading-tight">
//               Project & <br/> Workforce <span className="text-blue-500">Setup</span>
//             </h1>
//           </div>
//           <div className="md:w-1/3 flex justify-center">
//             {/* Using a placeholder if local image isn't available */}
//             <div className="bg-gray-100 px-6 py-2 rounded-full border border-gray-200 font-bold text-gray-400 italic">
//                LUMINA LOGO
//             </div>
//           </div>
//           <div className="md:w-1/3 flex justify-end items-center gap-4">
//             <div className="flex items-center gap-3 bg-gray-50 p-2.5 pr-5 rounded-full border border-gray-200 shadow-sm">
//               {userAvatar ? 
//                 <img src={userAvatar} className="w-10 h-10 rounded-full border-2 border-white shadow-sm" alt="User" /> : 
//                 <div className="bg-blue-100 p-2 rounded-full text-blue-600"><UserCircle size={24} /></div>
//               }
//               <div className="flex flex-col">
//                 <span className="text-[10px] uppercase font-bold text-gray-400 leading-none">Logged in as</span>
//                 <span className="text-sm font-bold text-gray-700">{userName}</span>
//               </div>
//             </div>
//             <button 
//                 onClick={handleLogout} 
//                 className="p-3 bg-red-50 hover:bg-red-500 hover:text-white rounded-full text-red-500 transition-all duration-300 shadow-sm group"
//                 title="Logout"
//             >
//               <LogOut size={20} />
//             </button>
//           </div>
//         </div>

//         <form onSubmit={handleSubmit} className="space-y-12">
//           {/* --- Section 1: Project Details --- */}
//           <section className="animate-in fade-in slide-in-from-bottom-4 duration-500">
//             <div className="flex items-center gap-3 mb-6">
//               <div className="bg-blue-900 p-2 rounded-lg text-white shadow-lg">
//                 <Briefcase size={20} />
//               </div>
//               <h2 className="text-xl font-black text-gray-800 uppercase tracking-tighter">Project Prerequisite Details</h2>
//             </div>
            
//             <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-6 bg-gray-50/50 p-8 rounded-2xl border border-gray-100">
//               <InputField label="Project Manager" name="projectManager" value={projectData.projectManager} onChange={handleProjectChange} placeholder="Enter name..." />
//               <InputField label="Effective Date" name="effectiveDate" type="date" value={projectData.effectiveDate} onChange={handleProjectChange} />
              
//               <div className="flex flex-col gap-2">
//                 <label className="text-[10px] font-black text-gray-400 uppercase tracking-widest ml-1">Contract Type</label>
//                 <select 
//                   name="contractType" 
//                   value={projectData.contractType} 
//                   onChange={handleProjectChange}
//                   className="w-full p-3 bg-white border border-gray-200 rounded-xl text-sm font-semibold focus:ring-4 focus:ring-blue-50 focus:border-blue-600 outline-none transition-all shadow-sm"
//                 >
//                   <option>Prime Contract</option>
//                   <option>Subcontract</option>
//                 </select>
//               </div>

//               <div className="flex flex-col gap-2 lg:col-span-2">
//                 <InputField label="Applicable Contract Numbers" name="contractNumbers" value={projectData.contractNumbers} onChange={handleProjectChange} placeholder="Prime, Sub, PO, TO numbers..." />
//               </div>

//               <div className="flex flex-col gap-2">
//                 <label className="text-[10px] font-black text-gray-400 uppercase tracking-widest ml-1">8(a) Status</label>
//                 <select 
//                   name="status8a" 
//                   value={projectData.status8a} 
//                   onChange={handleProjectChange}
//                   className="w-full p-3 bg-white border border-gray-200 rounded-xl text-sm font-semibold focus:ring-4 focus:ring-blue-50 focus:border-blue-600 outline-none shadow-sm transition-all"
//                 >
//                   <option>No</option>
//                   <option>Yes</option>
//                 </select>
//               </div>

//               <InputField label="Costpoint Org" name="costpointOrg" value={projectData.costpointOrg} onChange={handleProjectChange} />
//               <InputField label="Modification Number" name="modNumber" value={projectData.modNumber} onChange={handleProjectChange} />
//               <InputField label="Purpose of MOD" name="purposeOfMod" value={projectData.purposeOfMod} onChange={handleProjectChange} />
//             </div>
//           </section>

//           {/* --- Section 2: Workforce Information --- */}
//           <section className="animate-in fade-in slide-in-from-bottom-6 duration-700">
//             <div className="flex justify-between items-end mb-6">
//               <div className="flex items-center gap-3">
//                 <div className="bg-blue-900 p-2 rounded-lg text-white shadow-lg">
//                   <Users size={20} />
//                 </div>
//                 <h2 className="text-xl font-black text-gray-800 uppercase tracking-tighter">Resource Allocation</h2>
//               </div>
//               <button 
//                 type="button" 
//                 onClick={addResource} 
//                 className="flex items-center gap-2 bg-gray-900 hover:bg-blue-700 text-white px-5 py-2.5 rounded-xl text-xs font-black transition-all shadow-xl active:scale-95"
//               >
//                 <Plus size={16} /> ADD RESOURCE
//               </button>
//             </div>

//             <div className="overflow-hidden rounded-2xl border border-gray-200 shadow-2xl">
//               <table className="min-w-full divide-y divide-gray-200">
//                 <thead className="bg-gray-100">
//                   <tr className="text-[10px] font-black text-gray-500 uppercase tracking-[0.15em]">
//                     <th className="px-6 py-5 text-left">Employee / Vendor Name</th>
//                     <th className="px-6 py-5 text-left">Existing Proj / PLC</th>
//                     <th className="px-6 py-5 text-left text-blue-800">Proposed Proj / PLC</th>
//                     <th className="px-6 py-5 text-right">Billing Rate</th>
//                     <th className="px-6 py-5 text-center w-20">Actions</th>
//                   </tr>
//                 </thead>
//                 <tbody className="bg-white divide-y divide-gray-100">
//                   {workforce.map((row) => (
//                     <tr key={row.id} className="hover:bg-blue-50/30 transition-colors group">
//                       <td className="px-6 py-4">
//                         <input 
//                           type="text" 
//                           value={row.name}
//                           onChange={(e) => updateWorkforceRow(row.id, 'name', e.target.value)}
//                           className="w-full p-2.5 bg-gray-50/50 border border-transparent focus:border-blue-300 focus:bg-white rounded-lg outline-none text-sm font-bold text-gray-700 transition-all" 
//                           placeholder="e.g. John Doe" 
//                         />
//                       </td>
//                       <td className="px-6 py-4">
//                         <div className="flex gap-2">
//                           <input 
//                             type="text" 
//                             value={row.existingProj}
//                             onChange={(e) => updateWorkforceRow(row.id, 'existingProj', e.target.value)}
//                             className="w-1/2 p-2 bg-transparent border-b border-gray-100 focus:border-blue-400 outline-none text-xs text-gray-500" 
//                             placeholder="Proj ID" 
//                           />
//                           <input 
//                             type="text" 
//                             value={row.existingPlc}
//                             onChange={(e) => updateWorkforceRow(row.id, 'existingPlc', e.target.value)}
//                             className="w-1/2 p-2 bg-transparent border-b border-gray-100 focus:border-blue-400 outline-none text-xs text-gray-500" 
//                             placeholder="PLC" 
//                           />
//                         </div>
//                       </td>
//                       <td className="px-6 py-4">
//                         <div className="flex gap-2">
//                           <input 
//                             type="text" 
//                             value={row.newProj}
//                             onChange={(e) => updateWorkforceRow(row.id, 'newProj', e.target.value)}
//                             className="w-1/2 p-2 bg-blue-50/50 border-b border-blue-200 focus:border-blue-600 outline-none text-xs text-blue-700 font-bold" 
//                             placeholder="New Proj" 
//                           />
//                           <input 
//                             type="text" 
//                             value={row.newPlc}
//                             onChange={(e) => updateWorkforceRow(row.id, 'newPlc', e.target.value)}
//                             className="w-1/2 p-2 bg-blue-50/50 border-b border-blue-200 focus:border-blue-600 outline-none text-xs text-blue-700 font-bold" 
//                             placeholder="New PLC" 
//                           />
//                         </div>
//                       </td>
//                       <td className="px-6 py-4">
//                          <div className="flex items-center justify-end gap-1">
//                             <span className="text-gray-400 text-xs">$</span>
//                             <input 
//                               type="number"
//                               value={row.rate}
//                               onChange={(e) => updateWorkforceRow(row.id, 'rate', e.target.value)}
//                               className="w-24 text-right p-2 bg-transparent border-b border-gray-100 focus:border-blue-400 outline-none text-sm font-black text-gray-800"
//                             />
//                          </div>
//                       </td>
//                       <td className="px-6 py-4 text-center">
//                         <button 
//                           type="button" 
//                           onClick={() => removeResource(row.id)} 
//                           className="text-gray-300 hover:text-red-600 p-2 hover:bg-red-50 rounded-full transition-all"
//                           disabled={workforce.length === 1}
//                         >
//                           <Trash2 size={18} />
//                         </button>
//                       </td>
//                     </tr>
//                   ))}
//                 </tbody>
//               </table>
//             </div>
//           </section>

//           {/* --- Submit Footer --- */}
//           <div className="pt-8 border-t border-gray-100 flex justify-between items-center">
//              <p className="text-xs text-gray-400 font-medium">
//                 Ensure all mandatory fields are filled before saving to the database.
//              </p>
//              <button 
//               type="submit" 
//               className="group flex items-center gap-3 bg-blue-800 text-white font-black py-4 px-12 rounded-2xl shadow-2xl hover:bg-black transition-all transform hover:-translate-y-1 active:scale-95 uppercase tracking-widest text-sm"
//              >
//                <Save size={20} className="group-hover:animate-pulse" />
//                Save Project Record
//              </button>
//           </div>
//         </form>
//       </div>
//     </div>
//   );
// };

// // --- Helper Component for Inputs ---
// const InputField = ({ label, name, type = "text", value, onChange, placeholder }) => (
//   <div className="flex flex-col gap-2">
//     <label className="text-[10px] font-black text-gray-400 uppercase tracking-widest ml-1">{label}</label>
//     <input 
//       type={type}
//       name={name}
//       value={value}
//       onChange={onChange}
//       placeholder={placeholder}
//       className="w-full p-3 bg-white border border-gray-200 rounded-xl text-sm font-semibold focus:ring-4 focus:ring-blue-50 focus:border-blue-600 outline-none transition-all shadow-sm" 
//     />
//   </div>
// );

// export default ProjectWorkforceForm;

/////////////////////////////////////

// Versiion 2 

// import React, { useState } from 'react';
// import { Save, UserCircle, LogOut, Plus, Trash2, Briefcase, Users, FileText, ClipboardList, Upload } from 'lucide-react';

// const ProjectWorkforceForm = ({ userName = 'Admin', userAvatar, handleLogout }) => {
//   const [projectData, setProjectData] = useState({
//     projectName: '',
//     submitterName: userName,
//     submissionDate: '',
//     projectManager: '',
//     effectiveDate: '',
//     contractType: 'Prime Contract',
//     contractNumbers: '',
//     status8a: 'No',
//     costpointOrg: '',
//     modNumber: '',
//     purposeOfMod: '',
//     contractValue: '',
//     fundingValue: '',
//     billingInstructions: ''
//   });

//   const [workforce, setWorkforce] = useState([
//     { id: 1, name: '', existingProj: '', existingPlc: '', newProj: '', newPlc: '', rate: '0.00' }
//   ]);

//   const handleProjectChange = (e) => {
//     const { name, value } = e.target;
//     setProjectData(prev => ({ ...prev, [name]: value }));
//   };

//   const addResource = () => {
//     setWorkforce([...workforce, { id: Date.now(), name: '', existingProj: '', existingPlc: '', newProj: '', newPlc: '', rate: '0.00' }]);
//   };

//   const updateWorkforceRow = (id, field, value) => {
//     setWorkforce(prev => prev.map(row => row.id === id ? { ...row, [field]: value } : row));
//   };

//   const removeResource = (id) => {
//     if (workforce.length > 1) setWorkforce(workforce.filter(r => r.id !== id));
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     alert("Project Workforce Data Submitted Successfully!");
//   };

//   return (
//     <div className="min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-black p-4 lg:p-8 text-gray-100 flex justify-center items-start">
      
//       {/* MAXIMIZED WHITE BOX (98% Width) */}
//       <div className="bg-white p-6 sm:p-10 rounded-xl shadow-2xl w-[98%] max-w-full text-gray-800">
        
//         {/* --- HEADER SECTION (Matched Fonts & Centered Logo) --- */}
//         <div className="flex justify-between items-center mb-10">
//           <div className="w-1/3">
//             <h1 className="text-3xl font-bold">
//               <span className="block text-transparent bg-clip-text bg-gradient-to-r from-blue-800 to-blue-600 leading-tight">
//                 Project Workforce
//               </span>
//             </h1>
//           </div>

//           <div className="w-1/3 flex justify-center">
//             <img src="/Lumina_logo.png" alt="Lumina Logo" className="h-12 opacity-100" />
//           </div>

//           <div className="w-1/3 flex justify-end items-center gap-4">
//             <div className="flex items-center gap-3 bg-gray-100 p-3 rounded-lg">
//               {userAvatar ? (
//                 <img src={userAvatar} alt="User Avatar" className="w-10 h-10 rounded-full object-cover" />
//               ) : (
//                 <UserCircle size={32} className="text-gray-500" />
//               )}
//               <span className="text-lg font-medium text-gray-700 hidden sm:block">
//                 Welcome, {userName}
//               </span>
//             </div>
//             <button onClick={handleLogout} className="p-3 bg-red-100 hover:bg-red-200 rounded-full text-red-600 transition-colors">
//               <LogOut size={20} />
//             </button>
//           </div>
//         </div>

//         <form onSubmit={handleSubmit} className="space-y-12">
          
//           {/* SECTION A: IDENTIFICATION */}
//           <section className="space-y-6">
//             <h2 className="text-lg font-bold text-blue-800 border-b-2 border-blue-200 pb-1">A. Project Identification</h2>
//             <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
//               <div className="space-y-1">
//                 <label className="text-xs font-bold text-gray-500 uppercase">Project Name</label>
//                 <input name="projectName" value={projectData.projectName} onChange={handleProjectChange} className="w-full p-2 border-b-2 border-gray-300 focus:border-blue-600 outline-none transition-colors text-base" type="text" placeholder="e.g. Solar Phase II" />
//               </div>
//               <div className="space-y-1">
//                 <label className="text-xs font-bold text-gray-500 uppercase">Submitter Name</label>
//                 <input name="submitterName" value={projectData.submitterName} onChange={handleProjectChange} className="w-full p-2 border-b-2 border-gray-300 focus:border-blue-600 outline-none transition-colors text-base" type="text" />
//               </div>
//               <div className="space-y-1">
//                 <label className="text-xs font-bold text-gray-500 uppercase">Submission Date</label>
//                 <input name="submissionDate" value={projectData.submissionDate} onChange={handleProjectChange} className="w-full p-2 border-b-2 border-gray-300 focus:border-blue-600 outline-none transition-colors text-base" type="date" />
//               </div>
//             </div>
//           </section>

//           {/* SECTION B: CONTRACT DETAILS */}
//           <section className="space-y-6">
//             <h2 className="text-lg font-bold text-blue-800 border-b-2 border-blue-200 pb-1">B. Contract Basics</h2>
//             <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-x-10 gap-y-10 bg-gray-50 p-8 rounded-xl border border-gray-100">
//               <InputField label="Project Manager" name="projectManager" value={projectData.projectManager} onChange={handleProjectChange} placeholder="Enter Name" />
//               <InputField label="Effective Date" name="effectiveDate" type="date" value={projectData.effectiveDate} onChange={handleProjectChange} />
              
//               <div className="space-y-1 flex flex-col">
//                 <label className="text-xs font-bold text-gray-500 uppercase">Contract Type</label>
//                 <select name="contractType" value={projectData.contractType} onChange={handleProjectChange} className="w-full p-2 border-b-2 border-gray-300 focus:border-blue-600 outline-none bg-white text-base">
//                   <option>Prime Contract</option>
//                   <option>Subcontract</option>
//                   <option>FFP (Firm Fixed Price)</option>
//                 </select>
//               </div>

//               <InputField label="Costpoint Org" name="costpointOrg" value={projectData.costpointOrg} onChange={handleProjectChange} />
              
//               <div className="lg:col-span-2 space-y-1">
//                 <label className="text-xs font-bold text-gray-500 uppercase">Applicable Contract Numbers</label>
//                 <input name="contractNumbers" value={projectData.contractNumbers} onChange={handleProjectChange} className="w-full p-2 border-b-2 border-gray-300 focus:border-blue-600 outline-none text-base" placeholder="Prime, Sub, PO, TO numbers..." />
//               </div>

//               <div className="space-y-1 flex flex-col">
//                 <label className="text-xs font-bold text-gray-500 uppercase">8(a) Status</label>
//                 <select name="status8a" value={projectData.status8a} onChange={handleProjectChange} className="w-full p-2 border-b-2 border-gray-300 focus:border-blue-600 outline-none bg-white text-base">
//                   <option>No</option>
//                   <option>Yes</option>
//                 </select>
//               </div>

//               <InputField label="Mod Number" name="modNumber" value={projectData.modNumber} onChange={handleProjectChange} />
//             </div>
//           </section>

//           {/* SECTION C: RESOURCE ALLOCATION */}
//           <section className="space-y-6">
//             <div className="flex justify-between items-center border-b-2 border-blue-200 pb-1">
//               <h2 className="text-lg font-bold text-blue-800">C. Resource Allocation Mapping</h2>
//               <button type="button" onClick={addResource} className="text-blue-700 px-3 py-1 rounded-md hover:bg-blue-50 flex items-center gap-2 text-xs font-bold transition-colors">
//                 <Plus size={14} /> Add New Resource
//               </button>
//             </div>
//             <div className="overflow-x-auto border border-gray-200 rounded-xl shadow-sm">
//               <table className="min-w-full divide-y divide-gray-200 text-sm">
//                 <thead className="bg-gray-50">
//                   <tr className="text-xs font-bold text-gray-600 uppercase">
//                     <th className="px-6 py-4 text-left">Resource Name</th>
//                     <th className="px-6 py-4 text-left">Current (Proj/PLC)</th>
//                     <th className="px-6 py-4 text-left text-blue-800 font-black">New (Proj/PLC)</th>
//                     <th className="px-6 py-4 text-right">Rate ($)</th>
//                     <th className="px-4 py-4 text-center">Action</th>
//                   </tr>
//                 </thead>
//                 <tbody className="divide-y divide-gray-200 bg-white">
//                   {workforce.map((row) => (
//                     <tr key={row.id} className="hover:bg-blue-50 transition-colors">
//                       <td className="p-2"><input value={row.name} onChange={(e) => updateWorkforceRow(row.id, 'name', e.target.value)} className="w-full p-2 border-transparent hover:border-gray-200 rounded text-base outline-none focus:ring-1 focus:ring-blue-500" placeholder="Name..." /></td>
//                       <td className="p-2 flex gap-2">
//                         <input value={row.existingProj} onChange={(e) => updateWorkforceRow(row.id, 'existingProj', e.target.value)} className="w-24 p-2 border-transparent hover:border-gray-200 rounded text-sm outline-none" placeholder="Proj" />
//                         <input value={row.existingPlc} onChange={(e) => updateWorkforceRow(row.id, 'existingPlc', e.target.value)} className="w-20 p-2 border-transparent hover:border-gray-200 rounded text-sm outline-none" placeholder="PLC" />
//                       </td>
//                       <td className="p-2">
//                         <div className="flex gap-2">
//                           <input value={row.newProj} onChange={(e) => updateWorkforceRow(row.id, 'newProj', e.target.value)} className="w-24 p-2 bg-blue-50 border-b border-blue-400 font-bold outline-none" placeholder="New" />
//                           <input value={row.newPlc} onChange={(e) => updateWorkforceRow(row.id, 'newPlc', e.target.value)} className="w-20 p-2 bg-blue-50 border-b border-blue-400 font-bold outline-none" placeholder="PLC" />
//                         </div>
//                       </td>
//                       <td className="p-2"><input type="number" value={row.rate} onChange={(e) => updateWorkforceRow(row.id, 'rate', e.target.value)} className="w-full text-right p-2 border-transparent hover:border-gray-200 rounded text-base font-black" /></td>
//                       <td className="p-2 text-center">
//                         <button type="button" onClick={() => removeResource(row.id)} className="text-gray-400 hover:text-red-500 transition-colors" disabled={workforce.length === 1}>
//                           <Trash2 size={18} className="mx-auto" />
//                         </button>
//                       </td>
//                     </tr>
//                   ))}
//                 </tbody>
//               </table>
//             </div>
//           </section>

//           {/* FOOTER BUTTONS */}
//           <div className="flex justify-end gap-4 pt-6 border-t border-gray-100">
//             <button type="button" className="px-6 py-2.5 border border-gray-300 rounded-lg text-gray-600 font-bold hover:bg-gray-100 transition-all text-sm shadow-sm">
//               Save as Draft
//             </button>
//             <button type="submit" className="flex items-center gap-2 px-8 py-2.5 bg-gradient-to-r from-blue-700 to-blue-900 text-white font-extrabold rounded-lg shadow-md hover:from-black hover:to-blue-900 transition-all active:scale-95 text-sm uppercase">
//               <Save size={18} /> Submit Record
//             </button>
//           </div>
//         </form>
//       </div>
//     </div>
//   );
// };

// const InputField = ({ label, name, type = "text", value, onChange, placeholder }) => (
//   <div className="space-y-1">
//     <label className="text-xs font-bold text-gray-500 uppercase">{label}</label>
//     <input type={type} name={name} value={value} onChange={onChange} placeholder={placeholder} className="w-full p-2 border-b-2 border-gray-300 focus:border-blue-600 outline-none transition-colors text-base" />
//   </div>
// );

// export default ProjectWorkforceForm;


import React, { useState } from 'react';
import { UserCircle, LogOut, FileText, Download, Plus, Trash2, Save, X } from 'lucide-react';

const ProjectWorkForce = ({ 
  userName = 'Admin', 
  userAvatar, 
  handleLogout 
}) => {
  // --- STATE ---
  const [workforceData, setWorkforceData] = useState([
    { accountCode: '400010', accountName: 'Direct Labor - Regular', orgCode: 'ORG001', orgName: 'Software Engineering' },
    { accountCode: '400020', accountName: 'Direct Labor - Overtime', orgCode: 'ORG001', orgName: 'Software Engineering' },
    { accountCode: '500150', accountName: 'Travel Expenses', orgCode: 'ORG002', orgName: 'Sales & Marketing' },
  ]);

  const [showAddForm, setShowAddForm] = useState(false);
  const [newRow, setNewRow] = useState({ accountCode: '', accountName: '', orgCode: '', orgName: '' });

  // --- HANDLERS ---
  const handleAddRow = (e) => {
    e.preventDefault();
    if (newRow.accountCode && newRow.accountName) {
      setWorkforceData([...workforceData, newRow]);
      setNewRow({ accountCode: '', accountName: '', orgCode: '', orgName: '' });
      setShowAddForm(false);
    }
  };

  const deleteRow = (index) => {
    setWorkforceData(workforceData.filter((_, i) => i !== index));
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-black p-4 sm:p-6 lg:p-8 text-gray-100 flex justify-center items-start">
      <div className="bg-white p-6 rounded-xl shadow-2xl w-full max-w-full text-gray-800">
        
        {/* --- HEADER SECTION (Matching ProjectSetupForm) --- */}
        <div className="flex justify-between items-center mb-8">
          <div className="w-1/3">
            <h1 className="text-3xl font-extrabold">
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-blue-800 to-blue-600 leading-tight">
                Project WorkForce
              </span>
            </h1>
          </div>

          <div className="w-1/3 flex justify-center">
            <img src="/Lumina_logo.png" alt="Lumina Logo" className="h-12 opacity-100" />
          </div>

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
            <button onClick={handleLogout} className="p-3 bg-red-100 hover:bg-red-200 rounded-full text-red-600 transition-colors">
              <LogOut size={20} />
            </button>
          </div>
        </div>

        {/* --- TABLE HEADER & ADD BUTTON --- */}
        <section className="space-y-4">
          <div className="flex justify-between items-center border-b-2 border-blue-200 pb-2">
            <h2 className="text-sm font-bold text-gray-700 uppercase tracking-wider">
              Workforce Mapping Table
            </h2>
            <button 
              onClick={() => setShowAddForm(!showAddForm)}
              className="text-blue-700 px-3 py-1 rounded-md hover:bg-blue-100 flex items-center gap-2 text-xs font-bold transition-colors"
            >
              {showAddForm ? <><X size={14} /> Close</> : <><Plus size={14} /> Add Record</>}
            </button>
          </div>

          {/* --- SLIDE-DOWN ADD FORM --- */}
          {showAddForm && (
            <div className="bg-blue-50 p-4 rounded-xl border border-blue-100 mb-4 animate-in fade-in slide-in-from-top-2">
              <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
                <input 
                  className="p-2 border-b-2 border-gray-300 focus:border-blue-600 outline-none text-sm bg-transparent"
                  placeholder="Account Code"
                  value={newRow.accountCode}
                  onChange={(e) => setNewRow({...newRow, accountCode: e.target.value})}
                />
                <input 
                  className="p-2 border-b-2 border-gray-300 focus:border-blue-600 outline-none text-sm bg-transparent"
                  placeholder="Account Name"
                  value={newRow.accountName}
                  onChange={(e) => setNewRow({...newRow, accountName: e.target.value})}
                />
                <input 
                  className="p-2 border-b-2 border-gray-300 focus:border-blue-600 outline-none text-sm bg-transparent"
                  placeholder="Org Code"
                  value={newRow.orgCode}
                  onChange={(e) => setNewRow({...newRow, orgCode: e.target.value})}
                />
                <div className="flex gap-2">
                  <input 
                    className="w-full p-2 border-b-2 border-gray-300 focus:border-blue-600 outline-none text-sm bg-transparent"
                    placeholder="Org Name"
                    value={newRow.orgName}
                    onChange={(e) => setNewRow({...newRow, orgName: e.target.value})}
                  />
                  <button 
                    onClick={handleAddRow}
                    className="bg-blue-600 text-white p-2 rounded-lg hover:bg-blue-800 transition-all"
                  >
                    <Save size={18} />
                  </button>
                </div>
              </div>
            </div>
          )}

          {/* --- DATA TABLE --- */}
          <div className="overflow-x-auto border border-gray-200 rounded-xl shadow-sm">
            <table className="min-w-full divide-y divide-gray-200">
              <thead className="bg-gray-50">
                <tr>
                  <th className="px-6 py-4 text-left font-bold text-gray-600 uppercase text-xs">Account Code</th>
                  <th className="px-6 py-4 text-left font-bold text-gray-600 uppercase text-xs">Account Name</th>
                  <th className="px-6 py-4 text-left font-bold text-gray-600 uppercase text-xs">Org Code</th>
                  <th className="px-6 py-4 text-left font-bold text-gray-600 uppercase text-xs">Org Name</th>
                  <th className="px-6 py-4 text-center font-bold text-gray-600 uppercase text-xs">Action</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200 bg-white">
                {workforceData.map((row, index) => (
                  <tr key={index} className="hover:bg-blue-50 transition-colors group">
                    <td className="px-6 py-4 whitespace-nowrap text-sm font-bold text-blue-700">{row.accountCode}</td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-700 font-medium">{row.accountName}</td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-600 font-mono">{row.orgCode}</td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-700">{row.orgName}</td>
                    <td className="px-6 py-4 text-center">
                      <button 
                        onClick={() => deleteRow(index)}
                        className="text-gray-300 hover:text-red-500 transition-colors"
                      >
                        <Trash2 size={18} className="mx-auto" />
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>

        {/* --- FOOTER ACTIONS --- */}
        <div className="flex justify-end gap-4 pt-10 mt-8 border-t border-gray-100">
          <button className="flex items-center gap-2 px-6 py-2.5 border border-gray-300 rounded-lg text-gray-600 font-bold hover:bg-gray-100 transition-all text-sm shadow-sm">
            <Download size={18} /> Export CSV
          </button>
          <button className="flex items-center gap-2 px-8 py-2.5 bg-gradient-to-r from-blue-700 to-blue-800 text-white font-extrabold rounded-lg shadow-md hover:from-blue-800 text-sm transform transition-all active:scale-95">
            <FileText size={18} /> Generate Report
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProjectWorkForce;
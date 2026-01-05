
    //    import React, { useState, useEffect } from 'react';

    // // const API_BASE_URL = 'http://localhost:5000/api/entries'; 
    //  const API_BASE_URL = 'https://rev-lumina.onrender.com/api/entries';

    // // Helper to convert snake_case keys to camelCase
    // const snakeToCamel = (obj) => {
    //   if (Array.isArray(obj)) {
    //     return obj.map(v => snakeToCamel(v));
    //   } else if (obj !== null && typeof obj === 'object') {
    //     return Object.keys(obj).reduce((acc, key) => {
    //       const camelKey = key.replace(/_([a-z])/g, (g) => g[1].toUpperCase());
    //       acc[camelKey] = snakeToCamel(obj[key]);
    //       return acc;
    //     }, {});
    //   }
    //   return obj;
    // };

    // // Helper to format date for display (MM/DD/YYYY)
    // const formatDateForDisplay = (isoString) => {
    //   if (!isoString) return '';
    //   const date = new Date(isoString);
    //   if (isNaN(date.getTime())) {
    //     console.warn("Invalid date string received:", isoString);
    //     return 'Invalid Date';
    //   }
    //   return date.toLocaleDateString('en-US', {
    //     year: 'numeric',
    //     month: '2-digit',
    //     day: '2-digit',
    //   });
    // };

    // // Helper to check if a primeKey indicates an updated entry
    // const isUpdatedEntry = (primeKey) => primeKey && primeKey.includes('.');

    // const ViewPage = ({ setCurrentPage, userId, userRole }) => { // Receive userId and userRole
    //   const [dataEntries, setDataEntries] = useState([]);
    //   const [filteredEntries, setFilteredEntries] = useState([]);
    //   const [isLoading, setIsLoading] = useState(true);
    //   const [error, setError] = useState(null);

    //   const [filters, setFilters] = useState({
    //     primeKey: '', creditCard: '', contractShortName: '', vendorName: '', chargeDate: '',
    //     chargeAmount: '', submittedDate: '', submitter: '', chargeCode: '', notes: '', pdfFilePath: ''
    //   });

    //   // MODIFIED: fetchEntries now includes userId and userRole in the query
    //   const fetchEntries = async () => {
    //     setIsLoading(true);
    //     setError(null);
    //     try {
    //       // Include userId and userRole in the query parameters for filtering
    //       const response = await fetch(`${API_BASE_URL}?userId=${userId}&userRole=${userRole}`);
          
    //       if (!response.ok) {
    //         throw new Error('Failed to fetch data entries');
    //       }
    //       const data = await response.json();
    //       const camelCaseData = snakeToCamel(data);
    //       setDataEntries(camelCaseData);
    //     } catch (err) {
    //       console.error('Error fetching data entries:', err);
    //       setError('Failed to load data. Please try again later.');
    //     } finally {
    //       setIsLoading(false);
    //     }
    //   };

    //   useEffect(() => {
    //     if (userId && userRole) { // Only fetch if user info is available
    //       fetchEntries();
    //     }
    //   }, [userId, userRole]); // Re-fetch when userId or userRole changes

    //   // useEffect to filter data whenever dataEntries or filters change.
    //   useEffect(() => {
    //     if (isLoading || error) {
    //       setFilteredEntries([]);
    //       return;
    //     }

    //     const updatedEntries = dataEntries.filter(entry => {
    //       return Object.keys(filters).every(key => {
    //         const filterValue = filters[key].toLowerCase();
    //         const entryValue = key.includes('Date') 
    //           ? formatDateForDisplay(entry[key]).toLowerCase()
    //           : String(entry[key] || '').toLowerCase();
    //         return entryValue.includes(filterValue);
    //       });
    //     });
    //     setFilteredEntries(updatedEntries);
    //   }, [dataEntries, filters, isLoading, error]);

    //   const handleFilterChange = (key, value) => {
    //     setFilters(prevFilters => ({
    //       ...prevFilters,
    //       [key]: value
    //     }));
    //   };

    //   return (
    //     <div className="flex flex-col items-center min-h-screen w-full bg-gradient-to-br from-blue-50 to-indigo-100 p-8">
    //       <div className="bg-white p-8 rounded-xl shadow-lg w-full max-w-full px-4">
    //         <h1 className="text-4xl font-extrabold text-gray-800 mb-6 text-center">
    //           <span className="block text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600">
    //             All Data Entries
    //           </span>
    //         </h1>

    //         {isLoading && <p className="text-center text-gray-600">Loading data...</p>}
    //         {error && <p className="text-center text-red-500">{error}</p>}

    //         {!isLoading && !error && (
    //           <div className="overflow-x-auto rounded-lg shadow-md border border-gray-200">
    //             <table className="min-w-full divide-y divide-gray-200">
    //               <thead className="bg-blue-600 text-white">
    //                 <tr>
    //                   <th scope="col" className="px-6 py-3 text-left text-sm font-medium uppercase tracking-wider">Prime Key</th>
    //                   <th scope="col" className="px-6 py-3 text-left text-sm font-medium uppercase tracking-wider">Credit Card</th>
    //                   <th scope="col" className="px-6 py-3 text-left text-sm font-medium uppercase tracking-wider">Contract Short Name</th>
    //                   <th scope="col" className="px-6 py-3 text-left text-sm font-medium uppercase tracking-wider">Vendor Name</th>
    //                   <th scope="col" className="px-6 py-3 text-left text-sm font-medium uppercase tracking-wider">Charge Date</th>
    //                   <th scope="col" className="px-6 py-3 text-left text-sm font-medium uppercase tracking-wider">Charge Amount</th>
    //                   <th scope="col" className="px-6 py-3 text-left text-sm font-medium uppercase tracking-wider">Submitted Date</th>
    //                   <th scope="col" className="px-6 py-3 text-left text-sm font-medium uppercase tracking-wider">Submitter</th>
    //                   <th scope="col" className="px-6 py-3 text-left text-sm font-medium uppercase tracking-wider">Charge Code</th>
    //                   <th scope="col" className="px-6 py-3 text-left text-sm font-medium uppercase tracking-wider">Notes</th>
    //                   <th scope="col" className="px-6 py-3 text-left text-sm font-medium uppercase tracking-wider">PDF</th>
    //                 </tr>
    //                 <tr className="bg-blue-500">
    //                   <td className="px-6 py-2">
    //                     <input type="text" placeholder="Filter..." className="w-full p-1 border rounded text-sm text-gray-700" value={filters.primeKey} onChange={(e) => handleFilterChange('primeKey', e.target.value)} />
    //                   </td>
    //                   <td className="px-6 py-2">
    //                     <input type="text" placeholder="Filter..." className="w-full p-1 border rounded text-sm text-gray-700" value={filters.creditCard} onChange={(e) => handleFilterChange('creditCard', e.target.value)} />
    //                   </td>
    //                   <td className="px-6 py-2">
    //                     <input type="text" placeholder="Filter..." className="w-full p-1 border rounded text-sm text-gray-700" value={filters.contractShortName} onChange={(e) => handleFilterChange('contractShortName', e.target.value)} />
    //                   </td>
    //                   <td className="px-6 py-2">
    //                     <input type="text" placeholder="Filter..." className="w-full p-1 border rounded text-sm text-gray-700" value={filters.vendorName} onChange={(e) => handleFilterChange('vendorName', e.target.value)} />
    //                   </td>
    //                   <td className="px-6 py-2">
    //                     <input type="text" placeholder="Filter..." className="w-full p-1 border rounded text-sm text-gray-700" value={filters.chargeDate} onChange={(e) => handleFilterChange('chargeDate', e.target.value)} />
    //                   </td>
    //                   <td className="px-6 py-2">
    //                     <input type="text" placeholder="Filter..." className="w-full p-1 border rounded text-sm text-gray-700" value={filters.chargeAmount} onChange={(e) => handleFilterChange('chargeAmount', e.target.value)} />
    //                   </td>
    //                   <td className="px-6 py-2">
    //                     <input type="text" placeholder="Filter..." className="w-full p-1 border rounded text-sm text-gray-700" value={filters.submittedDate} onChange={(e) => handleFilterChange('submittedDate', e.target.value)} />
    //                   </td>
    //                   <td className="px-6 py-2">
    //                     <input type="text" placeholder="Filter..." className="w-full p-1 border rounded text-sm text-gray-700" value={filters.submitter} onChange={(e) => handleFilterChange('submitter', e.target.value)} />
    //                   </td>
    //                   <td className="px-6 py-2">
    //                     <input type="text" placeholder="Filter..." className="w-full p-1 border rounded text-sm text-gray-700" value={filters.chargeCode} onChange={(e) => handleFilterChange('chargeCode', e.target.value)} />
    //                   </td>
    //                   <td className="px-6 py-2">
    //                     <input type="text" placeholder="Filter..." className="w-full p-1 border rounded text-sm text-gray-700" value={filters.notes} onChange={(e) => handleFilterChange('notes', e.target.value)} />
    //                   </td>
    //                   <td className="px-6 py-2">
    //                     <input type="text" placeholder="Filter..." className="w-full p-1 border rounded text-sm text-gray-700" value={filters.pdfFilePath} onChange={(e) => handleFilterChange('pdfFilePath', e.target.value)} />
    //                   </td>
    //                 </tr>
    //               </thead>
    //               <tbody className="bg-white divide-y divide-gray-200">
    //                 {filteredEntries.length > 0 ? (
    //                   filteredEntries.map((entry) => (
    //                     <tr
    //                       key={entry.id}
    //                       className={`hover:bg-gray-50 ${isUpdatedEntry(entry.primeKey) ? 'bg-yellow-50' : ''}`}
    //                     >
    //                       <td className="px-6 py-4 whitespace-nowrap text-base font-medium text-gray-900">{entry.primeKey}</td>
    //                       <td className="px-6 py-4 whitespace-nowrap text-base font-medium text-gray-900">{entry.creditCard}</td>
    //                       <td className="px-6 py-4 whitespace-nowrap text-base text-gray-700">{entry.contractShortName}</td>
    //                       <td className="px-6 py-4 whitespace-nowrap text-base text-gray-700">{entry.vendorName}</td>
    //                       <td className="px-6 py-4 whitespace-nowrap text-base text-gray-700">{formatDateForDisplay(entry.chargeDate)}</td>
    //                       <td className="px-6 py-4 whitespace-nowrap text-base text-gray-700">${entry.chargeAmount ? parseFloat(entry.chargeAmount).toFixed(2) : '0.00'}</td>
    //                       <td className="px-6 py-4 whitespace-nowrap text-base text-gray-700">{formatDateForDisplay(entry.submittedDate)}</td>
    //                       <td className="px-6 py-4 whitespace-nowrap text-base text-gray-700">{entry.submitter}</td>
    //                       <td className="px-6 py-4 whitespace-pre-wrap text-base text-gray-700">{entry.chargeCode}</td>
    //                       <td className="px-6 py-4 whitespace-pre-wrap text-base text-gray-700">{entry.notes}</td>
    //                       <td className="px-6 py-4 whitespace-nowrap text-base text-gray-700">
    //                         {entry.pdfFilePath ? (
    //                           <a href={entry.pdfFilePath} target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">View PDF</a>
    //                         ) : 'N/A'}
    //                       </td>
    //                     </tr>
    //                   ))
    //                 ) : (
    //                   <tr>
    //                     <td colSpan="11" className="px-6 py-4 text-center text-gray-600 italic">
    //                       No entries found. Adjust your filters or add some data.
    //                     </td>
    //                   </tr>
    //                 )}
    //               </tbody>
    //             </table>
    //           </div>
    //         )}

    //         <div className="mt-8 text-center">
    //           <button
    //             onClick={() => setCurrentPage('home')}
    //             className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-6 rounded-full shadow-md transition duration-300 ease-in-out transform hover:scale-105"
    //           >
    //             Back to Home
    //           </button>
    //         </div>
    //       </div>
    //     </div>
    //   );
    // };

    // export default ViewPage;
    


//     import React, { useState, useEffect } from 'react';

// // The API base URL is for your deployed backend.
// // const API_BASE_URL = 'https://rev-lumina.onrender.com/api/entries'; 
// const API_BASE_URL = 'http://localhost:5000/api/entries'; 

// // Helper to convert snake_case keys to camelCase.
// // This is a robust helper for nested objects and arrays.
// const snakeToCamel = (obj) => {
//   if (Array.isArray(obj)) {
//     return obj.map(v => snakeToCamel(v));
//   } else if (obj !== null && typeof obj === 'object') {
//     return Object.keys(obj).reduce((acc, key) => {
//       const camelKey = key.replace(/_([a-z])/g, (g) => g[1].toUpperCase());
//       acc[camelKey] = snakeToCamel(obj[key]);
//       return acc;
//     }, {});
//   }
//   return obj;
// };

// // Helper to format date for display (MM/DD/YYYY).
// const formatDateForDisplay = (isoString) => {
//   if (!isoString) return '';
//   const date = new Date(isoString);
//   // Ensure date is valid before formatting.
//   if (isNaN(date.getTime())) {
//     console.warn("Invalid date string received:", isoString);
//     return 'Invalid Date';
//   }
//   return date.toLocaleDateString('en-US', {
//     year: 'numeric',
//     month: '2-digit',
//     day: '2-digit',
//   });
// };

// // Helper to check if a primeKey indicates an updated entry.
// const isUpdatedEntry = (primeKey) => primeKey && primeKey.includes('.');

// const ViewPage = ({ setCurrentPage, userId, userRole }) => { // Receive userId and userRole
//   const [dataEntries, setDataEntries] = useState([]);
//   const [filteredEntries, setFilteredEntries] = useState([]);
//   const [isLoading, setIsLoading] = useState(true);
//   const [error, setError] = useState(null);
  
//   // State to hold the filter values for each column, now including new columns.
//   const [filters, setFilters] = useState({
//     primeKey: '',
//     creditCard: '',
//     contractShortName: '',
//     vendorName: '',
//     chargeDate: '',
//     chargeAmount: '',
//     submittedDate: '',
//     submitter: '',
//     chargeCode: '',
//     notes: '',
//     pdfFilePath: '',
//     apvNumber: '',          // NEW FILTER
//     accountingProcessed: '', // NEW FILTER
//     dateProcessed: ''        // NEW FILTER
//   });

//   // useEffect to fetch data from the API once on component mount.
//   const fetchEntries = async () => {
//     setIsLoading(true);
//     setError(null);
//     try {
//       // Include userId and userRole in the query parameters for filtering
//       const response = await fetch(`${API_BASE_URL}?userId=${userId}&userRole=${userRole}`);
      
//       if (!response.ok) {
//         throw new Error('Failed to fetch data entries');
//       }
//       const data = await response.json();
//       // Convert fetched data keys from snake_case to camelCase.
//       const camelCaseData = snakeToCamel(data);
//       setDataEntries(camelCaseData);
//     } catch (err) {
//       console.error('Error fetching data entries:', err);
//       setError('Failed to load data. Please try again later.');
//     } finally {
//       setIsLoading(false);
//     }
//   };

//   useEffect(() => {
//     if (userId && userRole) { // Only fetch if user info is available
//       fetchEntries();
//     }
//   }, [userId, userRole]); // Re-fetch when userId or userRole changes

//   // useEffect to filter data whenever dataEntries or filters change.
//   useEffect(() => {
//     // If the data is still loading or there's an error, don't attempt to filter.
//     if (isLoading || error) {
//       setFilteredEntries([]);
//       return;
//     }

//     // Filter the entries based on the current filter values.
//     const updatedEntries = dataEntries.filter(entry => {
//       // Check each filter key and value.
//       return Object.keys(filters).every(key => {
//         const filterValue = filters[key].toLowerCase();
//         // Handle date formatting for filtering.
//         const entryValue = key.includes('Date') 
//           ? formatDateForDisplay(entry[key]).toLowerCase()
//           : String(entry[key] || '').toLowerCase();
        
//         return entryValue.includes(filterValue);
//       });
//     });
//     setFilteredEntries(updatedEntries);
//   }, [dataEntries, filters, isLoading, error]);

//   // Handler for updating the filter state.
//   const handleFilterChange = (key, value) => {
//     setFilters(prevFilters => ({
//       ...prevFilters,
//       [key]: value
//     }));
//   };

//   return (
//     <div className="flex flex-col items-center min-h-screen w-full bg-gradient-to-br from-blue-50 to-indigo-100 p-8">
//       <div className="bg-white p-8 rounded-xl shadow-lg w-full max-w-full px-4">
//         <h1 className="text-4xl font-extrabold text-gray-800 mb-6 text-center">
//           <span className="block text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600">
//             All Data Entries
//           </span>
//         </h1>

//         {isLoading && <p className="text-center text-gray-600">Loading data...</p>}
//         {error && <p className="text-center text-red-500">{error}</p>}
        
//         {/* The table container and table are now always visible */}
//         {!isLoading && !error && (
//           <div className="overflow-x-auto rounded-lg shadow-md border border-gray-200">
//             <table className="min-w-full divide-y divide-gray-200">
//               <thead className="bg-blue-600 text-white">
//                 <tr>
//                   <th scope="col" className="px-6 py-3 text-left text-sm font-medium uppercase tracking-wider">Prime Key</th>
//                   <th scope="col" className="px-6 py-3 text-left text-sm font-medium uppercase tracking-wider">Credit Card</th>
//                   <th scope="col" className="px-6 py-3 text-left text-sm font-medium uppercase tracking-wider">Contract Short Name</th>
//                   <th scope="col" className="px-6 py-3 text-left text-sm font-medium uppercase tracking-wider">Vendor Name</th>
//                   <th scope="col" className="px-6 py-3 text-left text-sm font-medium uppercase tracking-wider">Charge Date</th>
//                   <th scope="col" className="px-6 py-3 text-left text-sm font-medium uppercase tracking-wider">Charge Amount</th>
//                   <th scope="col" className="px-6 py-3 text-left text-sm font-medium uppercase tracking-wider">Submitted Date</th>
//                   <th scope="col" className="px-6 py-3 text-left text-sm font-medium uppercase tracking-wider">Submitter</th>
//                   <th scope="col" className="px-6 py-3 text-left text-sm font-medium uppercase tracking-wider">Charge Code</th>
//                   <th scope="col" className="px-6 py-3 text-left text-sm font-medium uppercase tracking-wider">Notes</th>
//                   <th scope="col" className="px-6 py-3 text-left text-sm font-medium uppercase tracking-wider">PDF</th>
//                   <th scope="col" className="px-6 py-3 text-left text-sm font-medium uppercase tracking-wider">APV Number</th> {/* NEW HEADER */}
//                   <th scope="col" className="px-6 py-3 text-left text-sm font-medium uppercase tracking-wider">Accounting Processed</th> {/* NEW HEADER */}
//                   <th scope="col" className="px-6 py-3 text-left text-sm font-medium uppercase tracking-wider">Date Processed</th> {/* NEW HEADER */}
//                 </tr>
//                 {/* Filter row, now including new filters */}
//                 <tr className="bg-blue-500">
//                   <td className="px-6 py-2">
//                     <input type="text" placeholder="Filter..." className="w-full p-1 border rounded text-sm text-gray-700" value={filters.primeKey} onChange={(e) => handleFilterChange('primeKey', e.target.value)} />
//                   </td>
//                   <td className="px-6 py-2">
//                     <input type="text" placeholder="Filter..." className="w-full p-1 border rounded text-sm text-gray-700" value={filters.creditCard} onChange={(e) => handleFilterChange('creditCard', e.target.value)} />
//                   </td>
//                   <td className="px-6 py-2">
//                     <input type="text" placeholder="Filter..." className="w-full p-1 border rounded text-sm text-gray-700" value={filters.contractShortName} onChange={(e) => handleFilterChange('contractShortName', e.target.value)} />
//                   </td>
//                   <td className="px-6 py-2">
//                     <input type="text" placeholder="Filter..." className="w-full p-1 border rounded text-sm text-gray-700" value={filters.vendorName} onChange={(e) => handleFilterChange('vendorName', e.target.value)} />
//                   </td>
//                   <td className="px-6 py-2">
//                     <input type="text" placeholder="Filter..." className="w-full p-1 border rounded text-sm text-gray-700" value={filters.chargeDate} onChange={(e) => handleFilterChange('chargeDate', e.target.value)} />
//                   </td>
//                   <td className="px-6 py-2">
//                     <input type="text" placeholder="Filter..." className="w-full p-1 border rounded text-sm text-gray-700" value={filters.chargeAmount} onChange={(e) => handleFilterChange('chargeAmount', e.target.value)} />
//                   </td>
//                   <td className="px-6 py-2">
//                     <input type="text" placeholder="Filter..." className="w-full p-1 border rounded text-sm text-gray-700" value={filters.submittedDate} onChange={(e) => handleFilterChange('submittedDate', e.target.value)} />
//                   </td>
//                   <td className="px-6 py-2">
//                     <input type="text" placeholder="Filter..." className="w-full p-1 border rounded text-sm text-gray-700" value={filters.submitter} onChange={(e) => handleFilterChange('submitter', e.target.value)} />
//                   </td>
//                   <td className="px-6 py-2">
//                     <input type="text" placeholder="Filter..." className="w-full p-1 border rounded text-sm text-gray-700" value={filters.chargeCode} onChange={(e) => handleFilterChange('chargeCode', e.target.value)} />
//                   </td>
//                   <td className="px-6 py-2">
//                     <input type="text" placeholder="Filter..." className="w-full p-1 border rounded text-sm text-gray-700" value={filters.notes} onChange={(e) => handleFilterChange('notes', e.target.value)} />
//                   </td>
//                   <td className="px-6 py-2">
//                     <input type="text" placeholder="Filter..." className="w-full p-1 border rounded text-sm text-gray-700" value={filters.pdfFilePath} onChange={(e) => handleFilterChange('pdfFilePath', e.target.value)} />
//                   </td>
//                   <td className="px-6 py-2"> {/* NEW FILTER INPUT */}
//                     <input type="text" placeholder="Filter..." className="w-full p-1 border rounded text-sm text-gray-700" value={filters.apvNumber} onChange={(e) => handleFilterChange('apvNumber', e.target.value)} />
//                   </td>
//                   <td className="px-6 py-2"> {/* NEW FILTER INPUT */}
//                     <input type="text" placeholder="Filter..." className="w-full p-1 border rounded text-sm text-gray-700" value={filters.accountingProcessed} onChange={(e) => handleFilterChange('accountingProcessed', e.target.value)} />
//                   </td>
//                   <td className="px-6 py-2"> {/* NEW FILTER INPUT */}
//                     <input type="text" placeholder="Filter..." className="w-full p-1 border rounded text-sm text-gray-700" value={filters.dateProcessed} onChange={(e) => handleFilterChange('dateProcessed', e.target.value)} />
//                   </td>
//                 </tr>
//               </thead>
//               <tbody className="bg-white divide-y divide-gray-200">
//                 {filteredEntries.length > 0 ? (
//                   filteredEntries.map((entry) => (
//                     <tr
//                       key={entry.id}
//                       className={`hover:bg-gray-50 ${isUpdatedEntry(entry.primeKey) ? 'bg-yellow-50' : ''}`}
//                     >
//                       <td className="px-6 py-4 whitespace-nowrap text-base font-medium text-gray-900">{entry.primeKey}</td>
//                       <td className="px-6 py-4 whitespace-nowrap text-base font-medium text-gray-900">{entry.creditCard}</td>
//                       <td className="px-6 py-4 whitespace-nowrap text-base text-gray-700">{entry.contractShortName}</td>
//                       <td className="px-6 py-4 whitespace-nowrap text-base text-gray-700">{entry.vendorName}</td>
//                       <td className="px-6 py-4 whitespace-nowrap text-base text-gray-700">{formatDateForDisplay(entry.chargeDate)}</td>
//                       <td className="px-6 py-4 whitespace-nowrap text-base text-gray-700">${entry.chargeAmount ? parseFloat(entry.chargeAmount).toFixed(2) : '0.00'}</td>
//                       <td className="px-6 py-4 whitespace-nowrap text-base text-gray-700">{formatDateForDisplay(entry.submittedDate)}</td>
//                       <td className="px-6 py-4 whitespace-nowrap text-base text-gray-700">{entry.submitter}</td>
//                       <td className="px-6 py-4 whitespace-pre-wrap text-base text-gray-700">{entry.chargeCode}</td>
//                       <td className="px-6 py-4 whitespace-pre-wrap text-base text-gray-700">{entry.notes}</td>
//                       <td className="px-6 py-4 whitespace-nowrap text-base text-gray-700">
//                         {entry.pdfFilePath ? (
//                           <a href={entry.pdfFilePath} target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">View PDF</a>
//                         ) : 'N/A'}
//                       </td>
//                       {/* NEW DATA CELLS */}
//                       <td className="px-6 py-4 whitespace-nowrap text-base text-gray-700">{entry.apvNumber || 'N/A'}</td>
//                       <td className="px-6 py-4 whitespace-nowrap text-base text-gray-700">
//                         {entry.accountingProcessed === 'T' ? 'Yes' : (entry.accountingProcessed === 'F' ? 'No' : 'N/A')}
//                       </td>
//                       <td className="px-6 py-4 whitespace-nowrap text-base text-gray-700">{formatDateForDisplay(entry.dateProcessed)}</td>
//                     </tr>
//                   ))
//                 ) : (
//                   <tr>
//                     <td colSpan="14" className="px-6 py-4 text-center text-gray-600 italic"> {/* Adjusted colSpan */}
//                       No entries found. Adjust your filters or add some data.
//                     </td>
//                   </tr>
//                 )}
//               </tbody>
//             </table>
//           </div>
//         )}

//         <div className="mt-8 text-center">
//           <button
//             onClick={() => setCurrentPage('home')}
//             className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-6 rounded-full shadow-md transition duration-300 ease-in-out transform hover:scale-105"
//           >
//             Back to Home
//           </button>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default ViewPage;

// Stable 1 ///

// import React, { useState, useEffect } from 'react';

// // Helper to format date for display (MM/DD/YYYY).
// const formatDateForDisplay = (isoString) => {
//   if (!isoString) return '';
//   const date = new Date(isoString);
//   if (isNaN(date.getTime())) {
//     return 'Invalid Date';
//   }
//   return date.toLocaleDateString('en-US', {
//     year: 'numeric',
//     month: '2-digit',
//     day: '2-digit',
//   });
// };

// // Helper to check if a primeKey indicates an updated entry.
// const isUpdatedEntry = (primeKey) => primeKey && String(primeKey).includes('.');

// const ViewPage = ({ dataEntries, isLoading, error, openAddDataModal, openEditDataModal }) => {
//   const [filteredEntries, setFilteredEntries] = useState([]);
//   const [searchQuery, setSearchQuery] = useState(''); // State for the single search query

//   useEffect(() => {
//     if (isLoading || error) {
//       setFilteredEntries([]);
//       return;
//     }

//     if (!searchQuery) {
//       setFilteredEntries(dataEntries);
//       return;
//     }

//     const lowercasedQuery = searchQuery.toLowerCase();

//     const updatedEntries = dataEntries.filter(entry => {
//       return Object.values(entry).some(value => {
//         if (typeof value === 'string' && value.match(/^\d{4}-\d{2}-\d{2}T/)) {
//             return formatDateForDisplay(value).toLowerCase().includes(lowercasedQuery);
//         }
//         return String(value || '').toLowerCase().includes(lowercasedQuery);
//       });
//     });
//     setFilteredEntries(updatedEntries);
//   }, [dataEntries, searchQuery, isLoading, error]);

//   return (
//     <div className="bg-white p-8 rounded-xl shadow-lg w-full max-w-full">
//       {/* --- MODIFIED HEADER SECTION --- */}
//       <div className="flex justify-between items-center mb-6">
//         <h1 className="text-4xl font-extrabold text-gray-800">
//           <span className="block text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600">
//             All Data Entries
//           </span>
//         </h1>
        
//         {/* Group for search bar and buttons */}
//         <div className="flex items-center space-x-4">
//           <input
//             type="text"
//             placeholder="Search..."
//             value={searchQuery}
//             onChange={(e) => setSearchQuery(e.target.value)}
//             className="w-64 p-3 border border-gray-300 rounded-full shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-400"
//           />
//           <button
//             onClick={openAddDataModal}
//             className="bg-green-500 hover:bg-green-600 text-white font-bold py-3 px-6 rounded-full shadow-lg transition duration-300 ease-in-out transform hover:scale-105"
//           >
//             Add Data
//           </button>
//           <button
//             onClick={openEditDataModal}
//             className="bg-yellow-500 hover:bg-yellow-600 text-white font-bold py-3 px-6 rounded-full shadow-lg transition duration-300 ease-in-out transform hover:scale-105"
//           >
//             Edit Data
//           </button>
//         </div>
//       </div>
//       {/* --- END OF MODIFIED SECTION --- */}

//       {isLoading && <p className="text-center text-gray-600">Loading data...</p>}
//       {error && <p className="text-center text-red-500">{error}</p>}
      
//       {!isLoading && !error && (
//         <div className="overflow-x-auto rounded-lg shadow-md border border-gray-200">
//           <table className="min-w-full divide-y divide-gray-200">
//             {/* Table content remains the same... */}
//             <thead className="bg-blue-600 text-white">
//               <tr>
//                 <th scope="col" className="px-6 py-3 text-left text-sm font-medium uppercase tracking-wider">Prime Key</th>
//                 <th scope="col" className="px-6 py-3 text-left text-sm font-medium uppercase tracking-wider">Credit Card</th>
//                 <th scope="col" className="px-6 py-3 text-left text-sm font-medium uppercase tracking-wider">Contract Short Name</th>
//                 <th scope="col" className="px-6 py-3 text-left text-sm font-medium uppercase tracking-wider">Vendor Name</th>
//                 <th scope="col" className="px-6 py-3 text-left text-sm font-medium uppercase tracking-wider">Charge Date</th>
//                 <th scope="col" className="px-6 py-3 text-left text-sm font-medium uppercase tracking-wider">Charge Amount</th>
//                 <th scope="col" className="px-6 py-3 text-left text-sm font-medium uppercase tracking-wider">Submitted Date</th>
//                 <th scope="col" className="px-6 py-3 text-left text-sm font-medium uppercase tracking-wider">Submitter</th>
//                 <th scope="col" className="px-6 py-3 text-left text-sm font-medium uppercase tracking-wider">Charge Code</th>
//                 <th scope="col" className="px-6 py-3 text-left text-sm font-medium uppercase tracking-wider">Notes</th>
//                 <th scope="col" className="px-6 py-3 text-left text-sm font-medium uppercase tracking-wider">PDF</th>
//                 <th scope="col" className="px-6 py-3 text-left text-sm font-medium uppercase tracking-wider">APV Number</th>
//                 <th scope="col" className="px-6 py-3 text-left text-sm font-medium uppercase tracking-wider">Accounting Processed</th>
//                 <th scope="col" className="px-6 py-3 text-left text-sm font-medium uppercase tracking-wider">Date Processed</th>
//               </tr>
//             </thead>
//             <tbody className="bg-white divide-y divide-gray-200">
//               {filteredEntries.length > 0 ? (
//                 filteredEntries.map((entry) => (
//                   <tr
//                     key={entry.id}
//                     className={`hover:bg-gray-50 ${isUpdatedEntry(entry.primeKey) ? 'bg-yellow-50' : ''}`}
//                   >
//                     <td className="px-6 py-4 whitespace-nowrap text-base font-medium text-gray-900">{entry.primeKey}</td>
//                     <td className="px-6 py-4 whitespace-nowrap text-base font-medium text-gray-900">{entry.creditCard}</td>
//                     <td className="px-6 py-4 whitespace-nowrap text-base text-gray-700">{entry.contractShortName}</td>
//                     <td className="px-6 py-4 whitespace-nowrap text-base text-gray-700">{entry.vendorName}</td>
//                     <td className="px-6 py-4 whitespace-nowrap text-base text-gray-700">{formatDateForDisplay(entry.chargeDate)}</td>
//                     <td className="px-6 py-4 whitespace-nowrap text-base text-gray-700">${entry.chargeAmount ? parseFloat(entry.chargeAmount).toFixed(2) : '0.00'}</td>
//                     <td className="px-6 py-4 whitespace-nowrap text-base text-gray-700">{formatDateForDisplay(entry.submittedDate)}</td>
//                     <td className="px-6 py-4 whitespace-nowrap text-base text-gray-700">{entry.submitter}</td>
//                     <td className="px-6 py-4 whitespace-pre-wrap text-base text-gray-700">{entry.chargeCode}</td>
//                     <td className="px-6 py-4 whitespace-pre-wrap text-base text-gray-700">{entry.notes}</td>
//                     <td className="px-6 py-4 whitespace-nowrap text-base text-gray-700">
//                       {entry.pdfFilePath ? (
//                         <a href={entry.pdfFilePath} target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">View PDF</a>
//                       ) : 'N/A'}
//                     </td>
//                     <td className="px-6 py-4 whitespace-nowrap text-base text-gray-700">{entry.apvNumber || 'N/A'}</td>
//                     <td className="px-6 py-4 whitespace-nowrap text-base text-gray-700">
//                       {entry.accountingProcessed === 'T' ? 'Yes' : (entry.accountingProcessed === 'F' ? 'No' : 'N/A')}
//                     </td>
//                     <td className="px-6 py-4 whitespace-nowrap text-base text-gray-700">{formatDateForDisplay(entry.dateProcessed)}</td>
//                   </tr>
//                 ))
//               ) : (
//                 <tr>
//                   <td colSpan="14" className="px-6 py-4 text-center text-gray-600 italic">
//                     No entries found.
//                   </td>
//                 </tr>
//               )}
//             </tbody>
//           </table>
//         </div>
//       )}
//     </div>
//   );
// };

// export default ViewPage;



// STABLE 1 END ///


// STABLE 2 ///

// import React, { useState, useEffect, useMemo } from 'react';
// import { ChevronDown, ChevronRight } from 'lucide-react';
// import * as XLSX from 'xlsx';

// const formatDateForDisplay = (isoString) => {
//   if (!isoString) return '';
//   const date = new Date(isoString);
//   if (isNaN(date.getTime())) return 'Invalid Date';
//   return date.toLocaleDateString('en-US', { year: 'numeric', month: '2-digit', day: '2-digit' });
// };

// const ViewPage = ({ dataEntries, isLoading, error, openAddDataModal, openEditDataModal, openExportModal }) => {
//   // const [searchQuery, setSearchQuery] = useState(''); 
//   const [searchColumn, setSearchColumn] = useState('all'); // Default to searching all fields
//   const [searchValue, setSearchValue] = useState('');   // The text the user types
//   const [expandedRows, setExpandedRows] = useState(new Set());
//   const [selectedRows, setSelectedRows] = useState(new Set());
// // Add this array inside your ViewPage component
// const searchableColumns = [
//     { key: 'all', name: 'All Fields' }, // Default option
//     { key: 'creditCard', name: 'Credit Card' },
//     { key: 'contractShortName', name: 'Contract' },
//     { key: 'vendorName', name: 'Vendor' },
//     { key: 'submitter', name: 'Submitter' },
//     { key: 'chargeAmount', name: 'Amount' },
//     { key: 'chargeDate', name: 'Charge Date' },
// ];
//   // const groupedEntries = useMemo(() => {
//   //   if (!dataEntries) return [];
//   //   const groups = dataEntries.reduce((acc, entry) => {
//   //     const baseKey = String(entry.primeKey).split('.')[0];
//   //     if (!acc[baseKey]) acc[baseKey] = [];
//   //     acc[baseKey].push(entry);
//   //     return acc;
//   //   }, {});
//   //   for (const key in groups) {
//   //     groups[key].sort((a, b) => parseFloat(b.primeKey) - parseFloat(a.primeKey));
//   //   }
//   //   const lowercasedQuery = searchQuery.toLowerCase();
//   //   if (!lowercasedQuery) return Object.values(groups);
//   //   return Object.values(groups).filter(group =>
//   //     group.some(entry =>
//   //       Object.values(entry).some(value =>
//   //         String(value || '').toLowerCase().includes(lowercasedQuery)
//   //       )
//   //     )
//   //   );
//   // }, [dataEntries, searchQuery]);
//   const groupedEntries = useMemo(() => {
//     if (!dataEntries) return [];
//     const groups = dataEntries.reduce((acc, entry) => {
//       const baseKey = String(entry.primeKey).split('.')[0];
//       if (!acc[baseKey]) acc[baseKey] = [];
//       acc[baseKey].push(entry);
//       return acc;
//     }, {});

//     for (const key in groups) {
//       groups[key].sort((a, b) => parseFloat(b.primeKey) - parseFloat(a.primeKey));
//     }

//     if (!searchValue) {
//       return Object.values(groups);
//     }

//     const lowercasedValue = searchValue.toLowerCase();

//     return Object.values(groups).filter(group =>
//       group.some(entry => {
//         if (searchColumn === 'all') {
//           // Search all values in the entry object if 'All Fields' is selected
//           return Object.values(entry).some(value => {
//             const entryValue = (String(value) || '').toLowerCase();
//             return entryValue.includes(lowercasedValue);
//           });
//         } else {
//           // Otherwise, search only the selected column
//           const entryValue = searchColumn.includes('Date')
//             ? formatDateForDisplay(entry[searchColumn])
//             : String(entry[searchColumn] || '');
//           return entryValue.toLowerCase().includes(lowercasedValue);
//         }
//       })
//     );
// }, [dataEntries, searchColumn, searchValue]);

//   const visibleEntryIds = useMemo(() => groupedEntries.flat().map(entry => entry.id), [groupedEntries]);

//   const handleSelectAll = (e) => {
//     if (e.target.checked) {
//       setSelectedRows(new Set(visibleEntryIds));
//     } else {
//       setSelectedRows(new Set());
//     }
//   };

//   const handleSelectRow = (id) => {
//     const newSelectedRows = new Set(selectedRows);
//     if (newSelectedRows.has(id)) {
//       newSelectedRows.delete(id);
//     } else {
//       newSelectedRows.add(id);
//     }
//     setSelectedRows(newSelectedRows);
//   };

//   const handleExport = () => {
//     let dataToExport;
//     if (selectedRows.size > 0) {
//       dataToExport = dataEntries.filter(entry => selectedRows.has(entry.id));
//       if (dataToExport.length === 0) {
//         alert("No rows selected for export.");
//         return;
//       }
//       const dataForSheet = dataToExport.map(entry => ({
//         "Prime Key": entry.primeKey,
//         "Credit Card": entry.creditCard,
//         "Contract Short Name": entry.contractShortName,
//         "Vendor Name": entry.vendorName,
//         "Charge Date": formatDateForDisplay(entry.chargeDate),
//         "Charge Amount": entry.chargeAmount,
//         "Submitted Date": formatDateForDisplay(entry.submittedDate),
//         "Submitter": entry.submitter,
//         "Charge Code": entry.chargeCode,
//         "Notes": entry.notes,
//         "PDF File Path": entry.pdfFilePath,
//         "APV Number": entry.apvNumber,
//         "Accounting Processed": entry.accountingProcessed === 'T' ? 'Yes' : 'No',
//         "Date Processed": formatDateForDisplay(entry.dateProcessed),
//       }));
//       const worksheet = XLSX.utils.json_to_sheet(dataForSheet);
//       const workbook = XLSX.utils.book_new();
//       XLSX.utils.book_append_sheet(workbook, worksheet, "SelectedData");
//       XLSX.writeFile(workbook, "LuminaSelectionExport.xlsx");
//     } else {
//       openExportModal();
//     }
//   };

//   const toggleRowExpansion = (baseKey) => {
//     setExpandedRows(prev => {
//       const newSet = new Set(prev);
//       if (newSet.has(baseKey)) newSet.delete(baseKey);
//       else newSet.add(baseKey);
//       return newSet;
//     });
//   };
  
//   // This Row component is defined inside ViewPage so it can access its state and functions
//   const Row = ({ entry, isHistory }) => (
//     <React.Fragment>
//       <td className="p-4">
//           <input
//               type="checkbox"
//               className="form-checkbox h-5 w-5 text-blue-600"
//               checked={selectedRows.has(entry.id)}
//               onChange={() => handleSelectRow(entry.id)}
//           />
//       </td>
//       <td className={`px-6 py-4 whitespace-nowrap text-base ${isHistory ? 'text-gray-500 pl-12' : 'font-medium text-gray-900'}`}>{entry.primeKey}</td>
//       <td className={`px-6 py-4 whitespace-nowrap text-base ${isHistory ? 'text-gray-500' : 'font-medium text-gray-900'}`}>{entry.creditCard}</td>
//       <td className={`px-6 py-4 whitespace-nowrap text-base ${isHistory ? 'text-gray-500' : 'text-gray-700'}`}>{entry.contractShortName}</td>
//       <td className={`px-6 py-4 whitespace-nowrap text-base ${isHistory ? 'text-gray-500' : 'text-gray-700'}`}>{entry.vendorName}</td>
//       <td className={`px-6 py-4 whitespace-nowrap text-base ${isHistory ? 'text-gray-500' : 'text-gray-700'}`}>{formatDateForDisplay(entry.chargeDate)}</td>
//       <td className={`px-6 py-4 whitespace-nowrap text-base ${isHistory ? 'text-gray-500' : 'text-gray-700'}`}>${entry.chargeAmount ? parseFloat(entry.chargeAmount).toFixed(2) : '0.00'}</td>
//       <td className={`px-6 py-4 whitespace-nowrap text-base ${isHistory ? 'text-gray-500' : 'text-gray-700'}`}>{formatDateForDisplay(entry.submittedDate)}</td>
//       <td className={`px-6 py-4 whitespace-nowrap text-base ${isHistory ? 'text-gray-500' : 'text-gray-700'}`}>{entry.submitter}</td>
//       <td className={`px-6 py-4 whitespace-pre-wrap text-base ${isHistory ? 'text-gray-500' : 'text-gray-700'}`}>{entry.chargeCode}</td>
//       <td className={`px-6 py-4 whitespace-pre-wrap text-base ${isHistory ? 'text-gray-500' : 'text-gray-700'}`}>{entry.notes}</td>
//       <td className={`px-6 py-4 whitespace-nowrap text-base ${isHistory ? 'text-gray-500' : 'text-gray-700'}`}>
//         {entry.pdfFilePath ? <a href={entry.pdfFilePath} target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">View PDF</a> : 'N/A'}
//       </td>
//       <td className={`px-6 py-4 whitespace-nowrap text-base ${isHistory ? 'text-gray-500' : 'text-gray-700'}`}>{entry.apvNumber || 'N/A'}</td>
//       <td className={`px-6 py-4 whitespace-nowrap text-base ${isHistory ? 'text-gray-500' : 'text-gray-700'}`}>{entry.accountingProcessed === 'T' ? 'Yes' : (entry.accountingProcessed === 'F' ? 'No' : 'N/A')}</td>
//       <td className={`px-6 py-4 whitespace-nowrap text-base ${isHistory ? 'text-gray-500' : 'text-gray-700'}`}>{formatDateForDisplay(entry.dateProcessed)}</td>
//     </React.Fragment>
//   );

//   return (
//     <>
//       <div className="bg-white p-8 rounded-xl shadow-lg w-full max-w-full">
//         {/* <div className="flex justify-between items-center mb-6">
//           <h1 className="text-4xl font-extrabold text-gray-800">
//             <span className="block text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600">
//               All Data Entries
//             </span>
//           </h1>
//           <div className="flex items-center space-x-4">
//             <input
//               type="text"
//               placeholder="Search..."
//               value={searchQuery}
//               onChange={(e) => setSearchQuery(e.target.value)}
//               className="w-64 p-3 border border-gray-300 rounded-full shadow-sm"
//             />
//             <button onClick={handleExport} className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-3 px-6 rounded-full shadow-lg">
//               {selectedRows.size > 0 ? `Export ${selectedRows.size} Selected` : 'Advanced Export'}
//             </button>
//             <button onClick={openAddDataModal} className="bg-green-500 hover:bg-green-600 text-white font-bold py-3 px-6 rounded-full shadow-lg">Add Data</button>
//             <button onClick={openEditDataModal} className="bg-yellow-500 hover:bg-yellow-600 text-white font-bold py-3 px-6 rounded-full shadow-lg">Edit Data</button>
//           </div>
//         </div> */}

//         <div className="flex justify-between items-center mb-6">
//   <h1 className="text-4xl font-extrabold text-gray-800">
//     <span className="block text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600">
//       All Data Entries
//     </span>
//   </h1>
//   <div className="flex items-center space-x-4">
//     {/* --- NEW ADVANCED SEARCH BAR --- */}
//     <div className="flex items-center border border-gray-300 rounded-full shadow-sm bg-white">
//         <select
//             value={searchColumn}
//             onChange={(e) => setSearchColumn(e.target.value)}
//             className="p-3 bg-gray-50 border-r border-gray-300 rounded-l-full focus:outline-none text-gray-600 appearance-none"
//         >
//             {searchableColumns.map(col => (
//                 <option key={col.key} value={col.key}>{col.name}</option>
//             ))}
//         </select>
//         <input
//             type="text"
//             placeholder={`Search in ${searchableColumns.find(c => c.key === searchColumn).name}...`}
//             value={searchValue}
//             onChange={(e) => setSearchValue(e.target.value)}
//             className="w-64 p-3 rounded-r-full focus:outline-none"
//         />
//     </div>

//     <button onClick={handleExport} className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-3 px-6 rounded-full shadow-lg">
//       {selectedRows.size > 0 ? `Export ${selectedRows.size} Selected` : 'Advanced Export'}
//     </button>
//     <button onClick={openAddDataModal} className="bg-green-500 hover:bg-green-600 text-white font-bold py-3 px-6 rounded-full shadow-lg">Add Data</button>
//     <button onClick={openEditDataModal} className="bg-yellow-500 hover:bg-yellow-600 text-white font-bold py-3 px-6 rounded-full shadow-lg">Edit Data</button>
//   </div>
// </div>
        
//         {!isLoading && !error && (
//           <div className="overflow-x-auto rounded-lg shadow-md border border-gray-200">
//             <table className="min-w-full divide-y divide-gray-200">
//               <thead className="bg-blue-600 text-white">
//                 <tr>
//                   <th scope="col" className="p-4">
//                     <input type="checkbox" onChange={handleSelectAll} checked={visibleEntryIds.length > 0 && selectedRows.size === visibleEntryIds.length} className="form-checkbox h-5 w-5"/>
//                   </th>
//                   <th className="px-6 py-3 text-left text-sm font-medium uppercase tracking-wider">Prime Key</th>
//                   <th className="px-6 py-3 text-left text-sm font-medium uppercase tracking-wider">Credit Card</th>
//                   <th className="px-6 py-3 text-left text-sm font-medium uppercase tracking-wider">Contract Short Name</th>
//                   <th className="px-6 py-3 text-left text-sm font-medium uppercase tracking-wider">Vendor Name</th>
//                   <th className="px-6 py-3 text-left text-sm font-medium uppercase tracking-wider">Charge Date</th>
//                   <th className="px-6 py-3 text-left text-sm font-medium uppercase tracking-wider">Charge Amount</th>
//                   <th className="px-6 py-3 text-left text-sm font-medium uppercase tracking-wider">Submitted Date</th>
//                   <th className="px-6 py-3 text-left text-sm font-medium uppercase tracking-wider">Submitter</th>
//                   <th className="px-6 py-3 text-left text-sm font-medium uppercase tracking-wider">Charge Code</th>
//                   <th className="px-6 py-3 text-left text-sm font-medium uppercase tracking-wider">Notes</th>
//                   <th className="px-6 py-3 text-left text-sm font-medium uppercase tracking-wider">PDF</th>
//                   <th className="px-6 py-3 text-left text-sm font-medium uppercase tracking-wider">APV Number</th>
//                   <th className="px-6 py-3 text-left text-sm font-medium uppercase tracking-wider">Accounting Processed</th>
//                   <th className="px-6 py-3 text-left text-sm font-medium uppercase tracking-wider">Date Processed</th>
//                 </tr>
//               </thead>
//               <tbody className="bg-white divide-y divide-gray-200">
//                 {isLoading && <tr><td colSpan="15" className="text-center py-4">Loading...</td></tr>}
//                 {error && <tr><td colSpan="15" className="text-center py-4 text-red-500">{error}</td></tr>}
//                 {!isLoading && !error && groupedEntries.length > 0 ? (
//                   groupedEntries.map((group) => {
//                     const latestEntry = group[0];
//                     const baseKey = String(latestEntry.primeKey).split('.')[0];
//                     const isExpanded = expandedRows.has(baseKey);
//                     const hasHistory = group.length > 1;
//                     return (
//                       <React.Fragment key={baseKey}>
//                         <tr className="hover:bg-gray-50">
//                             {/* This is the crucial fix: The first row now correctly includes the chevron button */}
//                             <td className="p-4"><input type="checkbox" checked={selectedRows.has(latestEntry.id)} onChange={() => handleSelectRow(latestEntry.id)} className="form-checkbox h-5 w-5"/></td>
//                             <td className="px-6 py-4 whitespace-nowrap text-base font-medium text-gray-900">
//                                 <div className="flex items-center gap-2">
//                                 {hasHistory ? <button onClick={() => toggleRowExpansion(baseKey)} className="p-0.5 rounded-full hover:bg-gray-200">{isExpanded ? <ChevronDown size={18} /> : <ChevronRight size={18} />}</button> : <span className="w-[28px]" />}
//                                 <span>{latestEntry.primeKey}</span>
//                                 </div>
//                             </td>
//                             <td className="px-6 py-4">{latestEntry.creditCard}</td>
//                             <td className="px-6 py-4">{latestEntry.contractShortName}</td>
//                             <td className="px-6 py-4">{latestEntry.vendorName}</td>
//                             <td className="px-6 py-4">{formatDateForDisplay(latestEntry.chargeDate)}</td>
//                             <td className="px-6 py-4">${latestEntry.chargeAmount ? parseFloat(latestEntry.chargeAmount).toFixed(2) : '0.00'}</td>
//                             <td className="px-6 py-4">{formatDateForDisplay(latestEntry.submittedDate)}</td>
//                             <td className="px-6 py-4">{latestEntry.submitter}</td>
//                             <td className="px-6 py-4">{latestEntry.chargeCode}</td>
//                             <td className="px-6 py-4">{latestEntry.notes}</td>
//                             <td className="px-6 py-4">{latestEntry.pdfFilePath ? <a href={latestEntry.pdfFilePath} target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">View PDF</a> : 'N/A'}</td>
//                             <td className="px-6 py-4">{latestEntry.apvNumber || 'N/A'}</td>
//                             <td className="px-6 py-4">{latestEntry.accountingProcessed === 'T' ? 'Yes' : 'No'}</td>
//                             <td className="px-6 py-4">{formatDateForDisplay(latestEntry.dateProcessed)}</td>
//                         </tr>
//                         {isExpanded && group.slice(1).map(entry => (
//                           <tr key={entry.id} className="bg-gray-50 hover:bg-gray-100"><Row entry={entry} isHistory={true} /></tr>
//                         ))}
//                       </React.Fragment>
//                     );
//                   })
//                 ) : (
//                   <tr><td colSpan="15" className="px-6 py-4 text-center text-gray-600 italic">No entries found.</td></tr>
//                 )}
//               </tbody>
//             </table>
//           </div>
//         )}
//       </div>
//     </>
//   );
// };

// export default ViewPage;


// STABLE 2 END ///

// import React, { useState, useMemo } from 'react';
// // import { ChevronDown, ChevronRight, Plus, Pencil, Download, Search } from 'lucide-react';
// import { ChevronDown, ChevronRight, Plus, Pencil, Download, Search, UserCircle,LogOut } from 'lucide-react';


// import * as XLSX from 'xlsx';

// const formatDateForDisplay = (isoString) => {
//   if (!isoString) return '';
//   const date = new Date(isoString);
//   if (isNaN(date.getTime())) return 'Invalid Date';
//   return date.toLocaleDateString('en-US', { year: 'numeric', month: '2-digit', day: '2-digit' , timeZone: 'UTC'});
// };

// // const ViewPage = ({ dataEntries, isLoading, error, openAddDataModal, openEditDataModal, openExportModal }) => {
//   const ViewPage = ({ dataEntries, isLoading, error, openAddDataModal, openEditDataModal, openExportModal, userName = 'User',userAvatar,handleLogout, currentUserRole }) => {
//   const [searchColumn, setSearchColumn] = useState('all');
//   const [searchValue, setSearchValue] = useState('');
//   const [showOnlyLatest, setShowOnlyLatest] = useState(false);
//   const [expandedRows, setExpandedRows] = useState(new Set());
//   const [selectedRows, setSelectedRows] = useState(new Set());
//   const [isExporting, setIsExporting] = useState(false);

//   const searchableColumns = [
//     { key: 'all', name: 'All Fields' },
//     { key: 'creditCard', name: 'Credit Card' },
//     { key: 'contractShortName', name: 'Contract' },
//     { key: 'vendorName', name: 'Vendor' },
//     { key: 'submitter', name: 'Submitter' },
//     { key: 'chargeAmount', name: 'Amount' },
//     { key: 'chargeDate', name: 'Charge Date' },
//   ];

//   const groupedEntries = useMemo(() => {
//     if (!dataEntries) return [];
    
//     const groups = dataEntries.reduce((acc, entry) => {
//       const baseKey = String(entry.primeKey).split('.')[0];
//       if (!acc[baseKey]) acc[baseKey] = [];
//       acc[baseKey].push(entry);
//       return acc;
//     }, {});

//     for (const key in groups) {
//       groups[key].sort((a, b) => parseFloat(b.primeKey) - parseFloat(a.primeKey));
//     }

//     let filteredGroups = Object.values(groups);

//     if (searchValue) {
//       const lowercasedValue = searchValue.toLowerCase();
//       filteredGroups = filteredGroups.filter(group =>
//         group.some(entry => {
//           if (searchColumn === 'all') {
//             return Object.values(entry).some(value => 
//               (String(value) || '').toLowerCase().includes(lowercasedValue)
//             );
//           } else {
//             const entryValue = searchColumn.includes('Date')
//               ? formatDateForDisplay(entry[searchColumn])
//               : String(entry[searchColumn] || '');
//             return entryValue.toLowerCase().includes(lowercasedValue);
//           }
//         })
//       );
//     }

//     if (showOnlyLatest) {
//       return filteredGroups.map(group => [group[0]]);
//     }

//     return filteredGroups;
//   }, [dataEntries, searchColumn, searchValue, showOnlyLatest]);

//   const visibleEntryIds = useMemo(() => groupedEntries.flat().map(entry => entry.id), [groupedEntries]);

//   const handleSelectAll = (e) => {
//     if (e.target.checked) {
//       setSelectedRows(new Set(visibleEntryIds));
//     } else {
//       setSelectedRows(new Set());
//     }
//   };

//   const handleSelectRow = (id) => {
//     const newSelectedRows = new Set(selectedRows);
//     const entryToToggle = dataEntries.find(e => e.id === id);
//     if (!entryToToggle) return;

//     if (newSelectedRows.has(id)) {
//       newSelectedRows.delete(id);
//     } else {
//       newSelectedRows.add(id);
//       const baseKey = String(entryToToggle.primeKey).split('.')[0];
//       setExpandedRows(prevExpanded => {
//         if (prevExpanded.has(baseKey)) {
//           return prevExpanded;
//         }
//         const newExpanded = new Set(prevExpanded);
//         newExpanded.add(baseKey);
//         return newExpanded;
//       });
//     }
//     setSelectedRows(newSelectedRows);
//   };

//   // const handleExport = () => {
//   //   let dataToExport;
//   //   if (selectedRows.size > 0) {
//   //     dataToExport = dataEntries.filter(entry => selectedRows.has(entry.id));
//   //     if (dataToExport.length === 0) {
//   //       alert("No rows selected for export.");
//   //       return;
//   //     }
//   //     const dataForSheet = dataToExport.map(entry => ({
//   //       "Prime Key": entry.primeKey,
//   //       "Credit Card": entry.creditCard,
//   //       "Contract Short Name": entry.contractShortName,
//   //       "Vendor Name": entry.vendorName,
//   //       "Charge Date": formatDateForDisplay(entry.chargeDate),
//   //       "Charge Amount": entry.chargeAmount,
//   //       "Submitted Date": formatDateForDisplay(entry.submittedDate),
//   //       "Submitter": entry.submitter,
//   //       "Charge Code": entry.chargeCode,
//   //       "Notes": entry.notes,
//   //       "PDF File Path": entry.pdfFilePath,
//   //       "APV Number": entry.apvNumber,
//   //       "Accounting Processed": entry.accountingProcessed === 'T' ? 'Yes' : 'No',
//   //       "Date Processed": formatDateForDisplay(entry.dateProcessed),
//   //     }));
//   //     const worksheet = XLSX.utils.json_to_sheet(dataForSheet);
//   //     const workbook = XLSX.utils.book_new();
//   //     XLSX.utils.book_append_sheet(workbook, worksheet, "SelectedData");
//   //     XLSX.writeFile(workbook, "LuminaSelectionExport.xlsx");
//   //   } else {
//   //     openExportModal();
//   //   }
//   // };
//   const handleExport = async () => {
//   if (selectedRows.size > 0) {
//     setIsExporting(true);
//     try {
//       const dataToExport = dataEntries.filter(entry => selectedRows.has(entry.id));
//       if (dataToExport.length === 0) {
//         alert("No rows selected for export.");
//         return;
//       }

//       // Prepare data with the correct headers, changing "Prime Key" to "Record No"
//       const dataForSheet = dataToExport.map(entry => ({
//         "Record No": entry.primeKey, // Changed header
//         "Credit Card": entry.creditCard,
//         "Contract Short Name": entry.contractShortName,
//         "Vendor Name": entry.vendorName,
//         "Charge Date": formatDateForDisplay(entry.chargeDate),
//         "Charge Amount": entry.chargeAmount,
//         "Submitted Date": formatDateForDisplay(entry.submittedDate),
//         "Submitter": entry.submitter,
//         "Charge Code": entry.chargeCode,
//         "Notes": entry.notes,
//         "PDF File Path": entry.pdfFilePath,
//         "APV Number": entry.apvNumber,
//         "Accounting Processed": entry.accountingProcessed === 'T' ? 'Yes' : 'No',
//         "Date Processed": formatDateForDisplay(entry.dateProcessed),
//       }));

//       // Call the backend to generate the Excel file
//       // const API_BASE_URL = import.meta.env.VITE_API_BASE_URL || 'http://localhost:5000/api';
//       const API_BASE_URL = `${import.meta.env.VITE_API_BASE_URL}/entries`;
//       const response = await fetch(`${import.meta.env.VITE_API_BASE_URL}/generate-excel`, {
//         method: 'POST',
//         headers: { 'Content-Type': 'application/json' },
//         body: JSON.stringify({ data: dataForSheet }),
//       });

//       if (!response.ok) {
//         throw new Error('Server failed to generate the Excel file.');
//       }

//       // Receive the file and trigger the download
//       const blob = await response.blob();
//       const url = window.URL.createObjectURL(blob);
//       const a = document.createElement('a');
//       a.href = url;
//       a.download = 'LuminaSelectionExport.xlsx';
//       document.body.appendChild(a);
//       a.click();
//       window.URL.revokeObjectURL(url);
//       a.remove();

//     } catch (err) {
//       console.error("Error exporting selected data:", err);
//       alert("An error occurred while exporting the data.");
//     } finally {
//       setIsExporting(false);
//     }
//   } else {
//     // If no rows are selected, open the advanced export modal as before
//     openExportModal();
//   }
// };

//   const toggleRowExpansion = (baseKey) => {
//     setExpandedRows(prev => {
//       const newSet = new Set(prev);
//       if (newSet.has(baseKey)) newSet.delete(baseKey);
//       else newSet.add(baseKey);
//       return newSet;
//     });
//   };

//   const Row = ({ entry }) => (
//     <React.Fragment>
//         <td className="p-0">
//             <label className="flex items-center justify-center p-4 cursor-pointer">
//                 <input
//                     type="checkbox"
//                     className="h-4 w-4 rounded border-gray-300 text-blue-600 focus:ring-blue-500"
//                     checked={selectedRows.has(entry.id)}
//                     onChange={() => handleSelectRow(entry.id)}
//                 />
//             </label>
//         </td>
//         <td className="px-6 py-3 whitespace-nowrap text-sm text-gray-500 pl-12">{entry.primeKey}</td>
//         <td className="px-6 py-3 whitespace-nowrap text-sm text-gray-500">{entry.creditCard}</td>
//         <td className="px-6 py-3 whitespace-nowrap text-sm text-gray-500">{entry.contractShortName}</td>
//         <td className="px-6 py-3 whitespace-nowrap text-sm text-gray-500">{entry.vendorName}</td>
//         <td className="px-6 py-3 whitespace-nowrap text-sm text-gray-500">{formatDateForDisplay(entry.chargeDate)}</td>
//         <td className="px-6 py-3 whitespace-nowrap text-sm text-gray-500">${entry.chargeAmount ? parseFloat(entry.chargeAmount).toFixed(2) : '0.00'}</td>
//         <td className="px-6 py-3 whitespace-nowrap text-sm text-gray-500">{formatDateForDisplay(entry.submittedDate)}</td>
//         <td className="px-6 py-3 whitespace-nowrap text-sm text-gray-500">{entry.submitter}</td>
//         <td className="px-6 py-3 whitespace-pre-wrap text-sm text-gray-500">{entry.chargeCode}</td>
//         <td className="px-6 py-3 whitespace-pre-wrap text-sm text-gray-500">{entry.notes}</td>
//         <td className="px-6 py-3 whitespace-nowrap text-sm text-gray-500">
//             {entry.pdfFilePath ? <a href={entry.pdfFilePath} target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">View PDF</a> : 'N/A'}
//         </td>
//         <td className="px-6 py-3 whitespace-nowrap text-sm text-gray-500">{entry.apvNumber || 'N/A'}</td>
//         <td className="px-6 py-3 whitespace-nowrap text-sm text-gray-500">{entry.accountingProcessed === 'T' ? 'Yes' : (entry.accountingProcessed === 'F' ? 'No' : 'N/A')}</td>
        
//         <td className="px-6 py-3 whitespace-nowrap text-sm text-gray-500">{formatDateForDisplay(entry.paidDt)}</td>
//     </React.Fragment>
//   );

//   return (
//     <div className="min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-black p-4 sm:p-6 lg:p-8 text-gray-100 flex justify-center items-start">
//         <div className="bg-white p-6 rounded-xl shadow-2xl w-full max-w-full">
//             <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-6 gap-4">
//                 <h1 className="text-3xl font-extrabold">
//                     <span className="block text-transparent bg-clip-text text-lime-800">
//                         Expense Entries
//                     </span>
//                 </h1>
//                 {/* Center Column: Your Logo */}
//     <div className="w-1/3 flex justify-end">
//         {/*
//           **ADD YOUR LOGO HERE**
//           - Place your logo file (e.g., 'logo.png') in the 'public' folder.
//           - Change the 'src' path below to match your logo's filename.
//         */}
//         <img 
//             src="\Lumina_logo.png" 
//             alt="Lumina Logo" 
//             // className="h-12 opacity-100 transform -translate-x-2" 
//             // // Adjust height and opacity as needed
//             className="h-12 opacity-100 pr-12"

//         />
//     </div>
//                       <div className="w-1/3 flex justify-end items-center gap-4">
//     <div className="flex items-center gap-3 bg-gray-100 p-3 rounded-lg translate-x-2">
//         {userAvatar ? (
//             <img src={userAvatar} alt="User Avatar" className="w-10 h-10 rounded-full object-cover" />
//         ) : (
//             <UserCircle size={32} className="text-gray-500" />
//         )}
//         <span className="text-lg font-medium text-gray-700 hidden sm:block">
//             Welcome, {userName}
//         </span>
//     </div>
//     <button 
//         onClick={handleLogout} 
//         className="p-3 bg-red-100 hover:bg-red-200 rounded-full text-red-600 transition-colors"
//         title="Logout"
//     >
//         <LogOut size={20} />
//     </button>
// </div>
//             </div>

//             <div className="flex flex-col md:flex-row justify-between items-center bg-gray-100 p-4 rounded-lg shadow-sm mb-6 gap-3">
//                 <div className="flex items-center border border-gray-300 rounded-lg bg-white shadow-sm flex-grow">
//                     <select
//                         value={searchColumn}
//                         onChange={(e) => setSearchColumn(e.target.value)}
//                         className="py-2 pl-3 pr-8 bg-transparent border-r border-gray-200 rounded-l-lg focus:outline-none focus:ring-1 focus:ring-blue-500 text-sm text-gray-700 appearance-none transition-all duration-200"
//                     >
//                         {searchableColumns.map(col => (
//                             <option key={col.key} value={col.key}>{col.name}</option>
//                         ))}
//                     </select>
//                     <input
//                         type="text"
//                         placeholder={`Search in ${searchableColumns.find(c => c.key === searchColumn).name}...`}
//                         value={searchValue}
//                         onChange={(e) => setSearchValue(e.target.value)}
//                         className="w-full p-2 rounded-r-lg focus:outline-none focus:ring-1 focus:ring-blue-500 text-sm text-gray-800 transition-all duration-200"
//                     />
//                     <Search size={18} className="text-gray-400 mr-3 hidden sm:block" />
//                 </div>

//                 <label htmlFor="latest-toggle" className="flex items-center cursor-pointer p-2 bg-gray-200 rounded-full hover:bg-gray-300 transition-colors duration-200">
//                     <div className="relative">
//                         <input 
//                             type="checkbox" 
//                             id="latest-toggle" 
//                             className="sr-only peer" 
//                             checked={showOnlyLatest}
//                             onChange={(e) => setShowOnlyLatest(e.target.checked)}
//                         />
//                         <div className="block bg-gray-400 w-12 h-7 rounded-full peer-checked:bg-blue-600 transition-all duration-300"></div>
//                         <div className="dot absolute left-1 top-1 bg-white w-5 h-5 rounded-full transition-all duration-300 transform peer-checked:translate-x-full"></div>
//                     </div>
//                     <div className="ml-3 text-sm font-medium text-gray-800">
//                         Show Latest Only
//                     </div>
//                 </label>
//             </div>

//             <div className="flex flex-wrap justify-start items-center gap-3 mb-6">
//               {currentUserRole !== 'accountant' && (
//                 <>
//                 <button onClick={openAddDataModal} className="flex items-center gap-2 bg-gradient-to-r from-yellow-500 to-yellow-600 hover:from-yellow-600 hover:to-yellow-700 text-white font-semibold py-2.5 px-5 rounded-lg shadow-md transition-all duration-200 ease-in-out transform hover:-translate-y-0.5">
//                     <Plus size={20} />
//                     Add 
//                 </button>
//                 <button onClick={openEditDataModal} className="flex items-center gap-2 bg-gradient-to-r from-yellow-500 to-yellow-600 hover:from-yellow-600 hover:to-yellow-700 text-white font-semibold py-2.5 px-5 rounded-lg shadow-md transition-all duration-200 ease-in-out transform hover:-translate-y-0.5">
//                     <Pencil size={20} />
//                     Edit 
//                 </button>
//                 </>
//               )}
//                 <button onClick={handleExport}
//                 disabled={isExporting}
//                 className="flex items-center gap-2 bg-gradient-to-r from-gray-600 to-gray-700 hover:from-gray-700 hover:to-gray-800 text-white font-semibold py-2.5 px-5 rounded-lg shadow-md transition-all duration-200 ease-in-out transform hover:-translate-y-0.5 disabled:opacity-50" // <-- Add disabled style
// >
//                  {/* className="flex items-center gap-2 bg-gradient-to-r from-gray-600 to-gray-700 hover:from-gray-700 hover:to-gray-800 text-white font-semibold py-2.5 px-5 rounded-lg shadow-md transition-all duration-200 ease-in-out transform hover:-translate-y-0.5"> */}
//                     <Download size={20} />
//                     {isExporting 
//         ? 'Exporting...' 
//         : (selectedRows.size > 0 ? `Export ${selectedRows.size} Selected` : 'Advanced Search')
//     }
//                     {/* {selectedRows.size > 0 ? `Export ${selectedRows.size}` : 'Advanced Export'} */}
//                 </button>
//             </div>
            
//             <div className="overflow-x-auto rounded-lg shadow-lg border border-gray-200">
//                 <table className="min-w-full divide-y divide-gray-200">
//                     <thead className="bg-gray-100">
//                         <tr>
//                             <th scope="col" className="p-0 w-12">
//                                 <label className="flex items-center justify-center p-4 cursor-pointer">
//                                     <input type="checkbox" onChange={handleSelectAll} checked={visibleEntryIds.length > 0 && selectedRows.size === visibleEntryIds.length} className="h-4 w-4 rounded border-gray-300 text-blue-600 focus:ring-blue-500"/>
//                                 </label>
//                             </th>
//                             <th className="px-6 py-3 text-left text-xs font-semibold text-gray-600  tracking-wider">Record No</th>
//                             <th className="px-6 py-3 text-left text-xs font-semibold text-gray-600  tracking-wider">Credit Card</th>
//                             <th className="px-6 py-3 text-left text-xs font-semibold text-gray-600  tracking-wider">Contract</th>
//                             <th className="px-6 py-3 text-left text-xs font-semibold text-gray-600  tracking-wider">Vendor</th>
//                             <th className="px-6 py-3 text-left text-xs font-semibold text-gray-600  tracking-wider">Charge Date</th>
//                             <th className="px-6 py-3 text-left text-xs font-semibold text-gray-600  tracking-wider">Amount</th>
//                             <th className="px-6 py-3 text-left text-xs font-semibold text-gray-600  tracking-wider">Submitted Date</th>
//                             <th className="px-6 py-3 text-left text-xs font-semibold text-gray-600  tracking-wider">Submitter</th>
//                             <th className="px-6 py-3 text-left text-xs font-semibold text-gray-600  tracking-wider">Charge Code</th>
//                             <th className="px-6 py-3 text-left text-xs font-semibold text-gray-600  tracking-wider">Notes</th>
//                             <th className="px-6 py-3 text-left text-xs font-semibold text-gray-600  tracking-wider">PDF</th>
//                             <th className="px-6 py-3 text-left text-xs font-semibold text-gray-600  tracking-wider">APV Number</th>
//                             <th className="px-6 py-3 text-left text-xs font-semibold text-gray-600  tracking-wider">Processed</th>
                            
//                             <th className="px-6 py-3 text-left text-xs font-semibold text-gray-600 tracking-wider">Paid Date</th>
//                         </tr>
//                     </thead>
//                     <tbody className="bg-white divide-y divide-gray-100">
//                         {isLoading && <tr><td colSpan="15" className="text-center p-6 text-gray-500">Loading...</td></tr>}
//                         {error && <tr><td colSpan="15" className="text-center p-6 text-red-600">{error}</td></tr>}
//                         {!isLoading && !error && groupedEntries.length > 0 ? (
//                             groupedEntries.map((group, groupIndex) => {
//                                 const latestEntry = group[0];
//                                 const baseKey = String(latestEntry.primeKey).split('.')[0];
//                                 const isExpanded = expandedRows.has(baseKey);
//                                 const hasHistory = group.length > 1;

//                                 return (
//                                     <React.Fragment key={baseKey}>
//                                         <tr className={`
//                                             ${groupIndex % 2 === 0 ? 'bg-white' : 'bg-gray-50'} 
//                                             hover:bg-blue-50 transition-colors duration-150 ease-in-out
//                                         `}>
//                                             <td className="p-0">
//                                                 <label className="flex items-center justify-center p-4 cursor-pointer">
//                                                     <input type="checkbox" checked={selectedRows.has(latestEntry.id)} onChange={() => handleSelectRow(latestEntry.id)} className="h-4 w-4 rounded border-gray-300 text-blue-600 focus:ring-blue-500"/>
//                                                 </label>
//                                             </td>
//                                             <td className="px-6 py-3 whitespace-nowrap text-sm font-medium text-gray-900">
//                                                 <div className="flex items-center gap-2">
//                                                     {hasHistory ? <button onClick={() => toggleRowExpansion(baseKey)} className="p-1 rounded-md hover:bg-gray-200 text-gray-600">{isExpanded ? <ChevronDown size={16} /> : <ChevronRight size={16} />}</button> : <span className="w-[28px]" />}
//                                                     <span>{latestEntry.primeKey}</span>
//                                                 </div>
//                                             </td>
//                                             <td className="px-6 py-3 whitespace-nowrap text-sm text-gray-700">{latestEntry.creditCard}</td>
//                                             <td className="px-6 py-3 whitespace-nowrap text-sm text-gray-700">{latestEntry.contractShortName}</td>
//                                             <td className="px-6 py-3 whitespace-nowrap text-sm text-gray-700">{latestEntry.vendorName}</td>
//                                             <td className="px-6 py-3 whitespace-nowrap text-sm text-gray-700">{formatDateForDisplay(latestEntry.chargeDate)}</td>
//                                             <td className="px-6 py-3 whitespace-nowrap text-sm text-gray-700">${latestEntry.chargeAmount ? parseFloat(latestEntry.chargeAmount).toFixed(2) : '0.00'}</td>
//                                             <td className="px-6 py-3 whitespace-nowrap text-sm text-gray-700">{formatDateForDisplay(latestEntry.submittedDate)}</td>
//                                             <td className="px-6 py-3 whitespace-nowrap text-sm text-gray-700">{latestEntry.submitter}</td>
//                                             <td className="px-6 py-3 whitespace-pre-wrap text-sm text-gray-700">{latestEntry.chargeCode}</td>
//                                             <td className="px-6 py-3 whitespace-pre-wrap text-sm text-gray-700">{latestEntry.notes}</td>
//                                             <td className="px-6 py-3 whitespace-nowrap text-sm text-gray-700">{latestEntry.pdfFilePath ? <a href={latestEntry.pdfFilePath} target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">View PDF</a> : 'N/A'}</td>
//                                             <td className="px-6 py-3 whitespace-nowrap text-sm text-gray-700">{latestEntry.apvNumber || 'N/A'}</td>
//                                             <td className="px-6 py-3 whitespace-nowrap text-sm text-gray-700">{latestEntry.accountingProcessed === 'T' ? 'Yes' : 'No'}</td> 
//                                             <td className="px-6 py-3 whitespace-nowrap text-sm text-gray-700">{formatDateForDisplay(latestEntry.paidDt)}</td>
//                                         </tr>
//                                         {isExpanded && group.slice(1).map((entry, historyIndex) => (
//                                             <tr key={entry.id} className={`
//                                                 bg-gray-100 hover:bg-gray-200 transition-colors duration-150 ease-in-out
//                                             `}>
//                                                 <Row entry={entry} />
//                                             </tr>
//                                         ))}
//                                     </React.Fragment>
//                                 );
//                             })
//                         ) : (
//                             <tr><td colSpan="15" className="text-center p-6 text-gray-500 italic">No entries found.</td></tr>
//                         )}
//                     </tbody>
//                 </table>
//             </div>
//         </div>
//     </div>
//   );
// };

// export default ViewPage;


//  Version 2 Below //


// import React, { useState, useMemo } from 'react';
// import { Search, Download, UserCircle, LogOut, LayoutGrid, CheckCircle2 } from 'lucide-react';
// import * as XLSX from 'xlsx';

// const ViewPage = ({ allData = {}, userName, userAvatar, handleLogout, currentUserRole }) => {
//   const [activeCategory, setActiveCategory] = useState('expenses');
//   const [searchValue, setSearchValue] = useState('');
//   const [selectedRows, setSelectedRows] = useState(new Set());

//   // Configuration for different form types with the new Blue Theme
//   const categoryConfigs = {
//     expenses: {
//       label: "Expense Entries",
//       columns: ["Record No", "Credit Card", "Contract", "Vendor", "Amount", "Submitter"],
//       data: allData.expenses || []
//     },
//     projectSetup: {
//       label: "Project Setup List",
//       columns: ["Project Name", "Client", "Submitter", "Status", "Date"],
//       data: allData.projectSetup || []
//     },
//     workforce: {
//       label: "Workforce Data",
//       columns: ["Employee", "Role", "Project", "Rate ($)", "Submitter"],
//       data: allData.workforce || []
//     },
//     onboarding: {
//       label: "Employee Onboarding",
//       columns: ["Name", "Department", "Hire Date", "Type", "Submitter"],
//       data: allData.onboarding || []
//     },
//     customers: {
//       label: "Customer Setup",
//       columns: ["Customer Name", "Industry", "Primary Contact", "Status"],
//       data: allData.customers || []
//     },
//     vendors: {
//       label: "Vendor Setup",
//       columns: ["Vendor Name", "Category", "Terms", "Tax ID"],
//       data: allData.vendors || []
//     }
//   };

//   // Filtered data based on search and category
//   const currentData = useMemo(() => {
//     const data = categoryConfigs[activeCategory].data;
//     if (!searchValue) return data;
//     return data.filter(item => 
//       Object.values(item).some(val => String(val).toLowerCase().includes(searchValue.toLowerCase()))
//     );
//   }, [activeCategory, searchValue, allData]);

//   // --- Selection Logic ---
//   const handleSelectAll = (e) => {
//     if (e.target.checked) {
//       const allIds = currentData.map(item => item.id);
//       setSelectedRows(new Set(allIds));
//     } else {
//       setSelectedRows(new Set());
//     }
//   };

//   const handleSelectRow = (id) => {
//     const newSelected = new Set(selectedRows);
//     if (newSelected.has(id)) newSelected.delete(id);
//     else newSelected.add(id);
//     setSelectedRows(newSelected);
//   };

//   // --- Excel Export Logic ---
//   const handleExport = () => {
//     let dataToExport;
//     if (selectedRows.size > 0) {
//       dataToExport = currentData.filter(item => selectedRows.has(item.id));
//     } else {
//       dataToExport = currentData;
//     }

//     if (dataToExport.length === 0) {
//       alert("No data available to export.");
//       return;
//     }

//     const cleanedData = dataToExport.map(({ id, ...rest }) => rest);
//     const worksheet = XLSX.utils.json_to_sheet(cleanedData);
//     const workbook = XLSX.utils.book_new();
//     XLSX.utils.book_append_sheet(workbook, worksheet, activeCategory);
    
//     const fileName = selectedRows.size > 0 
//       ? `Lumina_Selected_${activeCategory}.xlsx` 
//       : `Lumina_Full_${activeCategory}.xlsx`;

//     XLSX.writeFile(workbook, fileName);
//   };

//   return (
//     <div className="min-h-screen bg-slate-50 p-4 sm:p-8 w-full max-w-full overflow-hidden">
//       <div className="bg-white p-6 rounded-2xl shadow-xl w-full max-w-full border border-blue-100 overflow-hidden flex flex-col">
        
//         {/* --- Master Header (Blue Theme) --- */}
//         <div className="flex flex-col md:flex-row justify-between items-center mb-8 gap-4 border-b border-blue-50 pb-6">
//           <div className="flex items-center gap-4">
//             <div className="bg-blue-900 p-2.5 rounded-xl shadow-lg shadow-blue-200">
//               <LayoutGrid className="text-white" size={24} />
//             </div>
//             <div>
//               <h1 className="text-2xl font-black text-slate-900 uppercase tracking-tighter">
//                 Master Data Portal
//               </h1>
//               <p className="text-blue-600 text-xs font-bold uppercase tracking-widest flex items-center gap-1">
//                 <CheckCircle2 size={12} /> {currentUserRole} Authorized Access
//               </p>
//             </div>
//           </div>

//           <div className="flex items-center gap-4">
//             <div className="flex items-center gap-3 bg-blue-50 px-4 py-2 rounded-2xl border border-blue-100">
//               <div className="text-right">
//                 <p className="text-xs font-black text-blue-900 leading-none mb-1">{userName}</p>
//                 <p className="text-[10px] text-blue-500 font-bold uppercase tracking-tighter">Online</p>
//               </div>
//               {userAvatar ? (
//                 <img src={userAvatar} className="w-10 h-10 rounded-full border-2 border-white shadow-sm" alt="avatar" />
//               ) : (
//                 <div className="bg-blue-200 p-2 rounded-full text-blue-900"><UserCircle size={24} /></div>
//               )}
//             </div>
//             <button 
//               onClick={handleLogout} 
//               className="p-2.5 text-slate-400 hover:text-red-600 hover:bg-red-50 rounded-xl transition-all"
//               title="Logout"
//             >
//               <LogOut size={22} />
//             </button>
//           </div>
//         </div>

//         {/* --- Master Controls (Blue Theme) --- */}
//         <div className="grid grid-cols-1 md:grid-cols-12 gap-4 mb-8">
//           {/* Category Dropdown */}
//           <div className="md:col-span-3">
//              <label className="text-[10px] font-black text-slate-400 uppercase ml-1 mb-1 block tracking-widest">Master Category</label>
//              <select 
//                 value={activeCategory}
//                 onChange={(e) => {
//                   setActiveCategory(e.target.value);
//                   setSelectedRows(new Set()); 
//                 }}
//                 className="w-full p-3 bg-blue-50 border border-blue-100 rounded-xl font-bold text-sm text-blue-900 outline-none focus:ring-2 focus:ring-blue-500 shadow-sm transition-all cursor-pointer"
//               >
//                 {Object.keys(categoryConfigs).map(key => (
//                   <option key={key} value={key}>{categoryConfigs[key].label}</option>
//                 ))}
//               </select>
//           </div>

//           {/* Search Input */}
//           <div className="md:col-span-6">
//             <label className="text-[10px] font-black text-slate-400 uppercase ml-1 mb-1 block tracking-widest">Universal Search</label>
//             <div className="relative">
//               <Search className="absolute left-4 top-3.5 text-blue-300" size={18} />
//               <input 
//                 type="text"
//                 placeholder={`Filter ${categoryConfigs[activeCategory].label}...`}
//                 className="w-full p-3 pl-12 bg-white border border-blue-100 rounded-xl text-sm font-medium outline-none focus:ring-2 focus:ring-blue-500 transition-all shadow-sm"
//                 value={searchValue}
//                 onChange={(e) => setSearchValue(e.target.value)}
//               />
//             </div>
//           </div>

//           {/* Export Button */}
//           <div className="md:col-span-3 flex items-end">
//             <button 
//               onClick={handleExport}
//               disabled={currentData.length === 0}
//               className="w-full flex items-center justify-center gap-3 bg-blue-900 hover:bg-slate-900 disabled:bg-slate-200 text-white font-bold py-3.5 rounded-xl text-sm shadow-xl shadow-blue-100 transition-all active:scale-95"
//             >
//               <Download size={18} />
//               {selectedRows.size > 0 ? `Export Selected (${selectedRows.size})` : 'Export to Excel'}
//             </button>
//           </div>
//         </div>

//         {/* --- Dynamic Data Table (Blue Theme) --- */}
//         <div className="overflow-x-auto rounded-2xl border border-blue-100 w-full shadow-inner bg-slate-50/50">
//           <table className="min-w-full divide-y divide-blue-100">
//             <thead className="bg-blue-900">
//               <tr>
//                 <th className="px-6 py-4 text-center w-12">
//                   <input 
//                     type="checkbox" 
//                     onChange={handleSelectAll} 
//                     checked={currentData.length > 0 && selectedRows.size === currentData.length}
//                     className="w-4 h-4 rounded border-blue-300 text-blue-600 focus:ring-blue-500 accent-blue-600"
//                   />
//                 </th>
//                 {categoryConfigs[activeCategory].columns.map(col => (
//                   <th key={col} className="px-6 py-4 text-left text-[11px] font-black text-blue-100 uppercase tracking-[0.2em]">
//                     {col}
//                   </th>
//                 ))}
//               </tr>
//             </thead>
//             <tbody className="bg-white divide-y divide-blue-50">
//               {currentData.length > 0 ? currentData.map((row) => (
//                 <tr 
//                   key={row.id} 
//                   className={`transition-colors cursor-default ${
//                     selectedRows.has(row.id) ? "bg-blue-50/80" : "hover:bg-blue-50/30"
//                   }`}
//                 >
//                   <td className="px-6 py-4 text-center">
//                     <input 
//                       type="checkbox" 
//                       checked={selectedRows.has(row.id)}
//                       onChange={() => handleSelectRow(row.id)}
//                       className="w-4 h-4 rounded border-blue-300 text-blue-600 focus:ring-blue-500 accent-blue-600"
//                     />
//                   </td>
//                   {Object.entries(row).filter(([key]) => key !== 'id').map(([key, val], i) => (
//                     <td key={i} className="px-6 py-4 text-sm text-slate-600 font-medium whitespace-nowrap">
//                       {key === 'status' ? (
//                         <span className={`px-2 py-1 rounded-md text-[10px] font-black uppercase ${
//                           val === 'Approved' ? 'bg-green-100 text-green-700' : 
//                           val === 'Pending' ? 'bg-amber-100 text-amber-700' : 'bg-blue-100 text-blue-700'
//                         }`}>
//                           {val}
//                         </span>
//                       ) : (
//                         val
//                       )}
//                     </td>
//                   ))}
//                 </tr>
//               )) : (
//                 <tr>
//                   <td colSpan="12" className="p-20 text-center">
//                     <div className="flex flex-col items-center gap-2">
//                        <LayoutGrid size={48} className="text-slate-200" />
//                        <p className="text-slate-400 font-bold italic">No records found for this category.</p>
//                     </div>
//                   </td>
//                 </tr>
//               )}
//             </tbody>
//           </table>
//         </div>

//         {/* --- Footer Stats --- */}
//         <div className="mt-6 flex justify-between items-center px-2">
//           <p className="text-xs text-slate-400 font-bold uppercase tracking-widest">
//             Showing {currentData.length} entries
//           </p>
//           {selectedRows.size > 0 && (
//             <button 
//               onClick={() => setSelectedRows(new Set())}
//               className="text-xs text-red-500 font-black uppercase hover:underline"
//             >
//               Clear Selection ({selectedRows.size})
//             </button>
//           )}
//         </div>
//       </div>
//     </div>
//   );
// };

// export default ViewPage;


/// Version 2 //


// import React, { useState, useMemo } from 'react';
// import { Search, Download, UserCircle, LogOut, LayoutGrid, CheckCircle2, ClipboardList } from 'lucide-react';
// import * as XLSX from 'xlsx';

// const ViewPage = ({ allData = {}, userName = 'Admin', userAvatar, handleLogout, currentUserRole = 'Admin' }) => {
//   const [activeCategory, setActiveCategory] = useState('expenses');
//   const [searchValue, setSearchValue] = useState('');
//   const [selectedRows, setSelectedRows] = useState(new Set());

//   // Configuration for different form types
//   const categoryConfigs = {
//     expenses: {
//       label: "Expense Entries",
//       columns: ["Record No", "Credit Card", "Contract", "Vendor", "Amount", "Submitter" ,"Status"],
//       data: allData.expenses || []
//     },
//     projectSetup: {
//       label: "Project Setup List",
//       columns: ["Project Name", "Client", "Submitter", "Date", "Status" ],
//       data: allData.projectSetup || []
//     },
//     workforce: {
//       label: "Workforce Data",
//       columns: ["Employee", "Role", "Project", "Rate ($)", "Submitter","Status"],
//       data: allData.workforce || []
//     },
//     onboarding: {
//       label: "Employee Onboarding",
//       columns: ["Name", "Department", "Hire Date", "Type", "Submitter","Status"],
//       data: allData.onboarding || []
//     },
//     customers: {
//       label: "Customer Setup",
//       columns: ["Customer Name", "Industry", "Primary Contact", "Status"],
//       data: allData.customers || []
//     },
//     vendors: {
//       label: "Vendor Setup",
//       columns: ["Vendor Name", "Category", "Terms", "Tax ID","Status"],
//       data: allData.vendors || []
//     }
//   };

//   const currentData = useMemo(() => {
//     const data = categoryConfigs[activeCategory].data;
//     if (!searchValue) return data;
//     return data.filter(item => 
//       Object.values(item).some(val => String(val).toLowerCase().includes(searchValue.toLowerCase()))
//     );
//   }, [activeCategory, searchValue, allData]);

//   const handleSelectAll = (e) => {
//     if (e.target.checked) {
//       const allIds = currentData.map(item => item.id);
//       setSelectedRows(new Set(allIds));
//     } else {
//       setSelectedRows(new Set());
//     }
//   };

//   const handleSelectRow = (id) => {
//     const newSelected = new Set(selectedRows);
//     if (newSelected.has(id)) newSelected.delete(id);
//     else newSelected.add(id);
//     setSelectedRows(newSelected);
//   };

//   const handleExport = () => {
//     let dataToExport = selectedRows.size > 0 
//       ? currentData.filter(item => selectedRows.has(item.id)) 
//       : currentData;

//     if (dataToExport.length === 0) {
//       alert("No data available to export.");
//       return;
//     }

//     const cleanedData = dataToExport.map(({ id, ...rest }) => rest);
//     const worksheet = XLSX.utils.json_to_sheet(cleanedData);
//     const workbook = XLSX.utils.book_new();
//     XLSX.utils.book_append_sheet(workbook, worksheet, activeCategory);
//     XLSX.writeFile(workbook, `Lumina_${activeCategory}_Export.xlsx`);
//   };

//   return (
//     <div className="min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-black p-4 lg:p-8 text-gray-100 flex justify-center items-start font-sans">
      
//       {/* MAXIMIZED WHITE BOX (98% Width) */}
//       <div className="bg-white p-6 sm:p-10 rounded-xl shadow-2xl w-[98%] max-w-full text-gray-800">
        
//         {/* --- MATCHED HEADER SECTION (Logo Centered & Matched Fonts) --- */}
//         <div className="flex justify-between items-center mb-10 border-b border-gray-100 pb-8">
//           <div className="w-1/3">
//             <h1 className="text-3xl font-bold">
//               <span className="block text-transparent bg-clip-text bg-gradient-to-r from-blue-800 to-blue-600 leading-tight ">
//                 Master Data Portal
//               </span>
//             </h1>
//           </div>

//           <div className="w-1/3 flex justify-center">
//             <img src="/Lumina_logo.png" alt="Lumina Logo" className="h-12 opacity-100" />
//           </div>

//           <div className="w-1/3 flex justify-end items-center gap-4">
//             <div className="flex items-center gap-3 bg-gray-100 p-3 rounded-lg border border-gray-200">
//               {userAvatar ? (
//                 <UserCircle size={32} className="text-gray-500" />
//               ) : 
//               (
//                 <UserCircle size={32} className="text-gray-500" />
//               )}
//               <div className="flex flex-col">
//                 <span className="text-lg font-bold text-gray-700 hidden sm:block leading-tight">
//                   Welcome, Admin
//                 </span>
//                 {/* <span className="text-[10px] font-black text-blue-600 uppercase tracking-widest leading-none">
//                   {currentUserRole} Access
//                 </span> */}
//               </div>
//             </div>
//             <button 
//               onClick={handleLogout} 
//               className="p-3 bg-red-100 hover:bg-red-200 rounded-full text-red-600 transition-colors"
//               title="Logout"
//             >
//               <LogOut size={20} />
//             </button>
//           </div>
//         </div>

//         {/* --- MASTER CONTROLS --- */}
//         <div className="grid grid-cols-1 md:grid-cols-12 gap-6 mb-10">
//           {/* Category Dropdown */}
//           <div className="md:col-span-3 space-y-1">
//             <label className="text-xs font-bold text-gray-500 uppercase">Master Category</label>
//             <select 
//               value={activeCategory}
//               onChange={(e) => {
//                 setActiveCategory(e.target.value);
//                 setSelectedRows(new Set()); 
//               }}
//               className="w-full p-2 border-b-2 border-gray-300 focus:border-blue-600 outline-none bg-white text-base font-bold text-blue-900 cursor-pointer transition-all"
//             >
//               {Object.keys(categoryConfigs).map(key => (
//                 <option key={key} value={key}>{categoryConfigs[key].label}</option>
//               ))}
//             </select>
//           </div>

//           {/* Search Input */}
//           <div className="md:col-span-6 space-y-1">
//             <label className="text-xs font-bold text-gray-500 uppercase">Universal Search</label>
//             <div className="relative">
//               <Search className="absolute left-0 top-3 text-gray-400" size={18} />
//               <input 
//                 type="text"
//                 placeholder={`Search ${categoryConfigs[activeCategory].label}...`}
//                 className="w-full p-2 pl-7 border-b-2 border-gray-300 focus:border-blue-600 outline-none transition-colors text-base"
//                 value={searchValue}
//                 onChange={(e) => setSearchValue(e.target.value)}
//               />
//             </div>
//           </div>

//           {/* Export Button */}
//           <div className="md:col-span-3 flex items-end">
//             <button 
//               onClick={handleExport}
//               disabled={currentData.length === 0}
//               className="w-full flex items-center justify-center gap-2 px-8 py-3 bg-gradient-to-r from-blue-700 to-blue-900 text-white font-extrabold rounded-lg shadow-md hover:from-black hover:to-blue-900 transition-all active:scale-95 text-xs uppercase tracking-widest"
//             >
//               <Download size={18} />
//               {selectedRows.size > 0 ? `Export (${selectedRows.size})` : 'Export to Excel'}
//             </button>
//           </div>
//         </div>

//         {/* --- DYNAMIC DATA TABLE --- */}
//         <div className="overflow-x-auto border border-gray-200 rounded-xl shadow-sm">
//           <table className="min-w-full divide-y divide-gray-200">
//             <thead className="bg-gray-50">
//               <tr>
//                 <th className="px-6 py-4 text-center w-12">
//                   <input 
//                     type="checkbox" 
//                     onChange={handleSelectAll} 
//                     checked={currentData.length > 0 && selectedRows.size === currentData.length}
//                     className="w-4 h-4 rounded border-gray-300 text-blue-600 focus:ring-blue-500 accent-blue-600 cursor-pointer"
//                   />
//                 </th>
//                 {categoryConfigs[activeCategory].columns.map(col => (
//                   <th key={col} className="px-6 py-4 text-left text-xs font-bold text-gray-600 uppercase tracking-widest">
//                     {col}
//                   </th>
//                 ))}
//               </tr>
//             </thead>
//             <tbody className="bg-white divide-y divide-gray-100">
//               {currentData.length > 0 ? currentData.map((row) => (
//                 <tr 
//                   key={row.id} 
//                   className={`transition-colors ${selectedRows.has(row.id) ? "bg-blue-50" : "hover:bg-gray-50"}`}
//                 >
//                   <td className="px-6 py-4 text-center">
//                     <input 
//                       type="checkbox" 
//                       checked={selectedRows.has(row.id)}
//                       onChange={() => handleSelectRow(row.id)}
//                       className="w-4 h-4 rounded border-gray-300 text-blue-600 focus:ring-blue-500 accent-blue-600 cursor-pointer"
//                     />
//                   </td>
//                   {Object.entries(row).filter(([key]) => key !== 'id').map(([key, val], i) => (
//                     <td key={i} className="px-6 py-4 text-sm text-gray-700 font-medium whitespace-nowrap">
//                       {key === 'status' || key === 'Status' ? (
//                         <span className={`px-2 py-1 rounded text-[10px] font-black uppercase ${
//                           val === 'Approved' ? 'bg-green-100 text-green-700' : 
//                           val === 'Pending' ? 'bg-amber-100 text-amber-700' : 'bg-blue-100 text-blue-700'
//                         }`}>
//                           {val}
//                         </span>
//                       ) : (
//                         val
//                       )}
//                     </td>
//                   ))}
//                 </tr>
//               )) : (
//                 <tr>
//                   <td colSpan="12" className="p-20 text-center text-gray-400 italic">
//                     <div className="flex flex-col items-center gap-2">
//                       <LayoutGrid size={48} className="opacity-20" />
//                       <p className="font-bold uppercase text-xs tracking-widest">No matching records found</p>
//                     </div>
//                   </td>
//                 </tr>
//               )}
//             </tbody>
//           </table>
//         </div>

//         {/* --- FOOTER STATS --- */}
//         <div className="mt-8 flex justify-between items-center border-t border-gray-100 pt-6">
//           <p className="text-xs font-bold text-gray-400 uppercase tracking-widest">
//             Showing {currentData.length} records in {categoryConfigs[activeCategory].label}
//           </p>
//           {selectedRows.size > 0 && (
//             <button 
//               onClick={() => setSelectedRows(new Set())}
//               className="text-xs font-black text-red-500 uppercase hover:underline"
//             >
//               Clear selection ({selectedRows.size})
//             </button>
//           )}
//         </div>
//       </div>
//     </div>
//   );
// };

// export default ViewPage;



import React, { useState, useMemo } from 'react';
import { Search, Download, UserCircle, LogOut, LayoutGrid, CheckCircle2, ClipboardList } from 'lucide-react';
import * as XLSX from 'xlsx';

const ViewPage = ({ allData = {}, userName = 'Admin', userAvatar, handleLogout, currentUserRole = 'Admin' }) => {
  // Updated initial state to projectSetup since expenses is commented out
  const [activeCategory, setActiveCategory] = useState('projectSetup');
  const [searchValue, setSearchValue] = useState('');
  const [selectedRows, setSelectedRows] = useState(new Set());

  // Configuration for different form types
  const categoryConfigs = {
    /* expenses: {
      label: "Expense Entries",
      columns: ["Record No", "Credit Card", "Contract", "Vendor", "Amount", "Submitter" ,"Status"],
      data: allData.expenses || []
    }, */
    projectSetup: {
      label: "Project Setup List",
      columns: ["Project Name", "Client", "Submitter", "Date", "Status" ],
      data: allData.projectSetup || []
    },
    workforce: {
      label: "Workforce Data",
      columns: ["Employee", "Role", "Project", "Rate ($)", "Submitter","Status"],
      data: allData.workforce || []
    },
    onboarding: {
      label: "Employee Onboarding",
      columns: ["Name", "Department", "Hire Date", "Type", "Submitter","Status"],
      data: allData.onboarding || []
    },
    customers: {
      label: "Customer Setup",
      columns: ["Customer Name", "Industry", "Primary Contact", "Status"],
      data: allData.customers || []
    },
    vendors: {
      label: "Vendor Setup",
      columns: ["Vendor Name", "Category", "Terms", "Tax ID","Status"],
      data: allData.vendors || []
    }
  };

  const currentData = useMemo(() => {
    const data = categoryConfigs[activeCategory].data;
    if (!searchValue) return data;
    return data.filter(item => 
      Object.values(item).some(val => String(val).toLowerCase().includes(searchValue.toLowerCase()))
    );
  }, [activeCategory, searchValue, allData]);

  const handleSelectAll = (e) => {
    if (e.target.checked) {
      const allIds = currentData.map(item => item.id);
      setSelectedRows(new Set(allIds));
    } else {
      setSelectedRows(new Set());
    }
  };

  const handleSelectRow = (id) => {
    const newSelected = new Set(selectedRows);
    if (newSelected.has(id)) newSelected.delete(id);
    else newSelected.add(id);
    setSelectedRows(newSelected);
  };

  const handleExport = () => {
    let dataToExport = selectedRows.size > 0 
      ? currentData.filter(item => selectedRows.has(item.id)) 
      : currentData;

    if (dataToExport.length === 0) {
      alert("No data available to export.");
      return;
    }

    const cleanedData = dataToExport.map(({ id, ...rest }) => rest);
    const worksheet = XLSX.utils.json_to_sheet(cleanedData);
    const workbook = XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(workbook, worksheet, activeCategory);
    XLSX.writeFile(workbook, `Revolve_${activeCategory}_Export.xlsx`);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-black p-4 lg:p-8 text-gray-100 flex justify-center items-start font-sans">
      
      {/* MAXIMIZED WHITE BOX (98% Width) */}
      <div className="bg-white p-6 sm:p-10 rounded-xl shadow-2xl w-[98%] max-w-full text-gray-800">
        
        {/* --- MATCHED HEADER SECTION (Logo Centered & Matched Fonts) --- */}
        <div className="flex justify-between items-center mb-10 border-b border-gray-100 pb-8">
          <div className="w-1/3">
            <h1 className="text-3xl font-bold">
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-blue-800 to-blue-600 leading-tight ">
                Master Data Management Portal
                              </span>
            </h1>
          </div>

          <div className="w-1/3 flex justify-center">
            <img src="/Lumina_logo.png" alt="Lumina Logo" className="h-12 opacity-100" />
          </div>

          <div className="w-1/3 flex justify-end items-center gap-4">
            <div className="flex items-center gap-3 bg-gray-100 p-3 rounded-lg border border-gray-200">
              {userAvatar ? (
                <UserCircle size={32} className="text-gray-500" />
              ) : 
              (
                <UserCircle size={32} className="text-gray-500" />
              )}
              <div className="flex flex-col">
                <span className="text-lg font-bold text-gray-700 hidden sm:block leading-tight">
                  Welcome, Admin
                </span>
              </div>
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

        {/* --- MASTER CONTROLS --- */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-6 mb-10">
          {/* Category Dropdown */}
          <div className="md:col-span-3 space-y-1">
            <label className="text-xs font-bold text-gray-500 uppercase">Master Category</label>
            <select 
              value={activeCategory}
              onChange={(e) => {
                setActiveCategory(e.target.value);
                setSelectedRows(new Set()); 
              }}
              className="w-full p-2 border-b-2 border-gray-300 focus:border-blue-600 outline-none bg-white text-base font-bold text-blue-900 cursor-pointer transition-all"
            >
              {Object.keys(categoryConfigs).map(key => (
                <option key={key} value={key}>{categoryConfigs[key].label}</option>
              ))}
            </select>
          </div>

          {/* Search Input */}
          <div className="md:col-span-6 space-y-1">
            <label className="text-xs font-bold text-gray-500 uppercase">Universal Search</label>
            <div className="relative">
              <Search className="absolute left-0 top-3 text-gray-400" size={18} />
              <input 
                type="text"
                placeholder={`Search ${categoryConfigs[activeCategory].label}...`}
                className="w-full p-2 pl-7 border-b-2 border-gray-300 focus:border-blue-600 outline-none transition-colors text-base"
                value={searchValue}
                onChange={(e) => setSearchValue(e.target.value)}
              />
            </div>
          </div>

          {/* Export Button */}
          <div className="md:col-span-3 flex items-end">
            <button 
              onClick={handleExport}
              disabled={currentData.length === 0}
              className="w-full flex items-center justify-center gap-2 px-8 py-3 bg-gradient-to-r from-blue-700 to-blue-900 text-white font-extrabold rounded-lg shadow-md hover:from-black hover:to-blue-900 transition-all active:scale-95 text-xs uppercase tracking-widest"
            >
              <Download size={18} />
              {selectedRows.size > 0 ? `Export (${selectedRows.size})` : 'Export to Excel'}
            </button>
          </div>
        </div>

        {/* --- DYNAMIC DATA TABLE --- */}
        <div className="overflow-x-auto border border-gray-200 rounded-xl shadow-sm">
          <table className="min-w-full divide-y divide-gray-200">
            <thead className="bg-gray-50">
              <tr>
                <th className="px-6 py-4 text-center w-12">
                  <input 
                    type="checkbox" 
                    onChange={handleSelectAll} 
                    checked={currentData.length > 0 && selectedRows.size === currentData.length}
                    className="w-4 h-4 rounded border-gray-300 text-blue-600 focus:ring-blue-500 accent-blue-600 cursor-pointer"
                  />
                </th>
                {categoryConfigs[activeCategory].columns.map(col => (
                  <th key={col} className="px-6 py-4 text-left text-xs font-bold text-gray-600 uppercase tracking-widest">
                    {col}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-100">
              {currentData.length > 0 ? currentData.map((row) => (
                <tr 
                  key={row.id} 
                  className={`transition-colors ${selectedRows.has(row.id) ? "bg-blue-50" : "hover:bg-gray-50"}`}
                >
                  <td className="px-6 py-4 text-center">
                    <input 
                      type="checkbox" 
                      checked={selectedRows.has(row.id)}
                      onChange={() => handleSelectRow(row.id)}
                      className="w-4 h-4 rounded border-gray-300 text-blue-600 focus:ring-blue-500 accent-blue-600 cursor-pointer"
                    />
                  </td>
                  {Object.entries(row).filter(([key]) => key !== 'id').map(([key, val], i) => (
                    <td key={i} className="px-6 py-4 text-sm text-gray-700 font-medium whitespace-nowrap">
                      {key === 'status' || key === 'Status' ? (
                        <span className={`px-2 py-1 rounded text-[10px] font-black uppercase ${
                          val === 'Approved' ? 'bg-green-100 text-green-700' : 
                          val === 'Pending' ? 'bg-amber-100 text-amber-700' : 'bg-blue-100 text-blue-700'
                        }`}>
                          {val}
                        </span>
                      ) : (
                        val
                      )}
                    </td>
                  ))}
                </tr>
              )) : (
                <tr>
                  <td colSpan="12" className="p-20 text-center text-gray-400 italic">
                    <div className="flex flex-col items-center gap-2">
                      <LayoutGrid size={48} className="opacity-20" />
                      <p className="font-bold uppercase text-xs tracking-widest">No matching records found</p>
                    </div>
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>

        {/* --- FOOTER STATS --- */}
        <div className="mt-8 flex justify-between items-center border-t border-gray-100 pt-6">
          <p className="text-xs font-bold text-gray-400 uppercase tracking-widest">
            Showing {currentData.length} records in {categoryConfigs[activeCategory].label}
          </p>
          {selectedRows.size > 0 && (
            <button 
              onClick={() => setSelectedRows(new Set())}
              className="text-xs font-black text-red-500 uppercase hover:underline"
            >
              Clear selection ({selectedRows.size})
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

export default ViewPage;
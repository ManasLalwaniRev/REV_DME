import React from 'react';

const GenericForm = ({ title, fields }) => {
  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`${title} submitted successfully! (Demo Mode)`);
  };

  return (
    <div className="max-w-4xl mx-auto bg-white p-8 rounded-xl shadow-lg mt-10">
      <h2 className="text-2xl font-bold text-gray-800 mb-6 border-b pb-4">{title}</h2>
      <form onSubmit={handleSubmit} className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {fields.map((field, index) => (
          <div key={index} className="flex flex-col">
            <label className="text-sm font-medium text-gray-600 mb-1">{field.label}</label>
            <input
              type={field.type || "text"}
              placeholder={`Enter ${field.label.toLowerCase()}...`}
              className="p-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 outline-none"
              required
            />
          </div>
        ))}
        <div className="md:col-span-2 mt-4">
          <button 
            type="submit"
            className="w-full bg-blue-600 text-white font-bold py-3 rounded-lg hover:bg-blue-700 transition-colors"
          >
            Save {title}
          </button>
        </div>
      </form>
    </div>
  );
};

export default GenericForm;
import React, { useState } from "react";

interface LeadGenerationFormData {
  name: string;
  number: string;
  service: string;
  location: string;
}

const LeadGenerationForm: React.FC = () => {
  const [form, setForm] = useState<LeadGenerationFormData>({
    name: "",
    number: "",
    service: "",
    location: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // For now, just log the form data
    console.log(form);
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4 p-4 rounded-lg shadow bg-white max-w-md mx-auto">
      <div>
        <label htmlFor="name" className="block font-medium mb-1">Customer Name</label>
        <input
          type="text"
          id="name"
          name="name"
          value={form.name}
          onChange={handleChange}
          required
          className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
      </div>
      <div>
        <label htmlFor="number" className="block font-medium mb-1">Phone Number</label>
        <input
          type="tel"
          id="number"
          name="number"
          value={form.number}
          onChange={handleChange}
          required
          className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
      </div>
      <div>
        <label htmlFor="service" className="block font-medium mb-1">Service Required</label>
        <input
          type="text"
          id="service"
          name="service"
          value={form.service}
          onChange={handleChange}
          required
          className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
      </div>
      <div>
        <label htmlFor="location" className="block font-medium mb-1">Location</label>
        <input
          type="text"
          id="location"
          name="location"
          value={form.location}
          onChange={handleChange}
          required
          className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
      </div>
      <button
        type="submit"
        className="w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700 transition-colors"
      >
        Submit
      </button>
    </form>
  );
};

export default LeadGenerationForm; 
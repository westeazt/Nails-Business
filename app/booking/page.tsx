"use client";

// We'll bring this in later to manage the form's data
// import { useState } from 'react';

// We can reuse the same service data from our homepage!
const services = [
  { name: "Classic Manicure" },
  { name: "Gel-X Extensions" },
  { name: "Spa Pedicure" },
  { name: "Eyelash Extensions" },
];

export default function BookingPage() {
  return (
    <div className="max-w-2xl mx-auto my-12 p-8 bg-white rounded-lg shadow-lg">
      <h1 className="text-3xl font-bold text-center mb-2 text-gray-800">
        Book Your Appointment
      </h1>
      <p className="text-center text-gray-500 mb-8">
        We can't wait to see you!
      </p>

      {/* The <form> element is a container for all our inputs */}
      <form className="space-y-6">
        {/* Name Input */}
        <div>
          <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
            Full Name
          </label>
          <input
            type="text"
            id="name"
            name="name"
            required
            className="w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-pink-500 focus:border-pink-500"
          />
        </div>

        {/* Email Input */}
        <div>
          <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
            Email Address
          </label>
          <input
            type="email"
            id="email"
            name="email"
            required
            className="w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-pink-500 focus:border-pink-500"
          />
        </div>

        {/* Service Selection Dropdown */}
        <div>
          <label htmlFor="service" className="block text-sm font-medium text-gray-700 mb-1">
            Select a Service
          </label>
          <select
            id="service"
            name="service"
            required
            className="w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-pink-500 focus:border-pink-500"
          >
            <option value="" disabled>Please choose an option</option>
            {/* We map over our services array to create the options dynamically! */}
            {services.map(service => (
              <option key={service.name} value={service.name}>
                {service.name}
              </option>
            ))}
          </select>
        </div>

        {/* Date Picker */}
        <div>
          <label htmlFor="date" className="block text-sm font-medium text-gray-700 mb-1">
            Preferred Date
          </label>
          <input
            type="date"
            id="date"
            name="date"
            required
            className="w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-pink-500 focus:border-pink-500"
          />
        </div>

        {/* Submit Button */}
        <div>
          <button
            type="submit"
            className="w-full bg-pink-500 hover:bg-pink-600 text-white font-bold py-3 px-4 rounded-md transition-colors duration-300"
          >
            Request Appointment
          </button>
        </div>
      </form>
    </div>
  );
}
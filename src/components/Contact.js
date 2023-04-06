import React, { useState } from 'react';

function Contact() {

  return (
    <section className="bg-white">
      <div className="py-8 lg:py-16 px-4 mx-auto max-w-screen-md">
        <h2 className="mb-4 text-2xl lg:text-4xl tracking-tight font-extrabold text-center text-gray-900">
          Request An Estimate
        </h2>
        <p className="mb-8 lg:mb-16 font-light text-center text-gray-500 text-sm lg:text-base">
        We'd love to hear from you! Use this form to provide details about your project and receive an estimate. Don't forget to let us know if you want to schedule a call.
        </p>
        <div className="lg:grid lg:grid-cols-2 lg:gap-8">
          <form   action="submit" method="POST" className="space-y-8">
            <div>
              <label htmlFor="name" className="block mb-2 text-sm font-medium text-gray-900">
                Name
              </label>
              <input
                name="name"
                type="text"
                id="name"
                className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5"
                placeholder="John Doe"
                required
              />
            </div>
            <div>
              <label htmlFor="email" className="block mb-2 text-sm font-medium text-gray-900">
                Email
              </label>
              <input
                name="email"
                type="email"
                id="email"
                className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5"
                placeholder="name@email.com"
                required
              />
            </div>
            <div>
              <label htmlFor="phone" className="block mb-2 text-sm font-medium text-gray-900 ">
                Phone
              </label>
              <input
                name="phone" 
                type="tel"
                id="phone"
                className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5"
                placeholder="555-555-5555"
                required
              />
            </div>
            <div>
              <label htmlFor="service" className="block mb-2 text-sm font-medium text-gray-900">
                Service
              </label>
              <select
                name="service"
                id="service"
                className="block p-3 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 shadow-sm focus:ring-primary-500 focus:border-primary-500"
                required
              >
                <option value="">Select a service closest to your needs</option>
                <option value="Paint">House / Room Cleaning</option>
                <option value="Flooring">Move Out/In Cleaning</option>
                <option value="Fence/Patio">Set up Routine Cleaning</option>
                <option value="Rehab">Window Cleaning</option>
                <option value="Other">New Construction Cleaning</option>
                <option value="Other">Other</option>
              </select>
            </div>
            <div className="mb-6">
  <label htmlFor="message" className="block mb-2 text-sm font-medium text-gray-900">
    Message
  </label>
  <textarea
    name="message"
    id="message"
    className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 h-32 resize-none"
    placeholder="Provide as much detail as possible for what you need done...."
    required
  />
</div>

<div>
  <div className="flex items-center mb-2">
    <input
      type="checkbox"
      id="phoneCall"
      className="mr-2"
    />
    <label htmlFor="phoneCall" className="text-sm font-medium text-gray-900">
      Do you want us to schedule a phone call?
    </label>
  </div>
</div>

            <button class="bg-green-500 hover:bg-green-400 hover:bg-opacity-90 text-white font-bold py-2 px-4 rounded">
  Submit
</button>
          </form>
        </div>
      </div>
    </section>
  );
}

export default Contact
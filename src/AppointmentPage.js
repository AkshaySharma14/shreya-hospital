import React, { useState } from "react";

export default function AppointmentPage() {
  const [formData, setFormData] = useState({
    specialist: "",
    doctor: "",
    shift: "",
    liveConsultation: "No",
    date: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Form submitted! Data: " + JSON.stringify(formData, null, 2));
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Top Bar */}
      <div className="bg-teal-700 text-white text-sm flex justify-between items-center px-6 py-2">
        <div className="flex gap-6">
          <span>📧 info@shreyahospital.com</span>
          <span>📞 +91-7838737363</span>
        </div>
        <button className="bg-white text-teal-700 px-4 py-1 rounded shadow">
          Login
        </button>
      </div>

      {/* Navbar */}
      <div className="flex justify-between items-center px-6 py-4 border-b bg-white">
        <img
          src="download.png"
          alt="Logo"
          
          className="h-12"
        />
        <div className="flex gap-4">
          <button className="bg-teal-700 text-white px-4 py-2 rounded-lg shadow">
            Appointment
          </button>
          <button className="text-gray-700 px-4 py-2">Home</button>
        </div>
      </div>

      {/* Form Section */}
      <div className="max-w-4xl mx-auto mt-8 bg-white p-6 rounded-xl shadow">
        <form onSubmit={handleSubmit} className="space-y-6">
          {/* Specialist & Doctor */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label className="block text-gray-700">Specialist</label>
              <select
                name="specialist"
                value={formData.specialist}
                onChange={handleChange}
                className="w-full border rounded-lg px-3 py-2 mt-1"
              >
                <option value="">Select</option>
                <option value="cardiology">Cardiology</option>
                <option value="dentistry">Dentistry</option>
              </select>
            </div>
            <div>
              <label className="block text-gray-700">Doctor</label>
              <select
                name="doctor"
                value={formData.doctor}
                onChange={handleChange}
                className="w-full border rounded-lg px-3 py-2 mt-1"
              >
                <option value="">Select</option>
                <option value="drA">Dr. Akshay</option>
                <option value="drB">Dr. Harsh</option>
              </select>
            </div>
          </div>

          {/* Slot Message */}
          <div className="bg-red-100 text-red-700 p-3 rounded">
            No Slot Available
          </div>

          {/* Shift & Live Consultation */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label className="block text-gray-700">Shift</label>
              <select
                name="shift"
                value={formData.shift}
                onChange={handleChange}
                className="w-full border rounded-lg px-3 py-2 mt-1"
              >
                <option value="">Select</option>
                <option value="morning">Morning</option>
                <option value="evening">Evening</option>
              </select>
            </div>
            <div>
              <label className="block text-gray-700">
                Live Consultation (On Video Conference){" "}
                <span className="text-red-500">*</span>
              </label>
              <select
                name="liveConsultation"
                value={formData.liveConsultation}
                onChange={handleChange}
                className="w-full border rounded-lg px-3 py-2 mt-1"
              >
                <option value="No">No</option>
                <option value="Yes">Yes</option>
              </select>
            </div>
          </div>

          {/* Date */}
          <div>
            <label className="block text-gray-700">Date</label>
            <input
              type="date"
              name="date"
              value={formData.date}
              onChange={handleChange}
              className="w-full border rounded-lg px-3 py-2 mt-1"
            />
          </div>

          {/* Message */}
          <div>
            <label className="block text-gray-700">
              Message <span className="text-red-500">*</span>
            </label>
            <textarea
              name="message"
              value={formData.message}
              onChange={handleChange}
              rows="3"
              className="w-full border rounded-lg px-3 py-2 mt-1"
              placeholder="Enter your message"
            ></textarea>
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            className="bg-teal-700 text-white px-6 py-2 rounded-lg shadow"
          >
            Submit
          </button>
        </form>
      </div>
    </div>
  );
}

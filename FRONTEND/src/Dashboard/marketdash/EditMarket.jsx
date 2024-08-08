import React, { useState } from 'react';

const EditMarket = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    experience: '',
    skills: '',
    portfolio: '',
    caseStudies: '',
    education: '',
    certifications: '',
    references: '',
    testimonials: ''
  });

  const handleChange = (e) => {
    const { id, value } = e.target;
    setFormData({
      ...formData,
      [id]: value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    console.log('Form data:', formData);
  };

  return (
    <div className="max-w-2xl mx-auto p-6 bg-white shadow-md rounded-lg">
      <h2 className="text-2xl font-semibold mb-4">Edit Marketer Profile</h2>
      <form onSubmit={handleSubmit}>

        <div className="mb-4">
          <label className="block text-gray-700 font-bold mb-2" htmlFor="name">Full Name</label>
          <input 
            className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring focus:border-blue-300"
            id="name" 
            type="text" 
            value={formData.name} 
            onChange={handleChange} 
            placeholder="Enter full name" 
          />
        </div>

        <div className="mb-4">
          <label className="block text-gray-700 font-bold mb-2" htmlFor="email">Email Address</label>
          <input 
            className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring focus:border-blue-300"
            id="email" 
            type="email" 
            value={formData.email} 
            onChange={handleChange} 
            placeholder="Enter email address" 
          />
        </div>

        {/* Experience and Skills */}
        <div className="mb-4">
          <label className="block text-gray-700 font-bold mb-2" htmlFor="experience">Years of Experience</label>
          <input 
            className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring focus:border-blue-300"
            id="experience" 
            type="number" 
            value={formData.experience} 
            onChange={handleChange} 
            placeholder="Enter years of experience" 
          />
        </div>

        <div className="mb-4">
          <label className="block text-gray-700 font-bold mb-2" htmlFor="skills">Skills</label>
          <textarea 
            className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring focus:border-blue-300"
            id="skills" 
            rows="3" 
            value={formData.skills} 
            onChange={handleChange} 
            placeholder="List your key skills"
          ></textarea>
        </div>

        {/* Portfolio and Case Studies */}
        <div className="mb-4">
          <label className="block text-gray-700 font-bold mb-2" htmlFor="portfolio">Portfolio URL</label>
          <input 
            className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring focus:border-blue-300"
            id="portfolio" 
            type="url" 
            value={formData.portfolio} 
            onChange={handleChange} 
            placeholder="Enter portfolio URL" 
          />
        </div>

        <div className="mb-4">
          <label className="block text-gray-700 font-bold mb-2" htmlFor="caseStudies">Case Studies</label>
          <textarea 
            className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring focus:border-blue-300"
            id="caseStudies" 
            rows="3" 
            value={formData.caseStudies} 
            onChange={handleChange} 
            placeholder="Describe some of your case studies"
          ></textarea>
        </div>

        {/* Education and Certifications */}
        <div className="mb-4">
          <label className="block text-gray-700 font-bold mb-2" htmlFor="education">Educational Background</label>
          <textarea 
            className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring focus:border-blue-300"
            id="education" 
            rows="2" 
            value={formData.education} 
            onChange={handleChange} 
            placeholder="Enter your educational background"
          ></textarea>
        </div>' '

        <div className="mb-4">
          <label className="block text-gray-700 font-bold mb-2" htmlFor="certifications">Certifications</label>
          <textarea 
            className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring focus:border-blue-300"
            id="certifications" 
            rows="2" 
            value={formData.certifications} 
            onChange={handleChange} 
            placeholder="List your certifications"
          ></textarea>
        </div>

        {/* Additional Information */}
        <div className="mb-4">
          <label className="block text-gray-700 font-bold mb-2" htmlFor="references">Professional References</label>
          <textarea 
            className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring focus:border-blue-300"
            id="references" 
            rows="2" 
            value={formData.references} 
            onChange={handleChange} 
            placeholder="Enter professional references"
          ></textarea>
        </div>

        <div className="mb-4">
          <label className="block text-gray-700 font-bold mb-2" htmlFor="testimonials">Testimonials</label>
          <textarea 
            className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring focus:border-blue-300"
            id="testimonials" 
            rows="2" 
            value={formData.testimonials} 
            onChange={handleChange} 
            placeholder="Include testimonials"
          ></textarea>
        </div>

        {/* Submit Button */}
        <div className="flex justify-end">
          <button 
            className="px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 focus:outline-none focus:bg-blue-700" 
            type="submit"
          >
            Save Changes
          </button>
        </div>
      </form>
    </div>
  );
};

export default EditMarket;

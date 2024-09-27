
import React, { useState } from 'react';
import { Save, User, Mail, Briefcase, Star, Link, FileText, GraduationCap, Award, Users, MessageSquare } from 'lucide-react';

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
    setFormData({ ...formData, [id]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form data:', formData);
  };

  const InputField = ({ icon: Icon, label, id, type = 'text', placeholder }) => (
    <div className="mb-6">
      <label className="block text-gray-700 font-semibold mb-2" htmlFor={id}>
        <div className="flex items-center">
          <Icon size={18} className="mr-2 text-blue-600" />
          {label}
        </div>
      </label>
      <input
        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition duration-200"
        id={id}
        type={type}
        value={formData[id]}
        onChange={handleChange}
        placeholder={placeholder}
      />
    </div>
  );

  const TextAreaField = ({ icon: Icon, label, id, placeholder, rows = 3 }) => (
    <div className="mb-6">
      <label className="block text-gray-700 font-semibold mb-2" htmlFor={id}>
        <div className="flex items-center">
          <Icon size={18} className="mr-2 text-blue-600" />
          {label}
        </div>
      </label>
      <textarea
        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition duration-200"
        id={id}
        rows={rows}
        value={formData[id]}
        onChange={handleChange}
        placeholder={placeholder}
      ></textarea>
    </div>
  );

  return (
    <div className="max-w-4xl mx-auto p-8 bg-white shadow-lg rounded-xl">
      <h2 className="text-3xl font-bold mb-8 text-center text-gray-800">Edit Marketer Profile</h2>
      <form onSubmit={handleSubmit} className="space-y-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <InputField icon={User} label="Full Name" id="name" placeholder="Enter full name" />
          <InputField icon={Mail} label="Email Address" id="email" type="email" placeholder="Enter email address" />
          <InputField icon={Briefcase} label="Years of Experience" id="experience" type="number" placeholder="Enter years of experience" />
          <InputField icon={Link} label="Portfolio URL" id="portfolio" type="url" placeholder="Enter portfolio URL" />
        </div>

        <TextAreaField icon={Star} label="Skills" id="skills" placeholder="List your key skills" />
        <TextAreaField icon={FileText} label="Case Studies" id="caseStudies" placeholder="Describe some of your case studies" rows={4} />
        <TextAreaField icon={GraduationCap} label="Educational Background" id="education" placeholder="Enter your educational background" />
        <TextAreaField icon={Award} label="Certifications" id="certifications" placeholder="List your certifications" />
        <TextAreaField icon={Users} label="Professional References" id="references" placeholder="Enter professional references" />
        <TextAreaField icon={MessageSquare} label="Testimonials" id="testimonials" placeholder="Include testimonials" rows={4} />

        <div className="flex justify-end mt-8">
          <button 
            className="px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 transition duration-200 flex items-center"
            type="submit"
          >
            <Save size={18} className="mr-2" />
            Save Changes
          </button>
        </div>
      </form>
    </div>
  );
};

export default EditMarket;
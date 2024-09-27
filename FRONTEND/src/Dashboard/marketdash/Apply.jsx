import React, { useState } from 'react';
import { User, Link, FileText, Send } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';

const InputField = ({ label, id, type, value, onChange, icon: Icon }) => (
  <div className="mb-6">
    <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor={id}>
      {label}
    </label>
    <div className="relative">
      <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
        <Icon className="h-5 w-5 text-gray-400" />
      </div>
      <input
        type={type}
        id={id}
        name={id}
        className="block w-full pl-10 pr-3 py-2 border border-gray-300 rounded-md leading-5 bg-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 sm:text-sm transition duration-150 ease-in-out"
        value={value}
        onChange={onChange}
        required
      />
    </div>
  </div>
);
const Apply = ({ jobTitle, campaignId }) => {
  const [formData, setFormData] = useState({
    name: '',
    portfolioLink: '',
    coverLetter: '',
  });
  const [error, setError] = useState('');
  const [success, setSuccess] = useState(false);
  const navigate = useNavigate();

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const response = await fetch(`http://localhost:3500/campaigns/apply/${campaignId}`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
        credentials: 'include',
      });

      const result = await response.json();

      if (response.ok) {
        toast.success('Application submitted successfully!');
        setFormData({ name: '', portfolioLink: '', coverLetter: '' });
        setSuccess(true);
        setTimeout(() => {
          navigate('/market');
        }, 1000);
      } else {
        toast.error(result.message || 'Failed to apply for the campaign.');
        setError(result.message || 'Error applying for the campaign');
      }
    } catch (error) {
      console.error('Error:', error);
      toast.error('Network error: Failed to apply for the campaign.');
      setError('Network error');
    }
  };
  return (
    <div className="min-h-screen bg-gray-100 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-2xl mx-auto bg-white rounded-lg shadow-xl overflow-hidden">
        <div className="bg-indigo-600 py-6 px-8">
          <h1 className="text-3xl font-extrabold text-white">
            Apply Now: {jobTitle}
          </h1>
          <p className="mt-2 text-white text-opacity-80">
            Fill out the form below to submit your application
          </p>
        </div>
        <form onSubmit={handleSubmit} className="py-8 px-8">
          <InputField
            label="Full Name"
            id="name"
            type="text"
            value={formData.name}
            onChange={handleChange}
            icon={User}
          />
          <InputField
            label="Portfolio Link"
            id="portfolioLink"
            type="url"
            value={formData.portfolioLink}
            onChange={handleChange}
            icon={Link}
          />
          <div className="mb-6">
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="coverLetter">
              Cover Letter
            </label>
            <div className="relative">
              <div className="absolute top-3 left-3 pointer-events-none">
                <FileText className="h-5 w-5 text-gray-400" />
              </div>
              <textarea
                id="coverLetter"
                name="coverLetter"
                className="block w-full pl-10 pr-3 py-2 border border-gray-300 rounded-md leading-5 bg-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 sm:text-sm transition duration-150 ease-in-out"
                rows="6"
                value={formData.coverLetter}
                onChange={handleChange}
                required
              />
            </div>
          </div>
          {error && <p className="text-red-500 text-xs italic mb-4">{error}</p>}
          {success && <p className="text-green-500 text-xs italic mb-4">Application submitted successfully! Redirecting to dashboard...</p>}
          <div className="mt-8">
            <button
              type="submit"
              className="w-full flex justify-center py-3 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 transition duration-150 ease-in-out"
            >
              <Send className="h-5 w-5 mr-2" />
              Submit Application
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};


export default Apply;

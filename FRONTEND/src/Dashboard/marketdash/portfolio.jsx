
import React, { useState } from 'react';

const portfolio = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [skill, setSkill] = useState('');
  const [jobType, setJobType] = useState('');
  const [linkedinProfile, setLinkedinProfile] = useState('');
  const [errors, setErrors] = useState({});

  const validateForm = () => {
    const newErrors = {};

    if (!name.trim()) {
      newErrors.name = 'Name is required';
    }

    if (!email.trim()) {
      newErrors.email = 'Email is required';
    } else if (!/\S+@\S+\.\S+/.test(email)) {
      newErrors.email = 'Email address is invalid';
    }

    if (!phone.trim()) {
      newErrors.phone = 'Phone number is required';
    } else if (!/^\d{10,15}$/.test(phone)) {
      newErrors.phone = 'Phone number is invalid';
    }

    if (!title.trim()) {
      newErrors.title = 'Job title is required';
    }

    if (!description.trim()) {
      newErrors.description = 'Job description is required';
    }

    if (!skill.trim()) {
      newErrors.skill = 'At least one skill is required';
    }

    if (!jobType) {
      newErrors.jobType = 'Job type is required';
    }

    if (linkedinProfile && !/^https?:\/\/(www\.)?linkedin\.com\/.*$/.test(linkedinProfile)) {
      newErrors.linkedinProfile = 'LinkedIn profile URL is invalid';
    }

    return newErrors;
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const newErrors = validateForm();

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
    } else {
      setErrors({});
      // Submit form data to the server
      console.log({
        name,
        email,
        phone,
        title,
        description,
        skill,
        jobType,
        linkedinProfile,
      });
      alert("Portfolio submitted successfully!");
    }
  };

  return (
    <form onSubmit={handleSubmit} className="max-w-md mx-auto p-4 pt-6 pb-8 mb-4 bg-white rounded shadow-md">
      <h1 className="text-3xl font-bold mb-4">Create Your Portfolio</h1>

      <div className="mb-4">
        <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="name">
          Name
        </label>
        <input
          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          id="name"
          type="text"
          name="name"
          value={name}
          onChange={(event) => setName(event.target.value)}
        />
        {errors.name && <p className="text-red-500 text-xs italic">{errors.name}</p>}
      </div>

      <div className="mb-4">
        <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="email">
          Email
        </label>
        <input
          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          id="email"
          type="email"
          name="email"
          value={email}
          onChange={(event) => setEmail(event.target.value)}
        />
        {errors.email && <p className="text-red-500 text-xs italic">{errors.email}</p>}
      </div>

      <div className="mb-4">
        <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="phone">
          Phone Number
        </label>
        <input
          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          id="phone"
          type="tel"
          name="phone"
          value={phone}
          onChange={(event) => setPhone(event.target.value)}
        />
        {errors.phone && <p className="text-red-500 text-xs italic">{errors.phone}</p>}
      </div>

      {/* Portfolio Details */}
      <div className="mb-4">
        <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="title">
          Job Title
        </label>
        <input
          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          id="title"
          type="text"
          name="title"
          value={title}
          onChange={(event) => setTitle(event.target.value)}
        />
        {errors.title && <p className="text-red-500 text-xs italic">{errors.title}</p>}
      </div>

      <div className="mb-4">
        <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="description">
          Job Description
        </label>
        <textarea
          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          id="description"
          name="description"
          value={description}
          onChange={(event) => setDescription(event.target.value)}
        />
        {errors.description && <p className="text-red-500 text-xs italic">{errors.description}</p>}
      </div>

      {/* Skills */}
      <div className="mb-4">
        <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="skill">
          Skills
        </label>
        <input
          type="text"
          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          id="skill"
          name="skill"
          value={skill}
          onChange={(event) => setSkill(event.target.value)}
        />
        {errors.skill && <p className="text-red-500 text-xs italic">{errors.skill}</p>}
      </div>

      {/* Job Type */}
      <div className="mb-4">
        <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="jobType">
          Job Type
        </label>
        <select
          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          id="jobType"
          name="jobType"
          value={jobType}
          onChange={(event) => setJobType(event.target.value)}
        >
          <option value="">Select a job type</option>
          <option value="Full-time">Full-time</option>
          <option value="Part-time">Part-time</option>
          <option value="Freelance">Freelance</option>
        </select>
        {errors.jobType && <p className="text-red-500 text-xs italic">{errors.jobType}</p>}
      </div>

      {/* LinkedIn Profile */}
      <div className="mb-4">
        <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="linkedinProfile">
          LinkedIn Profile
        </label>
        <input
          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          id="linkedinProfile"
          type="url"
          name="linkedinProfile"
          value={linkedinProfile}
          onChange={(event) => setLinkedinProfile(event.target.value)}
        />
        {errors.linkedinProfile && <p className="text-red-500 text-xs italic">{errors.linkedinProfile}</p>}
      </div>

      {/* Submit Button */}
      <div className="mb-4">
        <button
          type="submit"
          className="w-full bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
        >
          Submit Portfolio
        </button>
      </div>
    </form>
  );
};

export default portfolio;
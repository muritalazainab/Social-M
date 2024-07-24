import React, { useState } from 'react';

const Apply = ({ jobTitle, onSubmit }) => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [coverLetter, setCoverLetter] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    const application = {
      name,
      email,
      coverLetter,
    };
    onSubmit(application);
  };

  return (
    <div className="container mx-auto p-4 bg-FFFAF6 text-564741">
      <h1 className="text-3xl font-bold mb-4">Apply Now {jobTitle}</h1>
      <form onSubmit={handleSubmit} className="bg-FFF6EF p-4 rounded-lg shadow-md">
        <div className="mb-4">
          <label className="block text-sm font-medium mb-1" htmlFor="name">Name</label>
          <input
            type="text"
            id="name"
            className="w-full px-3 py-2 border border-E7E6E6 rounded-md"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />
        </div>
        <div className="mb-4">
          <label className="block text-sm font-medium mb-1" htmlFor="email">Email</label>
          <input
            type="email"
            id="email"
            className="w-full px-3 py-2 border border-E7E6E6 rounded-md"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>
        <div className="mb-4">
          <label className="block text-sm font-medium mb-1" htmlFor="coverLetter">Cover Letter</label>
          <textarea
            id="coverLetter"
            className="w-full px-3 py-2 border border-E7E6E6 rounded-md"
            value={coverLetter}
            onChange={(e) => setCoverLetter(e.target.value)}
            required
          />
        </div>
        <button type="submit" className="bg-btn text-white px-4 py-2 rounded-md">Submit Application</button>
      </form>
    </div>
  );
};

export default Apply;
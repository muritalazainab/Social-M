import React, { useEffect, useState } from 'react';

const Portfolio = () => {
  const [formData, setFormData] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch('/api/profile');
      const data = await response.json();
      setFormData(data);
    };

    fetchData();
  }, []);

  if (!formData) {
    return <div>Loading...</div>;
  }

  return (
    <div className="max-w-2xl mx-auto p-6 bg-white shadow-md rounded-lg">
      <h2 className="text-2xl font-semibold mb-4">Marketer Portfolio</h2>
      {/* Display formData */}
      <div className="mb-4">
        <h3 className="text-xl font-semibold">Full Name</h3>
        <p>{formData.name}</p>
      </div>
      {/* Other fields */}
    </div>
  );
};

export default Portfolio;

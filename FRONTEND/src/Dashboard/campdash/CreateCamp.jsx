import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useCampaigns } from './CampaignContext';

const CreateCamp = () => {
  const { addCampaign } = useCampaigns();
  const [formData, setFormData] = useState({
    title: '',
    deadline: '',
    description: '',
    budget: '',
  });
  const [error, setError] = useState('');
  const [success, setSuccess] = useState(false);

  const navigate = useNavigate();

  const handleChange = (event) => {
    const { name, value } = event.target; 
    setFormData(prevState => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    if (parseFloat(formData.budget) <= 0) {
      setError('Budget must be greater than zero.');
      return;
    }

    setError('');

    try {
      const response = await fetch('http://localhost:3500/campaigns', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
        credentials: 'include',
      });

      if (!response.ok) {
        throw new Error('Failed to create campaign');
      }

      const newCampaign = await response.json();
      addCampaign(newCampaign);  // Add new campaign to context
      setSuccess(true);
      setFormData({ title: '', deadline: '', description: '', budget: '' });

      // Redirect after 2 seconds
      setTimeout(() => {
        navigate('/camp');
      }, 1000);
    } catch (error) {
      console.error('Error:', error.message);
      setError(error.message);
    }
  };

  return (
    <div className="flex justify-center items-center h-screen">
      <form className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4" onSubmit={handleSubmit}>
        <div className="mb-4">
          <label className="block text-txtBg text-sm font-bold mb-2" htmlFor="title">
            Title
          </label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-txtBg leading-tight focus:outline-none focus:shadow-outline"
            id="title"
            name="title"
            type="text"
            placeholder="e.g Digital marketing"
            value={formData.title}
            onChange={handleChange}
            required
          />
        </div>
        <div className="mb-6">
          <label className="block text-txtBg text-sm font-bold mb-2" htmlFor="deadline">
            Deadline
          </label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-txtBg leading-tight focus:outline-none focus:shadow-outline"
            id="deadline"
            name="deadline"
            type="date"
            value={formData.deadline}
            onChange={handleChange}
            required
          />
        </div>
        <div className="mb-4">
          <label className="block text-txtBg text-sm font-bold mb-2" htmlFor="description">
            Description
          </label>
          <textarea
            className="shadow appearance-none border rounded w-full py-2 px-3 text-txtBg leading-tight focus:outline-none focus:shadow-outline"
            id="description"
            name="description"
            rows="4"
            value={formData.description}
            onChange={handleChange}
            required
          />
        </div>
        <div className="mb-4">
          <label className="block text-txtBg text-sm font-bold mb-2" htmlFor="budget">
            Budget
          </label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-txtBg leading-tight focus:outline-none focus:shadow-outline"
            id="budget"
            name="budget"
            type="number"
            placeholder="40"
            value={formData.budget}
            onChange={handleChange}
            required
          />
        </div>
        {error && <p className="text-red-500 text-xs italic">{error}</p>}
        {success && <p className="text-green-500 text-xs italic">Campaign created successfully! Redirecting to dashboard...</p>}
        <div className="flex items-center justify-between">
          <button
            className="bg-btn hover:bg-btn text-txtBg font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
            type="button"
            onClick={() => navigate('/camp')}
          >
            Cancel
          </button>
          <button
            className="bg-btn hover:bg-btn text-txtBg font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
            type="submit"
          >
            Send Request
          </button>
        </div>
      </form>
    </div>
  );
};

export default CreateCamp;

import { useState } from "react";
import { useNavigate } from "react-router-dom";

const CreateCamp = () => {
  const [selectedOption, setSelectedOption] = useState('');
  const [formData, setFormData] = useState({
    marketerType: '',
    urgency: '',
    details: '',
    budget: '',
    splitTask: 'no'
  });
  const [walletFunded, setWalletFunded] = useState(true); // Assuming wallet is funded for now
  const [error, setError] = useState('');
  const [success, setSuccess] = useState(false);
  const navigate = useNavigate();

  const handleOptionChange = (event) => {
    setSelectedOption(event.target.value);
    setFormData({ ...formData, splitTask: event.target.value });
  };

  const handleChange = (event) => {
    setFormData({ ...formData, [event.target.id]: event.target.value });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    if (!walletFunded && parseFloat(formData.budget) > 0) {
      setError('Please fund your wallet to proceed.');
      return;
    }
    // Proceed with form submission logic
    setError('');
    
    try {
      const response = await fetch('/api/campaigns', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(formData)
      });

      if (response.ok) {
        const campaign = await response.json();
        console.log('Campaign created:', campaign);
        // Show success message
        setSuccess(true);
        // Redirect to campaigner dashboard after a delay
        setTimeout(() => {
          navigate('/campaigner-dashboard');
        }, 2000); // Redirect after 2 seconds
      } else {
        console.error('Failed to create campaign');
      }
    } catch (error) {
      console.error('Error:', error);
    }
  };

  return (
    <div className="flex justify-center items-center h-screen">
      <form className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4" onSubmit={handleSubmit}>
        <div className="mb-4">
          <label className="block text-txtBg text-sm font-bold mb-2" htmlFor="marketerType">
            Which kind of Marketer are you looking for?
          </label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-txtBg leading-tight focus:outline-none focus:shadow-outline"
            id="marketerType"
            type="text"
            placeholder="e.g Digital marketing"
            value={formData.marketerType}
            onChange={handleChange}
          />
        </div>
        <div className="mb-6">
          <label className="block text-txtBg text-sm font-bold mb-2" htmlFor="urgency">
            How urgent is your campaign?
          </label>
          <input
            className="shadow appearance-none border border-border rounded w-full py-2 px-3 text-txtBg mb-3 leading-tight focus:outline-none focus:shadow-outline"
            id="urgency"
            type="text"
            placeholder="2weeks"
            value={formData.urgency}
            onChange={handleChange}
          />
          <label className="block text-txtBg text-sm font-bold mb-2" htmlFor="details">
            Tell us more about your campaign
          </label>
          <textarea
            className="shadow appearance-none border rounded w-full py-2 px-3 text-txtBg leading-tight focus:outline-none focus:shadow-outline"
            id="details"
            placeholder="Write your message here..."
            rows="4"
            value={formData.details}
            onChange={handleChange}
          ></textarea>
          <label className="block text-txtBg text-sm font-bold mb-2" htmlFor="budget">
            What is your Budget?
          </label>
          <input
            className="shadow appearance-none border border-border rounded w-full py-2 px-3 text-txtBg mb-3 leading-tight focus:outline-none focus:shadow-outline"
            id="budget"
            type="text"
            placeholder="$40"
            value={formData.budget}
            onChange={handleChange}
          />
          <label className="block text-txtBg text-sm font-bold mb-2" htmlFor="splitTask">
            Do you want this to be a split task
          </label>
          <div className="mb-4">
            <div className="flex items-center mb-2">
              <input
                className="mr-2 leading-tight"
                type="radio"
                id="yes"
                name="splitTask"
                value="yes"
                checked={selectedOption === 'yes'}
                onChange={handleOptionChange}
              />
              <label className="text-gray-700" htmlFor="yes">
                Yes
              </label>
            </div>
            <div className="flex items-center">
              <input
                className="mr-2 leading-tight"
                type="radio"
                id="no"
                name="splitTask"
                value="no"
                checked={selectedOption === 'no'}
                onChange={handleOptionChange}
              />
              <label className="text-gray-700" htmlFor="no">
                No
              </label>
            </div>
          </div>
        </div>
        {error && <p className="text-red-500 text-xs italic">{error}</p>}
        {success && <p className="text-green-500 text-xs italic">Campaign created successfully! Redirecting to dashboard...</p>}
        <div className="flex items-center justify-between">
          <button
            className="bg-btn hover:bg-btn text-txtBg font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
            type="button"
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

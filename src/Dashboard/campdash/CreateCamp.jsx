import { useState } from "react";



const CreateCamp = () => {
    const [selectedOption, setSelectedOption] = useState('');

    const handleOptionChange = (event) => {
      setSelectedOption(event.target.value);
    }
  return (
    <div>
      <div className="flex justify-center items-center   h-screen">
        <form className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
          <div className="mb-4">
            <label
              className="block text-txtBg text-sm font-bold mb-2"
              htmlFor="e.g Digital marketing"
            >
              Which  kind of Marketer are you looking for?
            </label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-txtBg leading-tight focus:outline-none focus:shadow-outline"
              id="username"
              type="text"
              placeholder="e.g Digital marketing"
            />
          </div>
          <div className="mb-6">
          <label
              className="block text-txtBg text-sm font-bold mb-2"
              htmlFor="e.g Digital marketing"
            >
           How urgent is your campaign?
            </label>
            <input
              className="shadow appearance-none border border-border rounded w-full py-2 px-3 text-txtBg mb-3 leading-tight focus:outline-none focus:shadow-outline"
              id="text"
              type="text"
              placeholder="2weeks"
            />
          <label
              className="block text-txtBg text-sm font-bold mb-2"
              htmlFor="e.g Digital marketing"
            >
        Tell us more about your campaign
            </label>
            <textarea
            className="shadow appearance-none border rounded w-full py-2 px-3 text-txtBg leading-tight focus:outline-none focus:shadow-outline"
            id="message"
            placeholder="Write your message here..."
            rows="4"
          ></textarea>
           <label
              className="block text-txtBg text-sm font-bold mb-2"
              htmlFor="e.g Digital marketing"
            >
        what is your Budget?
            </label>
            <input
              className="shadow appearance-none border border-border rounded w-full py-2 px-3 text-txtBg mb-3 leading-tight focus:outline-none focus:shadow-outline"
              id="text"
              type="text"
              placeholder="$40"
            />
           <label
              className="block text-txtBg text-sm font-bold mb-2"
              htmlFor="e.g Digital marketing"
            >
    Do you want this to be a split task 
            </label>
            <div className="mb-4">
         
          <div className="flex items-center mb-2">
            <input
              className="mr-2 leading-tight"
              type="radio"
              id="yes"
              name="agreement"
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
              name="agreement"
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
          <div className="flex items-center justify-between">
            <button
              className="bg-btn hover:bg-btn text-txtBg font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
              type="button"
            >
           Canel
            </button>
            <button
              className="bg-btn hover:bg-btn text-txtBg font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
              type="button"
            >
         Send Request
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default CreateCamp;

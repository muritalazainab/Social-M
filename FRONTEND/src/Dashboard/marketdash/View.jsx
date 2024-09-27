import React from 'react';
const job = [
  {
    id: 1,
    title: 'Campaign Title 1',
    description: 'Description of the campaign 1',
    requirements: 'Requirements for campaign 1',
    budget: '$1000',
    timeframe: '1 month',
  },

  // 
];

const View = () => {

  return (
    <div>
      <header className='text-4xl ml-36 mt-10'>Job preview</header>
    <div className="container mx-auto p-4 bg-FFFAF6 text-564741">
      <h1 className="text-3xl font-bold mb-4">{job.title}</h1>
      <div className="bg-FFF6EF p-4 rounded-lg shadow-md">
        <h2 className="text-xl font-semibold mb-2">Job Description: Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint facilis non deserunt quos ad, mollitia tempore quam omnis. Aspernatur ullam placeat ut ipsa atque illo, facilis culpa fugiat dicta exercitationem!</h2>
        <p className="mb-4">{job.description}</p>
        <h2 className="text-xl font-semibold mb-2">Requirements: A digital marketers</h2>
        <p className="mb-4">{job.requirements}</p>
        <h2 className="text-xl font-semibold mb-2">Budget :$500</h2>
        <p className="mb-4">{job.budget}</p>
        <h2 className="text-xl font-semibold mb-2">Timeframe: 2weeks</h2>
        <p className="mb-4">{job.timeframe}</p>
      </div>
    </div>
      <div className="flex items-center justify-end mr-36 gap-6">
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
              Apply Now
            </button>
          </div>
    </div>
  );
};

export default View;

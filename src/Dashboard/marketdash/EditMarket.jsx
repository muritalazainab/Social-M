import { useState } from 'react';

function EditMarket() {
  const [isEditing, setIsEditing] = useState(true);
  const [profile, setProfile] = useState({
    name: '',
    bio: '',
    skills: '',
    // add more fields as needed
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setProfile({ ...profile, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsEditing(false);
  };

  return (
    <div className="container mx-auto p-4">
      {isEditing ? (
        <form onSubmit={handleSubmit} className="bg-white p-6 rounded-lg shadow-md">
          <h2 className="text-xl font-semibold mb-4">Edit Profile</h2>
          <div className="mb-4">
            <label className="block text-gray-700">Name</label>
            <input
              type="text"
              name="name"
              value={profile.name}
              onChange={handleChange}
              className="mt-1 p-2 w-full border rounded-lg"
              required
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700">Bio</label>
            <textarea
              name="bio"
              value={profile.bio}
              onChange={handleChange}
              className="mt-1 p-2 w-full border rounded-lg"
              required
            ></textarea>
          </div>
          <div className="mb-4">
            <label className="block text-gray-700">Skills</label>
            <input
              type="text"
              name="skills"
              value={profile.skills}
              onChange={handleChange}
              className="mt-1 p-2 w-full border rounded-lg"
              required
            />
          </div>
          {/* Add more fields as needed */}
          <button type="submit" className="bg-blue-500 text-white py-2 px-4 rounded-lg">
            Save
          </button>
        </form>
      ) : (
        <div className="bg-white p-6 rounded-lg shadow-md">
          <h2 className="text-xl font-semibold mb-4">Portfolio</h2>
          <p className="mb-2"><strong>Name:</strong> {profile.name}</p>
          <p className="mb-2"><strong>Bio:</strong> {profile.bio}</p>
          <p className="mb-2"><strong>Skills:</strong> {profile.skills}</p>
          {/* Display more fields as needed */}
          <button
            onClick={() => setIsEditing(true)}
            className="mt-4 bg-gray-500 text-white py-2 px-4 rounded-lg"
          >
            Edit
          </button>
        </div>
      )}
    </div>
  );
}

export default EditMarket;

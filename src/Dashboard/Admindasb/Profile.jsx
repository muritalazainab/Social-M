import React from 'react'

const Profile = ({ isOpen, onClose }) => {
  return (
    <div>
        <div className={`${isOpen ? 'fixed' : 'hidden'} z-10 inset-0 overflow-y-auto`}>
      <div className="flex items-end justify-center min-h-screen pt-4 px-4 pb-20 text-center sm:block sm:p-0">
        <div className="fixed inset-0 transition-opacity" aria-hidden="true">
          <div className="absolute inset-0 bg-gray-500 opacity-75"></div>
        </div>
        <span className="hidden sm:inline-block sm:align-middle sm:h-screen" aria-hidden="true">&#8203;</span>
        <div className="inline-block align-bottom bg-white rounded-lg px-4 pt-5 pb-4 text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-lg sm:w-full sm:p-6">
          <div className="flex items-center justify-between">
            <h2 className="text-2xl font-bold mb-4">Edit Profile</h2>
            <button onClick={onClose} className="text-gray-500 hover:text-gray-700">&times;</button>
          </div>
          <form>
          
            <div class="mb-4">
                  <label for="" class="block text-sm font-medium text-txtBg"> Company Name</label>
                  <input type="text" id="" name="password" class="mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-border focus:border-border" placeholder=" Company Name"/>
              </div>
            <div class="mb-4">
                  <label for="" class="block text-sm font-medium text-txtBg"> Company Address</label>
                  <input type="text" id="" name="password" class="mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-border focus:border-border" placeholder=" Company Address"/>
              </div>
              <div class="mb-4">
                  <label for="profile-picture" class="block text-sm font-medium text-txtBg">Profile Picture</label>
                  <input type="file" id="profile-picture" name="profile-picture" class="mt-1 block w-full p-2 border border-border rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-border focus:border-border"/>
              </div>
        
         
            <div className="flex justify-end">
              <button type="button" onClick={onClose} className="bg-gray-300 py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-gray-700 hover:bg-gray-400 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
                Cancel
              </button>
              <button type="submit" className="ml-3 bg-btn py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
                Save Changes
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
    </div>
  )
}

export default Profile

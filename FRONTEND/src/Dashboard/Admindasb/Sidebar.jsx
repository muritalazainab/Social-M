import React from 'react'

const Sidebar = () => {
  return (
    <div>
       <aside class="w-full md:w-64  text-white h-screen bg-white border-l border-black">
            <div class="p-6">
                <h1 class="text-2xl font-semibold mb-6 text-txtBg">Social Marketing</h1>
                <ul>
                    <li class="mb-4">
                        <a href="#" class="block py-2 px-4 rounded text-txtBg ">Dashboard</a>
                    </li>
                    <li class="mb-4">
                        <a href="#" class="block py-2 px-4 rounded text-txtBg">Profile</a>
                    </li>
                    <li class="mb-4">
                        <a href="#" class="block py-2 px-4 rounded text-txtBg">Settings</a>
                    </li>
                    <li class="mb-4">
                        <a href="#" class="block py-2 px-4 rounded text-txtBg">Logout</a>
                    </li>
                </ul>
            </div>
        </aside>
    </div>
  )
}

export default Sidebar

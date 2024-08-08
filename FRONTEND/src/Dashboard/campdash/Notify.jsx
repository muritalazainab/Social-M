// import React from 'react'

// const Notify = () => {
//   return (
//     <div>
//      <div className='w-full p-10'>
//       <div className=' justify-center '>
//         <a href="" className='text-xl'>Adeniyi Samuel</a>
//         <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit porro earum dicta, magni ullam numquam cumque consectetur nulla, facilis reprehenderit optio temporibus ipsum eaque maiores modi exercitationem, possimus est perferendis?</p>
//         <div className='flex justify-end gap-6 '>
//       <button className='bg-btn p-2 rounded-md'>Assign</button>
//       <button className='bg-btn p-2 rounded-md'>Decline</button>
//       </div>
//       </div>
//       <div className=' justify-center '>
//         <a href="" className='text-xl'>Adeniyi Samuel</a>
//         <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit porro earum dicta, magni ullam numquam cumque consectetur nulla, facilis reprehenderit optio temporibus ipsum eaque maiores modi exercitationem, possimus est perferendis?</p>
//         <div className='flex justify-end gap-6 '>
//       <button className='bg-btn p-2 rounded-md'>Assign</button>
//       <button className='bg-btn p-2 rounded-md'>Decline</button>
//       </div>
//       </div>
//       <div className=' justify-center '>
//         <a href="" className='text-xl'>Adeniyi Samuel</a>
//         <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit porro earum dicta, magni ullam numquam cumque consectetur nulla, facilis reprehenderit optio temporibus ipsum eaque maiores modi exercitationem, possimus est perferendis?</p>
//         <div className='flex justify-end gap-6 '>
//       <button className='bg-btn p-2 rounded-md'>Assign</button>
//       <button className='bg-btn p-2 rounded-md'>Decline</button>
//       </div>
//       </div>
//       </div>
//     </div>
//   )
// }

// export default Notify






import React, { useState } from 'react';

const Notify = () => {
  // Sample notifications data
  const [notifications, setNotifications] = useState([
    { id: 1, message: 'New campaign created', read: false },
    { id: 2, message: 'Your profile has been updated', read: false },
    { id: 3, message: 'New message from admin', read: false },
  ]);

  // Count unread notifications
  const unreadCount = notifications.filter(notification => !notification.read).length;

  return (
    <div className="min-h-screen bg-gray-100 p-6">
      <div className="relative w-full max-w-xl mx-auto bg-white shadow-md rounded-lg p-6">
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-2xl font-semibold">Notifications</h2>
          <div className="relative">
            <span className="absolute -top-1 -right-2 bg-red-500 text-white rounded-full text-xs px-1">
              {unreadCount}
            </span>
            <svg
              className="w-6 h-6 text-gray-600"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118.155 15H17v-2a2.006 2.006 0 00-.268-1.003L15 11.072V7a5.992 5.992 0 00-5-5.917V1a1 1 0 00-2 0v.083A5.992 5.992 0 003 7v4.072l-1.732 1.925A2.006 2.006 0 001 15v2h1.155a2.032 2.032 0 01-1.44 1.595L3 17h5m2 4a1 1 0 002 0m-6 0h8"
              ></path>
            </svg>
          </div>
        </div>
        <ul className="divide-y divide-gray-200">
          {notifications.map((notification) => (
            <li key={notification.id} className="py-4">
              <div className="flex justify-between">
                <p className={notification.read ? "text-gray-500" : "text-gray-900"}>{notification.message}</p>
                <button 
                  className="text-blue-500 hover:text-blue-700"
                  onClick={() => {
                    setNotifications(notifications.map(n => 
                      n.id === notification.id ? { ...n, read: true } : n
                    ));
                  }}
                >
                  Mark as Read
                </button>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Notify;

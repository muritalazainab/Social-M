import React from 'react'

const History = () => {
  return (
    <div className='p-10   h-screen	'>
         <div class="overflow-x-auto    ">
            <div className='flex justify-between'>

            <h2 className='text-4xl pb-20'>Social <span className='text-btn'>Marketing</span></h2>       
            <div class="relative font-semibold">
                        <span class="absolute left-0 top-0 bg-red-500 text-white rounded-full text-xs px-1">3</span>
                        <svg class="w-6 h-6 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118.155 15H17v-2a2.006 2.006 0 00-.268-1.003L15 11.072V7a5.992 5.992 0 00-5-5.917V1a1 1 0 00-2 0v.083A5.992 5.992 0 003 7v4.072l-1.732 1.925A2.006 2.006 0 001 15v2h1.155a2.032 2.032 0 01-1.44 1.595L3 17h5m2 4a1 1 0 002 0m-6 0h8"></path>
                        </svg>
                    </div>   
            </div>
              <div className='flex justify-start gap-20	mb-10'>
         <div class=" p-4 rounded-2xl	 shadow  px-10   shadow-btn bg-white		">
                    <h2 class="text-xl font-semibold mb-2 ">Widget 1</h2>
                    <p>Content for widget 1.</p>
                </div>
                <div class=" p-4 rounded-2xl shadow   px-10 shadow-btn bg-white		">
                    <h2 class="text-xl font-semibold mb-2 ">Widget 1</h2>
                    <p>Content for widget 1.</p>
                </div>
                </div>
            <h1 className='font-semibold text-3xl pl-2 text-txtBg'> Payment History</h1>
         <div class="flex space-x-4 p-4 text-center pr-4 gap-4	">
         <button className='rounded-2xl justify-center	text-center	w-10 h-10 bg-white text-txtBg cursor-pointer my-5	 border-2	px-10 py-1 flex	border-btn'>All</button>
    
         <button className='rounded-2xl justify-center	text-center	w-10 h-10 bg-white text-txtBg cursor-pointer my-5	 border-2	px-14 py-1 flex	border-btn '>Rejected</button>
    
         <button className='rounded-2xl justify-center	text-center	w-10 h-10 bg-white text-txtBg cursor-pointer my-5	 border-2	px-14 py-1 flex	border-btn '>Pending</button>
    
         <button className='rounded-2xl justify-center	text-center	w-10 h-10 bg-white text-txtBg cursor-pointer my-5	 border-2	px-14 py-1 flex	border-btn'>Completed</button>
    

    {/* <div class="w-10 h-10 bg-blue-500 rounded-	"> All</div>
    <div class="w-16 h-16 bg-green-500 rounded-full">Accepted</div>
    <div class="w-16 h-16 bg-red-500 rounded-full"> Rejected</div>
    <div class="w-16 h-16 bg-yellow-500 rounded-full">Pending</div> */}
</div>
    <table class="min-w-full bg-white border-border rounded-xl">
        <thead>
            <tr class="w-full bg-white border-border rounded-xl ">
                <th class="py-2 px-4 border-b text-left">Order ID</th>
                <th class="py-2 px-4 border-b text-left">Date</th>
                <th class="py-2 px-4 border-b text-left">Amount</th>
                <th class="py-2 px-4 border-b text-left">Status</th>
            </tr>
        </thead>
        <tbody>
            <tr class="w-full">
                <td class="py-2 px-4 border-b text-left">12345ab</td>
                <td class="py-2 px-4 border-b text-left">jan 12,2024</td>
                <td class="py-2 px-4 border-b text-left">300$</td>
                <td class="py-2 px-4 border-b text-left">
                Sucessful
                </td>
            </tr>
            <tr class="w-full">
                <td class="py-2 px-4 border-b text-left">12345ab</td>
                <td class="py-2 px-4 border-b text-left">jan 12,2024</td>
                <td class="py-2 px-4 border-b text-left">300$</td>
                <td class="py-2 px-4 border-b text-left">
                Sucessful
                </td>
            </tr>
            <tr class="w-full">
                <td class="py-2 px-4 border-b text-left">12345ab</td>
                <td class="py-2 px-4 border-b text-left">jan 12,2024</td>
                <td class="py-2 px-4 border-b text-left">300$</td>
                <td class="py-2 px-4 border-b text-left">
                Sucessful
                </td>
            </tr>
          
       
        </tbody>
    </table>
</div>
    </div>
  )
}

export default History

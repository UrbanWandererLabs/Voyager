import React, { useState } from 'react'
import axios from 'axios';


const activityForm = () => {
    const [activityName, setActivityName] = useState('')

    const createAcitivity = async () => {
        if (activityName.length === 0) return

        const call = await axios.post('/api/activities', {
            activityName: activityName,
            activityStartTime: new Date(),
            activityEndTime: new Date(),
            activityContactInfo: '',
            activityNote: '',
            activityStreet: '',
            activityPostalCode: '',
            activityCity: '',
            activityCountry: '',
            tripDayId: 1
        })

        console.log(call)

        setActivityName('')
    }
  return (
    <div className='text-black mt-3'>
        <p>New Activity</p>

        <div className='flex justify-between'>
            <input type={'text'} value={activityName} onChange={(e) => setActivityName(e.target.value)} placeholder='Ex. Eiffel Tower' className='rounded-md p-1 w-1/2 outline-none text-black'/>
            <button onClick={createAcitivity} className='bg-teal-300 py-1 px-2 rounded-lg text-black hover:bg-teal-500'>Add activity</button>
        </div>

        {/* <p className='mt-2'>Notes:</p>
        <textarea className='text-black outline-none rounded-md w-1/2'/> */}
    </div>
  )
}

export default activityForm
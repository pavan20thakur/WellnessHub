import React from 'react'
import { GiRunningShoe, GiFire, GiWaterBottle } from 'react-icons/gi';

const accessToken = 'YOUR_ACCESS_TOKEN_HERE';

function HomeComponent() {
  const today = new Date();
  const startTimeMillis = today.setHours(0, 0, 0, 0);
  const endTimeMillis = today.setHours(23, 59, 59, 999);

  // Endpoint to retrieve step count data
  const stepCountEndpoint = `https://www.googleapis.com/fitness/v1/users/me/dataset:aggregate`;

  // Define the request body
  const requestBody = {
    "aggregateBy": [{
      "dataTypeName": "com.google.step_count.delta",
      "dataSourceId": "derived:com.google.step_count.delta:com.google.android.gms:estimated_steps"
    }],
    "bucketByTime": { "durationMillis": 86400000 }, // Aggregate by day
    "startTimeMillis": startTimeMillis.toString(),
    "endTimeMillis": endTimeMillis.toString()
  };

  // Make the request to retrieve step count data
  fetch(stepCountEndpoint, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${accessToken}`
    },
    body: JSON.stringify(requestBody)
  })
    .then(response => response.json())
    .then(data => {
      console.log('Step count data:', data);
    })
    .catch(error => {
      console.error('Error fetching step count data:', error);
    });


  return (
    <div>
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div className="bg-white rounded-lg shadow-md p-6 flex items-center justify-center">
            <GiRunningShoe className="text-blue-500 mr-4" size={50} />
            <div>
              <h2 className="text-xl font-semibold mb-2">Step Count</h2>
              <p className="text-gray-600">5000 steps</p>
            </div>
          </div>
          <div className="bg-white rounded-lg shadow-md p-6 flex items-center justify-center">
            <GiFire className="text-red-500 mr-4" size={50} />
            <div>
              <h2 className="text-xl font-semibold mb-2">Calories Burned</h2>
              <p className="text-gray-600">300 calories</p>
            </div>
          </div>
          <div className="bg-white rounded-lg shadow-md p-6 flex items-center justify-center">
            <GiWaterBottle className="text-green-500 mr-4" size={50} />
            <div>
              <h2 className="text-xl font-semibold mb-2">Water Count</h2>
              <p className="text-gray-600">8 glasses</p>
            </div>
          </div>
        </div>
      </div>

    </div>
  )
}

export default HomeComponent;
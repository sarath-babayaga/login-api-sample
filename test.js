// const express = require('express');
// const bodyParser = require('body-parser');
// const axios = require('axios');

// const app = express();
// const port = 5000;

// app.use(bodyParser.json());

// app.post('/api/login', async (req, res) => {
//   const { username, password } = req.body;

//   // Check if username meets the minimum length requirement
//   if (username.length < 5) {
//     return res.status(400).json({ error: '*Please enter atleast 5 characters' });
//   }

//   // Check if password meets the minimum length requirement
//   if (password.length < 5) {
//     return res.status(400).json({ error: '*Please enter atleast 5 characters' });
//   }

//   // Simulate login using the provided API
//   try {
//     const response = await axios.get(`https://petals.ath.cx/test/login.jsp?username=test&password=test`);
//     if (response.data === 'Login Successful') {
//       return res.json({ message: 'Login successful' });
//     } else {
//       return res.status(401).json({ error: 'Invalid username or password' });
//     }
//   } catch (error) {
//     return res.status(500).json({ error: 'Internal server error' });
//   }
// });

// app.listen(port, () => {
//   console.log(`Server is running on port ${port}`);
// });

//***********working**********************

// const express = require('express');
// const axios = require('axios');
// const cors = require('cors')
// const app = express();
// const port = 5000;
// app.use(cors())

// app.get('/', async (req, res) => {
//   try {
//     const response = await axios.get('https://petals.ath.cx/test/login.jsp');

//     if (response.status === 200) {
//       const data = response.data;
//       res.send(`<h1>Data from API:</h1><pre>${JSON.stringify(data, null, 2)}</pre>`);
//     } else {
//       res.status(response.status).send('Failed to fetch data.');
//     }
//   } catch (error) {
//     res.status(500).send(`Error: ${error.message}`);
//   }
// });

// app.listen(port, () => {
//   console.log(`Server is running on http://localhost:${port}`);
// });




//*********************************************************** */


// const express = require('express');
// const axios = require('axios');

// const app = express();
// const port = 5000;

// app.get('/api/data', async (req, res) => {
//   try {
//     // Make requests to three different APIs
//     const response1 = await axios.get('https://petals.ath.cx/test/login.jsp');
//     const response2 = await axios.get('https://petals.ath.cx/test/login.jsp?username=test&password=test');
//     const response3 = await axios.get('https://petals.ath.cx/test/login.jsp?username=testx&password=testx');

//     // Extract data from responses
//     const data1 = response1.data;
//     const data2 = response2.data;
//     const data3 = response3.data;

//     // Respond with a combined result or process data as needed
//     const combinedResult = {
//       data1,
//       data2,
//       data3,
//     };

//     res.json(combinedResult);
//   } catch (error) {
//     res.status(500).send(`Error: ${error.message}`);
//   }
// });

// app.listen(port, () => {
//   console.log(`Server is running on http://localhost:${port}`);
// });


// ********************************************************************************

// server.js
// const express = require('express');
// const cors = require('cors');
// const axios = require('axios');

// const app = express();
// const port = 5000;

// app.use(cors());
// app.use(express.json());

// app.get('/api', async (req, res) => {
//   const { username, password } = req.query;

//   try {
//     const response = await axios.get(`https://petals.ath.cx/test/login.jsp?username=${username}&password=${password}`);

//     // Check for conditions in the response and set errors accordingly
//     if (response.data.error) {
//       const { error } = response.data;
//       if (error.includes('username')) {
//         res.status(400).json({ error: 'Invalid username. Please check your username.' });
//       }
//       if (error.includes('password')) {
//         res.status(400).json({ error: 'Invalid password. Please check your password.' });
//       }
//     } else {
//       res.json({ message: 'Login successful!' });
//     }
//   } catch (error) {
//     console.error('An error occurred during login:', error);
//     res.status(500).json({ error: 'Internal server error. Please try again later.' });
//   }
// });

// app.listen(port, () => {
//   console.log(`Server is running on http://localhost:${port}`);
// });











const express = require('express');
const axios = require('axios');
const cors = require('cors');

const app = express();
const port = process.env.PORT || 5000;

// Use CORS middleware
app.use(cors());

app.get('/', async (req, res) => {
  try {
    // Replace 'API_ENDPOINT' with the actual API URL
    const apiResponse = await axios.get('https://petals.ath.cx/test/login.jsp?username=test&password=test');

    // Assuming the API returns JSON data
    const apiData = apiResponse.data;

    // Send the API data as a response
    res.json(apiData);
  } catch (error) {
    console.error('Error fetching API data:', error.message);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

app.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`);
});
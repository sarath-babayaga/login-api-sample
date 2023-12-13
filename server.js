const express = require("express");
const axios = require("axios");
const cors = require("cors");

const app = express();
const port = process.env.PORT || 5000;

app.use(cors());

app.get("/", async (req, res) => {
  try {
    const apiResponse = await axios.get(
      "https://petals.ath.cx/test/login.jsp?username=test&password=test"
    );

    const apiData = apiResponse.data;

    res.json(apiData);
  } catch (error) {
    console.error("Error fetching API data:", error.message);
    res.status(500).json({ error: "Internal Server Error" });
  }
});

app.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`);
});

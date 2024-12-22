const axios = require("axios");
require("dotenv").config();

const sendMessage = async (req, res) => {
  const { message } = req.body;

  console.log(message);

  const TELEGRAM_API_URL = `https://api.telegram.org/bot${process.env.BOT_TOKEN}/sendMessage`;
  const CHAT_ID = process.env.CHAT_ID;

  try {
    // Send the message to Telegram
    const response = await axios.post(TELEGRAM_API_URL, {
      chat_id: CHAT_ID,
      text: message,
    });

    console.log(response);

    // If successful, return a success response to the frontend
    res.status(200).json({ success: true, data: response.data });
  } catch (error) {
    // Handle errors and return a 500 error to the frontend
    res.status(500).json({ success: false, message: error.message });
  }
};

module.exports = { sendMessage };

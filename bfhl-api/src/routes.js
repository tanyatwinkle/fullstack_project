// src/routes.js
const express = require('express');
const router = express.Router();

// Helper function to determine the highest lowercase alphabet
const getHighestLowercaseAlphabet = (arr) => {
  const lowercases = arr.filter(c => /^[a-z]$/.test(c));
  return lowercases.length ? [lowercases.sort().pop()] : [];
};

router.post('/', (req, res) => {
  const { data } = req.body;
  if (!Array.isArray(data)) {
    return res.status(400).json({ is_success: false, user_id: "john_doe_17091999" });
  }

  const numbers = data.filter(item => /^\d+$/.test(item));
  const alphabets = data.filter(item => /^[a-zA-Z]$/.test(item));
  const highestLowercaseAlphabet = getHighestLowercaseAlphabet(alphabets);

  res.json({
    is_success: true,
    user_id: "Tanya_Twinkle_21BCE5490",
    email: "tanya.twinkle2021@vitstudent.ac.in",
    roll_number: "A21BCE5490",
    numbers,
    alphabets,
    highest_lowercase_alphabet: highestLowercaseAlphabet
  });
});

router.get('/', (req, res) => {
  res.json({ operation_code: 1 });
});

module.exports = router;

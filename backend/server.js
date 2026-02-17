require("dotenv").config();
const express = require("express");
const cors = require("cors");

const app = express();
const PORT = 5000;

app.use(cors({ origin: "http://localhost:5173" }));
app.use(express.json());

app.post("/api/chat", async (req, res) => {
  try {
    const { message } = req.body;

    const response = await fetch("https://api.groq.com/openai/v1/chat/completions", {
      method: "POST",
      headers: {
        "Authorization": `Bearer ${process.env.GROQ_API_KEY}`,
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
  model: "llama-3.1-8b-instant",
        messages: [
          { role: "system", content: "You are a professional portfolio assistant." },
          { role: "user", content: message }
        ]
      })
    });

    const data = await response.json();
    console.log("GROQ RESPONSE:", data);

    if (data.error) {
      return res.json({ reply: data.error.message });
    }

    const reply =
      data.choices?.[0]?.message?.content ||
      "No reply generated.";

    res.json({ reply });

  } catch (error) {
    console.error("Server Error:", error);
    res.status(500).json({ reply: "Server error." });
  }
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});

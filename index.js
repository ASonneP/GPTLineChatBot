import express from "express";
import axios from "axios";
import dotenv from "dotenv";

dotenv.config();

const app = express();
const PORT = process.env.PORT || 3000;

const { OPENAI_API_KEY, LINE_CHANNEL_ACCESS_TOKEN } = process.env;

app.use(express.json());

app.post("/webhook", async (req, res) => {
  const { events } = req.body;

  // Handle webhook events
  events.forEach(async (event) => {
    if (event.type === "message" && event.message.type === "text") {
      const userId = event.source.userId;
      const message = event.message.text;

      // Call OpenAI API to generate response
      try {
        const response = await axios.post(
          "https://api.openai.com/v1/chat/completions",
          {
            model: "gpt-3.5-turbo", // Adjust the model name if needed
            messages: [
              {
                role: "system",
                content: "You are a helpful assistant.",
              },
              {
                role: "user",
                content: message,
              },
            ],
            max_tokens: 3000, // Limits the total number of tokens in the model's response to avoid exceeding resource constraints.
          },
          {
            headers: {
              Authorization: `Bearer ${OPENAI_API_KEY}`,
              "Content-Type": "application/json",
            },
          }
        );
        console.log(response);

        const generatedResponse =
          response.data.choices[0].message.content.trim();

        // Send response back to user
        await axios.post(
          "https://api.line.me/v2/bot/message/push",
          {
            to: userId,
            messages: [{ type: "text", text: generatedResponse }],
          },
          {
            headers: {
              Authorization: `Bearer ${LINE_CHANNEL_ACCESS_TOKEN}`,
              "Content-Type": "application/json",
            },
          }
        );
      } catch (error) {
        console.error("Error processing message:", error);
        console.error("Failed to get response from ChatGPT");
      }
    }
  });

  res.sendStatus(200);
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});

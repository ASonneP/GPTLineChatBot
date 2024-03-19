
# Chatbot Integration with OpenAI and LINE Messaging API ✉

This project demonstrates the integration of a chatbot using the OpenAI API with LINE Messaging API. It utilizes Express.js to set up a webhook endpoint that listens for messages from users via LINE Messaging. Upon receiving a message, the chatbot leverages OpenAI's powerful AI models to generate responses, which are then sent back to the user through LINE Messaging.

## Features

- Utilizes OpenAI's GPT-3.5 model for generating conversational responses.
- Integrated with LINE Messaging API for receiving and sending messages.
- Built with Express.js for handling webhook requests.

## Prerequisites

Before you begin, ensure you have met the following requirements:
- Node.js installed on your system.
- An OpenAI API key.
- A LINE Messaging API channel access token.

## Installation

To install the project, follow these steps:

**1. Clone the repository to your local machine:**

```bash
git clone https://github.com/ASonneP/GPTLineChatBot.git
```

**2. Navigate into the project directory:**

```bash
cd GPTLineChatBot
```

**3. Install the necessary dependencies:**

```bash
npm install
```

**4. Create a .env file in the root directory of the project and add your OpenAI API key and LINE channel access token:**

To set up your environment variables, follow these steps:

1. Locate the `.env.template` file in the root directory of the project.
2. Rename the `.env.template` file to `.env`.
3. Open the newly renamed `.env` file in a text editor.
4. Replace `your_openai_api_key` with your actual OpenAI API key and `your_line_channel_access_token` with your LINE channel access token.

Make sure not to share your API keys or access tokens publicly.

This `.env` file will be used to securely store sensitive information required by your application.


**5. Set up LINE Messaging API webhook URL:**
Before running the server, ensure you correctly set up the webhook URL in your LINE Messaging API settings. Refer to the LINE Messaging API documentation for instructions.

**6. Setting Up ngrok for Webhook Testing**
If you want to test the webhook functionality locally before deploying your application, you can use ngrok to create a secure tunnel to your local server.

#### Installation

If you haven't already, download and install ngrok from the [official ngrok website](https://ngrok.com/).

#### Running ngrok

Once installed, navigate to the directory where ngrok is located. If ngrok is not in your system's PATH, you may need to provide the full path to the ngrok executable. 

```bash
cd your_path_of_ngrok
```
Replace `your_path_of_ngrok` with the actual path where ngrok is located on your system.

After changing to the ngrok directory, run the following command in your terminal to create a tunnel to your local server:
```bash
./ngrok http 3000
```
![image](https://github.com/ASonneP/GPTLineChatBot/assets/97184817/6a10edc9-dc5e-4dfe-a270-f92b335de94e)

#### Updating Webhook URL

With ngrok running, you need to update the webhook URL in your LINE Messaging API settings to use the ngrok URL. Follow these steps:

1.  Log in to the LINE Developers Console.
2.  Navigate to your Messaging API channel settings.
3.  Under the "Messaging settings" tab, find the "Webhook URL" field.
4.  Replace the existing webhook URL with the ngrok URL provided in your terminal.
5.  Save your changes.

Make sure to include the appropriate route (e.g., `/webhook`) in the ngrok URL if your webhook endpoint has a specific path.

![image](https://github.com/ASonneP/GPTLineChatBot/assets/97184817/79a4ef4d-4c31-4bd6-b3f3-81c1fb1517e4)

Now, your LINE Messaging API requests will be forwarded to your local server through ngrok, allowing you to test webhook functionality locally 🎉.

## Usage

**To start the server, run the following command in your terminal:**
```bash
npm start
```
_The server will start on the port specified in your `.env` file or default to port 3000. If you wish to change the default port, update the `PORT` variable in the `.env` file or specify the port as a command-line argument when starting the server._

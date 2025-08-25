import { Groq } from 'groq-sdk';
import dotenv from 'dotenv';
dotenv.config(); 

const groq = new Groq({ apiKey: process.env.GROQ_API_KEY });

async function getResponseFromGpt(input) {
  console.log("process start|", input);
  const chatCompletion = await groq.chat.completions.create({
    messages: [
      {
        role: "system",
        content: "you have assist the ans question",
      },
      {
        role: "user",
        content: input,

      },
    ],
    model: "gemma2-9b-it",
    // Controls randomness: lowering results in less random completions.
    // As the temperature approaches zero, the model will become deterministic
    // and repetitive.
    temperature: 1,
     // The maximum number of tokens to generate. Requests can use up to
    // 2048 tokens shared between prompt and completion.
    max_completion_tokens: 1024,
  });
  // for await (const chunk of chatCompletion) {
  //   process.stdout.write(chunk.choices[0]?.delta?.content || '');
  // }
  return chatCompletion?.choices[0]?.message?.content
}

export default getResponseFromGpt;
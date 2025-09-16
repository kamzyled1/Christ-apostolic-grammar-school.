import { OpenAI } from "openai";

const openai = new OpenAI({ apiKey: process.env.OPENAI_API_KEY });

export async function summarizeReport(text: string) {
  const completion = await openai.chat.completions.create({
    model: 'gpt-3.5-turbo',
    messages: [
      { role: 'system', content: 'Summarize this school report:' },
      { role: 'user', content: text }
    ]
  });
  return completion.choices[0].message.content;
}

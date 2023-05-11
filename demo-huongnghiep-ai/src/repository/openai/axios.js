const { Configuration, OpenAIApi } = require("openai");

const OPENAI_API_KEY = "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";

const configuration = new Configuration({
    apiKey: OPENAI_API_KEY,
});
const openai = new OpenAIApi(configuration);

export async function sendChatToOpenAI(messages) {
    const response = await openai.createChatCompletion({
        model: "gpt-3.5-turbo",
        messages,
    });
    if(response.error) {
        return response.error.message
    }
      console.log("==== res", response);

    return response.data.choices[0].message.content;
}

export async function sendMessageToOpenAI(message) {
    const response = await openai.createCompletion({
        model: "gpt-3.5-turbo",
        prompt: message,
        temperature: 0.9,
        max_tokens: 256,
        top_p: 1,
        frequency_penalty: 0,
        presence_penalty: 0,
    });
    return response.data.choices[0].text;
}
export async function getModelList(message) {
    const response = await openai.Model.list();
    return response;
}

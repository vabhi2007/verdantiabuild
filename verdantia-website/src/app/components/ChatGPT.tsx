import OpenAI from "openai";

export async function Send(input: string) {

    console.log("Sent request")


    const openAI = new OpenAI({
        apiKey: process.env.NEXT_PUBLIC_OPENAI_API_KEY,
        dangerouslyAllowBrowser: true

    });

    const completion = await openAI.chat.completions.create({
        messages: [{role: "system", content: "You are a helpful assistant and your job is to pick the most appropriate job from the following list with absolutely no extra words and the output cannot go past 4 words no matter what and always give a proper response: Renewable Energy Analyst, Environmental Scientist, Eco-Infrastructure Designer, Water Resources Manager, Forest Projects Coordinator, Waste Management Coordinator, Carbon Footprint Manager, Environmental Policy Analyst, Community Events Coordinator, Green Finance Analyst, Environmental Engineer, Urban Planner Coordinator; input:"+input}],
        model: "gpt-3.5-turbo",
    });
    console.log("text:",completion.choices[0])
    return completion.choices[0].message.content;
}
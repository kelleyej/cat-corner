// import { json } from '@sveltejs/kit';

// import { OpenAI } from 'openai';

// const openai = new OpenAI({
//     apiKey: API_KEY,
// });

// export async function POST({ request }) {
//     const { question } = await request.json()
//     const response = await openai.createCompletion({
//         model: 'text-davinci-003',
//         prompt: question,
//         max_tokens: 150,
//         temperature: 0.7,
//     })
//     const answer = response.data.choices[0].text.trim()
//     return json({ answer })
// }
import { env } from '$env/dynamic/private';

export const actions = {

    default: async ({ request }) => {
        const form = await request.formData();
        const question = form.get('question')
        console.log(question)
        const openai_key = env.OPENAI_KEY
        console.log(openai_key)
        let keywords = ['cat', 'cats', 'meow', 'kitty', 'purr', 'feline', 'kitten', 'kittens', 'kitties', 'tiger', "Abyssinian",
            "American Bobtail",
            "American Curl",
            "American Shorthair",
            "American Wirehair",
            "Balinese",
            "Bengal",
            "Birman",
            "Bombay",
            "British Shorthair",
            "Burmese",
            "Burmilla",
            "California Spangled",
            "Chantilly-Tiffany",
            "Chartreux",
            "Cherub",
            "Cornish Rex",
            "Cymric",
            "Devon Rex",
            "Donskoy",
            "Egyptian Mau",
            "Exotic Shorthair",
            "Himalayan",
            "Japanese Bobtail",
            "Khao Manee",
            "Kinkalow",
            "Kurilian Bobtail",
            "LaPerm",
            "Maine Coon",
            "Manx",
            "Munchkin",
            "Nebelung",
            "Norwegian Forest",
            "Ocicat",
            "Oriental Shorthair",
            "Persian",
            "Ragdoll",
            "Russian Blue",
            "Savannah",
            "Scottish Fold",
            "Seychelles",
            "Siamese",
            "Siberian",
            "Singapura",
            "Snowshoe",
            "Somali",
            "Sphynx",
            "Turkish Angora",
            "Turkish Van",
            "Ukrainian Levkoy",
            "Yemen"]
        for (const keyword of keywords) {
            if (question.includes(keyword)) {
                const body = {
                    model: 'gpt-3.5-turbo',
                    messages: [{ role: 'user', content: question }]
                }

                const response = await fetch('https://api.openai.com/v1/chat/completions', {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json',
                        "Authorization": `Bearer ${openai_key}`
                    },
                    body: JSON.stringify(body)
                })
                const data = await response.json();
                const answer = data.choices[0].message.content.replace(/\n\n+/g, " ").replace(/\"+/g, " ' ").replace(/\n+/g, " ")

                return answer;
            } else if (question === '') {
                return 'No question was asked.'
            }

            else {
                return 'That question does not seem to be related to cats.'
            }
        }


    }
}
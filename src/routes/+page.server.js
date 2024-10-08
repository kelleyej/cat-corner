
import { env } from '$env/dynamic/private';

export const actions = {

    default: async ({ request }) => {
        const form = await request.formData();
        const question = form.get('question')
        const openai_key = env.OPENAI_KEY
        let catRelated = false;
        let keywords = ['cat', 'cats', 'meow', 'kitty', 'purr', 'feline', 'kitten', 'kittens', 'kitties', 'tiger', "Abyssinian",
            "American Bobtail",
            "American Curl",
            'American Shorthair',
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
            if (question.toLowerCase().includes(keyword.toLowerCase())) {
                catRelated = true;
            }
        }
        if (catRelated) {
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
        } if (question === '') {
            return 'No question was asked.'
        }
        if (!catRelated) {
            return 'That question does not seem to be related to cats.'
        }

    }


}

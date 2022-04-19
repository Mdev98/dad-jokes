import fetch from 'node-fetch';

type Joke = {
    "id": string,
    "joke": string,
    "status": number
}

// const joke = 

async function getJoke() {

    const config = {
        headers: {
            Accept: 'application/json',
        },
    }

    try {
        const response = await fetch('https://icanhazdadjoke.com/', {
            headers: {
                Accept: 'application/json',
            }
        });
        console.log(response);
    } catch (error) {
        console.error(error);
    }
}

getJoke();
import { readFile } from 'node:fs';
import { select } from '@inquirer/prompts';

// While game is on this value is true
let gameStatus = true;

const gameplay = () => {
    readFile('./story.json', 'utf-8', async (err, data) => {
        if (err) throw err;
        let story = JSON.parse(data);

        let currentMessageId, move;

        while (gameStatus) {
            currentMessageId === undefined
                ? (currentMessageId = 0)
                : (currentMessageId = move);

            let firstChoice = story.messages[currentMessageId].firstChoice;
            let secondChoice = story.messages[currentMessageId].secondChoice;

            move = await select({
                message: `${story.messages[currentMessageId].message}`,
                choices: [
                    {
                        name: `${story.choices[firstChoice].name}`,
                        value: `${story.choices[firstChoice].nextMessageId}`,
                    },
                    {
                        name: `${story.choices[secondChoice].name}`,
                        value: `${story.choices[secondChoice].nextMessageId}`,
                    },
                ],
            });
        }
    });
};

export default gameplay;

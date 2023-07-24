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

            let firstChoiceName =
                story.choices[story.messages[currentMessageId].firstChoice]
                    .name;
            let firstChoiceValue =
                story.choices[story.messages[currentMessageId].firstChoice]
                    .nextMessageId;

            let secondChoiceName =
                story.choices[story.messages[currentMessageId].secondChoice]
                    .name;
            let secondChoiceValue =
                story.choices[story.messages[currentMessageId].secondChoice]
                    .nextMessageId;

            move = await select({
                message: `${story.messages[currentMessageId].message}`,
                choices: [
                    {
                        name: `${firstChoiceName}`,
                        value: `${firstChoiceValue}`,
                    },
                    {
                        name: `${secondChoiceName}`,
                        value: `${secondChoiceValue}`,
                    },
                ],
            });
        }
    });
};

export default gameplay;

import { readFile } from 'node:fs';
import { select } from '@inquirer/prompts';
import title from './title.js';
import figlet from 'figlet';
import center from 'center-align';

// While game is on this value is true
let gameStatus = true;

const gameplay = () => {
    readFile('./story.json', 'utf-8', async (err, data) => {
        if (err) throw err;
        let story = JSON.parse(data);

        let currentMessageId, move;

        while (gameStatus) {
            title();

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

            // End game if it was last message
            // Todo: Change number to last message ID
            if (story.messages[currentMessageId].id === 100) {
                gameStatus = false;
                console.clear();
                console.log('End message');

                figlet('The End', (err, text) => {
                    if (err) {
                        console.log('Something went wrong...');
                        return;
                    }
                    console.log(center(text, process.stdout.columns));
                });

                process.exit();
            }

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

            console.clear();
        }
    });
};

export default gameplay;

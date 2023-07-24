import { select } from '@inquirer/prompts';
import gameplay from './gameplay.js';

const menu = async () => {
    let menuChoice = await select({
        message: 'Menu',
        choices: [
            {
                name: 'Start Game',
                value: 0,
            },
            {
                name: 'Exit',
                value: 1,
            },
        ],
    });

    if (menuChoice === 0) {
        console.clear();
        gameplay();
    }
    if (menuChoice === 1) {
        console.clear();
        process.exit();
    }
};

export default menu;

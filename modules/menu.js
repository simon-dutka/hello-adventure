import { select } from '@inquirer/prompts';
import gameplay from './gameplay.js';

const menu = async () => {
    let result = await select({
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

    if (result === 0) gameplay();
    if (result === 1) process.exit();
};

export default menu;

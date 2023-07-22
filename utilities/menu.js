import { select } from '@inquirer/prompts';

const menu = () => {
    select({
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
};

export default menu;

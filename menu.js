const figlet = require('figlet');

const title = () => {
    figlet('Hello Adventure', (err, title) => {
        if (err) {
            console.log('Something went wrong...');
            return;
        }
        console.log(title);
    });
};

const options = () => {};

const menu = () => {
    title();
};

module.exports = {
    menu,
};

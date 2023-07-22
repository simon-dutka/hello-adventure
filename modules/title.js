import figlet from 'figlet';

const title = () => {
    figlet('Hello Adventure', (err, title) => {
        if (err) {
            console.log('Something went wrong...');
            return;
        }
        console.log(title);
    });
};

export default title;

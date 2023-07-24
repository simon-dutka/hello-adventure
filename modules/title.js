import figlet from 'figlet';
import center from 'center-align';

const title = () => {
    figlet('Hello Adventure', (err, title) => {
        if (err) {
            console.log('Something went wrong...');
            return;
        }
        console.log(center(title, process.stdout.columns));
    });
};

export default title;

import { readFile } from 'node:fs';

readFile('./story.json', 'utf-8', (err, data) => {
    if (err) throw err;
    let story = JSON.parse(data);
    console.log(json);
});

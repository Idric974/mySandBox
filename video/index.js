const ytld = require('ytdl-core');
const fs = require('fs');

let url = 'https://www.youtube.com/watch?v=ZXQ9m8TUby4&t=445s';

ytld(url).pipe(fs.createWriteStream('video/video.mp4'));

import chalk from 'chalk';
import axios from 'axios';

console.log(chalk.blue('Hello world!'));
import scripts from './scripts.js';
import {configs} from './scripts.js'
scripts();
configs();

import {config} from 'dotenv'
config();
console.log(process.env.API_KEY);

let api_url =
`
https://api.themoviedb.org/3/movie/now_playing?api_key=f9d083f7bfde69e00d56a00341d8a023&language=en-US&page=1
`
axios.get(api_url)
.then (res=>(
    console.log(res.data)
))
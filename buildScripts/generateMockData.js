import jsf from 'json-schema-faker';
import {schema} from './mockDataSchema';
import fs from 'fs';
import chalk from 'chalk';

const json = JSON.stringify(jsf(schema));

fs.writeFile('./src/api/db.json', json, (err) => {
    if(err) {
        return (() => {
            console.log(chalk.red('##############################'));
            console.log(chalk.white(err));
            console.log(chalk.red('##############################'));
        })()
    } else {
        console.log(chalk.green('##############################'));
        console.log(chalk.green('##   '), chalk.white('Mock data generated'), chalk.green('  ##'));
        console.log(chalk.green('##############################'));
    }
})


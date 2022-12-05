import {writeLog, printLog} from './logging.js';

async function test_log(){
  for (let i=0; i<10; i++){
    await console.log('writing.');
    await writeLog(`hello world ${i}\n`);
  }
  await printLog();
}
//test_log();
writeLog();

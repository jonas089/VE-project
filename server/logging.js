import fs from 'fs';
const error_log_path = './logs/error.txt';
async function writeLog(msg){
  let log = await readLog('utf-8');
  log += msg + '\n';
  await fs.writeFileSync(error_log_path, log);
}
async function readLog(encoding){
  let log = await fs.readFileSync(error_log_path, encoding);
  return log;
}
async function printLog(path=error_log_path){
  const log = await readLog();
  await console.log(`[ERROR LOG]: ${log}`);
}
export {writeLog, printLog};

import fs from 'fs';
const error_log_path = './logs/error.txt';
const analytics_log_path = './logs/analytics.txt'
async function writeLog(msg){
  let log = await readLog('utf-8');
  log += msg + '\n';
  await fs.writeFileSync(error_log_path, log);
}
async function writeAnalytics(){
  let log = await fs.readFileSync(analytics_log_path, 'utf-8');
  let new_log = parseInt(log) + 1;
  await fs.writeFileSync(analytics_log_path, new_log.toString());
}
async function readLog(encoding){
  let log = await fs.readFileSync(error_log_path, encoding);
  return log;
}
async function printLog(path=error_log_path){
  const log = await readLog();
  await console.log(`[ERROR LOG]: ${log}`);
}
export {writeLog, writeAnalytics, printLog};

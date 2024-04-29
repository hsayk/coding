const fs = require('fs');
const path = require('path');

/**
 * @summary 按 utf-8 解析.env 文件
 * @method analyzeEnvFile
 */
function analyzeEnvFile(src){
  // 切割字符串，组装成一个一个对象
  const envParse = {};
  src.toString().split('\n').forEach((value, index) => {
    const keyValueArr = value.split('=');
    key = keyValueArr[0];
    value = keyValueArr[1] || '';
    envParse[key] = value;
  })
  return envParse
}

/**
 * @summary 手写实现从 .env 文件中读取环境变量
 */
function config() {
  // 1. 获取当前 .env 文件的路径
  // 2. 按 utf-8 解析.env 文件
  // 3. 键值对形式赋值到 process.env 变量

  const envPath = path.resolve(process.cwd(), '.env');
  const analyzeEnv = analyzeEnvFile(fs.readFileSync(envPath));
  Object.keys(analyzeEnv).forEach((key) => {
    process.env[key] = analyzeEnv[key];
  });

  return analyzeEnv;
}

console.log(config());
console.log(process.env);
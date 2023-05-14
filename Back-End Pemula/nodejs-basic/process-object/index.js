
let instance = new process.memoryUsage();

const initialMemoryUsage = instance.heapUsed // TODO 1
const yourName = process.argv[2]// TODO 2
// process.env.NODE_ENV = "development"
const environment = process.env.NODE_ENV// TODO 3
for(let i = 0; i <= 10000; i++) {
// Proses looping ini akan membuat penggunaan memori naik
}
// console.log(process.env);
 
instance = new process.memoryUsage();
const currentMemoryUsage = instance.heapUsed// TODO 4
 console.log(process.env.NODE_ENV);
console.log(`Hai, ${yourName}`);
console.log(`Mode environment: ${environment}`)
console.log(`Penggunaan memori dari ${initialMemoryUsage} naik ke ${currentMemoryUsage}`);

module.exports = {initialMemoryUsage}; 
// console.log(instance.heapUsed);
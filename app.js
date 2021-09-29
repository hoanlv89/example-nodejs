// const names = require('./2-name');
// const sayHi = require('./3-utils');
// const data = require('./4-alternative-flavor')
// require('./5-mind-grenade')

// sayHi('hoanlv');
// sayHi(names.John);
// sayHi(names.Surce);
// sayHi(data.singlePerson.name);

// os module

// const os = require('os');
// const user = os.userInfo();
// console.log(user);
// console.log(os.uptime());

// const currentOS = {
//     name : os.type(),
//     release : os.release(),
//     totalMem : os.totalmem(),
//     freeMem : os.freemem()
// }

// console.log(currentOS);


// path

// const path = require('path');
// console.log(path.sep)

// const filePath = path.join('/content', 'subfolder', 'test.txt')
// console.log(filePath)

// const base = path.basename(filePath)
// console.log(base)

// const absolute = path.resolve(__dirname, 'content', 'subfolder', 'test.txt')
// console.log(absolute)

// read file

// const { readFileSync, writeFileSync } = require('fs')
// const fs = require('fs')
// console.log('start')
// const first = readFileSync('./content/first.txt', 'utf8')
// const second = readFileSync('./content/second.txt', 'utf8')
// const pathCheck = './content/result-sync.txt'

// try {
//     if (fs.existsSync(pathCheck)) {
//         return;
//     }
// } catch (err) {
//     console.error(err)
// }

// writeFileSync(
//     './content/result-sync.txt',
//     `Here is the result : ${first}, ${second}`,
//     { flag: 'a' }
// )

// const result = readFileSync('./content/result-sync.txt', 'utf8')
// console.log('done with this task')
// console.log('starting the next one')

// read file async

// const { readFile, writeFile } = require('fs')

// console.log('start')
// readFile('./content/first.txt', 'utf8', (err, result) => {
//   if (err) {
//     console.log(err)
//     return
//   }
//   const first = result
//   console.log('11111 ===> ' + first);
//   readFile('./content/second.txt', 'utf8', (err, result) => {
//     if (err) {
//       console.log(err)
//       return
//     }
//     const second = result
//     console.log('11111 ===> ' + second);
//     writeFile(
//       './content/result-async.txt',
//       `Here is the result : ${first}, ${second}`,
//       (err, result) => {
//         if (err) {
//           console.log(err)
//           return
//         }
//         console.log('done with this task')
//       }
//     )
//   })
//   console.log('000000')
// })
// console.log('starting next task')

// http

// const http = require('http');
// const server = http.createServer((req, res) => {
//     if (req.url === '/') {
//         res.end('home page')
//         console.log('home');
//     } else if (req.url === '/about') {
//         res.end('about page')
//         console.log('about');
//     } else {
//         res.end(`
//         <h1>Oops!</h1>
//         <p>We can't seem to find the page you are looking for</p>
//         <a href="/">back home</a>
//         `)
//     }
// })

// server.listen(5000);

// lodash

const _= require('lodash');
const items = [1,[2,[3,[4]]]]
const newItems = _.flattenDeep(items);
console.log(newItems);
/*работа с модулями
 const my_math = require('./my_math')
const os = require('os')

const currentOs = os.platform()

console.log(currentOs)

const res1 = my_math.add(50, 50)
const res2 = my_math.minus(38, 1)

console.log(`Result 1 : ${res1}`)
console.log(`Result 2 : ${res2}`) 
*/


/* работа с файлами
const fs = require('fs')

const result = fs.readFileSync('fs_text.txt', 'utf-8')

fs.writeFileSync('fs_text.txt', 'some text from fs_text')

console.log(result)

fs.writeFileSync('fs_text.txt', result + '\nadd new text')
fs.writeFileSync('fs_text.txt', result + '\nadd new text')
 */

/* создание папки с текстовым файлом
const fs = require('fs')

fs.mkdir('text-files', () => {
    fs.writeFile('./text-files/some.txt', 'Hello', () => { })
})
 */
/* const fs = require('fs')

fs.unlink('./text-files/some.txt', () => {
    fs.rmdir('./text-files', () => { })
}) */

/* new server1
const http = require('http')

let server = http.createServer((req, res) => {
    res.writeHead(200, { 'Content-Type': 'text/plain; charset=utf-8' })
    res.end('hello from NODE_JS')
})

const PORT = 3000
const HOST = 'localhost'

server.listen(PORT, HOST, () => {
    console.log(`started on  hhtp://${HOST}:${PORT}`)
}) */

//new server2
const http = require('http')
const fs = require('fs')




let server = http.createServer((req, res) => {
    res.writeHead(200, { 'Content-Type': 'text/html; charset=utf-8' })

    if (req.url == '/') {
        fs.createReadStream('./templates/index.html').pipe(res)
    } else if(req.url == '/about'){
        fs.createReadStream('./templates/about.html').pipe(res)
    } else {
        fs.createReadStream('./templates/error.html').pipe(res)
    }
})

const PORT = 3000
const HOST = 'localhost'

server.listen(PORT, HOST, () => {
    console.log(`started on  hhtp://${HOST}:${PORT}`)
})

import readline from 'readline'
import stream from 'stream'
import resolver from './problemResolver'

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
    terminal: false
})

const start = () => {
    let totalTest
    rl.on('line', (line) => {
        if (totalTest === void 0) {
          totalTest = parseInt(line)
          return
        }

        resolver(line, totalTest)
    })

    rl.on('end', () => {
        nbTest = 0
    })
}

export default start()

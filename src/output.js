const output = () => {
    let i = 1;
    return (word) => {
        console.log(`Case #${i}: ${word}`)
        i++
    }
}

export default output()

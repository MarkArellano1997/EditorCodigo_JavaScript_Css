const editor = document.getElementById('editor')
const output = document.getElementById('output')

const execute = () => {
    const code = editor.value

    try {
        const result = eval(code)
        output.textContent = result
    } catch (error) {
        output.textContent = `Error: ${error.message}`
        setTimeout(() => {
            output.textContent = ``
        }, 3000)
    }
}
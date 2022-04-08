const colorInput = document.getElementById("color-input")
const colorSchemeMode = document.getElementById("color-scheme-mode")
const button = document.getElementById("button")
const colorBlocks = document.querySelectorAll(".color-block")
const colorNames = document.querySelectorAll(".color-name")
const popUp = document.getElementById("pop-up")


function handleClick(event) {
    event.preventDefault();
    getColorScheme(colorInput.value, colorSchemeMode.value)
}

async function getColorScheme(_seedColor, _mode) {
    // don't fetch if seedColor and mode hasn't been changed
    if (seedColor === _seedColor && mode === _mode) {
        console.log("Seed color and mode hasn't been changed.")
        return
    }

    let url = "https://www.thecolorapi.com/scheme";
    let options = "?hex=" + _seedColor.slice(1) + "&mode=" + _mode;
    url += options;

    try {
        const response = await fetch(url);
        const data = await response.json();
        console.log(data)
        colors = data.colors.map(item => item.hex.value)
        
        paint(colors)

        // remember current seed color and mode for next fetch
        seedColor = _seedColor
        mode = _mode
    } catch(err) {
        console.log(err)
    }
}

function paint(colors) {
    for (let i = 0; i < colors.length; i++) {
        colorBlocks[i].style.backgroundColor = colors[i]
        colorNames[i].textContent = colors[i]
    }
}

async function copyToClipboard(event) {
    const hex = event.target.textContent
    try {
        await navigator.clipboard.writeText(hex)
    } catch(err) {
        console.log("Clipboard access denied. Time to go old school...")
        copyUsingExecCommand(hex)
    }
    
    // briefly show a popup to notify the user
    popUp.textContent = hex + " copied to clipboard"
    clearTimeout(timeoutId)
    popUp.style.opacity = 0.9
    timeoutId = setTimeout(() => {
        popUp.style.opacity = null
    }, 2000)
}

function copyUsingExecCommand(text) {
    const input = document.createElement("input")
    input.value = text
    input.readOnly = true
    input.style = {
        position: "absolute",
        left: "-9999px"
    }
    document.body.append(input)
    input.select()
    document.execCommand("copy")
    input.remove()
}


let colors = ["#F55A5A", "#2B283A", "#FBF3AB", "#AAD1B6", "#A626D3"]
let seedColor = colorInput.value
let mode = colorSchemeMode.value
let timeoutId

button.addEventListener("click", handleClick);
colorNames.forEach(button => {
    button.addEventListener("click", copyToClipboard)
})

// Paint initial colors
colorInput.value = colors[0]
paint(colors)

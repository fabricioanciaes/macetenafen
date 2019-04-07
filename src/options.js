import fs from 'fs'
const configPath = "macetenafen.json"

export function saveOptions(data) {
    let jsonContent = JSON.stringify(data);

    fs.writeFileSync(configPath, jsonContent)
}

export function getDefaultOptions() {
    if(fs.existsSync(configPath)) {
        let jsonContent = fs.readFileSync(configPath)

        return JSON.parse(jsonContent)
    } else {
        return {
            entry: "",
            gamekey: "",
            nick: "",
            server: "",
            port: "",
        }
    }

}
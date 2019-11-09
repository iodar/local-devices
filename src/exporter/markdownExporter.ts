/**
 * | Gerätename | IP Adresse | MAC Adresse |
 * | ---- | ---- | ---- |
 */

const markdownExport: Array<String> = []
const markdownTemplateHeader = `
| Gerätename | IP Adresse | MAC Adresse
| ---- | ---- | ----
`

interface MarkdownExportLine {
    deviceName: string,
    ipAddress: string,
    macAddress: string,
}

export function convertToMarkdownLines(arrayOfDevices: any): Array<string> {
    let markdownLines: Array<string> = []

    if (arrayOfDevices === undefined || arrayOfDevices.length < 1) {
            throw new Error("No Devices in Array ... Exiting ...")
        } else {
        // convert array entries to markdown
        arrayOfDevices.forEach(entry => {
            // convert line to markdown
            const markdownLine = `| ${entry.name} | ${entry.ip} | ${entry.mac}`
            markdownLines.push(markdownLine)
        })
    }
    return markdownLines
}


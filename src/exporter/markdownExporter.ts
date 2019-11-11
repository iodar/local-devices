const markdownTemplateHeader = [
    `| Gerätename | IP Adresse | MAC Adresse`,
    `| ---- | ---- | ----`,
]

interface DeviceEntry {
    name: string,
    ip: string,
    mac: string,
}

/**
 * Converts an array of network devices into an
 * array of lines in the markdown syntax.
 * @param arrayOfDevices Arrays of network devices
 */
export function convertToMarkdownLines(arrayOfDevices: Array<DeviceEntry>): Array<string> {
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

/**
 * Creates a markdown table with header and body. The
 * body is generated of the given array.
 * @param arrayOfDevices Arrays of network devices
 */
export function createMarkdown(arrayOfDevices: Array<DeviceEntry>): Array<string> {
    try {
        let markdown: Array<string> = markdownTemplateHeader
        const markdownTableBody = convertToMarkdownLines(arrayOfDevices)
        markdown = markdown.concat(markdownTableBody)
        return markdown
    } catch (error) {
        console.error(error);
        return null
    }
}


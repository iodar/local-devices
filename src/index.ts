import find from "local-devices";
import { createMarkdown } from "./exporter/markdownExporter";

find().then((devices) => {
    const networkDevices = devices
    const markdown = createMarkdown(networkDevices)
    markdown.forEach(entry => {
        console.log(`${entry}`)
    })
})

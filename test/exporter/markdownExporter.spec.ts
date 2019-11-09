import { expect } from "chai";
import { convertToMarkdownLines, createMarkdown } from "../../src/exporter/markdownExporter";

describe("Markdown Exporter", () => {
    describe("Convert device array to markdown", () => {
        describe("not empty array", () => {
            let convertedLines: Array<string>
            const arrayOfDevices = [
                { name: '?', ip: '10.12.1.0', mac: 'zz:uu:65:v4:yy:yy' },
                { name: '?', ip: '10.12.1.2', mac: 'xx:uu:65:v4:yy:yy' },
            ]
            before(() => {
                convertedLines = convertToMarkdownLines(arrayOfDevices)
            })

            it("should export entries to markdown syntax", () => {
                expect(convertedLines).to.deep.equal([
                    `| ${arrayOfDevices[0].name} | ${arrayOfDevices[0].ip} | ${arrayOfDevices[0].mac}`,
                    `| ${arrayOfDevices[1].name} | ${arrayOfDevices[1].ip} | ${arrayOfDevices[1].mac}`,
                ])
            })
        })

        describe("empty array", () => {
            const emptyArray: any = []

            it("should throw error: empty array", () => {
                expect(() => {
                    convertToMarkdownLines(emptyArray)
                }).to.throw("No Devices in Array ... Exiting ...")
            })
        })
    })

    describe("Create markdown table from device array", () => {
        describe("not empty array", () => {
            let markdownTable
            const arrayOfDevices = [
                { name: '?', ip: '10.12.1.0', mac: 'zz:uu:65:v4:yy:yy' },
                { name: '?', ip: '10.12.1.2', mac: 'xx:uu:65:v4:yy:yy' },
            ]

            markdownTable = createMarkdown(arrayOfDevices)

            it("should create markdown table with header an body", () => {
                expect(markdownTable).to.deep.equal([
                    `| Gerätename | IP Adresse | MAC Adresse`,
                    `| ---- | ---- | ----`,
                    `| ${arrayOfDevices[0].name} | ${arrayOfDevices[0].ip} | ${arrayOfDevices[0].mac}`,
                    `| ${arrayOfDevices[1].name} | ${arrayOfDevices[1].ip} | ${arrayOfDevices[1].mac}`,
                ])
            })
        })
    })
})
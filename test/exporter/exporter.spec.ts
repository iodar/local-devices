import { expect } from "chai"
import { ExportProperties, Exporter, exportTypes } from "../../src/exporter/exporter"

describe("Exporter", () => {
    describe("Class", () => {
        const exporter: Exporter = new Exporter(exportTypes.markdown)
        it("should have properties", () => {
            expect(exporter).to.have.haveOwnProperty("props")
        })
    })
    describe("export to markdown", () => {
        const markdownExporter = new Exporter(exportTypes.markdown)
        const obejctToExport = {
            lastName: "Mueller",
            firstName: "Peter",
            age: 22,
        }
        let markdownHeader: string

        before(() => {
            markdownHeader = markdownExporter.createHeader(obejctToExport)
        })

        it('should create valid header for export type "markdown"', () => {
            expect(markdownHeader).to.be.equal("|lastName|firstName|age|")
        })
    })

    describe("export to confluence markdown", () => {
        const markdownExporter = new Exporter(exportTypes.confluenceMarkdown)
        const obejctToExport = {
            lastName: "Mueller",
            firstName: "Peter",
            age: 22,
        }
        let markdownHeader: string

        before(() => {
            markdownHeader = markdownExporter.createHeader(obejctToExport)
        })

        it('should create valid header for export type "markdown confluence" with additional propsakc', () => {
            expect(markdownHeader).to.be.equal("||lastName||firstName||age")
        })
    })
})

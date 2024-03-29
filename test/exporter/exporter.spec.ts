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
            expect(markdownHeader).to.be.equal("|lastName|firstName|age")
        })
    })

    describe("export body to markdown", () => {
        describe("simple body with one entry", () => {
            const markdownExporter = new Exporter(exportTypes.markdown)
            const objectToExport = [
                {
                    lastName: "Mueller",
                    firstName: "Peter",
                    age: 22,
                },
            ]
            const markdownBody: string[] = markdownExporter.createBody(objectToExport)
            it("should render correct body", () => {
                expect(markdownBody).to.be.deep.eq(["|----|----|----", "|Mueller|Peter|22"])
            })
        })

        describe("simple body with multiple entries", () => {
            const markdownExporter = new Exporter(exportTypes.markdown)
            const objectToExport = [
                {
                    lastName: "Mueller",
                    firstName: "Peter",
                    age: 22,
                },
                {
                    lastName: "Washington",
                    firstName: "James",
                    age: 47,
                },
            ]
            const markdownBody: string[] = markdownExporter.createBody(objectToExport)
            it("should render corrent body", () => {
                expect(markdownBody).to.be.deep.eq(["|----|----|----", "|Mueller|Peter|22", "|Washington|James|47"])
            })
        })
    })

    describe("export body to csv", () => {
        describe("simple body with one entry", () => {
            const csvExporter = new Exporter(exportTypes.csv)
            const objectToExport = [
                {
                    lastName: "Mueller",
                    firstName: "Peter",
                    age: 22,
                },
            ]
            const csvBody: string[] = csvExporter.createBody(objectToExport)
            it("should render correct body", () => {
                expect(csvBody).to.be.deep.eq(["Mueller,Peter,22"])
            })
        })

        describe("simple body with multiple entries", () => {
            const csvExporter = new Exporter(exportTypes.csv)
            const objectToExport = [
                {
                    lastName: "Mueller",
                    firstName: "Peter",
                    age: 22,
                },
                {
                    lastName: "Washington",
                    firstName: "James",
                    age: 47,
                },
            ]
            const csvBody: string[] = csvExporter.createBody(objectToExport)
            it("should render corrent body", () => {
                expect(csvBody).to.be.deep.eq(["Mueller,Peter,22", "Washington,James,47"])
            })
        })
    })

    describe("export to confluence markdown", () => {
        const markdownExporter = new Exporter(exportTypes.confluenceMarkdown)
        const objectToExport = {
            lastName: "Mueller",
            firstName: "Peter",
            age: 22,
        }
        let markdownHeader: string

        before(() => {
            markdownHeader = markdownExporter.createHeader(objectToExport)
        })

        it('should create valid header for export type "markdown confluence" with additional properties', () => {
            expect(markdownHeader).to.be.equal("||lastName||firstName||age")
        })
    })

    describe("export array", () => {
        describe("simple dataset with header and one entry", () => {
            const markdownExporter = new Exporter(exportTypes.markdown)
            const arrayToExport = [
                {
                    lastName: "Mueller",
                    firstName: "Peter",
                    age: 22,
                },
            ]
            const markdown: string[] = markdownExporter.exportArray(arrayToExport)
            it("should render full markdown", () => {
                expect(markdown).to.be.deep.eq(["|lastName|firstName|age", "|----|----|----", "|Mueller|Peter|22"])
            })
        })
    })
})

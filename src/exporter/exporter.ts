// TODO: 2019-11-10 iodar: export types for markdown, confluence, csv
// TODO: 2019-11-10 iodar: clean up interfaces and types

interface ExportTypes {
    typeOfExport: SyntaxType
    delimeters: {
        startOfRow: string
        entryDelimeter: string
        endOfRow: string
        extraLineAfterHeader?: string
    }
}

type SomeType = {
    markdown: {
        typeOfExport: SyntaxType
        delimeter: {
            startOfRow: "|"
            betweenEntries: "|"
            endOfRow: ""
        }
    }
}

export enum SyntaxType {
    markdown,
    confluenceMarkdown,
    csv,
}

export interface ExporterProps {
    exporter: SyntaxType
}

export class Exporter {
    private props: ExporterProps
    constructor(props: ExporterProps) {
        this.props = props
    }

    /**
     * Exports an array of objects. Then type of
     * export is controlled by the Exporter
     * properties.
     * @param array Array of objects to export
     */
    public exportArray(arrayOfObjects: any[]): string[] {
        return null
    }
}

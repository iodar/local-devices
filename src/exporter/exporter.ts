// TODO: 2019-11-10 iodar: clean up interfaces and types

interface ExportProperties {
    delimeters: {
        header?: {
            startOfRow: string
            entryDelimeter: string
            endOfRow: string
        }
        body: {
            startOfRow: string
            entryDelimeter: string
            endOfRow: string
            extraLineBeforeBody?: string
        }
    }
}

export enum SyntaxType {
    markdown = "markdown",
    confluenceMarkdown = "confluenceMarkdown",
    csv = "csv",
}

type ExportTypes = {
    [key in SyntaxType]: ExportProperties
}

export const exportTypes: ExportTypes = {
    csv: {
        delimeters: {
            body: {
                startOfRow: "",
                endOfRow: "",
                entryDelimeter: ",",
            },
        },
    },
    markdown: {
        delimeters: {
            body: {
                startOfRow: "|",
                endOfRow: "|",
                entryDelimeter: "|",
                extraLineBeforeBody: "----",
            },
        },
    },
    confluenceMarkdown: {
        delimeters: {
            header: {
                startOfRow: "||",
                endOfRow: "",
                entryDelimeter: "||",
            },
            body: {
                startOfRow: "|",
                endOfRow: "|",
                entryDelimeter: "|",
                extraLineBeforeBody: "----",
            },
        },
    },
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

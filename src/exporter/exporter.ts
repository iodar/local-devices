import { getObjectKeys } from "../util/objectAnalyzer"

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
    private props: ExportProperties
    constructor(props: ExportProperties) {
        this.props = props
    }

    /**
     * Exports an array of objects. Then type of
     * export is controlled by the Exporter
     * properties.
     * @param array Array of objects to export
     */
    public exportArray(arrayOfObjects: any[]): string[] {
        const firstEntryOfArray: object = arrayOfObjects[0]
        return null
    }

    private createHeader(object: object): string {
        const objectKeys: string[] = getObjectKeys(object)
        const delimeter: string = this.props.delimeters.header.entryDelimeter
        const endOfRow = this.props.delimeters.header.endOfRow

        let header: string = this.props.delimeters.header.startOfRow
        header += objectKeys.join(delimeter) + endOfRow
        return header
    }
}

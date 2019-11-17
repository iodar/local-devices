import { getObjectKeys } from "../util/objectAnalyzer"

interface HeaderProperties {
    startOfRow: string
    entryDelimeter: string
    endOfRow: string
}

export interface ExportProperties {
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
    constructor(private props: ExportProperties) {
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

    /**
     * Creates a the header structure for the desired output format.
     * Uses the given parameter to extract the table header information
     * from the object.
     * @param object object to export with simple structure
     */
    public createHeader(object: object): string {
        const objectKeys: string[] = getObjectKeys(object)

        // determin whether the header has a different structure than the rest of
        // the output
        if (!!this.props.delimeters.header) {
            return this.createHeaderStructure(this.props.delimeters.header, objectKeys)
        } else {
            return this.createHeaderStructure(this.props.delimeters.body, objectKeys)
        }
    }

    /**
     * Creates the first line e.g. the header with the given parameters.
     * @param headerProps properties that define the structure of the header
     * @param objectKeys contents that should be written into the header columns
     */
    private createHeaderStructure(headerProps: HeaderProperties, objectKeys: string[]): string {
        const header: string = //
            headerProps.startOfRow + //
            objectKeys.join(headerProps.entryDelimeter) + //
            headerProps.endOfRow
        return header
    }
}

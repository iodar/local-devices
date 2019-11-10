export function getObjectKeys(object: Object): Array<string>{
    if (object === undefined || object === null) {
        throw new Error("Object must not be undefinded or null")
    } else {
        const objectKeys = Object.keys(object)
        if (objectKeys.length < 1) {
            throw new Error("Object must not be undefinded or null")
        } else {
            return objectKeys
        }
    }
}
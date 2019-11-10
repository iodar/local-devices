export function getObjectKeys(object: Object): Array<string>{
    if (object === undefined || object === null) {
        throw new Error("Object must not be undefinded or null")
    } else {
        return Object.keys(object)
    }
}
/**
 * Analyzes an object and it's properties. Returns an Array
 * of all keys that are containend in the object.
 * @param object Object to be analyzied.
 */
export function getObjectKeys(object: object): string[] {
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

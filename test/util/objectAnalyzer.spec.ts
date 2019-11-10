import { getObjectKeys } from "../../src/util/objectAnalyzer"
import { expect } from "chai"

describe("Obeject Analyzer", () => {
    describe("undefined object", () => {
        const undefinedObj = undefined

        it("throws error", () => {
            expect(() => {
                getObjectKeys(undefinedObj)
            }).to.throw(Error, "Object must not be undefinded or null")
        })
    })

    describe("empty object", () => {
        const emptyObj = {}

        it("should dummy", () => {
            expect(() => {
                getObjectKeys(emptyObj)
            }).to.throw(Error, "Object must not be undefinded or null")
            
        })
    })

    describe("flat object", () => {
        const flatObject: Object = {
            firstName: "Peter",
            lastName: "Miller",
            age: 18,
        }

        let objectKeys: string[]

        before(() => {
            objectKeys = getObjectKeys(flatObject)
        })

        it("should get all key of the object", () => {
            expect(objectKeys).to.be.deep.equal(["firstName", "lastName", "age"])
        })
    })

    // TODO: 2019-11-10 iodar: not implemented yet
    describe.skip("object with complex structure", () => {
        const complexObject: Object = {
            person: {
                lastName: "Miller",
                firstName: "Peter",
                age: 18,
            },
        }

        let obejctKeys: string[]

        before(() => {
            obejctKeys = getObjectKeys(complexObject)
        })

        it("should get all keys of the object", () => {
            expect(obejctKeys).to.be.deep.equal(["person.lastName", "person.lastName", "person.age"])
        })
    })
})

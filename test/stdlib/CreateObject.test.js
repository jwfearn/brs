const { CreateObject } = require("../../lib/stdlib/index");
const { Interpreter } = require("../../lib/interpreter");
const { Int32, Float, ValueKind, BrsString } = require("../../lib/brsTypes");

const interpreter = new Interpreter();

describe("CreateObject", () => {
    it("creates a good thing", () => {
        let obj = CreateObject.call(interpreter, new BrsString("roAssociativeArray"));

        /*
        expect(
            Abs.call(interpreter, new Float(3.5)).value
        ).toBeCloseTo(3.5);

        expect(
            Abs.call(interpreter, new Float(-3.5)).value
        ).toBeCloseTo(3.5);

        expect(
            Abs.call(interpreter, new Float(0)).value
        ).toBeCloseTo(0);
        */
    });

    it("returns an invalid response", () => {
        let obj = CreateObject.call(interpreter, new BrsString("roThisComponentDoesNotExist"));
        expect(obj.kind).toEqual(ValueKind.Invalid);
    });
});
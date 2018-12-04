import { Callable, ValueKind, BrsInvalid, BrsString } from "../brsTypes";
import { Interpreter } from "../interpreter";
import { createObjectBindingPattern } from "typescript";
import { AssociativeArray } from "../brsTypes/components/AssociativeArray";

export const CreateObject = new Callable(
    "CreateObject",
    {
        signature: {
            args: [{name: "classname", type: ValueKind.String}],
            returns: ValueKind.Dynamic
        },
        impl: (interpreter: Interpreter, classname: BrsString) => {
            if (classname.value === "roAssociativeArray") {
                return new AssociativeArray([]);
            } else {
                console.log("returning invalid instance");
                return BrsInvalid.Instance;
            }
        }
    }
);


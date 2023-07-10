import {ToBeOrNotToBe} from "../utils";

function expect(val: any): ToBeOrNotToBe {
    return {
        toBe: (value) => {
            if (val === value) return true
            throw new Error("Not Equal");
        },
        notToBe: (value) => {
            if (value !== val) return true
            else if (value === val)   throw new Error("Equal");
        }
    }
};
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function expect(val) {
    return {
        toBe: (value) => {
            if (val === value)
                return true;
            throw new Error("Not Equal");
        },
        notToBe: (value) => {
            if (value !== val)
                return true;
            else if (value === val)
                throw new Error("Equal");
        }
    };
}
;
//# sourceMappingURL=Expect.js.map
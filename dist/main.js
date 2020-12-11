import { option as O, tuple as TP } from "fp-ts";
import { flow } from "fp-ts/lib/function";
import { prismNonZero } from "newtype-ts/lib/NonZero";
export var showNumber = {
    show: flow(TP.bimap(String, String), function (_a) {
        var a = _a[0], b = _a[1];
        return a + "." + b;
    })
};
export var isDoubleIndexedArray = function (a) {
    return Array.isArray(a) && a[0] !== undefined && a[1] !== undefined;
};
export var prismNumber = {
    getOption: flow(prismNonZero.getOption, O.map(prismNonZero.reverseGet), O.map(function (nz) {
        var decimal = nz % 1;
        var whole = nz - decimal;
        return [whole, decimal];
    }), O.map(TP.bimap(prismNonZero.getOption, prismNonZero.getOption)), O.chain(O.sequenceArray), O.map(function (a) { return a; })),
    reverseGet: function (a) { return Number(showNumber.show(a)); }
};
export var debit = flow(prismNumber.getOption, O.bindTo("DR"));
export var credit = flow(prismNumber.getOption, O.bindTo("CR"));
//# sourceMappingURL=main.js.map
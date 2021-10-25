"use strict";
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __importDefault(require("react"));
var html_react_parser_1 = __importDefault(require("html-react-parser"));
var Table = function (_a) {
    var data = _a.data, _b = _a.className, className = _b === void 0 ? '' : _b;
    var tableprops = {};
    if (className) {
        tableprops.className = className;
    }
    return (react_1.default.createElement("table", __assign({}, tableprops),
        (data === null || data === void 0 ? void 0 : data.caption) && react_1.default.createElement("caption", null, (0, html_react_parser_1.default)(data.caption)),
        (data === null || data === void 0 ? void 0 : data.header) && (react_1.default.createElement("thead", null,
            react_1.default.createElement("tr", null, data.header.map(function (cell, i) { return (react_1.default.createElement("th", { key: "" + i }, (0, html_react_parser_1.default)(cell))); })))),
        react_1.default.createElement("tbody", null, data === null || data === void 0 ? void 0 : data.content.map(function (row, i) { return (react_1.default.createElement("tr", { key: "" + i }, row.map(function (cell, j) {
            var Tag = "t" + (j === 0 ? 'h' : 'd');
            return react_1.default.createElement(Tag, { key: "" + i + j }, (0, html_react_parser_1.default)(cell));
        }))); })),
        (data === null || data === void 0 ? void 0 : data.footer) && (react_1.default.createElement("tfoot", null,
            react_1.default.createElement("tr", null, data === null || data === void 0 ? void 0 : data.footer.map(function (cell, i) { return (react_1.default.createElement("th", { key: "" + i }, (0, html_react_parser_1.default)(cell))); }))))));
};
exports.default = Table;
//# sourceMappingURL=index.js.map
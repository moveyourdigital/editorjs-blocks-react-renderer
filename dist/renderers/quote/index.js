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
var Quote = function (_a) {
    var data = _a.data, _b = _a.className, className = _b === void 0 ? '' : _b, _c = _a.actionsClassNames, actionsClassNames = _c === void 0 ? {
        alignment: 'text-align-{alignment}',
    } : _c;
    var classNames = [];
    if (data === null || data === void 0 ? void 0 : data.alignment) {
        classNames.push(actionsClassNames.alignment.replace('{alignment}', data.alignment));
    }
    if (className)
        classNames.push(className);
    var blockquoteprops = {};
    if (classNames.length > 0) {
        blockquoteprops.className = classNames.join(' ');
    }
    return (react_1.default.createElement("blockquote", __assign({}, blockquoteprops),
        (data === null || data === void 0 ? void 0 : data.text) &&
            data.text
                .split('\n\n')
                .map(function (paragraph, i) { return (react_1.default.createElement("p", { key: i }, (0, html_react_parser_1.default)(paragraph.split('\n').reduce(function (total, line) { return [total, '<br />', line].join(''); })))); }),
        (data === null || data === void 0 ? void 0 : data.caption) && react_1.default.createElement("footer", null, (0, html_react_parser_1.default)(data.caption))));
};
exports.default = Quote;
//# sourceMappingURL=index.js.map
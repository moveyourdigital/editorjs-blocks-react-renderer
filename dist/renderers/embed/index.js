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
var Embed = function (_a) {
    var data = _a.data, _b = _a.className, className = _b === void 0 ? '' : _b, _c = _a.rel, rel = _c === void 0 ? 'noreferer nofollower external' : _c, sandbox = _a.sandbox;
    var classNames = [];
    if (className)
        classNames.push(className);
    classNames.push("embed-block-service-" + (data === null || data === void 0 ? void 0 : data.service));
    var figureprops = {};
    if (classNames.length > 0) {
        figureprops.className = classNames.join(' ');
    }
    if (data === null || data === void 0 ? void 0 : data.width) {
        figureprops.width = data.width.toString();
    }
    if (data === null || data === void 0 ? void 0 : data.height) {
        figureprops.height = data.height.toString();
    }
    if (sandbox) {
        figureprops.sandbox = sandbox.toString();
    }
    return (react_1.default.createElement("figure", null,
        (data === null || data === void 0 ? void 0 : data.embed) ? (react_1.default.createElement("iframe", __assign({ src: data.embed }, figureprops, { frameBorder: "0", "data-src": data.source }))) : (react_1.default.createElement("a", { href: data === null || data === void 0 ? void 0 : data.source, target: "_blank", rel: rel }, data === null || data === void 0 ? void 0 : data.source)),
        (data === null || data === void 0 ? void 0 : data.caption) && react_1.default.createElement("figcaption", null, (0, html_react_parser_1.default)(data.caption))));
};
exports.default = Embed;
//# sourceMappingURL=index.js.map
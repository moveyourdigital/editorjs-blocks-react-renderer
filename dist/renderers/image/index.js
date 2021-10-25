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
var Image = function (_a) {
    var _b;
    var data = _a.data, _c = _a.className, className = _c === void 0 ? '' : _c, _d = _a.actionsClassNames, actionsClassNames = _d === void 0 ? {
        stretched: 'image-block--stretched',
        withBorder: 'image-block--with-border',
        withBackground: 'image-block--with-background',
    } : _d;
    var classNames = [];
    if (className)
        classNames.push(className);
    Object.keys(actionsClassNames).forEach(function (actionName) {
        if (data && data[actionName] === true && actionName in actionsClassNames) {
            // @ts-ignore
            classNames.push(actionsClassNames[actionName]);
        }
    });
    var figureprops = {};
    if (classNames.length > 0) {
        figureprops.className = classNames.join(' ');
    }
    return (react_1.default.createElement("figure", __assign({}, figureprops),
        ((_b = data === null || data === void 0 ? void 0 : data.file) === null || _b === void 0 ? void 0 : _b.url) && react_1.default.createElement("img", { src: data.file.url, alt: data.caption || data.file.name }),
        (data === null || data === void 0 ? void 0 : data.caption) && react_1.default.createElement("figcaption", null, (0, html_react_parser_1.default)(data.caption))));
};
exports.default = Image;
//# sourceMappingURL=index.js.map
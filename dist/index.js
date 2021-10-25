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
exports.TableBlock = exports.QuoteBlock = exports.ParagraphBlock = exports.ListBlock = exports.ImageBlock = exports.HeaderBlock = exports.EmbedBlock = exports.DelimiterBlock = exports.CodeBlock = exports.default = void 0;
var react_1 = __importDefault(require("react"));
var code_1 = __importDefault(require("./renderers/code"));
exports.CodeBlock = code_1.default;
var delimiter_1 = __importDefault(require("./renderers/delimiter"));
exports.DelimiterBlock = delimiter_1.default;
var embed_1 = __importDefault(require("./renderers/embed"));
exports.EmbedBlock = embed_1.default;
var header_1 = __importDefault(require("./renderers/header"));
exports.HeaderBlock = header_1.default;
var image_1 = __importDefault(require("./renderers/image"));
exports.ImageBlock = image_1.default;
var list_1 = __importDefault(require("./renderers/list"));
exports.ListBlock = list_1.default;
var paragraph_1 = __importDefault(require("./renderers/paragraph"));
exports.ParagraphBlock = paragraph_1.default;
var quote_1 = __importDefault(require("./renderers/quote"));
exports.QuoteBlock = quote_1.default;
var table_1 = __importDefault(require("./renderers/table"));
exports.TableBlock = table_1.default;
var Blocks = function (_a) {
    var data = _a.data, _b = _a.config, config = _b === void 0 ? {} : _b, _c = _a.renderers, renderers = _c === void 0 ? {} : _c;
    var defaultRenderers = {
        code: code_1.default,
        delimiter: delimiter_1.default,
        embed: embed_1.default,
        header: header_1.default,
        image: image_1.default,
        list: list_1.default,
        paragraph: paragraph_1.default,
        quote: quote_1.default,
        table: table_1.default,
    };
    var availableRenderers = __assign(__assign({}, defaultRenderers), renderers);
    return (react_1.default.createElement(react_1.default.Fragment, null, data.blocks.map(function (block, i) {
        if (block.type.toString() in availableRenderers) {
            // @ts-ignore Todo: find a fix
            var Tag = availableRenderers[block.type];
            return react_1.default.createElement(Tag, __assign({ key: i, data: block.data }, config[block.type]));
        }
    })));
};
exports.default = Blocks;
//# sourceMappingURL=index.js.map
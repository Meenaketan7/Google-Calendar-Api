"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const cors_1 = __importDefault(require("cors"));
const express_1 = __importDefault(require("express"));
const express_fileupload_1 = __importDefault(require("express-fileupload"));
const plugins_1 = require("./plugins");
const app = (0, express_1.default)();
app
    .use((0, cors_1.default)())
    .use(express_1.default.json({ limit: "50mb" }))
    .use(express_1.default.urlencoded({ extended: true }))
    .use((0, express_fileupload_1.default)());
plugins_1.RouterPlugin.setup(app);
plugins_1.ListenerPlugin.listen(app);

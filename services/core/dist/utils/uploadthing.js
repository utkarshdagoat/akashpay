"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.uploadRouter = void 0;
const express_1 = require("uploadthing/express");
const f = (0, express_1.createUploadthing)();
exports.uploadRouter = {
    imageUploader: f({
        image: {
            maxFileSize: "4MB",
            maxFileCount: 4,
        },
    }).onUploadComplete((data) => {
        console.log(data.file.url);
        return data.file.url;
    }),
};
//# sourceMappingURL=uploadthing.js.map
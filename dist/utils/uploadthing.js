"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "uploadRouter", {
    enumerable: true,
    get: function() {
        return uploadRouter;
    }
});
const _express = require("uploadthing/express");
const f = (0, _express.createUploadthing)();
const uploadRouter = {
    imageUploader: f({
        image: {
            maxFileSize: "4MB",
            maxFileCount: 4
        }
    }).onUploadComplete((data)=>{
        console.log(data.file.url);
        return data.file.url;
    })
};

//# sourceMappingURL=uploadthing.js.map
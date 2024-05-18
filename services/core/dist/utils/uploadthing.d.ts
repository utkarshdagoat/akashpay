/// <reference types="qs" />
/// <reference types="express" />
/// <reference types="cookie-parser" />
export declare const uploadRouter: {
    imageUploader: import("uploadthing/internal/types").Uploader<{
        _input: "unsetMarker" & {
            __brand: "unsetMarker";
        };
        _metadata: "unsetMarker" & {
            __brand: "unsetMarker";
        };
        _middlewareArgs: {
            req: import("express").Request<import("express-serve-static-core").ParamsDictionary, any, any, import("qs").ParsedQs, Record<string, any>>;
            res: import("express").Response<any, Record<string, any>>;
            event: undefined;
        };
        _errorShape: import("@uploadthing/shared").Json;
        _errorFn: "unsetMarker" & {
            __brand: "unsetMarker";
        };
        _output: string;
    }>;
};
export type OurFileRouter = typeof uploadRouter;

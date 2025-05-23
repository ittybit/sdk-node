/**
 * This file was auto-generated by Fern from our API Definition.
 */

/**
 * The general type of media (e.g., video, image).
 */
export type MediaSourceKind = "video" | "image" | "audio" | "document" | "unknown";
export const MediaSourceKind = {
    Video: "video",
    Image: "image",
    Audio: "audio",
    Document: "document",
    Unknown: "unknown",
} as const;

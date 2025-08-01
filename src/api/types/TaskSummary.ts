/**
 * This file was auto-generated by Fern from our API Definition.
 */

export interface TaskSummary {
    id: string;
    object: string;
    kind: TaskSummary.Kind;
    status: TaskSummary.Status;
    progress?: number;
    error?: string;
    created_by?: string;
    created: string;
    updated: string;
    parent_id?: string;
}

export namespace TaskSummary {
    export type Kind =
        | "ingest"
        | "video"
        | "image"
        | "audio"
        | "chapters"
        | "subtitles"
        | "thumbnails"
        | "nsfw"
        | "speech"
        | "description"
        | "outline"
        | "prompt"
        | "workflow"
        | "conditions"
        | "http";
    export const Kind = {
        Ingest: "ingest",
        Video: "video",
        Image: "image",
        Audio: "audio",
        Chapters: "chapters",
        Subtitles: "subtitles",
        Thumbnails: "thumbnails",
        Nsfw: "nsfw",
        Speech: "speech",
        Description: "description",
        Outline: "outline",
        Prompt: "prompt",
        Workflow: "workflow",
        Conditions: "conditions",
        Http: "http",
    } as const;
    export type Status =
        | "pending"
        | "waiting"
        | "processing"
        | "ready"
        | "completed"
        | "failed"
        | "error"
        | "cancelled";
    export const Status = {
        Pending: "pending",
        Waiting: "waiting",
        Processing: "processing",
        Ready: "ready",
        Completed: "completed",
        Failed: "failed",
        Error: "error",
        Cancelled: "cancelled",
    } as const;
}

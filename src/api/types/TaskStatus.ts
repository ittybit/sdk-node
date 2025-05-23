/**
 * This file was auto-generated by Fern from our API Definition.
 */

/**
 * Current status of the task.
 */
export type TaskStatus =
    | "pending"
    | "waiting"
    | "processing"
    | "ready"
    | "completed"
    | "failed"
    | "error"
    | "cancelled";
export const TaskStatus = {
    Pending: "pending",
    Waiting: "waiting",
    Processing: "processing",
    Ready: "ready",
    Completed: "completed",
    Failed: "failed",
    Error: "error",
    Cancelled: "cancelled",
} as const;

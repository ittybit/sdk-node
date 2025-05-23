/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as Ittybit from "../index";

export interface Task {
    /** Unique identifier for the task. */
    id: string;
    /** Object type, always 'task'. */
    object: string;
    /** The type of operation the task performs. */
    kind?: Ittybit.TaskKind;
    /** The input source for the task (e.g., details of a file). Structure varies based on the task kind and preceding steps. */
    input?: Record<string, unknown>;
    /** Configuration options specific to the task kind. */
    options?: Record<string, unknown>;
    /** The result generated by the task (e.g., details of an output file or intelligence data). Structure varies. */
    output?: Record<string, unknown>;
    /** Current status of the task. */
    status: Ittybit.TaskStatus;
    /** Task progress percentage. */
    progress?: number;
    /** Error message if the task failed. */
    error?: string;
    /** ID of the entity that created the task (e.g., user ID, automation ID). */
    created_by?: string;
    /** Timestamp when the task was created. */
    created: string;
    /** Timestamp when the task was last updated. */
    updated: string;
    /** ID of the parent task if this is part of a workflow. */
    parent_id?: string;
    /** Array of nested task objects representing the steps within this workflow task. */
    workflow?: Ittybit.Task[];
    /** Array representing subsequent tasks (e.g., in an automation). Structure may vary. */
    next?: Ittybit.Task[];
    results?: Ittybit.TaskResults;
}

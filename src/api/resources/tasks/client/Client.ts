/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as environments from "../../../../environments";
import * as core from "../../../../core";
import * as Ittybit from "../../../index";
import urlJoin from "url-join";
import * as errors from "../../../../errors/index";

export declare namespace Tasks {
    export interface Options {
        environment?: core.Supplier<environments.IttybitEnvironment | string>;
        /** Specify a custom URL to connect the client to. */
        baseUrl?: core.Supplier<string>;
        token: core.Supplier<core.BearerToken>;
        /** Override the ACCEPT_VERSION header */
        version?: core.Supplier<string | undefined>;
        fetcher?: core.FetchFunction;
    }

    export interface RequestOptions {
        /** The maximum time to wait for a response in seconds. */
        timeoutInSeconds?: number;
        /** The number of times to retry the request. Defaults to 2. */
        maxRetries?: number;
        /** A hook to abort the request. */
        abortSignal?: AbortSignal;
        /** Override the ACCEPT_VERSION header */
        version?: string | undefined;
        /** Additional headers to include in the request. */
        headers?: Record<string, string>;
    }
}

/**
 * Manage processing tasks
 */
export class Tasks {
    constructor(protected readonly _options: Tasks.Options) {}

    /**
     * Retrieves a list of tasks for the project, optionally filtered by status or kind.
     *
     * @param {Ittybit.TasksListRequest} request
     * @param {Tasks.RequestOptions} requestOptions - Request-specific configuration.
     *
     * @throws {@link Ittybit.UnauthorizedError}
     * @throws {@link Ittybit.ForbiddenError}
     *
     * @example
     *     await client.tasks.list()
     */
    public list(
        request: Ittybit.TasksListRequest = {},
        requestOptions?: Tasks.RequestOptions,
    ): core.HttpResponsePromise<Ittybit.TaskListResponse> {
        return core.HttpResponsePromise.fromPromise(this.__list(request, requestOptions));
    }

    private async __list(
        request: Ittybit.TasksListRequest = {},
        requestOptions?: Tasks.RequestOptions,
    ): Promise<core.WithRawResponse<Ittybit.TaskListResponse>> {
        const { limit, status, kind } = request;
        const _queryParams: Record<string, string | string[] | object | object[] | null> = {};
        if (limit != null) {
            _queryParams["limit"] = limit.toString();
        }

        if (status != null) {
            _queryParams["status"] = status;
        }

        if (kind != null) {
            _queryParams["kind"] = kind;
        }

        const _response = await (this._options.fetcher ?? core.fetcher)({
            url: urlJoin(
                (await core.Supplier.get(this._options.baseUrl)) ??
                    (await core.Supplier.get(this._options.environment)) ??
                    environments.IttybitEnvironment.Default,
                "tasks",
            ),
            method: "GET",
            headers: {
                Authorization: await this._getAuthorizationHeader(),
                ACCEPT_VERSION:
                    (await core.Supplier.get(this._options.version)) != null
                        ? await core.Supplier.get(this._options.version)
                        : undefined,
                "X-Fern-Language": "JavaScript",
                "X-Fern-SDK-Name": "@ittybit/sdk",
                "X-Fern-SDK-Version": "0.7.4",
                "User-Agent": "@ittybit/sdk/0.7.4",
                "X-Fern-Runtime": core.RUNTIME.type,
                "X-Fern-Runtime-Version": core.RUNTIME.version,
                ...requestOptions?.headers,
            },
            contentType: "application/json",
            queryParameters: _queryParams,
            requestType: "json",
            timeoutMs: requestOptions?.timeoutInSeconds != null ? requestOptions.timeoutInSeconds * 1000 : 60000,
            maxRetries: requestOptions?.maxRetries,
            abortSignal: requestOptions?.abortSignal,
        });
        if (_response.ok) {
            return { data: _response.body as Ittybit.TaskListResponse, rawResponse: _response.rawResponse };
        }

        if (_response.error.reason === "status-code") {
            switch (_response.error.statusCode) {
                case 401:
                    throw new Ittybit.UnauthorizedError(
                        _response.error.body as Ittybit.ErrorResponse,
                        _response.rawResponse,
                    );
                case 403:
                    throw new Ittybit.ForbiddenError(
                        _response.error.body as Ittybit.ErrorResponse,
                        _response.rawResponse,
                    );
                default:
                    throw new errors.IttybitError({
                        statusCode: _response.error.statusCode,
                        body: _response.error.body,
                        rawResponse: _response.rawResponse,
                    });
            }
        }

        switch (_response.error.reason) {
            case "non-json":
                throw new errors.IttybitError({
                    statusCode: _response.error.statusCode,
                    body: _response.error.rawBody,
                    rawResponse: _response.rawResponse,
                });
            case "timeout":
                throw new errors.IttybitTimeoutError("Timeout exceeded when calling GET /tasks.");
            case "unknown":
                throw new errors.IttybitError({
                    message: _response.error.errorMessage,
                    rawResponse: _response.rawResponse,
                });
        }
    }

    /**
     * Creates a new processing task (e.g., ingest, video transcode, speech analysis) or a workflow task.
     *
     * @param {Ittybit.TasksCreateRequest} request
     * @param {Tasks.RequestOptions} requestOptions - Request-specific configuration.
     *
     * @throws {@link Ittybit.BadRequestError}
     * @throws {@link Ittybit.UnauthorizedError}
     * @throws {@link Ittybit.ForbiddenError}
     * @throws {@link Ittybit.NotFoundError}
     *
     * @example
     *     await client.tasks.create({
     *         kind: "ingest",
     *         url: "https://example.com/some_video.mov",
     *         input: {
     *             "options": {
     *                 "filename": "custom_name.mov"
     *             }
     *         }
     *     })
     *
     * @example
     *     await client.tasks.create({
     *         kind: "ingest",
     *         url: "https://storage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4",
     *         filename: "bunny-1280x720.mp4",
     *         folder: "examples/cartoons",
     *         width: 1280,
     *         height: 720
     *     })
     */
    public create(
        request: Ittybit.TasksCreateRequest,
        requestOptions?: Tasks.RequestOptions,
    ): core.HttpResponsePromise<Ittybit.TaskResponse> {
        return core.HttpResponsePromise.fromPromise(this.__create(request, requestOptions));
    }

    private async __create(
        request: Ittybit.TasksCreateRequest,
        requestOptions?: Tasks.RequestOptions,
    ): Promise<core.WithRawResponse<Ittybit.TaskResponse>> {
        const _response = await (this._options.fetcher ?? core.fetcher)({
            url: urlJoin(
                (await core.Supplier.get(this._options.baseUrl)) ??
                    (await core.Supplier.get(this._options.environment)) ??
                    environments.IttybitEnvironment.Default,
                "tasks",
            ),
            method: "POST",
            headers: {
                Authorization: await this._getAuthorizationHeader(),
                ACCEPT_VERSION:
                    (await core.Supplier.get(this._options.version)) != null
                        ? await core.Supplier.get(this._options.version)
                        : undefined,
                "X-Fern-Language": "JavaScript",
                "X-Fern-SDK-Name": "@ittybit/sdk",
                "X-Fern-SDK-Version": "0.7.4",
                "User-Agent": "@ittybit/sdk/0.7.4",
                "X-Fern-Runtime": core.RUNTIME.type,
                "X-Fern-Runtime-Version": core.RUNTIME.version,
                ...requestOptions?.headers,
            },
            contentType: "application/json",
            requestType: "json",
            body: request,
            timeoutMs: requestOptions?.timeoutInSeconds != null ? requestOptions.timeoutInSeconds * 1000 : 60000,
            maxRetries: requestOptions?.maxRetries,
            abortSignal: requestOptions?.abortSignal,
        });
        if (_response.ok) {
            return { data: _response.body as Ittybit.TaskResponse, rawResponse: _response.rawResponse };
        }

        if (_response.error.reason === "status-code") {
            switch (_response.error.statusCode) {
                case 400:
                    throw new Ittybit.BadRequestError(
                        _response.error.body as Ittybit.ErrorResponse,
                        _response.rawResponse,
                    );
                case 401:
                    throw new Ittybit.UnauthorizedError(
                        _response.error.body as Ittybit.ErrorResponse,
                        _response.rawResponse,
                    );
                case 403:
                    throw new Ittybit.ForbiddenError(
                        _response.error.body as Ittybit.ErrorResponse,
                        _response.rawResponse,
                    );
                case 404:
                    throw new Ittybit.NotFoundError(
                        _response.error.body as Ittybit.ErrorResponse,
                        _response.rawResponse,
                    );
                default:
                    throw new errors.IttybitError({
                        statusCode: _response.error.statusCode,
                        body: _response.error.body,
                        rawResponse: _response.rawResponse,
                    });
            }
        }

        switch (_response.error.reason) {
            case "non-json":
                throw new errors.IttybitError({
                    statusCode: _response.error.statusCode,
                    body: _response.error.rawBody,
                    rawResponse: _response.rawResponse,
                });
            case "timeout":
                throw new errors.IttybitTimeoutError("Timeout exceeded when calling POST /tasks.");
            case "unknown":
                throw new errors.IttybitError({
                    message: _response.error.errorMessage,
                    rawResponse: _response.rawResponse,
                });
        }
    }

    /**
     * Retrieves available task kinds and their configuration options.
     *
     * @param {Tasks.RequestOptions} requestOptions - Request-specific configuration.
     *
     * @throws {@link Ittybit.UnauthorizedError}
     * @throws {@link Ittybit.ForbiddenError}
     *
     * @example
     *     await client.tasks.getTaskConfig()
     */
    public getTaskConfig(requestOptions?: Tasks.RequestOptions): core.HttpResponsePromise<Record<string, unknown>> {
        return core.HttpResponsePromise.fromPromise(this.__getTaskConfig(requestOptions));
    }

    private async __getTaskConfig(
        requestOptions?: Tasks.RequestOptions,
    ): Promise<core.WithRawResponse<Record<string, unknown>>> {
        const _response = await (this._options.fetcher ?? core.fetcher)({
            url: urlJoin(
                (await core.Supplier.get(this._options.baseUrl)) ??
                    (await core.Supplier.get(this._options.environment)) ??
                    environments.IttybitEnvironment.Default,
                "tasks-config",
            ),
            method: "GET",
            headers: {
                Authorization: await this._getAuthorizationHeader(),
                ACCEPT_VERSION:
                    (await core.Supplier.get(this._options.version)) != null
                        ? await core.Supplier.get(this._options.version)
                        : undefined,
                "X-Fern-Language": "JavaScript",
                "X-Fern-SDK-Name": "@ittybit/sdk",
                "X-Fern-SDK-Version": "0.7.4",
                "User-Agent": "@ittybit/sdk/0.7.4",
                "X-Fern-Runtime": core.RUNTIME.type,
                "X-Fern-Runtime-Version": core.RUNTIME.version,
                ...requestOptions?.headers,
            },
            contentType: "application/json",
            requestType: "json",
            timeoutMs: requestOptions?.timeoutInSeconds != null ? requestOptions.timeoutInSeconds * 1000 : 60000,
            maxRetries: requestOptions?.maxRetries,
            abortSignal: requestOptions?.abortSignal,
        });
        if (_response.ok) {
            return { data: _response.body as Record<string, unknown>, rawResponse: _response.rawResponse };
        }

        if (_response.error.reason === "status-code") {
            switch (_response.error.statusCode) {
                case 401:
                    throw new Ittybit.UnauthorizedError(
                        _response.error.body as Ittybit.ErrorResponse,
                        _response.rawResponse,
                    );
                case 403:
                    throw new Ittybit.ForbiddenError(
                        _response.error.body as Ittybit.ErrorResponse,
                        _response.rawResponse,
                    );
                default:
                    throw new errors.IttybitError({
                        statusCode: _response.error.statusCode,
                        body: _response.error.body,
                        rawResponse: _response.rawResponse,
                    });
            }
        }

        switch (_response.error.reason) {
            case "non-json":
                throw new errors.IttybitError({
                    statusCode: _response.error.statusCode,
                    body: _response.error.rawBody,
                    rawResponse: _response.rawResponse,
                });
            case "timeout":
                throw new errors.IttybitTimeoutError("Timeout exceeded when calling GET /tasks-config.");
            case "unknown":
                throw new errors.IttybitError({
                    message: _response.error.errorMessage,
                    rawResponse: _response.rawResponse,
                });
        }
    }

    /**
     * Retrieves the details of a specific task by its ID.
     *
     * @param {string} id
     * @param {Tasks.RequestOptions} requestOptions - Request-specific configuration.
     *
     * @throws {@link Ittybit.UnauthorizedError}
     * @throws {@link Ittybit.ForbiddenError}
     * @throws {@link Ittybit.NotFoundError}
     *
     * @example
     *     await client.tasks.get("id")
     */
    public get(id: string, requestOptions?: Tasks.RequestOptions): core.HttpResponsePromise<Ittybit.TaskResponse> {
        return core.HttpResponsePromise.fromPromise(this.__get(id, requestOptions));
    }

    private async __get(
        id: string,
        requestOptions?: Tasks.RequestOptions,
    ): Promise<core.WithRawResponse<Ittybit.TaskResponse>> {
        const _response = await (this._options.fetcher ?? core.fetcher)({
            url: urlJoin(
                (await core.Supplier.get(this._options.baseUrl)) ??
                    (await core.Supplier.get(this._options.environment)) ??
                    environments.IttybitEnvironment.Default,
                `tasks/${encodeURIComponent(id)}`,
            ),
            method: "GET",
            headers: {
                Authorization: await this._getAuthorizationHeader(),
                ACCEPT_VERSION:
                    (await core.Supplier.get(this._options.version)) != null
                        ? await core.Supplier.get(this._options.version)
                        : undefined,
                "X-Fern-Language": "JavaScript",
                "X-Fern-SDK-Name": "@ittybit/sdk",
                "X-Fern-SDK-Version": "0.7.4",
                "User-Agent": "@ittybit/sdk/0.7.4",
                "X-Fern-Runtime": core.RUNTIME.type,
                "X-Fern-Runtime-Version": core.RUNTIME.version,
                ...requestOptions?.headers,
            },
            contentType: "application/json",
            requestType: "json",
            timeoutMs: requestOptions?.timeoutInSeconds != null ? requestOptions.timeoutInSeconds * 1000 : 60000,
            maxRetries: requestOptions?.maxRetries,
            abortSignal: requestOptions?.abortSignal,
        });
        if (_response.ok) {
            return { data: _response.body as Ittybit.TaskResponse, rawResponse: _response.rawResponse };
        }

        if (_response.error.reason === "status-code") {
            switch (_response.error.statusCode) {
                case 401:
                    throw new Ittybit.UnauthorizedError(
                        _response.error.body as Ittybit.ErrorResponse,
                        _response.rawResponse,
                    );
                case 403:
                    throw new Ittybit.ForbiddenError(
                        _response.error.body as Ittybit.ErrorResponse,
                        _response.rawResponse,
                    );
                case 404:
                    throw new Ittybit.NotFoundError(
                        _response.error.body as Ittybit.ErrorResponse,
                        _response.rawResponse,
                    );
                default:
                    throw new errors.IttybitError({
                        statusCode: _response.error.statusCode,
                        body: _response.error.body,
                        rawResponse: _response.rawResponse,
                    });
            }
        }

        switch (_response.error.reason) {
            case "non-json":
                throw new errors.IttybitError({
                    statusCode: _response.error.statusCode,
                    body: _response.error.rawBody,
                    rawResponse: _response.rawResponse,
                });
            case "timeout":
                throw new errors.IttybitTimeoutError("Timeout exceeded when calling GET /tasks/{id}.");
            case "unknown":
                throw new errors.IttybitError({
                    message: _response.error.errorMessage,
                    rawResponse: _response.rawResponse,
                });
        }
    }

    protected async _getAuthorizationHeader(): Promise<string> {
        return `Bearer ${await core.Supplier.get(this._options.token)}`;
    }
}

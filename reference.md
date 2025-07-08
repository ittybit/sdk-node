# Reference

## Automations

<details><summary><code>client.automations.<a href="/src/api/resources/automations/client/Client.ts">list</a>({ ...params }) -> Ittybit.AutomationListResponse</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Retrieves a paginated list of all automations for the current project

</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.automations.list();
```

</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `Ittybit.AutomationsListRequest`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `Automations.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

<details><summary><code>client.automations.<a href="/src/api/resources/automations/client/Client.ts">create</a>({ ...params }) -> Ittybit.AutomationResponse</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Creates a new automation.

</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.automations.create({
    name: "My Example Automation",
    description: "This workflow will run whenever new media is created.",
    trigger: {
        kind: "event",
        event: "media.created",
    },
    workflow: [
        {
            kind: "description",
        },
        {
            kind: "image",
            ref: "thumbnail",
        },
        {
            kind: "video",
            next: [
                {
                    kind: "subtitles",
                    ref: "subtitles",
                },
            ],
        },
    ],
    status: "active",
});
```

</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `Ittybit.AutomationsCreateRequest`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `Automations.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

<details><summary><code>client.automations.<a href="/src/api/resources/automations/client/Client.ts">get</a>(id) -> Ittybit.AutomationResponse</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Retrieve the automation object for a automation with the given ID.

</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.automations.get("auto_abcdefgh1234");
```

</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**id:** `string`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `Automations.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

<details><summary><code>client.automations.<a href="/src/api/resources/automations/client/Client.ts">delete</a>(id) -> Ittybit.ConfirmationResponse</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Permanently removes an automation from the system. This action cannot be undone.

</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.automations.delete("auto_abcdefgh1234");
```

</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**id:** `string`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `Automations.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

<details><summary><code>client.automations.<a href="/src/api/resources/automations/client/Client.ts">update</a>(id, { ...params }) -> Ittybit.AutomationResponse</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Updates an automation's `name`, `description`, `trigger`, `workflow`, or `status`. Only the specified fields will be updated.

</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.automations.update("auto_abcdefgh1234", {
    name: "My Updated Automation",
    workflow: [
        {
            kind: "nsfw",
        },
        {
            kind: "description",
        },
        {
            kind: "image",
            ref: "big_thumbnail",
        },
        {
            kind: "video",
            next: [
                {
                    kind: "subtitle",
                    ref: "subtitle",
                },
            ],
        },
    ],
    status: "active",
});
```

</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**id:** `string`

</dd>
</dl>

<dl>
<dd>

**request:** `Ittybit.AutomationsUpdateRequest`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `Automations.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

## Files

<details><summary><code>client.files.<a href="/src/api/resources/files/client/Client.ts">list</a>({ ...params }) -> Ittybit.FileListResponse</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Retrieves a paginated list of all files associated with the current project.

</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.files.list();
```

</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `Ittybit.FilesListRequest`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `Files.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

<details><summary><code>client.files.<a href="/src/api/resources/files/client/Client.ts">create</a>({ ...params }) -> Ittybit.FileResponse</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Creates a new file from a publicly accessible or signed URL.

</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.files.create({
    url: "https://ittyb.it/sample.mp4",
    folder: "ittybit/samples",
    filename: "video.mp4",
    metadata: {
        customKey2: "a different custom value",
    },
});
```

</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `Ittybit.FilesCreateRequest`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `Files.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

<details><summary><code>client.files.<a href="/src/api/resources/files/client/Client.ts">get</a>(id) -> Ittybit.FileResponse</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Retrieve the file object for a file with the given ID.

</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.files.get("file_abcdefgh1234");
```

</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**id:** `string`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `Files.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

<details><summary><code>client.files.<a href="/src/api/resources/files/client/Client.ts">delete</a>(id) -> Ittybit.ConfirmationResponse</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Permanently removes a file from the system. This action cannot be undone.

</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.files.delete("file_abcdefgh1234");
```

</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**id:** `string`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `Files.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

<details><summary><code>client.files.<a href="/src/api/resources/files/client/Client.ts">update</a>(id, { ...params }) -> Ittybit.FileResponse</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Update a file's `filename`, `folder`, `ref`, or `metadata`. Only the specified fields will be updated.

</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.files.update("file_abcdefgh1234", {
    folder: "updated/folder",
    filename: "new_filename.mp4",
    metadata: {
        customKey2: "a different custom value",
    },
});
```

</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**id:** `string`

</dd>
</dl>

<dl>
<dd>

**request:** `Ittybit.FilesUpdateRequest`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `Files.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

## Media

<details><summary><code>client.media.<a href="/src/api/resources/media/client/Client.ts">list</a>({ ...params }) -> Ittybit.MediaListResponse</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Retrieves a paginated list of all media for the current project

</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.media.list();
```

</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `Ittybit.MediaListRequest`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `Media.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

<details><summary><code>client.media.<a href="/src/api/resources/media/client/Client.ts">create</a>({ ...params }) -> Ittybit.MediaResponse</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Creates a new media item. See [Media Object](/docs/media) for more details.

</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.media.create({
    title: "My Video Example",
    alt: "An example video used to demonstrate the ittybit API",
    metadata: {
        customKey2: "a different custom value",
    },
});
```

</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `Ittybit.MediaCreateRequest`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `Media.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

<details><summary><code>client.media.<a href="/src/api/resources/media/client/Client.ts">get</a>(id) -> Ittybit.MediaResponse</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Retrieves the media object for a media with the given ID.

</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.media.get("med_abcdefgh1234");
```

</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**id:** `string`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `Media.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

<details><summary><code>client.media.<a href="/src/api/resources/media/client/Client.ts">delete</a>(id) -> Ittybit.ConfirmationResponse</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Permanently removes a media object from the system. This action cannot be undone.

</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.media.delete("med_abcdefgh1234");
```

</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**id:** `string`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `Media.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

<details><summary><code>client.media.<a href="/src/api/resources/media/client/Client.ts">update</a>(id, { ...params }) -> Ittybit.MediaResponse</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Updates a media object's `title`, `alt`, or `metadata`. Only the specified fields will be updated.

</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.media.update("med_abcdefgh1234", {
    title: "Updated Video Example",
    alt: "An updated example video used to demonstrate the ittybit API",
    metadata: {
        customKey2: "a different custom value",
    },
});
```

</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**id:** `string`

</dd>
</dl>

<dl>
<dd>

**request:** `Ittybit.MediaUpdateRequest`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `Media.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

## Tasks

<details><summary><code>client.tasks.<a href="/src/api/resources/tasks/client/Client.ts">list</a>({ ...params }) -> Ittybit.TaskListResponse</code></summary>
<dl>
<dd>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.tasks.list();
```

</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `Ittybit.TasksListRequest`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `Tasks.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

<details><summary><code>client.tasks.<a href="/src/api/resources/tasks/client/Client.ts">create</a>({ ...params }) -> Ittybit.TaskResponse</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Creates a new task item. See [Tasks](/docs/tasks) for detailed coverage of all available props and values.

</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.tasks.create({
    file_id: "file_abcdefgh1234",
    kind: "image",
    width: 320,
    format: "png",
    ref: "thumbnail",
});
```

</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `unknown`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `Tasks.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

<details><summary><code>client.tasks.<a href="/src/api/resources/tasks/client/Client.ts">get</a>(id) -> Ittybit.TaskResponse</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Retrieves the task object for a task with the given ID.

</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.tasks.get("task_abcdefgh1234");
```

</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**id:** `string`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `Tasks.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

<details><summary><code>client.tasks.<a href="/src/api/resources/tasks/client/Client.ts">getTaskConfig</a>() -> Record<string, unknown></code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Retrieves available task kinds and their configuration options.

</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.tasks.getTaskConfig();
```

</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**requestOptions:** `Tasks.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

## Signatures

<details><summary><code>client.signatures.<a href="/src/api/resources/signatures/client/Client.ts">create</a>({ ...params }) -> Ittybit.SignatureResponse</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

You can use signatures to create signed URLs which grant access to your project's resources, without revealing your project's API key. URLs can expire after a specified time and be limited to HTTP `GET` method for read-only access, or HTTP `PUT` method for client-side uploads.

</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.signatures.create({
    filename: "video.mp4",
    folder: "example",
    expiry: 1735689600,
    method: "put",
});
```

</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `Ittybit.SignaturesCreateRequest`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `Signatures.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

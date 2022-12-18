# Upload JavaScript SDK

---

Full Documentation: **[Upload JavaScript SDK Docs](https://upload.io/docs/upload-sdk/javascript)**

---

This version:

- [`upload-js-full`](https://github.com/upload-io/upload-js-full)
  - Includes support for all [Upload API](https://upload.io/docs/upload-api) endpoints.
  - Node.js + Browsers

Alternative versions:

- [`upload-js`](https://github.com/upload-io/upload-js)
  - Includes support for file uploads only.
  - Browsers only.

## Installation

For browsers:

```bash
npm install upload-js-full
```

For Node.js:

```bash
npm install upload-js-full node-fetch
```

## Basic Usage

```javascript
import { FoldersApi } from "upload-js-full";

const foldersApi = new FoldersApi(new Configuration({
  fetchApi: require("node-fetch") // Node.js only.
}));

const folders = await foldersApi.listFolderChildren({
  accountId: "YOUR_ACCOUNT_ID",
  folderPath: "/"
});

// Result: { children: [ {...} ] }
console.log(folders);
```

## Documentation

Please see **[Upload JavaScript SDK](https://upload.io/docs/upload-sdk/javascript)** for detailed docs.

## License

[MIT](LICENSE)

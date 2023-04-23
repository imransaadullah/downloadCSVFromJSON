# download-csv-from-json

This is a Node.js package that allows you to download CSV data generated from JSON data. It supports the following functionality:

- Export JSON data to a CSV file
- Customizable headers, filename, and delimiter
- Ability to exclude specific keys from the exported data
- Ability to add a callback function to run after download

## Installation

You can install this package using npm:

```
npm install download-csv-from-json
```

## Usage

First, you will need to import the package:

```javascript
import downloadCSVFromJSON from 'download-csv-from-json';
```

Then, you can use the `downloadCSVFromJSON` function to download CSV data from JSON data. Here's an example:

```javascript
const jsonData = [
  { name: 'John Doe', age: 30, email: 'john.doe@example.com' },
  { name: 'Jane Smith', age: 25, email: 'jane.smith@example.com' },
  { name: 'Bob Johnson', age: 40, email: 'bob.johnson@example.com' },
];

downloadCSVFromJSON(jsonData, 'data.csv', ',', ['email'], () => {
  console.log('Download complete!');
});
```

This example will export the `jsonData` array to a CSV file called `data.csv`, with `,` as the delimiter, and the `email` field excluded. Once the download is complete, the console will log `Download complete!`.

### Customizing Headers

By default, the exported CSV file will use the same keys as the JSON data. However, you can customize the headers by passing in an array of header names as the fourth argument to the `downloadCSVFromJSON` function. For example:

```javascript
const headers = ['Name', 'Age'];

downloadCSVFromJSON(jsonData, 'data.csv', ',', headers);
```

This example will export the `jsonData` array to a CSV file called `data.csv`, with `,` as the delimiter, and the headers `Name` and `Age`.

### Customizing Delimiters

By default, the delimiter used in the exported CSV file is a tab character (`\t`). You can customize the delimiter by passing in a string as the third argument to the `downloadCSVFromJSON` function. For example:

```javascript
downloadCSVFromJSON(jsonData, 'data.csv', ';');
```

This example will export the `jsonData` array to a CSV file called `data.csv`, with `;` as the delimiter.

### Excluding Keys

You can exclude specific keys from the exported data by passing in an array of key names as the fourth argument to the `downloadCSVFromJSON` function. For example:

```javascript
downloadCSVFromJSON(jsonData, 'data.csv', ',', ['email']);
```

This example will export the `jsonData` array to a CSV file called `data.csv`, with `,` as the delimiter, and the `email` field excluded.

### Callback Function

You can add a callback function to run after the download is complete by passing it as the fifth argument to the `downloadCSVFromJSON` function. For example:

```javascript
downloadCSVFromJSON(jsonData, 'data.csv', ',', [], () => {
  console.log('Download complete!');
});
```

This example will export the `jsonData` array to a CSV file called `data.csv`, with `,` as the delimiter, and the callback function will log `Download complete!` once the download is complete.

## License

This package is licensed under the ISC license.
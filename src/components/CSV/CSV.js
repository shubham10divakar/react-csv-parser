// src/CSV.js
import fs from 'fs';

export const CSV = (csvInput, callback) => {
    let csvString = csvInput;

    // If csvInput is a file path, read the file asynchronously
    if (fs.existsSync(csvInput)) {
        fs.readFile(csvInput, 'utf-8', (err, data) => {
            if (err) {
                callback(err, null);
                return;
            }
            CSVFromString(data, callback);
        });
    } else {
        // Parse the CSV string directly
        CSVFromString(csvString, callback);
    }
};

const CSVFromString = (csvString, callback) => {
    try {
        const lines = csvString.trim().split('\n');
        const headers = lines[0].split(',').map(header => header.trim());
        const data = [];

        for (let i = 1; i < lines.length; i++) {
            const values = lines[i].split(',').map(value => value.trim());
            if (values.length === headers.length) {
                const obj = headers.reduce((acc, header, index) => {
                    acc[header] = values[index];
                    return acc;
                }, {});
                data.push(obj);
            }
        }

        callback(null, data);
    } catch (err) {
        callback(err, null);
    }
};

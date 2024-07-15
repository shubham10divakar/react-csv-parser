import React, { useState } from 'react';

export const CSV = ({ onFileParsed }) => {
  const [csvData, setCsvData] = useState([]);
  const [parseError, setParseError] = useState(null);

  const handleFileUpload = (event) => {
    const file = event.target.files[0];
    if (!file) return;

    const reader = new FileReader();

    reader.onload = (e) => {
      const contents = e.target.result;
      parseCSV(contents);
    };

    reader.readAsText(file);
  };

  const parseCSV = (csvText) => {
    try {
      const lines = csvText.split('\n');
      const headers = lines[0].split(',');

      const data = lines.slice(1).map(line => {
        const values = line.split(',');
        const entry = {};
        headers.forEach((header, index) => {
            console.log(values.length)
            if(values.length>1){
                entry[header.trim()] = values[index].trim();
            }
        });
        return entry;
      });

      setCsvData(data);
      //console.log(data)
      if (typeof onFileParsed === 'function') {
        onFileParsed(data);
      }
    } catch (error) {
      console.error('Error parsing CSV:', error);
      setParseError(error);
    }
  };

  return (
    <div>
      <input type="file" accept=".csv" onChange={handleFileUpload} />
      <div>
        <h3>Parsed CSV Data:</h3>
        {parseError && <p>Error parsing CSV file: {parseError.message}</p>}
        <pre>{JSON.stringify(csvData, null, 2)}</pre>
        {console.log(csvData.length)}
      </div>
    </div>
  );
};

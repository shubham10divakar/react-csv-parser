
[![npm version](https://badge.fury.io/js/react-csv-parser.svg)](https://badge.fury.io/js/react-csv-parser)

React CSV Parser is a simple React component library for reading csv files from your local and makes the data of the CSV file available in JS code for further modifications and use cases like using that data for feeding to charts and for generating statistics.
## NPM 
NPM Link - https://www.npmjs.com/package/react-csv-parser?activeTab=readme

## Installation

Install `react-csv-parser` using npm or yarn:

```bash
npm install react-csv-parser

or

bash

yarn add react-csv-parser

Usage

Import CSV Parser component from react-csv-parser and use it in your React application:

jsx

// App.js
import React, { useState } from 'react';
import { storiesOf } from '@storybook/react';
import './styles.css';
import { CSVParser } from '../components/CSV';


const stories = storiesOf('App Test', module);

stories.add('App', () => {

  const handleFileParsed = (data) => {
    console.log('Parsed CSV Data:', data);
    // Handle parsed data here, e.g., store in state or process further
  };

  return (
    <div>
      <CSVParser onFileParsed={handleFileParsed} />
    </div>
  );
});

```

## Images as per above code output and some work samples

![This is an alt text.](/image/1.png "This is a sample image.")
![This is an alt text.](/image/2.png "This is a sample image.")


# Props

onFileParsed: A callback function that will be called with the parsed CSV data.


## About Me
I am Subham Divakar and I am the developer of multiple python and react libraries.
Check out my worksamples on my portfolio site.

## Connect with Me

    LinkedIn: https://www.linkedin.com/in/subham-divakar-a7420a12a/
    GitHub: https://github.com/shubham10divakar
    Portfolio: https://shubham10divakar.github.io/showcasehub/

## Feedback

Your feedback is important! Please share your thoughts and suggestions.
License

This project is licensed under the MIT License.


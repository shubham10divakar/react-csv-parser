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

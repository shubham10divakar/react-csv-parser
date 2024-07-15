import React, { useState } from 'react';
import { storiesOf } from '@storybook/react';
import './styles.css';
//import { Requirements } from '../components/Requirements';
import { Card } from '../components/Card/Card';
import { CSV } from '../components/CSV';

const stories = storiesOf('App Test', module);

stories.add('App', () => {

  const handleFileParsed = (data) => {
    console.log('Parsed CSV Data:', data);
    // Handle parsed data here, e.g., store in state or process further
  };

  return (
    <div>
      <h1>CSV Parser Example</h1>
      <CSV onFileParsed={handleFileParsed} />
    </div>
  );
});

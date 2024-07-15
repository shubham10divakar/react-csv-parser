import React, { useState } from 'react';
import { storiesOf } from '@storybook/react';
import './styles.css';
//import { Requirements } from '../components/Requirements';
import { Card } from '../components/Card/Card';
import { CSV } from '../components/CSV';

const stories = storiesOf('App Test', module);

stories.add('App', () => {

  const csvFilePath = "C:\D\my docs\my docs\projects\react data visualization library\react csv data parser\Airplane_Crashes_and_Fatalities_Since_1908.csv";
  parseCSV(csvFilePath, (err, result) => {
      if (err) {
          console.error('Error parsing CSV:', err);
      } else {
          console.log('Parsed CSV data:', result);
      }
  });

  return (
    <div>
      <h1>Signup</h1>

      <Card 
            key='pub.id'
            id='1'
            title='Demo'
            detail1='pub.year'
            hdetail1='hello'
            detail2='pub.citations'
            detail3='pub.domain'
            imageUrl='pub.imageUrl'
            textAlignment='left'
          />


    </div>
  );
});

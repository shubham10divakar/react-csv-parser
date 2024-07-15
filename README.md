
[![npm version](https://badge.fury.io/js/react-sd-card.svg)](https://badge.fury.io/js/react-sd-card)

React SD Card is a simple and customizable React component library for displaying cards in web applications.Check live sample at my portfolio site (https://shubham10divakar.github.io/showcasehub/)

## NPM 
NPM Link - https://www.npmjs.com/package/react-sd-card?activeTab=readme

## Installation

Install `react-sd-card` using npm or yarn:

```bash
npm install react-sd-card

or

bash

yarn add react-sd-card

Usage

Import Card component from react-sd-card and use it in your React application:

jsx

// App.js
import logo from './logo.svg';
import './App.css';
import { Card } from 'react-sd-card';

function App() {
  const publications = [
    { id: 1, title: 'Publication 1', hdetail1: 'Year',detail1: 2021, hdetail2:'citations',detail2: 15, imageUrl: logo},
    { id: 1, title: 'Publication 2', hdetail1: 'Year',detail1: 2022, hdetail2:'citations',detail2: 45, imageUrl: logo},
    // Add more publications as needed
  ];
  return (
    <div className="App">
      <h1>My React App</h1>
      <div className="App">
      {publications.map((pub) => (
          <Card 
            key={pub.id} 
            id={pub.id} 
            title={pub.title} 
            detail1={pub.detail1}
            hdetail1= {pub.hdetail1}
            detail2={pub.detail2}
            hdetail2= {pub.hdetail2}
            imageUrl={pub.imageUrl} 
          />
        ))}
    </div>
    </div>
  );
}

export default App;
```

## Images as per above code output and some work samples

![This is an alt text.](/image/1.png "This is a sample image.")
![This is an alt text.](/image/2.png "This is a sample image.")


# Props


key: React key prop used for list items to help React identify which items have changed, are added, or are removed.

id: Unique identifier for the publication card, typically used for React's reconciliation algorithm.

title: Title of the publication being displayed.

detail1: Value for the first detail information (e.g., publication year).

hdetail1: Header or label for the first detail (e.g., "Year").

detail2: Value for the second detail information (e.g., number of citations).

hdetail2: Header or label for the second detail (e.g., "Citations").

detail3: Value for the third detail information (if applicable).

hdetail3: Header or label for the third detail.

imageUrl: URL for an image associated with the publication (optional).

textAlignment: Alignment of text content within the card ('left', 'center', 'right', etc.).

customStyles: Optional prop for passing custom styles to the card component to customize its appearance.


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


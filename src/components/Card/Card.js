// src/components/PublicationCard.js
import React from 'react';
import { Link } from 'react-router-dom';
import './Card.css';

export const Card = ({ id="NA", title="NA", imageUrl="NA", detail1="NA", detail2="NA", detail3="NA", detail4="NA", hdetail1="NA", hdetail2="NA", hdetail3="NA", hdetail4="NA",textAlignment="center", console_log=true, customStyles='NA', headerFont='NA' }) => {
  // Determine alignment class based on prop
  const alignmentClass = textAlignment === 'center' ? 'text-center' : textAlignment === 'right' ? 'text-right' : 'text-left';

  const headerStyle = {
    fontFamily: headerFont || 'inherit', // Default to inherit if not provided
  };

  if (console_log) {
    console.log(id, title, detail1, detail2, detail3, detail4, imageUrl, headerFont)
  }
  
  if(customStyles=='NA'){
    if(console_log){
      console.log('Using default style for cards')
    }
    
    if(headerFont=='NA'){
      return (
          <div className={`card ${alignmentClass}`}>
          {/* <Link to={`/publications/${id}`} className="card-link"> */}
          {imageUrl !== 'NA' && <img src={imageUrl} alt={''} className="card-image" />}
          {title !== 'NA' && <h2>{title}</h2>}
            {detail1 !== 'NA' && <p>{hdetail1}: {detail1}</p>}
            {detail2 !== 'NA' && <p>{hdetail2}: {detail2}</p>}
            {detail3 !== 'NA' && <p>{hdetail3}: {detail3}</p>}
            {detail4 !== 'NA' && <p>{hdetail4}: {detail4}</p>}
          {/* </Link> */}
        </div>
        
      );
    } else {
      return (
        <div className={`card ${alignmentClass}`}>
          {/* <Link to={`/publications/${id}`} className="card-link"> */}
          {imageUrl !== 'NA' && <img src={imageUrl} alt={''} className="card-image" />}
          {title !== 'NA' && <h2 style={headerStyle}>{title}</h2>}
            {detail1 !== 'NA' && <p>{hdetail1}: {detail1}</p>}
            {detail2 !== 'NA' && <p>{hdetail2}: {detail2}</p>}
            {detail3 !== 'NA' && <p>{hdetail3}: {detail3}</p>}
            {detail4 !== 'NA' && <p>{hdetail4}: {detail4}</p>}
          {/* </Link> */}
        </div>
      );
    } 
  }

  if(console_log){
    console.log('Using custom style for cards ')
    console.log(customStyles)
  }

  console.log('Reached return statement')

  return (
    <div className={`card ${alignmentClass}`} style={customStyles}>
      {/* <Link to={`/publications/${id}`} className="card-link"> */}
      {imageUrl !== 'NA' && <img src={imageUrl} alt={''} className="card-image" />}
      {title !== 'NA' && <h2>{title}</h2>}
        {detail1 !== 'NA' && <p>{hdetail1}: {detail1}</p>}
        {detail2 !== 'NA' && <p>{hdetail2}: {detail2}</p>}
        {detail3 !== 'NA' && <p>{hdetail3}: {detail3}</p>}
        {detail4 !== 'NA' && <p>{hdetail4}: {detail4}</p>}
      {/* </Link> */}
    </div>
  );
};

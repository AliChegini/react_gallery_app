import React from 'react';

const Photo = ({ photo }) => {
  const url = `https://farm${photo.farm}.staticflickr.com/${photo.server}/${photo.id}_${photo.secret}.jpg`;

  return (
    <li className="Photo">
      <img src={url} alt={photo.title} />
    </li>
  );
};

export default Photo;

import React, { useState, useEffect, useCallback } from 'react';
import Photo from './Photo';
import apiKey from '../config';
import axios from 'axios';

const PhotoContainer = ({ category }) => {
  const [photos, setPhotos] = useState([]);
  const [loading, setLoading] = useState(true);

  const fetchPhotos = useCallback(async (searchTerm) => {
    const response = await axios.get(
      `https://api.flickr.com/services/rest/?method=flickr.photos.search&api_key=${apiKey}&tags=${searchTerm}&per_page=24&format=json&nojsoncallback=1`
    );
    return response.data.photos.photo;
  }, []);

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      const data = await fetchPhotos(category);
      setPhotos(data);
      setLoading(false);
    };

    fetchData();
  }, [category, fetchPhotos]);

  return (
    <div className="photo-container">
      <h2>{category}</h2>
      {loading ? (
        <p>Loading...</p>
      ) : (
        <ul>
          {photos.map((photo) => (
            <Photo key={photo.id} photo={photo} />
          ))}
        </ul>
      )}
    </div>
  );
};

export default PhotoContainer;


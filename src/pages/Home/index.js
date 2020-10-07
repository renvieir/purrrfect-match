import React, { useState, useEffect } from 'react';

import CatService from '../../services/cat';
import { Container } from './styles';
import CatFeed from '../../components/CatFeed'
import CatList from '../../components/CatList'

export default function Home () {
  const [catImages, setCatImages] = useState([])

  useEffect(() => {
    const  fetchData = async () => {
      try {
        const images = await CatService.getImages();
        setCatImages(images)
      } catch (err) {
        setCatImages([])
      }
    }
    fetchData();
  }, [])

  return (
    <Container>
      <CatFeed />
      <CatList images={catImages} />
    </Container>
  );
}

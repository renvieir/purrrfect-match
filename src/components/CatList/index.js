import React from 'react';

import {
  CatList,
  CatListContainer,
  CatItem,
  CatImg,
  CatName,
  SectionHeader,
} from '../shared';

export default function CatListComponent({ images }) {
  return (
    <CatListContainer>
      <SectionHeader>Cat List</SectionHeader>
      <CatList>
        {images.map(cat => (
          <CatItem key={cat.id}>
            <CatImg src={cat.url} alt="cat" />
            <CatName>Kitty Cat</CatName>
            <p>
              <strong>Age</strong>3 years
            </p>
            <p>
              <strong>Favorite Activity</strong>Eating
            </p>
            <p>
              <strong>Pet Peave</strong>Hairballs
            </p>
          </CatItem>
        ))}
      </CatList>
    </CatListContainer>
  );
}

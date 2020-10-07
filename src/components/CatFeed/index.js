import React from 'react';
import { MdKeyboardArrowRight } from 'react-icons/md';

import { CatFeed, SectionHeader, FeedList, FeedItem } from '../shared';

export default function CatFeedComponent() {
  return (
    <CatFeed>
      <SectionHeader>Cat Feed</SectionHeader>
      <FeedList>
        <FeedItem>
          How to find the purrrfect pet
          <MdKeyboardArrowRight size={20} color="#5452F6" />
        </FeedItem>
        <FeedItem>
          What to do with your new cat
          <MdKeyboardArrowRight size={20} color="#5452F6" />
        </FeedItem>
        <FeedItem>
          How to potty-train your cat
          <MdKeyboardArrowRight size={20} color="#5452F6" />
        </FeedItem>
      </FeedList>
    </CatFeed>
  );
}

import { FC, Fragment, useState } from 'react';
import { ItemList } from './ItemList';

export interface IInitialList {
  seen: boolean;
  id: number;
  title: string;
}

const initialList: IInitialList[] = [
  { id: 0, title: 'Big Bellies', seen: false },
  { id: 1, title: 'Lunar Landscape', seen: false },
  { id: 2, title: 'Terracotta Army', seen: true },
];

export const BucketList: FC = () => {
  const [myList, setMyList] = useState<IInitialList[]>(initialList);
  const [yourList, setYourList] = useState<IInitialList[]>(initialList);

  const handleToggleMyList = (artworkId: number, nextSeen: boolean) => {
    setMyList(
      myList.map((artwork) => {
        if (artwork.id === artworkId) {
          return { ...artwork, seen: nextSeen };
        } else {
          return artwork;
        }
      })
    );
  };

  const handleToggleYourList = (artworkId: number, nextSeen: boolean) => {
    setYourList(
      yourList.map((artwork) => {
        if (artwork.id === artworkId) {
          return { ...artwork, seen: nextSeen };
        } else {
          return artwork;
        }
      })
    );
  };

  return (
    <Fragment>
      <h1>Art Bucket List</h1>
      <h2>My list of art to see:</h2>
      <ItemList artworks={myList} onToggle={handleToggleMyList} />
      <h2>Your list of art to see:</h2>
      <ItemList artworks={yourList} onToggle={handleToggleYourList} />
    </Fragment>
  );
};

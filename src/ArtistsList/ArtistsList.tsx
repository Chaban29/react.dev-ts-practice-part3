import { ChangeEvent, FC, Fragment, useState } from 'react';

type TypeName = string;
type TypeNextId = number;

interface IInitialArtists {
  id: number;
  name: string;
}

const initialArtists: IInitialArtists[] = [
  { id: 0, name: 'Marta Colvin Andrade' },
  { id: 1, name: 'Lamidi Olonade Fakeye' },
  { id: 2, name: 'Louise Nevelson' },
];

let nextId: TypeNextId = 3;

export const ArtistsList: FC = () => {
  const [name, setName] = useState<TypeName>('');
  const [artists, setArtists] = useState<IInitialArtists[]>(initialArtists);

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    const value = event.target.value;
    setName(value);
  };

  const handleClick = () => {
    const insertAt: number = 1;
    const nextArtists = [
      ...artists.slice(0, insertAt),
      { id: nextId++, name: name },
      ...artists.slice(insertAt),
    ];
    setArtists(nextArtists);
    setName('');
  };

  const handleReverseList = () => {
    const list = [...artists];
    const nextList = list.reverse();
    setArtists(nextList);
  };

  const handleSortedList = () => {
    const list = [...artists];
    list.sort((a, b) => a.name.localeCompare(b.name));
    setArtists(list);
  };

  return (
    <Fragment>
      <h1>Inspiring sculptors:</h1>
      <input type='text' value={name} onChange={handleChange} />
      <button type='button' onClick={handleClick}>
        Insert
      </button>
      {artists.map((artist) => (
        <li key={artist.id}>{artist.name}</li>
      ))}
      <button onClick={handleReverseList}>Reverse</button>
      <button onClick={handleSortedList}>Sorted by alphabet</button>
    </Fragment>
  );
};

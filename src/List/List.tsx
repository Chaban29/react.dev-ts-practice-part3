import { FC, useState } from 'react';

interface IInitialArtists {
  id: number;
  name: string;
}

let initialArtists: IInitialArtists[] = [
  { id: 0, name: 'Marta Colvin Andrade' },
  { id: 1, name: 'Lamidi Olonade Fakeye' },
  { id: 2, name: 'Louise Nevelson' },
];

export const List: FC = () => {
  const [artists, setArtists] = useState<IInitialArtists[]>(initialArtists);

  const handleDeleteArtist = (artist: IInitialArtists): void => {
    setArtists(artists.filter((a) => a.id !== artist.id));
  };

  return (
    <>
      <h1>Inspiring sculptors:</h1>
      <ul>
        {artists.map((artist) => (
          <li key={artist.id}>
            {artist.name}
            <button type='button' onClick={() => handleDeleteArtist(artist)}>
              Delete
            </button>
          </li>
        ))}
      </ul>
    </>
  );
};

import { ChangeEvent, FC, Fragment } from 'react';
import { useState } from 'react';

let nextId = 0;

type TypeName = string;

interface IArtists {
  id: number;
  name: string;
}

export const AddDeleteItem: FC = () => {
  const [name, setName] = useState<TypeName>('');
  const [artists, setArtists] = useState<IArtists[]>([]);

  const handleChange = (event: ChangeEvent<HTMLInputElement>): void => {
    return setName(event.target.value);
  };

  const handleClick = (): void => {
    setArtists([...artists, { id: nextId++, name: name }]);
    setName('');
  };

  const handleDeleteItem = (item: IArtists): void => {
    setArtists(artists.filter((a) => a.id !== item.id));
  };

  return (
    <div>
      <h1>Inspiring sculptors:</h1>
      <input type='text' value={name} onChange={handleChange} />
      <button type='button' onClick={handleClick}>
        Add
      </button>
      {artists.map((artist) => (
        <Fragment key={artist.id}>
          <li>{artist.name}</li>
          <button type='button' onClick={() => handleDeleteItem(artist)}>
            Delete
          </button>
        </Fragment>
      ))}
    </div>
  );
};

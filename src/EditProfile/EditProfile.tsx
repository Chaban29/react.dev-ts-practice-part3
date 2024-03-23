import { ChangeEvent, FC, FormEvent, useState } from 'react';

interface IUser {
  name: string;
  lastName: string;
}

export const EditProfile: FC = () => {
  const [user, setUser] = useState<IUser>({
    name: 'Roman',
    lastName: 'Chaban',
  });
  const [isEditing, setIsEditing] = useState<boolean>(false);

  const handleChangeUserValues = (event: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    setUser({
      ...user,
      [name]: value,
    });
  };

  const handleSubmitForm = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setIsEditing(!isEditing);
  };

  return (
    <form onSubmit={handleSubmitForm}>
      <label>
        First name:
        {isEditing ? (
          <input
            name='name'
            value={user.name}
            onChange={handleChangeUserValues}
          />
        ) : (
          <b>{user.name}</b>
        )}
      </label>
      <label>
        Last name:
        {isEditing ? (
          <input
            name='lastName'
            value={user.lastName}
            onChange={handleChangeUserValues}
          />
        ) : (
          <b>{user.lastName}</b>
        )}
      </label>
      <button type='submit'>{isEditing ? 'Save' : 'Edit'} Profile</button>
      <p>
        <i>
          Hello, {user.name} {user.lastName}!
        </i>
      </p>
    </form>
  );
};

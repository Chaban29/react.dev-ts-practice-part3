import { FC, useState } from 'react';

export const Picture: FC = () => {
  const [isActive, setIsActive] = useState<boolean>(false);

  let backgroundClassName = 'background';
  let pictureClassName = 'picture';

  if (isActive) {
    pictureClassName += ' picture--active';
  } else {
    backgroundClassName += ' background--active';
  }

  return (
    <div className={backgroundClassName} onClick={() => setIsActive(false)}>
      <img
        onClick={(e) => {
          e.stopPropagation();
          setIsActive(true);
        }}
        className={pictureClassName}
        alt='Rainbow houses in Kampung Pelangi, Indonesia'
        src='https://i.imgur.com/5qwVYb1.jpeg'
      />
    </div>
  );
};

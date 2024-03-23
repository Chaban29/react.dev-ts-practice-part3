import { FC, Fragment, useState } from 'react';

interface IInitialShapes {
  id: number;
  type: 'circle' | 'square';
  x: number;
  y: number;
}

let initialShapes: IInitialShapes[] = [
  { id: 0, type: 'circle', x: 50, y: 100 },
  { id: 1, type: 'square', x: 150, y: 100 },
  { id: 2, type: 'circle', x: 250, y: 100 },
];

export const ShapeEditor: FC = () => {
  const [shapes, setShapes] = useState<IInitialShapes[]>(initialShapes);

  const handleClick = () => {
    const nextShapes = shapes.map((shape) => {
      if (shape.type === 'circle') {
        return shape;
      } else {
        return {
          ...shape,
          y: shape.y + 50,
          x: shape.x + 20,
        };
      }
    });
    setShapes(nextShapes);
  };

  return (
    <Fragment>
      <button type='button' onClick={handleClick}>
        Move circles down!
      </button>
      {shapes.map((shape) => (
        <div
          key={shape.id}
          style={{
            background: 'purple',
            position: 'absolute',
            left: shape.x,
            top: shape.y,
            borderRadius: shape.type === 'circle' ? '50%' : '',
            width: 20,
            height: 20,
          }}
        />
      ))}
    </Fragment>
  );
};

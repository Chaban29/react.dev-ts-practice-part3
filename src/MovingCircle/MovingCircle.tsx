import { FC, PointerEventHandler, useState } from 'react';

interface IPosition {
  x: number;
  y: number;
}

export const MovingCircle: FC = () => {
  const [position, setPosition] = useState<IPosition>({ x: 0, y: 0 });

  const handlePointerCircle: PointerEventHandler<HTMLDivElement> = (
    event
  ): void => {
    setPosition({
      ...position,
      x: event.clientX,
      y: event.clientY,
    });
  };
  return (
    <div
      onPointerMove={handlePointerCircle}
      style={{
        position: 'relative',
        width: '100vw',
        height: '100vh',
      }}
    >
      <div
        style={{
          position: 'absolute',
          background: 'blue',
          borderRadius: '50%',
          transform: `translate(${position.x}px,${position.y}px)`,
          left: -10,
          top: -10,
          width: 20,
          height: 20,
        }}
      />
    </div>
  );
};

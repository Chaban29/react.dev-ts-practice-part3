import { FC, useState } from 'react';

type TypeInitialsCounters = number[];

const initialCounters: TypeInitialsCounters = [0, 0, 0];

export const CounterList: FC = () => {
  const [counters, setCounters] =
    useState<TypeInitialsCounters>(initialCounters);

  const handleIncreaseElement = (index: number): void => {
    const nextCounters = counters.map((c, i) => {
      if (i === index) {
        return c + 1;
      } else {
        return c;
      }
    });
    setCounters(nextCounters);
  };
  return (
    <div>
      <ul>
        {counters.map((counter, index) => (
          <li style={{ listStyleType: 'circle', paddingLeft: 20 }} key={index}>
            {counter}
            <button
              style={{ marginLeft: 20 }}
              type='button'
              onClick={() => handleIncreaseElement(index)}
            >
              +1
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

import { FC, Fragment, useState, FormEvent, ChangeEvent } from 'react';

type TypeName = string;
type TypeStatuses = 'typing' | 'submitting' | 'success' | 'error';

export const Form: FC = () => {
  const [name, setName] = useState<TypeName>('');
  const [isError, setIsError] = useState<Error | null>(null);
  const [status, setStatus] = useState<TypeStatuses>('typing');

  if (status === 'success') return <h1>That's right!</h1>;

  const handleSubmitForm = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setStatus('submitting');
    try {
      await submitForm(name);
      setStatus('success');
    } catch (err) {
      setStatus('typing');
      setIsError(
        err instanceof Error ? err : new Error('An unknown error occurred')
      );
    }
  };

  const handleChange = (event: ChangeEvent<HTMLTextAreaElement>) => {
    setName(event.target.value);
  };

  return (
    <Fragment>
      <h2>City quiz</h2>
      <p>
        In which city is there a billboard that turns air into drinkable water?
      </p>
      <form onSubmit={handleSubmitForm}>
        <textarea
          onChange={handleChange}
          value={name}
          disabled={status === 'submitting'}
        />
        <br />
        <button disabled={name.length === 0 || status === 'submitting'}>
          Submit
        </button>
        {isError !== null && (
          <p className='Error' style={{ color: 'red' }}>
            {isError.message}
          </p>
        )}
      </form>
    </Fragment>
  );
};

const submitForm = (answer: TypeName) => {
  return new Promise<void>((resolve, reject) => {
    setTimeout(() => {
      let shouldError = answer.toLowerCase() === 'lima';
      if (shouldError) {
        resolve();
      } else {
        reject(new Error('Good guess but a wrong answer. Try again!'));
      }
    }, 1500);
  });
};

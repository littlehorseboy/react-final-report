import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles({
  inputContainer: {
    backgroundColor: '#EEEEEE',
    padding: '1rem',
  },
  resultContainer: {
    backgroundColor: '#DDDDDD',
    padding: '1rem',
  },
});

export default function Products(): JSX.Element {
  const classes = useStyles();

  const [name, setName] = useState('');
  const [price, setPrice] = useState('');

  return (
    <div>
      <div className={classes.inputContainer}>
        <div>
          商品名稱：
          <input value={name} onChange={(event): void => setName(event.target.value)} />
        </div>
        <div>
          價錢：
          <input value={price} onChange={(event): void => setPrice(event.target.value)} />
        </div>
      </div>

      <div className={classes.resultContainer}>
        <div>
          商品名稱：
          <span>{name}</span>
        </div>
        <div>
          價錢：
          <span>{price}</span>
        </div>
      </div>
    </div>
  );
}

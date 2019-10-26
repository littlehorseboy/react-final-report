import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import PopoverContainer from '../PopoverContainer/PopoverContainer';

const useStyles = makeStyles({
  root: {
    border: '3px solid red',
  },
});

export default function PopoverTest(): JSX.Element {
  const classes = useStyles();

  const [open, setOpen] = useState(false);

  const handleClose = (): void => {
    setOpen(false);
  };

  return (
    <>
      <div
        className={classes.root}
        onMouseOver={(): void => setOpen(true)}
        onFocus={(): void => {}}
      >
        PopoverTest
      </div>

      <PopoverContainer
        open={open}
        title="123"
        content="456"
        onClose={handleClose}
      />
    </>
  );
}

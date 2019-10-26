import React from 'react';
import classNames from 'classnames';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  root: {
    position: 'absolute',
    minWidth: 150,
    maxWidth: 500,
    top: 60,
    '&.hidden': {
      display: 'none',
    },
  },
  arrowBox: {
    position: 'relative',
    background: '#88b7d5',
    border: '4px solid #c2e1f5',
    '&::after, &::before': {
      bottom: '100%',
      left: '50%',
      border: 'solid transparent',
      content: '" "',
      height: 0,
      width: 0,
      position: 'absolute',
      pointerEvents: 'none',
    },
    '&::after': {
      borderColor: 'rgba(136, 183, 213, 0)',
      borderBottomColor: '#88b7d5',
      borderWidth: 30,
      marginLeft: -30,
    },
    '&::before': {
      borderColor: 'rgba(194, 225, 245, 0)',
      borderBottomColor: '#c2e1f5',
      borderWidth: 36,
      marginLeft: -36,
    },
    '& > div:first-child': {
      fontSize: '1.5rem',
      fontWeight: 'bold',
      padding: theme.spacing(1, 3),
      textAlign: 'center',
    },
    '& > div:nth-child(2)': {
      padding: theme.spacing(1, 3),
      textAlign: 'center',
    },
    '& > div:nth-child(3)': {
      padding: theme.spacing(1),
      textAlign: 'right',
    },
    '& > div:nth-child(3) > button': {
      border: '1px solid #000',
      outline: 'none',
      backgroundColor: 'transparent',
    },
  },
}));

interface PropsI {
  open: boolean;
  title: string;
  content: string;
  onClose: () => void;
}

export default function PopoverContainer(props: PropsI): JSX.Element {
  const classes = useStyles();

  const {
    open, title, content, onClose,
  } = props;

  const handleClick = (): void => {
    onClose();
  };

  return (
    <div className={classNames(classes.root, { hidden: !open })}>
      <div className={classes.arrowBox}>
        <div>{title}</div>
        <div>{content}</div>
        <div>
          <button type="button" onClick={handleClick}>OKay</button>
        </div>
      </div>
    </div>
  );
}

import React, { useEffect, useRef } from 'react';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles({
  root: {
    position: 'absolute',
    maxWidth: 500,
    top: 60,
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
      padding: '2rem',
      textAlign: 'center',
    },
    '& > div:nth-child(2)': {
      padding: '2rem',
      textAlign: 'center',
    },
    '& > div:nth-child(3)': {
      padding: '2rem',
      textAlign: 'right',
    },
    '& > div:nth-child(3) > button': {
      border: '1px solid #000',
      outline: 'none',
      backgroundColor: 'transparent',
    },
  },
});

export default function PopoverContainer(): JSX.Element {
  const classes = useStyles();

  const elRef = useRef<null | HTMLDivElement>(null);

  useEffect(() => {
    interface Options {
      Title: string;
      Content: string;
      onApprove: () => void;
    }

    function showToolTip(el: HTMLDivElement, options: Options): void {
      el.addEventListener('mouseover', () => {
        const arrowContainer = document.createElement('div');
        arrowContainer.className = classes.root;
        const arrowBox = document.createElement('div');
        arrowBox.className = classes.arrowBox;

        const firstDiv = document.createElement('div');
        firstDiv.textContent = options.Title;

        const secondDiv = document.createElement('div');
        secondDiv.textContent = options.Content;

        const thirdDiv = document.createElement('div');
        const OKBtn = document.createElement('button');
        OKBtn.textContent = 'OKay';
        OKBtn.addEventListener('click', () => {
          options.onApprove();
          arrowContainer.remove();
        });

        thirdDiv.appendChild(OKBtn);

        arrowBox.appendChild(firstDiv);
        arrowBox.appendChild(secondDiv);
        arrowBox.appendChild(thirdDiv);

        arrowContainer.appendChild(arrowBox);

        document.body.appendChild(arrowContainer);
      });
    }

    if (elRef.current) {
      showToolTip(elRef.current, {
        Title: 'This is the title',
        Content: 'This is the content',
        onApprove() {
          alert('before close');
        },
      });
    }
  }, []);

  return (
    <div ref={elRef}>Div #abc</div>
  );
}

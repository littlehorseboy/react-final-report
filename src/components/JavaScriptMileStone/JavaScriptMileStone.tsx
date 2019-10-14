import React, { useState, useCallback } from 'react';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles({
  pointsContainer: {
    display: 'flex',
  },
});

export default function JavaScriptMileStone(): JSX.Element {
  const classes = useStyles();

  const javascriptMileStones = [
    { year: 1996, content: 'JavaScript' },
    { year: 1997, content: 'EcmaScript' },
    { year: 2006, content: 'jQuery' },
    { year: 2008, content: 'Chrome' },
    { year: 2009, content: 'Node.js' },
    { year: 2010, content: 'Angular' },
    { year: 2013, content: 'React' },
    { year: 2014, content: 'Vue.js' },
    { year: 2015, content: 'ES6' },
  ];

  const pointCount = javascriptMileStones.length;

  const [width, setWidth] = useState(0);

  const measuredRef = useCallback((node: HTMLDivElement) => {
    if (node !== null) {
      setWidth(node.getBoundingClientRect().width);
    }
  }, []);

  return (
    <div>
      <div ref={measuredRef} style={{ borderBottom: '1px solid' }} />
      {/* <div>{width}</div> */}
      <div className={classes.pointsContainer}>
        {width && javascriptMileStones.map((mileStone) => (
          <span key={mileStone.year} style={{ width: width / pointCount }}>
            {mileStone.content}
          </span>
        ))}
      </div>
    </div>
  );
}

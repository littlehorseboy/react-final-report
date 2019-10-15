import React, { useState, useCallback } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import ArrowUpwardIcon from '@material-ui/icons/ArrowUpward';

const javascriptMileStones = [
  { year: 1996, mileStones: ['JavaScript'] },
  { year: 1997, mileStones: ['EcmaScript'] },
  { year: 2004, mileStones: ['Firefox'] },
  { year: 2006, mileStones: ['jQuery'] },
  { year: 2008, mileStones: ['V8', 'Chrome'] },
  { year: 2009, mileStones: ['ES5', 'Node.js'] },
  { year: 2010, mileStones: ['npm', 'Angular'] },
  { year: 2013, mileStones: ['React'] },
  { year: 2014, mileStones: ['Vue.js'] },
  { year: 2015, mileStones: ['ES6', 'Edge'] },
];

const useStyles = makeStyles({
  root: {
    marginTop: '2rem',
  },
  pointsContainer: {
    borderTop: '1px solid #115293',
    display: 'flex',
    minWidth: 135 * javascriptMileStones.length,
  },
  pointsWrapper: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    position: 'relative',
    minWidth: 135,
  },
  circleSvg: {
    fill: '#115293',
    position: 'absolute',
  },
  year: {
    fontSize: '1.7rem',
  },
  content: {
    color: '#115293',
    fontSize: '1.4rem',
  },
  arrowIcon: {
    height: '2.5rem',
    transform: 'scale(0.5, 1)',
  },
});

export default function JavaScriptMileStone(): JSX.Element {
  const classes = useStyles();

  const [width, setWidth] = useState(0);

  const measuredRef = useCallback((node: HTMLDivElement) => {
    if (node !== null) {
      setWidth(node.getBoundingClientRect().width);
    }
  }, []);

  return (
    <div className={classes.root}>
      <div ref={measuredRef} className={classes.pointsContainer}>
        {width && javascriptMileStones.map((mileStone) => (
          <div
            key={mileStone.year}
            className={classes.pointsWrapper}
            style={{ width: width / javascriptMileStones.length }}
          >
            {((): JSX.Element => {
              const radius = 6;
              return (
                <svg
                  className={classes.circleSvg}
                  width={radius * 2}
                  height={radius * 2}
                  style={{ top: -radius }}
                >
                  <circle cx={radius} cy={radius} r={radius} />
                </svg>
              );
            })()}

            <br />

            <div className={classes.year}>
              {mileStone.year}
            </div>

            {mileStone.mileStones.map((content): JSX.Element => (
              <>
                <ArrowUpwardIcon className={classes.arrowIcon} />
                <Typography className={classes.content}>
                  {content}
                </Typography>
              </>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
}

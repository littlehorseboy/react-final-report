import React, { useState, useCallback } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import ArrowUpwardIcon from '@material-ui/icons/ArrowUpward';
import { JavascriptMileStone } from './JavaScriptMileStone.stories';

const useStyles = makeStyles({
  root: {
    marginTop: '5rem',
  },
  pointsContainer: {
    borderTop: '1px solid #115293',
    display: 'flex',
    minWidth: (props: PropsI): number => 145 * props.javascriptMileStones.length,
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

interface PropsI {
  javascriptMileStones: JavascriptMileStone[];
}

export default function JavaScriptMileStone(props: PropsI): JSX.Element {
  const classes = useStyles(props);

  const { javascriptMileStones } = props;

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

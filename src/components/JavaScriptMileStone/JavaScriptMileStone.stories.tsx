import React from 'react';
/* eslint-disable import/no-extraneous-dependencies */
import { storiesOf } from '@storybook/react';
import { withKnobs, object } from '@storybook/addon-knobs';
/* eslint-enable */
import JavaScriptMileStone from './JavaScriptMileStone';

export interface JavascriptMileStone {
  year: number;
  mileStones: string[];
}

const javascriptMileStones: JavascriptMileStone[] = [
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

storiesOf('JavaScriptMileStone', module)
  .addDecorator(withKnobs)
  .add('JavaScriptMileStone', () => {
    const withKnobsMileStones = javascriptMileStones
      .map((mileStone) => object(mileStone.year.toString(), mileStone));

    return (
      <JavaScriptMileStone javascriptMileStones={withKnobsMileStones} />
    );
  });

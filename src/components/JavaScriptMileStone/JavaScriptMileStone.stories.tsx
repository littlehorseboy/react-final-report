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

const allMileStones: JavascriptMileStone[] = [
  { year: 1996, mileStones: ['JavaScript'] },
  { year: 1997, mileStones: ['ECMAScript'] },
  { year: 2004, mileStones: ['Firefox'] },
  { year: 2006, mileStones: ['jQuery'] },
  { year: 2008, mileStones: ['V8', 'Chrome'] },
  { year: 2009, mileStones: ['ES5', 'Node.js'] },
  { year: 2010, mileStones: ['npm', 'Angular'] },
  { year: 2013, mileStones: ['React'] },
  { year: 2014, mileStones: ['Vue.js'] },
  { year: 2015, mileStones: ['ES6', 'Edge'] },
];

const javascriptMileStones: JavascriptMileStone[] = [
  { year: 1996, mileStones: ['JavaScript'] },
  { year: 1999, mileStones: ['ES3'] },
  { year: 2009, mileStones: ['ES5'] },
  { year: 2015, mileStones: ['ES6'] },
  { year: 2016, mileStones: ['ES7'] },
  { year: 2017, mileStones: ['ES8'] },
  { year: 2018, mileStones: ['ES9'] },
  { year: 2019, mileStones: ['ES10'] },
];

const nodeJsMileStones: JavascriptMileStone[] = [
  { year: 2009, mileStones: ['Node.js'] },
  { year: 2010, mileStones: ['npm', 'Angular'] },
  { year: 2012, mileStones: ['webpack'] },
  { year: 2013, mileStones: ['React'] },
  { year: 2014, mileStones: ['Vue.js'] },
];

storiesOf('JavaScriptMileStone', module)
  .addDecorator(withKnobs)
  .add('allMileStone', () => {
    const withKnobsMileStones = allMileStones
      .map((mileStone) => object(mileStone.year.toString(), mileStone));

    return (
      <JavaScriptMileStone javascriptMileStones={withKnobsMileStones} />
    );
  })
  .add('javaScriptMileStone', () => {
    const withKnobsMileStones = javascriptMileStones
      .map((mileStone) => object(mileStone.year.toString(), mileStone));

    return (
      <JavaScriptMileStone javascriptMileStones={withKnobsMileStones} />
    );
  })
  .add('nodeJsMileStone', () => {
    const withKnobsMileStones = nodeJsMileStones
      .map((mileStone) => object(mileStone.year.toString(), mileStone));

    return (
      <JavaScriptMileStone javascriptMileStones={withKnobsMileStones} />
    );
  });

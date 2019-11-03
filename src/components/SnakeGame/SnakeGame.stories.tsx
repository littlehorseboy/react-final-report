import React from 'react';
/* eslint-disable import/no-extraneous-dependencies */
import { storiesOf } from '@storybook/react';
/* eslint-enable */
import SnakeGame from './SnakeGame';

storiesOf('SnakeGame', module)
  .add('SnakeGame', () => (
    <>
      <SnakeGame />
    </>
  ));

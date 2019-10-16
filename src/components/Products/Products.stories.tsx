import React from 'react';
/* eslint-disable import/no-extraneous-dependencies */
import { storiesOf } from '@storybook/react';
/* eslint-enable */
import Products from './Products';

storiesOf('Products', module)
  .add('Products', () => (
    <>
      <Products />
      <Products />
    </>
  ));

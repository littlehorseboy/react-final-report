import React from 'react';
/* eslint-disable import/no-extraneous-dependencies */
import { storiesOf } from '@storybook/react';
/* eslint-enable */
import PopoverContainer from './PopoverContainer';

storiesOf('PopoverContainer', module)
  .add('PopoverContainer', () => (
    <>
      <PopoverContainer />
    </>
  ));

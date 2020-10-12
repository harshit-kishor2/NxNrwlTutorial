import React from 'react';
import { render } from '@testing-library/react';

import UiGuest from './ui-guest';

describe('UiGuest', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<UiGuest />);
    expect(baseElement).toBeTruthy();
  });
});

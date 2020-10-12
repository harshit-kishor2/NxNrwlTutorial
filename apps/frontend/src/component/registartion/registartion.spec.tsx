import React from 'react';
import { render } from '@testing-library/react';

import Registartion from './registartion';

describe('Registartion', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<Registartion />);
    expect(baseElement).toBeTruthy();
  });
});

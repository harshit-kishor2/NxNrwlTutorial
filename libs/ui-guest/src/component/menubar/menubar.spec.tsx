import React from 'react';
import { render } from '@testing-library/react';

import Menubar from './menubar';

describe('Menubar', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<Menubar />);
    expect(baseElement).toBeTruthy();
  });
});

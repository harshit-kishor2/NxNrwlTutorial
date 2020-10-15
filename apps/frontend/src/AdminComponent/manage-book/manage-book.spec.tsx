import React from 'react';
import { render } from '@testing-library/react';

import ManageBook from './manage-book';

describe('ManageBook', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<ManageBook />);
    expect(baseElement).toBeTruthy();
  });
});

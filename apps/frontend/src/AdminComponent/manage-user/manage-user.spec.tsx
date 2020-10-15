import React from 'react';
import { render } from '@testing-library/react';

import ManageUser from './manage-user';

describe('ManageUser', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<ManageUser />);
    expect(baseElement).toBeTruthy();
  });
});

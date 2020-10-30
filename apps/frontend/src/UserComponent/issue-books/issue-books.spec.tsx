import React from 'react';
import { render } from '@testing-library/react';

import IssueBook from './issue-books';

describe('IssueBook', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<IssueBook />);
    expect(baseElement).toBeTruthy();
  });
});

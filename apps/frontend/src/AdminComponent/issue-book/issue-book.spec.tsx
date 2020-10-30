import React from 'react';
import { render } from '@testing-library/react';

import IssueBook from './issue-book';

describe('IssueBook', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<IssueBook />);
    expect(baseElement).toBeTruthy();
  });
});

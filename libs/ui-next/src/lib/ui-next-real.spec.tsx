import { render } from '@testing-library/react';

import UiNextReal from './ui-next-real';

describe('UiNextReal', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<UiNextReal />);
    expect(baseElement).toBeTruthy();
  });
});

import { render, screen } from '@testing-library/react';
import { describe, it } from 'vitest';

import Text from './Text';

describe('Text', () => {
  it('should render text', () => {
    const TEXT_CONTENT = "Hi there, I'm a text component!";

    render(<Text>{TEXT_CONTENT}</Text>);
    screen.getByText(TEXT_CONTENT);
  });
});

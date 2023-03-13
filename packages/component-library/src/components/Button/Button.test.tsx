import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { describe, expect, it, vi } from 'vitest';

import Button from './Button';

describe('Button', () => {
  it('should execute a callback function on click', async () => {
    const user = userEvent.setup();
    const handleClick = vi.fn();

    render(<Button onPress={handleClick} />);
    const button = screen.getByRole('button');
    await user.click(button);

    expect(handleClick).toHaveBeenCalledOnce();
  });
});

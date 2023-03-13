import { useRef } from 'react';
import type { RefObject } from 'react';
import { useButton } from 'react-aria';
import type { AriaButtonProps } from 'react-aria';
import { tv } from 'tailwind-variants';

import Text from 'components/Text';

type ButtonType = 'primary' | 'secondary';

export interface ButtonProps extends AriaButtonProps {
  /** An optional ref to allow outside access to the component's element, often used with react-aria */
  buttonRef?: RefObject<HTMLButtonElement>;
  /** The look and feel button */
  variant?: ButtonType;
}

const buttonStyles = tv({
  variants: {
    variant: {
      primary: {
        base: 'bg-orange-500 hover:bg-orange-600',
        content: 'text-white dark:text-white',
      },
      secondary: {
        base: 'bg-white border border-solid border-slate-200 hover:bg-slate-100',
        content: 'text-black dark:text-black',
      },
    },
  },
  slots: {
    base: 'h-10 hover:shadow-md px-4 py-2 rounded-lg shadow transition',
    content: '',
  },
});

/** A button that handles mouse, keyboard, and touch interactions */
function Button({ buttonRef, children, variant = 'primary', ...props }: ButtonProps) {
  const localButtonRef = useRef<HTMLButtonElement>(null);
  const ref = localButtonRef;
  const { buttonProps } = useButton({ ...props, type: props.type ?? 'button' }, ref);
  const styles = buttonStyles({ variant });
  return (
    // We cover giving the button an explicit type in the above hook
    // eslint-disable-next-line react/button-has-type
    <button {...buttonProps} className={styles.base()} ref={ref}>
      <Text className={styles.content()}>{children}</Text>
    </button>
  );
}

export default Button;

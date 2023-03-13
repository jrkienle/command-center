import { createElement, useRef } from 'react';
import type { HTMLProps, ReactNode, RefObject } from 'react';
import { tv } from 'tailwind-variants';

export type TextElement = 'p' | 'span';
export type TextVariant = 'base' | 'p';

export interface TextProps<Element = HTMLSpanElement> {
  /** Any additional props to pass to the provided element. For example, you may wish to pass
   * htmlFor to a label element */
  additionalProps?: HTMLProps<Element>;
  children: ReactNode;
  className?: string;
  /** The element to display the text in */
  el?: TextElement;
  /** An optional ref to allow outside access to the component's element */
  textRef?: RefObject<Element>;
  /** The look and feel button */
  variant?: TextVariant;
}

const textStyles = tv({
  base: 'font-sans text-black dark:text-white',
  compoundVariants: [
    { variant: ['base', 'p'], class: 'font-normal' },
    { variant: ['base', 'p'], class: 'text-base' },
  ],
  variants: {
    variant: {
      base: '',
      p: 'mb-4',
    },
  },
});

/** A component that displays text in the specified preset on the provided HTML element */
function Button<Element = HTMLSpanElement>({
  additionalProps,
  children,
  className,
  el = 'span',
  textRef,
  variant = 'base',
}: TextProps<Element>) {
  const localTextRef = useRef<Element>(null);
  const ref = textRef ?? localTextRef;
  return createElement(
    el,
    { ...additionalProps, className: textStyles({ className, variant }), ref },
    children
  );
}

export default Button;

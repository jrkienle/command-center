import type { Meta, StoryObj } from '@storybook/react';

import Text from './Text';

const meta = {
  title: 'Text',
  component: Text,
} satisfies Meta<typeof Text>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Base: Story = {
  args: { children: "I'm a text component!" },
};

export const Paragraph: Story = {
  args: { children: "I'm a paragraph!", el: 'p', variant: 'p' },
};

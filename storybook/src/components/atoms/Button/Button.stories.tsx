import { Meta, StoryObj} from '@storybook/react';
import { fn } from '@storybook/test';
import { Button } from "./Button";

const meta: Meta<typeof Button> = {
    title: 'Atoms/Button',
    component: Button,
    args: { onClick: fn() },
} satisfies Meta<typeof Button>;

export default meta;
type Story = StoryObj<typeof Button>;

export const OnDefault: Story = {
    args: {
        label: '-',
    }
}
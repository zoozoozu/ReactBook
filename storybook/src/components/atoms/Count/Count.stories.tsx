import { Meta, StoryObj} from '@storybook/react';
import { fn } from '@storybook/test';
import { Count } from "./Count";

const meta: Meta<typeof Count> = {
    title: 'Atoms/Count',
    component: Count,
    args: {
    },
} satisfies Meta<typeof Count>;

export default meta;
type Story = StoryObj<typeof Count>;

export const OnDefault: Story = {
    args: {
        value: 0,
    }
}
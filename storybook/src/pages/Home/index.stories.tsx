import { Meta, StoryObj} from '@storybook/react';
import { fn } from '@storybook/test';
import { Home } from ".";

const meta: Meta<typeof Home> = {
    title: 'Pages/Home',
    component: Home,
} satisfies Meta<typeof Home>;

export default meta;
type Story = StoryObj<typeof Home>;

export const OnDefault: Story = {
}
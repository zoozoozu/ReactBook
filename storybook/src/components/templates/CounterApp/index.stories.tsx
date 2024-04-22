import { Meta, StoryObj} from '@storybook/react';
import { fn } from '@storybook/test';
import { CounterApp } from ".";

const meta: Meta<typeof CounterApp> = {
    title: 'Templates/CounterApp',
    component: CounterApp,
    args: {

    },
} satisfies Meta<typeof CounterApp>;

export default meta;
type Story = StoryObj<typeof CounterApp>;

export const OnDefault: Story = {
    args: {
        value:0,
    }
}
import { Meta, StoryObj} from '@storybook/react';
import {Counter} from './Counter';

const meta: Meta<typeof Counter> = {
    title: 'Organisms/Counter',
    component: Counter,
    args: {
    },
} satisfies Meta<typeof Counter>;

export default meta;
type Story = StoryObj<typeof Counter>;

export const OnDefault: Story = {
    args: {
        
    }
}
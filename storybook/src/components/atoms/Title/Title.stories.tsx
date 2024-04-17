import { Meta, StoryObj} from '@storybook/react';
import { Title } from "./Title";

const meta: Meta<typeof Title> = {
    title: 'Atoms/Title',
    component: Title,
} satisfies Meta<typeof Title>;

export default meta;
type Story = StoryObj<typeof Title>;

export const OnDefault: Story = {
    args: {
        title: 'Counter App',
    }
}
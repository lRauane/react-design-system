import { Button, ButtonProps } from "./button";
import { Meta, StoryObj } from '@storybook/react'

export default {
    title: 'Components/Button',
    component: Button,
    args: {
        Children: 'Create Acoount',
    },
    argTypes: { }
} as Meta<ButtonProps>

export const Default: StoryObj<ButtonProps> = {

}

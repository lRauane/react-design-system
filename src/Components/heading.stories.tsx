import { Heading, HeadingProps } from "./heading";
import { Meta, StoryObj } from '@storybook/react'

export default {
    title: 'Components/heading',
    component: Heading,
    args: {
        Children: 'Lorem ipsum',
        size: 'md',
    },
    argTypes:{
        size:{
            options: ['sm', 'md', 'lg'],
            control:{
                type: 'inline-radio'
            }
        }
    }
} as Meta<HeadingProps>

export const Default: StoryObj<HeadingProps> = {
    
}
export const Small: StoryObj<HeadingProps> = {
    args: {
        size: 'sm',
    }
}
export const Large: StoryObj<HeadingProps> = {
    args: {
        size: 'lg',
    }
}
export const CustomComponent: StoryObj<HeadingProps> = {
    args: {
        asChild: true,
        Children: (
            <h1>Heading with h1...</h1>
        )
    },
    argTypes:{
        asChild:{
            table:{
                disable: true,
            }
        }
    }
}
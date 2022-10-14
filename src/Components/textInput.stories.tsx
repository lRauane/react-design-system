import { TextInput,  TextInputRootProps} from "./textInput";
import {Envelope} from 'phosphor-react'
import { Meta, StoryObj } from '@storybook/react'

export default {
    title: 'Components/TextInput',
    component: TextInput.Root,
    args:{
        children: [
            <TextInput.Icon>
               <Envelope/>
            </TextInput.Icon>,
            <TextInput.Input placeholder="Type e-mail adress"/>
        ],
    },
    argTypes: {
        Children:{
            table:{
                disable: true,
            }
        },
     },
} as Meta<TextInputRootProps>

export const Default: StoryObj<TextInputRootProps> = {

}

export const WithouIcon:StoryObj<TextInputRootProps> = {
  args:{
    children: <TextInput.Input placeholder="Type e-mail adress"/>
  }
}

import { Checkbox, CheckboxProps } from "./checkbox";
import { Meta, StoryObj } from '@storybook/react'

export default {
    title: 'Components/Checkbox',
    component: Checkbox,
    args: {},
    argTypes: { },
    decorators: [
        (Story) => {
            return(
               <div className="flex items-center gap-2 text-white">
                {Story()}
                <text fontSize='sm'>Lembrar-me de mim por 30 dias</text>
               </div> 
            )
   
            }
            ],
} as Meta<CheckboxProps>

export const Default: StoryObj<CheckboxProps> = {

}

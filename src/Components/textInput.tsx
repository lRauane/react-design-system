import {Slot} from '@radix-ui/react-slot'
import { InputHTMLAttributes, ReactNode } from 'react';

export interface TextInputRootProps{
    children: ReactNode;
}

function TextInputRoot(props: TextInputRootProps){
    return (
        <div className='py-4 px-3 rounded bg-gray-800 w-full flex items-center gap-3 focus-within:ring-2 ring-cyan-300 h-12'>
            {props.children}
        </div>
    )
}

TextInputRoot.displayName = 'TextInput.Root'

export interface TextInputIconProps{
    children: ReactNode;
}
function TextInputIcon(props:TextInputIconProps){
    return(
        <Slot className='w-6 h-6 text-gray-400'>
            {props.children}
        </Slot>
    )
}

TextInputIcon.displayName = 'TextInputIcon'

export interface TextInputInputProps extends InputHTMLAttributes<HTMLInputElement>{

}

function TextInputInput( props: TextInputInputProps){
    return(
        <input className="bg-transparent flex-1  text-gray-100 text-xs placeholder:text-gray-400  outline-none ring-cyan-300 "
        {...props}
        />
    )
}
TextInputInput.displayName = 'TextInput.Input'

export const TextInput ={
    Root: TextInputRoot,
    Input: TextInputInput,
    Icon: TextInputIcon,
}
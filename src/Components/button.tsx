import clsx from 'clsx';
import {Slot} from '@radix-ui/react-slot'
import { ReactNode } from 'react';

export interface ButtonProps{
    Children: ReactNode;
    asChild?: boolean; 
}

export function Button({ Children, asChild}: ButtonProps){
    const Comp = asChild ? Slot : 'button';

    return(
        <Comp 
        className={clsx('py-4 px-3 bg-cyan-500 trasition-colors focus:ring-2 ring-white rounded font-semibold text-black text-sm w-full hover:bg-cyan-300')}
        >
        {Children}
        </Comp>
    )
}

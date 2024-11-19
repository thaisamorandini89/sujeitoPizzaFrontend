"use client"

import styles from './styles.module.scss';
import { useFormStatus } from 'react-dom';

interface Props{
    name: string;
    color: string;
}

export function Button({ name, color }: Props){
    const { pending } = useFormStatus();

    return(
        <button type="submit" 
            disabled={pending} 
            className={styles.button}
            style={{ backgroundColor: `var(--${color})` }}>
                {pending ? "Carregando..." : name}
        </button>
    )
}
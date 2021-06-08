import React from 'react'
import '../styles/components/Input.scss';

export default function Input(props: any) {
    return (
        <input
            className="custom-input"
            type={ props.type }
            name={ props.name }
            placeholder={ props.placeholder }
            onChange={ props.onChange }
            style={ props.style }
            value={ props.value }
        />
    )
}

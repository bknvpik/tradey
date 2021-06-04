import React from 'react'
import '../styles/components/OrangeButton.scss';

export default function OrangeButton(props: any) {
    return (
        <div className="orange-button">
            { props.text }
        </div>
    )
}

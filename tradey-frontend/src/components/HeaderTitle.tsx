import React from 'react'
import '../styles/components/HeaderTitle.scss';

export default function HeaderTitle(props: any) {
    return (
        <div className="header-title" style={ props.style }>
            <h1>{ props.text }</h1>
        </div>
    )
}

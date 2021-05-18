import React from 'react'
import '../styles/components/HeaderTitle.scss';

export default function HeaderTitle(props: any) {
    return (
        <div className="header-title">
            { props.text }
        </div>
    )
}

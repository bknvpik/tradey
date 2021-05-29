import React from 'react'
import '../styles/components/AboutPoint.scss';

export default function AboutPoint(props: any) {
    return(
        <div className="about-point">
            <div className="point-wrapper">
                <div className="circle">
                    <div className="number">
                        { props.number }
                    </div>
                </div>
                <div className="text-wrapper">
                    <div className="title">
                        <h1>
                            { props.title }
                        </h1>
                    </div>
                    <div className="info">
                        <p>
                            { props.info }
                        </p>
                    </div>
                </div>
            </div>
        </div>
    )
}

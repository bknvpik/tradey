import React, { Component } from 'react'
import '../styles/components/AboutPoint.scss';

interface Point {
    number: number
    title: string
    info: string
}

export default class AboutPoint extends Component <Point>{
    render() {
        return (
            <div className="about-point">
                <div className="point-wrapper">
                    <div className="circle">
                        <div className="number">
                            { this.props.number }
                        </div>
                    </div>
                    <div className="text-wrapper">
                        <div className="title">
                            <h1>{ this.props.title }</h1>
                        </div>
                        <div className="info">
                            <p>{ this.props.info }</p>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

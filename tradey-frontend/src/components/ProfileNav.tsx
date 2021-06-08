import React from 'react';
import { Link, NavLink } from 'react-router-dom'
import '../styles/components/ProfileNav.scss';

export default function ProfileNav(props: any) {
    const baseURL: string = '/view-profile';

    return (
        <div className="profile-nav">
            <NavLink to={ `${baseURL}/about-me` } activeClassName="active">
                about me
            </NavLink>
            <NavLink to={ `${baseURL}/my-items` } activeClassName="active">
                my items
            </NavLink>
            <NavLink to={`${baseURL}/my-offers`} activeClassName="active">
                my offers
            </NavLink>
            <NavLink to={`${baseURL}/edit-profile`} activeClassName="active">
                edit profile
            </NavLink>
        </div>
    )
}

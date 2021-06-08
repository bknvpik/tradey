import { useContext, useEffect, useState } from 'react';
import { Redirect, Route } from 'react-router';
import { AuthContext } from './AuthContext';

export default function ProtectedRoute({ component: Component, ...rest }: any) {
    const { logged, setLogged } = useContext(AuthContext);

    return (
        <Route { ...rest } render={ (props) => {
            if (logged)
                return <Component {...props} />
            else
                return <Redirect to={
                    {
                        pathname: "/",
                        state: {
                            from: props.location
                        }
                    }
                }/>
            }
        }/>
    )
}

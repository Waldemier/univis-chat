import React from 'react';
import { Route } from 'react-router-dom';

import { LoginForm, RegistrationForm } from '../../modules';

import './Auth.scss';


export default function Auth() {

    return (
        <section className="auth">
            <div className="auth__content">
                <Route path={["/", "/login"]} component={LoginForm} exact />
                <Route path="/registration" component={RegistrationForm} exact />
            </div>
        </section>
    )
}
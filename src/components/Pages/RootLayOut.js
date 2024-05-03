import React from 'react';
import { Outlet } from 'react-router-dom';
import MainNavigation from './MainNavigation';
import classes from './RootLayOut.module.css'

function RootLayOut() {
    return (
        <div>
            <MainNavigation />
            <main className={classes.content}>
                <Outlet />
            </main>
        </div>
    )
}

export default RootLayOut
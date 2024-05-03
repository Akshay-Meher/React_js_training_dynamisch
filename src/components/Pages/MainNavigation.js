import React from 'react';
import { NavLink } from 'react-router-dom';
import classes from './MainNavigation.module.css';

function MainNavigation() {
    return (
        <header className={classes.header}>
            <nav className=' font-bold m-2 p-2 '>
                <ul className={classes.list}>
                    <li>
                    </li>
                    <NavLink activeClassName="active" to='/'>Task1</NavLink>
                    <li>
                    </li>
                    <NavLink activeClassName="active" to='/day2'>Task2</NavLink>
                    <li>
                    </li>
                    <NavLink activeClassName="active" to='/day3'>Task3</NavLink>
                    <li>
                    </li>
                    <NavLink activeClassName="active" to='/day5'>Task5</NavLink>
                    <li>
                    </li>
                    <NavLink activeClassName="active" to='/day6'>Task6</NavLink>
                    <li>
                        <NavLink activeClassName="active" to='/day7'>Task7</NavLink>
                    </li>
                    <li>
                        <NavLink activeClassName="active" to='/day9'>Task9</NavLink>
                    </li>
                    <li>
                        <NavLink activeClassName="active" to='/day10'>Task10</NavLink>
                    </li>
                    <li>
                        <NavLink activeClassName="active" to='/day11'>Task11</NavLink>
                    </li>
                    <li>
                        <NavLink activeClassName="active" to='/day12'>Task12</NavLink>
                    </li>
                    <li>
                        <NavLink activeClassName="active" to='/day14'>Task14</NavLink>
                    </li>
                    <li>
                        <NavLink activeClassName="active" to='/day16'>Task16</NavLink>
                    </li>
                    <li>
                        <NavLink activeClassName="active" to='/about'>about</NavLink>
                    </li>
                </ul>
            </nav>
        </header>
    )
}

export default MainNavigation;
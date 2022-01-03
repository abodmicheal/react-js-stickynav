import React, { useState, useEffect } from 'react'
import styles from './styles.module.css'

const StickyNav = (props) => {
    const [nav, setNav] = useState(false)

    useEffect(() => {
        window.addEventListener('scroll', handleScroll)
    });

    const handleScroll = () => {
        window.pageYOffset > props.length ? !nav && setNav(true) : nav && setNav(false)
    }

    return (
        <div>
            <div className={`nav ${nav && 'scrollNav'}`}>
                {props.children}
            </div>
        </div>
    )
}

export default StickyNav;

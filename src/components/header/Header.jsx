import React from 'react'
import PropTypes from 'prop-types'
import styles from './Header.module.css';

function Header(props) {
    return (
        <div className={styles.container}>
            Coronavirus COVID 19 - DashBoard
        </div>
    )
}

Header.propTypes = {

}

export default Header


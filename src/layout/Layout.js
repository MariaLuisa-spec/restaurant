import React from 'react';
import styles from './Layout.css';

const Layout = ({ header, content }) => {
    return (
        <div>

            {header} {/* --> header slot */}

            <div className={styles.layoutStuff}>
                <div className={styles.bodyContainer}>

                    {content} {/* --> content slot */}

                </div>
            </div>
        </div>
    );
};

export default Layout;
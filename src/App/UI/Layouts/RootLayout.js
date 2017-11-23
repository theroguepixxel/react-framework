import React from 'react'

const styles = {
    width: `100%`,
    height: `100%`
}

const RootLayout = (props) => {
    return(
        <div style={styles}>
            This is the Root Layout.
            {props.children}
        </div>
    )
}

export default RootLayout
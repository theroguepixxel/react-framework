import React from 'react'

const AppLayout = (props) => {
    return(
        <div>
            This is the App layout.
            {props.children}
        </div>
    )
}

export default AppLayout
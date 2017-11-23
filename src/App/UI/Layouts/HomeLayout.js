import React from 'react'

const HomeLayout = (props) => {
    return(
        <div>
            This is the Home Layout.
            {props.children}
        </div>
    )
}

export default HomeLayout
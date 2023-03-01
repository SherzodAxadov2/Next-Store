import React from 'react'

const MiniBanner = ({ links1, links2 }) => {

    return (
        <div>
            {
                links1?.map((link, index) => {
                    return (
                        <p key={index}>{link.id}</p>
                    )
                })
            }
            {
                links2?.map((link, index) => {
                    return (
                        <p key={index}>{link.id}</p>
                    )
                })
            }
        </div>
    )
}

export default MiniBanner
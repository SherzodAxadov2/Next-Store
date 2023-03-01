import React from 'react'
import Partner from '../../components/partner/Partner'
import { partners } from '../../constants/partners'

const Partners = () => {

    const allPartners = partners
    return (
        <div>
            {
                allPartners.map((item, index) => {
                    return (
                        <Partner key={index} partner={item} />
                    )
                })
            }
        </div>
    )
}

export default Partners
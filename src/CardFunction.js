import React from 'react'
import Cards from './Card';
// import './style.css'
import seriesData from './seriesData'
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'

import Searchbox from './Searchbox';

const CardFunction = (val) => {
    function ArrMap(val) {
        return (
            <div>
                <Cards

                    img={val.img}
                    sname={val.sname}
                    title={val.title}
                    links={val.links}


                />
            </div>
        )
    }
    return (
        <div>

            <div className=" container " style={{ marginTop: '4rem' }}>
                <Searchbox />
            </div>
            {
                seriesData.map(ArrMap)
            }



        </div>
    )
}

export default CardFunction

import React from 'react'
import Card from './Card';
import './style.css'
import seriesData from './seriesData'

const CardFunction = (val) => {
    function ArrMap(val) {
        return (
            <Card
                img={val.img}
                sname={val.sname}
                title={val.title}
                links={val.links}


            />
        )
    }
    return (
        <div>
            <h1 className="heading_style">Top 5 NETFLIX Series</h1>
            {
                seriesData.map(ArrMap)
            }



        </div>
    )
}

export default CardFunction

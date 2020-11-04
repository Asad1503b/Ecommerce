import React from 'react'

const DateTimeFunction = () => {
    let sectionStylee = {
        alignItem: "center",
        fontSize: "xLarger",
        border: "2px solid black",
        textAlign: "center"
    }
    let currtime = new Date().getHours()
    let Msg = ""
    let MsgColor = {

    }
    if (currtime > 1 && currtime < 12) {
        Msg = "GoodMorning"
        MsgColor.color = "green"
        MsgColor.fontFamily = "'Itim', cursive"
    }


    else if (currtime > 12 && currtime < 20) {
        Msg = "GoodAfterNoon"
        MsgColor.color = "Orange"
        MsgColor.fontFamily = "'Itim', cursive"

    }
    else {
        Msg = "GoodNight"
        MsgColor.color = "Black"
        MsgColor.fontFamily = "'Itim', cursive"

    }
    return (

        <div>
            <h1 style={sectionStylee}>Hello Mr Asad , <span style={MsgColor}>{Msg}</span></h1>
        </div>
    )
}

export default DateTimeFunction

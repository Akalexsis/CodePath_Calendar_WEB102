import React from "react";

//  component def UI rules for each calendar event
const Event = (props) => {
    return (
        <>
            {/* props.color dynamically sets color for entire td from data passed to Event */}
            <td className={"Event " + props.color} rowspan={props.span}>
                {/* event name and description*/}
                {/* props.event works as var that will display data passed
                    whenever Event component used */}
                <h5>{props.event}</h5>
                <h6>{props.location}</h6>
            </td>
        </>
    )
}

export default Event;
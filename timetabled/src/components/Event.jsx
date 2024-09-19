import React from "react";

//  component def UI rules for each calendar event
const Event = (props) => {
    return (
        <div className="Event">
            {/* props.color dynamically sets color for entire td based on data
                passed when Event called*/}
            <td className={"Event" + props.color}>
                {/* event name and description*/}
                {/* props.event works as var that will display data passed
                    whenever Event component used */}
                <h5>{props.event}</h5>
                <h6>{props.location}</h6>
            </td>
        </div>
    )
}

export default Event;
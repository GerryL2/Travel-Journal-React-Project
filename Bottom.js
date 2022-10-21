import react from "react"

export default function Bottom(props){
    return(
        <div className="places">
            <img src={props.imageUrl} 
                 alt="Travel Place"
                 className="Maps">
            </img>
            <div className="seperate">
                    <img src="./images/Pin.png"
                        alt="Pin"
                        className="pin">
                    </img>
                    <span className="location">{props.location}</span>
                    <span className="imageUrl"> {props.googleMapsUrl}</span>
                
                <h1>{props.title}</h1>
                <h3 className="date">{props.startDate} - {props.endDate}</h3>
                <p className="description">{props.description}</p>
            </div>
        </div>
    )
}
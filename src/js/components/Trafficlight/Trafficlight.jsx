
// The whole purpose of the component is to display a traffic light with red, yellow and green lights.
// When any light is clicked (selected), it has to glow, but the other lights have to stop glowing.
// The component must have a hooked state variable that tracks the color:
// const [ color, setColor ] = useState("red");
// Use the setColor function to change the color, and the component will automatically re-render (because it's hooked with useState).
// Use the ReactDOM.render to render the component into the DOM, like this:
// ReactDOM.render(<TrafficLight />, document.querySelector('#app'));
// 🔥 Bonus
// 2 Create one button that when you click on it, cycles the traffic light selected color between red, green and yellow.
// 10 Have a button that when clicked, it adds an extra color "purple" to the traffic light.

import { useState } from 'react'
import styles from './Trafficlight.module.css'

const Trafficlight = () => {

    const [lightRed, setLightRed] = useState(false)
    const [lightYellow, setLightYellow] = useState(false)
    const [lightGreen, setLightGreen] = useState(false)

    const handleLightRed = () => {
        if (lightRed == false) {
            setLightRed(!lightRed)
            setLightYellow(false)
            setLightGreen(false)
        }
    }
    const handleLightYellow = () => {
        if (lightYellow == false) {
            setLightRed(false)
            setLightYellow(!lightYellow)
            setLightGreen(false)
        }
    }
    const handleLightGreen = () => {
        if (lightGreen == false) {
            setLightRed(false)
            setLightYellow(false)
            setLightGreen(!lightGreen)
        }
    }

    return (
        <div>
            <div className={`${styles.circle} ${lightRed == true ? styles.lightred : ''}`} onClick={handleLightRed} style={{ backgroundColor: "red" }}></div>
            <div className={`${styles.circle} ${lightYellow == true ? styles.lightyellow : ''}`} onClick={handleLightYellow} style={{ backgroundColor: "yellow" }}></div>
            <div className={`${styles.circle} ${lightGreen == true ? styles.lightgreen : ''}`} onClick={handleLightGreen} style={{ backgroundColor: "green" }}></div>
        </div>
    )
}

export default Trafficlight

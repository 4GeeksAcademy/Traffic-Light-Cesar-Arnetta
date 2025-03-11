
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


// Array para agregar a posteriori el purple.
// Opto por un array que añade el purple, 
// para que sea más fácil a posteriori que el botón
// siga el orden da cambio de luces

let colors = ["red", "yellow", "green"]

const Trafficlight = () => {

    const [activeLight, setActiveLight] = useState("")
    const [addPurple, setAddPurple] = useState(false)

    // Función para agregar el estilo de luz a los botones

    const handleLight = (light) => {
        setActiveLight(light)
    }

    // Función para cambiar de luces

    const swicthLight = () => {
        const currentIndex = colors.indexOf(activeLight)
        const nextIndex = (currentIndex + 1) % colors.length
        setActiveLight(colors[nextIndex])
    }

    // Función para agregar el purple

    const addPurppleBtn = () => {
        if (addPurple == false) {
            setAddPurple(true);
            colors.push("purple");
        }
        else {
            setAddPurple(false);
            colors.pop();
        }
    }

    return (
        <div className='container-fluid text-center'>
            <div className='col' style={{ backgroundColor: "black", width: "2rem", height: "6rem", margin: "auto" }}></div>
            <div className='col p-2' style={{ backgroundColor: "black", margin: "0 35%", borderRadius: "30%" }}>
                <div className='row justify-content-center p-2'>
                    <div className={`${styles.circle} ${activeLight === "red" ? styles.light : ''}`} onClick={() => handleLight("red")} style={{ backgroundColor: "red" }}></div>
                </div>
                <div className='row justify-content-center p-2'>
                    <div className={`${styles.circle} ${activeLight === "yellow" ? styles.light : ''}`} onClick={() => handleLight("yellow")} style={{ backgroundColor: "yellow" }}></div>
                </div>
                <div className='row justify-content-center p-2'>
                    <div className={`${styles.circle} ${activeLight === "green" ? styles.light : ''}`} onClick={() => handleLight("green")} style={{ backgroundColor: "green" }}></div>
                </div>
                <div className='row justify-content-center p-2'>
                    <div className={`${addPurple === true ? styles.circle : ''} ${activeLight === "purple" ? styles.light : ''}`} onClick={() => handleLight("purple")} style={{ backgroundColor: "purple" }}></div>
                </div>
            </div>

            <div className='row-4 p-2'>
                <button onClick={swicthLight}>Cambiar de luz</button>
            </div>
            <div className='row-4 p-2'>
                <button onClick={addPurppleBtn}>{addPurple === true ? "Quitar botón morado" : "Añadir botón morado"}</button>
            </div>
        </div >
    )
}

export default Trafficlight

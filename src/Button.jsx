import { useState, useEffect } from "react"





function Button() {
    const [quantity, setQuantity] = useState(1);

    // Similar to componentDidMount and componentDidUpdate:  
    useEffect(() => {    // Update the document title using the browser API    
        document.title = `You clicked ${quantity} times`;  
    });

    return (

        <button onClick={(e) => setQuantity(quantity + 1)}>{quantity}</button>

    );
}

export default Button


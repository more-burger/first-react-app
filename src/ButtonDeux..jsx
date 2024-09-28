import { useState, useEffect } from "react"





function ButtonDeux() {
    const [quantity, setQuantity] = useState(1);

    function heynow() {
        console.log('enter heynow');
        console.log(quantity)
        setQuantity(quantity + 1)
    }

    // Similar to componentDidMount and componentDidUpdate:  
    useEffect(() => {    // Update the document title using the browser API    
        document.title = `You clicked ${quantity} times`;  
    });

    return (
        <button onClick={heynow()}>{quantity}</button>
    );
}

export default ButtonDeux


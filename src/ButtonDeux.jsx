import { useState } from "react"

function ButtonDeux() {
    const [quantity, setQuantity] = useState(69);

    function heynow(e) {

    }

    return (
        <button onClick={(e) => heynow}>{quantity}</button>
    );
}

export default ButtonDeux


import { useState } from 'react';

export function Counter() {
    let [] = useState(0)
    
    function increment() {
        counter++
        console.log("Função disparada")
    }

    return(
        <div>
            <h2>{counter}</h2>
            <button type="button" onClick={increment}>
                Increment
            </button>
        </div>
    )
}
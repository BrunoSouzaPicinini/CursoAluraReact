import React,{useState} from "react";

function ContaClicks(){

    const [contador, increaseContador] = useState(0);

    return (
        <div>
            <p>Você clicou {contador} vezes!</p>
            <button onClick={() => increaseContador(contador + 1)}>Clicar</button>
        </div>
    );
}
export default ContaClicks;
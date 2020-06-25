import React,{useState} from "react";

function ContaClicks(){

    const [contador, increaseContador] = useState(0);

    return (
        <div className="center">
            <p>Você clicou {contador} vezes!</p>
            <button onClick={() => increaseContador(contador + 1)} className="waves-effect waves-light indigo lighten-2 btn">Clicar</button>
        </div>
    );
}
export default ContaClicks;
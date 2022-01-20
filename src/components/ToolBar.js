import React from 'react';
import slot from "../assets/slot.PNG"

const ToolBar = ({setView, money, weapon, potion, setPotion}) => {

    function  drinkPotion(){
        setPotion({
            image: slot,
            title: "",
            effect: {
                health: 0
            },
            price: 1000
        })
    }

    return (
        <div>
            <div className="toolbar d-flex">
                <div className="d-flex">
                    <button onClick={() => setView('game')}>Game</button>
                    <button onClick={() => setView('shop')}>Shop</button>
                    <button onClick={() => setView('arena')}>Arena</button>
                </div>

                <h2>Money: {money}</h2>


                <img src={weapon.image} alt=""/>
                <img src={potion.image} onClick={drinkPotion} alt=""/>
            </div>
        </div>

    );
};

export default ToolBar;
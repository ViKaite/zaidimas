import './App.css';
import StartGame from "./components/StartGame";
import {useState} from "react";
import PlayerInfo from "./components/PlayerInfo";
import PlayerInventory from "./components/PlayerInventory";
import ToolBar from "./components/ToolBar";
import Shop from "./components/Shop";
import Arena from "./components/Arena";

function App() {
    const [getView, setView] = useState("start")
    const [getPlayer, setPlayer] = useState(null)
    const [getInventory, setInventory] = useState([])
    const [getMoney, setMoney] = useState(0)
    const [getWeapon, setWeapon] = useState(
        {
            image: "https://wow.gamepressure.com/gfx/icons/INV_Sword_04.gif",
            maxDamage: 4,
            price: 50,
            energyPerHit: 20,
            effects: []
        })
    const [getPotion, setPotion] = useState( {
        image: "https://wow.gamepressure.com/gfx/icons/INV_Potion_21.gif",
        title: "Health + 10",
        effect: {
            health: 10
        },
        price: 200
    })

    function playerChosen(player){
        console.log(player)
        setMoney(player.gold)
        setPlayer(player)
        setView("game")
    }

    function buyItem (item){
         if(getMoney >= item.price) {
             if (getPlayer.inventorySlots > getInventory.length){
                 setMoney(getMoney - item.price)
                 setInventory([...getInventory, item])
             }

         }

    }

    function equipItem(item){
        console.log(item)
        if (item.maxDamage){
            setWeapon(item)
        } else {
            setPotion(item)
        }

    }

  return (

    <div className="App">


        {getView === "start" &&  <StartGame choosePlayer = {playerChosen}/>}

        {getView !== "start" &&

            <div>
                <ToolBar setPotion={setPotion} potion={getPotion} weapon = {getWeapon} setView={setView} money={getMoney}/>

                {getView === "game" &&
                    <div className="d-flex">
                        {getPlayer && <PlayerInfo getPlayer={getPlayer}/>}
                        <PlayerInventory equip={equipItem} slots={getPlayer.inventorySlots} getInventory={getInventory}/>
                    </div>
                }

                {getView === "shop" &&
                    <div className="d-flex">
                        <Shop buyItem={buyItem}/>
                        <PlayerInventory equip={equipItem} slots={getPlayer.inventorySlots} getInventory={getInventory}/>
                    </div>
                }

                {getView === "arena" && <Arena potionState={ getPotion} player={getPlayer} setView={setView} weapon={getWeapon}/>}

                {getView === "over" && <h1>GAME IS OVER YOU ARE DEAD</h1>}

            </div>


        }

    </div>
  );

}

export default App;

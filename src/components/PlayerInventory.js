import React from 'react';

const PlayerInventory = ({getInventory, slots, equip}) => {
    return (
        <div className="grow1 inventory">

            <div>
                <h3>Slots: {slots}</h3>
            </div>

            <div className="inventory grow1 d-flex wrap">

                {getInventory.map((x,index) =>
                    <div className="item" onClick={() => equip(x)}>
                    <img src={x.image} alt=""/>
                </div> )}

            </div>

        </div>

    );
};

export default PlayerInventory;
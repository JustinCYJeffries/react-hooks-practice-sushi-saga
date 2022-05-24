import React from "react";
import MoreButton from "./MoreButton";
import Sushi from './Sushi.js'

function SushiContainer({sushis, eatSushi}) {
  return (
    <div className="belt">
      {sushis.map(s=><Sushi eatSushi={eatSushi} key={s.id} {...s}/>) }
      <MoreButton />
    </div>
  );
}

export default SushiContainer;

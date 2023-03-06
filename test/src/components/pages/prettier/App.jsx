import React, { useState } from "react";
import Prettier from "./Prettier";
const App = () => {
// const [modalActive,setModalActive]= useState(false)
const [btn , setBtn]= useState(false);
console.log(setBtn);
  return (
    <div className="app">
      <main>
        <button className="open_btn" onClick={()=>setBtn(true)}>Click button</button>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque dolores
          suscipit officiis. Neque, explicabo. Numquam, odio porro cum eaque
          minima fugit, eum, voluptas ullam a error est mollitia voluptate
          dignissimos. Cum deserunt ut dicta eum.
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque dolores
          suscipit officiis. Neque, explicabo. Numquam, odio porro cum eaque
          minima fugit, eum, voluptas ullam a error est mollitia voluptate
          dignissimos. Cum deserunt ut dicta eum.
        </p>
      </main>
      {/* <Prettier modalActive={modalActive} setModalActive={setModalActive}/> */}
    </div>
  );
};
export default App;
import React, { useState, useEffect } from "react";
import EmojiData from "../blog/Emoji.json";

const Blog = () => {
  const [search, setSearch] = useState("");
  const [data, setData] = useState([]);
  useEffect(() => {
    const newData = EmojiData.filter((emoji) =>
      emoji.keyworld.toLowerCase().includes(search.toLowerCase())
    );
    setData(newData);
  }, [search]);
  return (
    <>
      <center>
        <h1>Emoji Search </h1>
        <input
          type="text"
          placeholder="search.."
          name="search"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
      </center>
      { data.map(emoji=><div>
            <div class='card'>
                <div class='card-body' onClick={()=>{navigator.clipboard.writeText(emoji.symbol); alert("symbol copy")}}>
                    {emoji.symbol} {emoji.keyworld} 
                </div>
            </div>
         </div> )}
    </>
  );
};
export default Blog;

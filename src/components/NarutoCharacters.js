import React, { useState, useEffect } from "react";
import './NarutoCharacters.css'; // Import the CSS file

const NarutoCharacters = () => {
  // State to store characters
  const [characters, setCharacters] = useState([]);
  const [loading, setLoading] = useState(true); // State for loading status

  useEffect(() => {
    // Simulated Naruto character data
    const fetchCharacters = () => {
      const narutoCharacters = [
        {
          id: 1,
          name: "Naruto Uzumaki",
          village: "Leaf",
          rank: "Hokage",
          avatar: "https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/35ed58a8-1801-4a90-b4f7-a7b2d6e011ec/d60ify2-52b9abb2-ea01-4c0d-b732-ec88a4b22f61.png?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7InBhdGgiOiJcL2ZcLzM1ZWQ1OGE4LTE4MDEtNGE5MC1iNGY3LWE3YjJkNmUwMTFlY1wvZDYwaWZ5Mi01MmI5YWJiMi1lYTAxLTRjMGQtYjczMi1lYzg4YTRiMjJmNjEucG5nIn1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmZpbGUuZG93bmxvYWQiXX0.QrWOG2BJbZXp_-0JmJxmk0M-mzPqjJ-HEL9f4ZSpNZE",
        },
        {
          id: 2,
          name: "Hinata Hyuga",
          village: "Leaf",
          rank: "Chunin",
          avatar: "https://i.pinimg.com/564x/3c/94/03/3c940392201a2ef80f878c321f129f9e.jpg",
        },
        {
          id: 3,
          name: "Minato Namikaze",
          village: "Leaf",
          rank: "Hokage",
          avatar: "https://i.pinimg.com/1200x/16/ab/7c/16ab7c7c062c4825c8998baa805d61d0.jpg",
        },
        {
          id: 4,
          name: "Gaara",
          village: "Sand",
          rank: "Kazekage",
          avatar: "https://i.redd.it/1mc4ko3vkdmc1.jpeg",
        },
        {
          id: 5,
          name: "Sasuke Uchiha",
          village: "Leaf",
          rank: "Rogue Ninja",
          avatar: "https://preview.redd.it/h74urcnjtao71.jpg?width=640&crop=smart&auto=webp&s=22ff58e173762deae0cb7819b4ef1763aa6ef745",
        },
        {
          id: 6,
          name: "Itachi Uchiha",
          village: "Leaf",
          rank: "Anbu Captain",
          avatar: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRHIzcI2ICigthzrY-YXn1Wtz4NWn9lesOy2Q&s",
        }
      ];

      setCharacters(narutoCharacters);
      setLoading(false);
    };

    fetchCharacters(); // Call the function when the component mounts
  }, []);

  if (loading) return <p>Loading characters...</p>; // Show loading message

  return (
    <div className="characters-container">
      <h1>Naruto Characters</h1>
      <div className="character-list">
        {characters.map((character) => (
          <div key={character.id} className="character-card">
            <img src={character.avatar} alt={character.name} className="character-avatar" />
            <h2>{character.name}</h2>
            <p>Village: {character.village}</p>
            <p>Rank: {character.rank}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default NarutoCharacters;

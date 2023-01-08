import "./App.css";
import React, { useState, useEffect } from "react";

function App() {
  const [items, setItems] = useState([]);
  const [visible, setVisible] = useState(3);

  const showMoreMeals = () => {
    setVisible((item) => (item += 3));
  };

  useEffect(() => {
    fetch("https://www.themealdb.com/api/json/v1/1/filter.php?a=british")
      .then((res) => res.json())
      .then((data) => setItems(data.meals));
  }, []);

  return (
    <div className="App">
      <div>
        {" "}
        <h1 className="header">British Meal </h1>
        <img
          className="imgtitle"
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/f/f2/Flag_of_Great_Britain_%281707%E2%80%931800%29.svg/1200px-Flag_of_Great_Britain_%281707%E2%80%931800%29.svg.png"
        />
      </div>

      <div className="container">
        {items?.slice(visible - 3, visible).map((item) => {
          const { strMealThumb, strMeal, idMeal } = item;
          return (
            <div className="card" key={idMeal}>
              <div className="image">
                <img src={strMealThumb} />
              </div>
              <p>{strMeal}</p>
            </div>
          );
        })}
        <button onClick={showMoreMeals}>Click for More Meals</button>
      </div>
    </div>
  );
}

export default App;

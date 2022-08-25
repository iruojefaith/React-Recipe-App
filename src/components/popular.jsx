
import React from "react";
import { userEffect } from "react";

function popular() {

  userEffect(() => {
    getPopular();
  }, []);

  const getPopular = async () => {

    const api = await fetch(`https://api.spoonacular.com/recipes/random?apikey=${process.env.REACT_APP_API_KEY}&number=15`)
    const data = await api.json();
  }
  return (
    <div>popular</div>
  )
}

export default popular
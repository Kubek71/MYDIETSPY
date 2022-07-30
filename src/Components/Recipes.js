import React from "react";
import axios from "axios";
import { useEffect, useState, useRef } from "react";
import { useForm } from "react-hook-form";
import { RecipesStyled } from "./Styles/RecipesStyled";
import { Box } from "./Styles/Box";
import { Text } from "./Styles/Global";
import { Button } from "./Styles/Global";
import { SectionStyled } from "./Styles/SectionStyled";
import { ProductBox } from "./Styles/ProductBoxStyled";
import { auth, database } from "../Helpers/FirebaseConfig";
import { ref, set, push, onValue } from "firebase/database";
import { currentDate } from "../Helpers/CurrentDate";

export default function Recipes() {
  // keyword from product input
  const [inputKeyword, setInputKeyword] = useState("");
  // product from food API
  const [product, setProduct] = useState();
  const [countKcal, setCountKcal] = useState();
  const [isProductSelected, setIsProductSelected] = useState(false);
  const { register, handleSubmit } = useForm();
  const gramature = 0.01;
  const [newRecipe, setNewRecipe] = useState([]);
  const [recipesFromDatabase, setRecipesFromDatabase] = useState([]);
  const [recipeName, setRecipeName] = useState(null);
  const [showRecipe, setShowRecipe] = useState("meal-box ");
  const mealbox = useRef();
  let date = currentDate();

  useEffect(() => {
    // getting data from food API, whenever user types in inputfield
    if (inputKeyword && inputKeyword.length > 2) {
      axios
        .get(
          `https://api.edamam.com/api/food-database/v2/parser?app_id=f4382390&app_key=%2082f05de9242bd6587eceaf2f7c8d65bb%09&ingr=${inputKeyword}&nutrition-type=cooking`
        )
        .then((res) => {
          const data = res.data;
          if (data.hints.length >= 1) {
            setProduct(data.hints.splice(0, 1));
          }
        });
    }
  }, [inputKeyword]);

  useEffect(() => {
    // counting amount of kcal whenever array of product lists updates
    count();
    const recipesRef = ref(database, `users/${auth.currentUser.uid}/recipes/`);

    onValue(recipesRef, (snapshot) => {
      if (snapshot.val() !== null || undefined) {
        const data = Object.entries(snapshot.val());
        setRecipesFromDatabase(data);
      } else if (snapshot.val() == null || undefined) {
        setRecipesFromDatabase([]);
      }
    });
  }, [newRecipe]);

  const createMeal = (data, event) => {
    setRecipeName(data.recipe);
    setIsProductSelected(true);
    setProduct(null);
    const currentProduct = product[0].food;
    const currentServing = data.serving * gramature;
    setNewRecipe((prevState) => [
      ...prevState,
      {
        product_name: currentProduct.label,
        product_kcal: currentProduct.nutrients.ENERC_KCAL,
        product_serving: data.serving * gramature,
        product_kcalInServing: Math.floor(
          currentProduct.nutrients.ENERC_KCAL * currentServing
        ),
      },
    ]);
    //clearing input fields
    Array.from(event.target).find((element) => element.id === "product").value =
      "";
    Array.from(event.target).find(
      (element) => element.id === "serving-input"
    ).value = "";
  };

  const pushRecipeToDatabase = () => {
    push(
      ref(database, `users/${auth.currentUser.uid}/recipes/${recipeName}/`),
      newRecipe
    ).then((res) => {
      alert("udalo sie");
    });
  };

  const submitRecipe = () => {
    if (newRecipe.length > 0 && recipeName !== null) {
      setIsProductSelected(false);
      pushRecipeToDatabase();
      setNewRecipe([]);
    }
  };

  const count = () => {
    const productKcalAmount = newRecipe.reduce((totalKcal, element) => {
      return Math.floor(totalKcal + element.product_kcalInServing);
    }, 0);
    setCountKcal(productKcalAmount);
  };

  return (
    <RecipesStyled>
      <SectionStyled>
        <h2>You'r recipies</h2>

        <Box className="recipes-box">
          {recipesFromDatabase.length > 0 &&
            recipesFromDatabase.map((element, i) => {
              const currentRecipe = element[0];
              console.log(currentRecipe);
              // console.log(Object.entries(element[1])[0][1]);
              return (
                <Box className="meals-container">
                  <Button
                    className="meal-number"
                    onClick={() => {
                      showRecipe === "meal-box "
                        ? setShowRecipe((prevState) => prevState + "hidden")
                        : setShowRecipe("meal-box ");
                    }}
                  >
                    {currentRecipe.toUpperCase()}
                  </Button>

                  <Box className={showRecipe} ref={mealbox}>
                    {Object.entries(element[1])[0][1].map((meal) => {
                      console.log(meal);
                      return (
                        <table>
                          <thead>
                            <tr>
                              <th>{meal.product_name}</th>
                            </tr>
                          </thead>
                          <tbody>
                            <tr>
                              <td>
                                <Text>
                                  serving: {meal.product_serving * 100}
                                  <strong>G</strong>
                                </Text>
                              </td>
                              <td>
                                <Text>
                                  kcal:{" "}
                                  <strong>{meal.product_kcalInServing}</strong>
                                </Text>
                              </td>
                            </tr>
                          </tbody>
                        </table>
                      );
                    })}
                  </Box>
                  <Text className="meal-summary">
                    TOTAL KCAL IN MEAL: <strong>555</strong>
                  </Text>
                </Box>
              );
            })}
        </Box>
      </SectionStyled>

      <SectionStyled className="form-section">
        <h2>New recipe</h2>
        <Box className="form-container">
          <form onSubmit={handleSubmit(createMeal)}>
            <Box className="product-input-box">
              <label html="recipe-name">Recipe</label>
              <input
                type="text"
                id="recipe-name"
                {...register("recipe", { required: true })}
              />
              <label html="product">product</label>

              <input
                type="text"
                id="product"
                {...register("inputKeyword", {
                  onChange: (e) => {
                    if (e.target.value.length > 2) {
                      setInputKeyword(e.target.value);
                    }
                  },
                })}
              />
              {product && inputKeyword !== "" && (
                <Box className="result-box">
                  {product.map((element, i) => {
                    return (
                      <button type="button" key={i}>
                        {element.food.label}
                      </button>
                    );
                  })}
                </Box>
              )}
            </Box>

            <Box>
              <label html="inputKeyword-input">serving(G)</label>
              <input
                type="number"
                id="serving-input"
                {...register("serving", { required: true })}
              />
            </Box>
            <Button type="submit">ADD PRODUCT</Button>
          </form>
        </Box>

        <ProductBox>
          {isProductSelected === true &&
            newRecipe.map((element, i) => {
              return (
                <Box key={i}>
                  <Box>
                    <h3>{element.product_name}</h3>
                    <Text>{element.product_serving * 100}G</Text>
                  </Box>
                  <Text>
                    Kcal:
                    {Math.round(element.product_kcal * element.product_serving)}
                  </Text>
                </Box>
              );
            })}
        </ProductBox>
        {newRecipe.length > 0 && (
          <Button className="newMeal-button" onClick={submitRecipe}>
            ADD RECIPE
          </Button>
        )}
        <Text className="summary-span">Summary: {countKcal}</Text>
      </SectionStyled>
    </RecipesStyled>
  );
}

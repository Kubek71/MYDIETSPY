import React from "react";
import { HomePageStyled } from "./Styles/HomePageStyle";
import { Box } from "./Styles/Box";
import { ProductBox } from "./Styles/ProductBoxStyled";
import { Text, Button } from "./Styles/Global";
import axios from "axios";
import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { auth, database } from "../Helpers/FirebaseConfig";
import { ref, set, push, onValue } from "firebase/database";
import { currentDate } from "../Helpers/CurrentDate";

export default function HomePage(props) {
  // list od products in meal
  const [productList, setProductList] = useState([]);
  // keyword from product input
  const [inputKeyword, setInputKeyword] = useState("");
  // product from food API
  const [product, setProduct] = useState();
  const [countKcal, setCountKcal] = useState();
  const [isProductSelected, setIsProductSelected] = useState(false);
  const { register, handleSubmit } = useForm();
  const gramature = 0.01;
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
  }, [productList]);

  // Adding choosed products to a meal on submitting the form
  const createMeal = (data, event) => {
    setIsProductSelected(true);
    setProduct(null);
    const currentProduct = product[0].food;
    const currentServing = data.serving * gramature;
    setProductList((prevState) => [
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

  const pushMealToDatabase = () => {
    push(
      ref(database, `users/${auth.currentUser.uid}/meals/${date}/`),
      productList
    ).then((res) => {
      alert("udalo sie");
    });
  };

  const submitMeal = () => {
    if (productList.length > 0) {
      setIsProductSelected(false);
      pushMealToDatabase();
      setProductList([]);
    }
  };

  const count = () => {
    const productKcalAmount = productList.reduce((totalKcal, element) => {
      return Math.floor(totalKcal + element.product_kcalInServing);
    }, 0);
    setCountKcal(productKcalAmount);
  };

  return (
    <HomePageStyled>
      <h1>TODAY'S SUMMARY</h1>
      <div className="form-container">
        <h2>NEW MEAL</h2>
        <form onSubmit={handleSubmit(createMeal)}>
          <Box className="product-input-box">
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
        <Button>CHOOSE YOUR RECIPE</Button>

        <ProductBox>
          {isProductSelected === true &&
            productList.map((element, i) => {
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
        {productList.length > 0 && (
          <Button className="newMeal-button" onClick={submitMeal}>
            ADD MEAL
          </Button>
        )}
        <Text>Summary: {countKcal}</Text>
      </div>
    </HomePageStyled>
  );
}

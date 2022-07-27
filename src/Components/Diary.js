import React from "react";
import { DiaryStyled } from "./Styles/DiaryStyled";
import { Container } from "./Styles/Container";
import { Box } from "./Styles/Box";
import { Text } from "./Styles/Global";
import { database, auth } from "../Helpers/FirebaseConfig";
import { ref, onValue } from "firebase/database";
import { useState, useEffect, useRef } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { currentDate } from "../Helpers/CurrentDate";
export default function Diary(props) {
  const [choosedDate, setChoosedDate] = useState(currentDate());
  const [date, setDate] = useState(new Date());
  const [todayMealsList, setTodayMealsList] = useState([]);

  useEffect(() => {
    const currentDateMeals = ref(
      database,
      `users/${auth.currentUser.uid}/meals/${choosedDate}`
    );

    onValue(currentDateMeals, (snapshot) => {
      if (snapshot.val() !== null || undefined) {
        const data = Object.entries(snapshot.val());
        setTodayMealsList(data);
      } else if (snapshot.val() == null || undefined) {
        setTodayMealsList([]);

      }
    });

  }, [choosedDate]);

  const count = (meal) => {
    return meal.reduce((totalKcal, element) => {
      return Math.floor(totalKcal + element.product_kcalInServing);
    }, 0); }

  return (
    <>
      <DiaryStyled>
        <DatePicker
          className="date-picker"
          selected={date}
          dateFormat="dd-MM-yyyy"
          onChange={(date) => {
            setDate(date);
            setChoosedDate(
              `${date.getDate()}-${
                date.getMonth() + 1 < 10
                  ? `0${date.getMonth() + 1}`
                  : `${date.getMonth() + 1}`
              }-${date.getFullYear()}`
            );
          }}
        ></DatePicker>

        {todayMealsList.length > 0 &&
          todayMealsList.map((element, i) => {
            return (
              <Box className="meals-container">
                <Text className="meal-number">Meal {i + 1}</Text>
                <Box className="meal-box">
                  {element[1].map((meal) => {
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
                                serving:{meal.product_serving * 100}
                                <strong>G</strong>
                              </Text>
                            </td>
                            <td>
                              <Text>
                                kcal:
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
                  TOTAL KCAL IN MEAL: <strong>{count(element[1])}</strong>
                </Text>
              </Box>
            );
          })}
          <Box className="summary-container">
            <h3>Summary of the day</h3>
            <Text>You've eated kcal this day</Text>
          </Box>
      </DiaryStyled>
    </>
  );
}

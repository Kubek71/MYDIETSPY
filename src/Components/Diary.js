import React from 'react'
import { DiaryStyled } from './Styles/DiaryStyled'
import { Container } from './Styles/Container'
import { Box } from './Styles/Box'
import { Text } from './Styles/Global'
import { database, auth } from '../Helpers/FirebaseConfig'
import { ref, onValue } from "firebase/database";
import { useState, useEffect } from 'react'
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { currentDate } from '../Helpers/CurrentDate'

export default function Diary(props) {

  const [date, setDate] = useState(currentDate());
  const [todayMealsList, setTodayMealsList] = useState([]);


  

  useEffect(()=>{
    const currentDateMeals = ref(database, `users/${auth.currentUser.uid}/meals/${date}`);

    if(todayMealsList.length === 0){
      onValue(currentDateMeals, (snapshot) => {
        const data = Object.entries(snapshot.val());
        setTodayMealsList(data)

      })
    } 
    console.log(date)
  }, [date])

  const count = (meal) => {
    
    return  meal.reduce((totalKcal, element) => {
        return Math.floor(totalKcal + element.product_kcalInServing);
      }, 0);
  };

  useEffect(()=> {
    console.log(todayMealsList)

  },[todayMealsList])


  return (
  <>
 <DatePicker selected={new Date()}
  dateFormat="dd-MM-yyyy"
  onChange={(date) => setDate(date)
} />

    <DiaryStyled>
        <Box>
  
          <h2>
            
          </h2>
        </Box>
        { todayMealsList.length > 0 &&

        todayMealsList.map((element, i) => {
          return (
            <Box className='meals-container'>
              <Text className='meal-number'>Meal {i +1}</Text>
              <Box className='meal-box'>
              {
                                     element[1].map(meal => {
                                      return (
                     
                                        <table>
                                            <thead>
                                              <tr>
                                                <th>{meal.product_name}</th>
                                              </tr>
                                            </thead>
                                            <tbody>
                                              <tr>
                                                <td><Text>serving:{meal.product_serving * 100}<strong>G</strong></Text></td>
                                                <td><Text>kcal: <strong>{meal.product_kcalInServing}</strong></Text></td>
                                              </tr>
                                            </tbody>
                                          </table>
                                    
                                        )
                                    })
              }
              
              </Box>
              <Text className='meal-summary'>TOTAL KCAL IN MEAL: <strong>{count(element[1])}</strong></Text>

            </Box>
            )
          
        })}
        
    </DiaryStyled>
    </>
  )
}



 
    
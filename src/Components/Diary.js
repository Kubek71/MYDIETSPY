import React from 'react'
import { DiaryStyled } from './Styles/DiaryStyled'
import { Container } from './Styles/Container'
import { Box } from './Styles/Box'
import { Text } from './Styles/Global'
import { database, auth } from '../Helpers/FirebaseConfig'
import { ref, onValue } from "firebase/database";
import { useState, useEffect } from 'react'

export default function Diary(props) {

  const [todayMealsList, setTodayMealsList] = useState([]);
  let currentDate = props.currentDate;

  useEffect(()=>{
    const currentDateMeals = ref(database, `users/${auth.currentUser.uid}/meals/`);
    console.log(todayMealsList.length)

    if(todayMealsList.length === 0){
      onValue(currentDateMeals, (snapshot) => {
        const data = Object.entries(snapshot.val());
        data.forEach(meal => {
          setTodayMealsList(meal)
        })
      })
    } 
  }, [])

  useEffect(()=> {
    console.log(todayMealsList)
  }, [todayMealsList])

  return (
    <DiaryStyled>
        <Box>
          <h2>
            19/07/2022
          </h2>
        </Box>
        {/* { props.isMealSubmited === true &&

              <Box className='meal-box'>
                {props.productList.map((element, i) => {
                  return (
                  <>
                  <table>
                      <thead>
                        <tr>
                          <th>{element.product_name}</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr>
                          <td><Text>serving: <strong>{element.product_serving * 100}G</strong></Text></td>
                          <td><Text>kcal: <strong>{element.product_kcalInServing}</strong></Text></td>
                        </tr>
                      </tbody>
                    </table>
                    </>
                  )
                })
          }
            </Box>
            
          

        } */}
        
    </DiaryStyled>
  )
}

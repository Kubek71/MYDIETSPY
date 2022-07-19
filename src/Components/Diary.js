import React from 'react'
import { DiaryStyled } from './Styles/DiaryStyled'
import { Container } from './Styles/Container'
import { Box } from './Styles/Box'
import { Text } from './Styles/Global'
export default function Diary(props) {
  return (
    <DiaryStyled>
        <Box>
          <h2>
            19/07/2022
          </h2>
        </Box>
        { props.isMealSubmited === true &&

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
            
          

        }
        
    </DiaryStyled>
  )
}

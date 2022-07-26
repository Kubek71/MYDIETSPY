 export const currentDate = () => {
    let today = new Date();
    let month = today.getMonth() + 1;
    let year = today.getFullYear()
    let day = today.getDate(); 
   

   return `${day}-${month<10?`0${month}`:`${month}`}-${year}`

 }
 
 export let today = new Date();
 export let month = today.getMonth() + 1;
 export let year = today.getFullYear()
 export let day = today.getDate(); 

import axios from "axios";


const API_KEY = process.env.REACT_APP_API_KEY


export const getSpecificBill = async (congress, billId) => {
    const { data: { results } } = await axios.get(`https://api.propublica.org/congress/v1/${congress}/bills/${billId}.json`, {
       headers: {
           "X-API-Key": API_KEY
       }
   })
   return results[0]
}
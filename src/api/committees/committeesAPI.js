import axios from "axios";


const API_KEY = "";


export const getCommittees = async (congress, chamber) => {
     const { data: { results }} = await axios.get(`https://api.propublica.org/congress/v1/${congress}/${chamber}/committees.json`, {
        headers: {
            "X-API-Key": API_KEY
        }
    })
    // console.log(results)
    return results
}

export const getSpecificCommittee = async (congress, chamber, committeeId) => {
    // const { data } = await axios.get(`https://api.propublica.org/congress/v1/115/${chamber}/committees/${committeeId}.json`, {
    const { data: { results } } = await axios.get(`https://api.propublica.org/congress/v1/${congress}/${chamber}/committees/${committeeId}.json`, {
        headers: {
            "X-API-Key": API_KEY
        }
    })
    console.log(results)
   return results[0]
}
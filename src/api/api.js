import axios from "axios";


const API_KEY = "";


export const getAllMembers = async (congress, chamber) => {
     const { data: { results }} = await axios.get(`https://api.propublica.org/congress/v1/${congress}/${chamber}/members.json`, {
        headers: {
            "X-API-Key": API_KEY
        }
    })
    // console.log(results)
    return results[0]
}

export const getOneCongressMember = async (memberID) => {
     const { data: { results } } = await axios.get(`https://api.propublica.org/congress/v1/members/${memberID}.json`, {
        headers: {
            "X-API-Key": API_KEY
        }
    })
    return results[0]
}

export const getOneCongressMemberExpenses = async (memberID, year, quarter) => {
     const { data: { results } } = await axios.get(`https://api.propublica.org/congress/v1/members/${memberID}/office_expenses/${year}/${quarter}.json`, {
        headers: {
            "X-API-Key": API_KEY
        }
    })
    return results
}
import axios from "axios";


const API_KEY = process.env.REACT_APP_API_KEY;

const committeesAPI = axios.create({
    baseURL: 'https://api.propublica.org/congress/v1',
    headers: { "X-API-Key": API_KEY },
  });


export const getCommittees = async (congress, chamber) => {
    const { data: { results }} = await committeesAPI.get(`/${congress}/${chamber}/committees.json`);
    // console.log(results)
    return results
}

export const getSpecificCommittee = async (congress, chamber, committeeId) => {
    const { data: { results } } = await committeesAPI.get(`/${congress}/${chamber}/committees/${committeeId}.json`);
    // console.log(results)
    return results[0]
}
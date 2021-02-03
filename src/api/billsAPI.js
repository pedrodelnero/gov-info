import axios from "axios";


const API_KEY = process.env.REACT_APP_API_KEY;

const committeesAPI = axios.create({
    baseURL: 'https://api.propublica.org/congress/v1',
    headers: { "X-API-Key": API_KEY },
  });




export const getRecentBills = async (congress, chamber) => {
    const { data: { results } } = await committeesAPI.get(`/${congress}/senate/bills/vetoed.json`);
    return results[0]
}

export const getSpecificBill = async (congress, billId) => {
    const { data: { results } } = await committeesAPI.get(`/${congress}/bills/${billId}.json`);
    return results[0]
}
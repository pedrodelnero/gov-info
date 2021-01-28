import axios from "axios";


const API_KEY = process.env.REACT_APP_API_KEY;

const membersAPI = axios.create({
    baseURL: 'https://api.propublica.org/congress/v1',
    headers: { "X-API-Key": API_KEY },
  });


export const getAllMembers = async (congress, chamber) => {
    const { data: { results }} = await membersAPI.get(`/${congress}/${chamber}/members.json`);
    // console.log(results)
    return results[0]
}

export const getOneCongressMember = async (memberID) => {
    const { data: { results } } = await membersAPI.get(`/members/${memberID}.json`);
    return results[0]
}

export const getBillCosponsoredByOneMember = async (memberID) => {
    const { data: { results } } = await membersAPI.get(`/members/${memberID}/bills/cosponsored.json`);
    return results[0].bills
}

export const getOneCongressMemberExpenses = async (memberID, year, quarter) => {
    const { data: { results } } = await membersAPI.get(`/members/${memberID}/office_expenses/${year}/${quarter}.json`);
    return results
}
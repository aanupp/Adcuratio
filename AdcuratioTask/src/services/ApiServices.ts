import apisauce from 'apisauce';
import IApiServices from './ApiServicesInterfaces';

const BASEURL = 'https://api.stackexchange.com';
const create = (baseURL = `${BASEURL}`): IApiServices => {
  const api = apisauce.create({
    baseURL,
    headers: {
      'Cache-Control': 'no-cache',
      'Content-Type': 'application/json',
      // Authorization: '',
    },
    timeout: 10000,
  });
  const getAllQuestions = async (data: any) => {
    const response = await api.get(
      `${BASEURL}/2.3/questions?page=${data.pageNo}&pageSize=10&order=desc&sort=activity&tagged=${data.name}&site=stackoverflow`,
    );
    return response;
  };

  return {
    getAllQuestions,
  };
};

export default {
  create,
};

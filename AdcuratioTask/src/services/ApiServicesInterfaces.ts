interface IApiServices {
  // home api's
  getAllQuestions: (reqBody: any) => Promise<any>;
}

export default IApiServices;

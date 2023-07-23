import {createSlice} from '@reduxjs/toolkit';

export interface IQuestionsState {
  isLoading: boolean;
  questionsData: any;
  errorMessage: string;
  isEndReached: boolean;
}
const initialState: IQuestionsState = {
  isLoading: false,
  questionsData: {},
  errorMessage: '',
  isEndReached: false,
};

export const QuestionsRedux: any = createSlice({
  name: 'QuestionsRedux',
  initialState,
  reducers: {
    setQuestionsState: (state: any, action: any) => {
      const newState = {
        ...state,
      };
      newState[action.payload.key] = action.payload.value;
      return newState;
    },
    getAllQuestionsRequest: (state: any, action: any) => {
      const newState = {
        ...state,
        isLoading: !action?.payload?.endReached ? true : false,
        isEndReached: action?.payload?.endReached ? true : false,
      };
      return newState;
    },
    getAllQuestionsSuccess: (state: any, action: any) => {
      let stackOverFlowQuestions = {};
      if (
        state.questionsData[action?.payload?.routeName] &&
        !action?.payload?.endReached
      ) {
        stackOverFlowQuestions = {...state?.questionsData};
      } else if (
        state.questionsData[action?.payload?.routeName] &&
        action?.payload?.endReached
      ) {
        stackOverFlowQuestions = {
          ...state?.questionsData,
          [action?.payload?.routeName]: {
            ...state?.questionsData[action?.payload?.routeName],
            items: [
              ...state?.questionsData[action?.payload?.routeName]?.items,
              ...action?.payload?.response?.items,
            ],
          },
        };
      } else {
        stackOverFlowQuestions = {
          ...state?.questionsData,
          [action?.payload?.routeName]: {
            ...action?.payload?.response,
            pageNo: 1,
          },
        };
      }

      const newState = {
        ...state,
        isLoading: false,
        questionsData: stackOverFlowQuestions,
        isEndReached: false,
      };
      return newState;
    },
    getAllQuestionsFailure: (state: any, action: any) => {
      const response = action?.payload?.response;
      const newState = {
        ...state,
        isLoading: false,
        errorMessage: response?.error_message
          ? response?.error_message
          : 'Please Check Your Connection',
        isEndReached: false,
      };
      return newState;
    },
  },
});
export const {
  setQuestionsState,
  getAllQuestionsRequest,
  getAllQuestionsSuccess,
  getAllQuestionsFailure,
} = QuestionsRedux.actions;

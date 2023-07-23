import {SagaIterator} from '@redux-saga/types';
import {call, put} from 'redux-saga/effects';
import {QuestionsRedux} from '../redux/questions-redux/QuestionsRedux';

export function* QuestionsSaga(api: any, action: any): SagaIterator {
  try {
    const response = yield call(api.getAllQuestions, action.payload);
    let data = {
      response: response.data,
      routeName: action?.payload?.name,
      endReached: action?.payload?.endReached,
    };
    console.log(
      response.data,
      'response.dataresponse.dataresponse.dataresponse.data',
    );

    if (response.status === 200) {
      yield put(QuestionsRedux.actions.getAllQuestionsSuccess(data));
    } else {
      yield put(QuestionsRedux.actions.getAllQuestionsFailure(data));
    }
  } catch (error) {
    yield put(QuestionsRedux.actions.getAllQuestionsFailure(error));
  }
}

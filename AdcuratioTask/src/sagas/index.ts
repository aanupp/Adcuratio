import {takeEvery} from 'redux-saga/effects';
import ApiServices from '../services/ApiServices';
import {QuestionsSaga} from './QuestionsSaga';
import {QuestionsRedux} from '../redux/questions-redux/QuestionsRedux';

export const api = ApiServices.create();

export default function* root() {
  yield takeEvery(
    QuestionsRedux.actions.getAllQuestionsRequest,
    QuestionsSaga,
    api,
  );
}

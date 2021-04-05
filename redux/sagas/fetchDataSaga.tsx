import {takeEvery, put} from 'redux-saga/effects'
import {types} from '../actionTypes/types'
import liftData from '../../data/data';
import { lift } from '../actions/buttonActions';

function* asyncButtonClick(){
  try{
    const response = {liftData};
    console.log(response);
    yield put(lift())
  }
  catch(error){
    console.log(error);
  }
}
export function* fetchDataSaga(){

  yield takeEvery( types.ELEVATE, asyncButtonClick)
}

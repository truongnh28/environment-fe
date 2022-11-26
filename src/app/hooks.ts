/** file overview
 *  @useAppDispatch to replace useDispatch, redux implicite typing for dispatch is AppDispatch, and midleware apply able
 *  @useAppSelector to replace useSelector, you donnot have to define type, redux implicite understand the state you remind is rootState
 */

import { TypedUseSelectorHook, useDispatch, useSelector } from 'react-redux';

// Use throughout your app instead of plain `useDispatch` and `useSelector`

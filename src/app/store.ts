import { configureStore, ThunkAction, Action } from '@reduxjs/toolkit';
import userReducer from '../models/user';
import createSagaMiddleware from 'redux-saga';
import rootSaga from './rootSaga';

const sagaMidleware = createSagaMiddleware();
export const store = configureStore({
    reducer: {
        user: userReducer,
    },
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware().concat(sagaMidleware),
});

sagaMidleware.run(rootSaga);

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
    ReturnType,
    RootState,
    unknown,
    Action<string>
>;

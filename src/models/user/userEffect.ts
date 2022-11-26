import { ActionReducerMapBuilder } from '@reduxjs/toolkit';
import { userState } from './userState';

const

export const userEffect = (
    builder: ActionReducerMapBuilder<typeof userState>
) => {
    builder.addCase(login, (state, action) => {
        //
    });
};

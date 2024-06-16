import theme from '@/utils/static_theme';
import { configureStore, createSlice } from '@reduxjs/toolkit'

const currentThemeSlice = createSlice({
    name: "currentTheme",
    initialState: { value: theme.dark },
    reducers: {
        switchTheme: (state, action) => {
            state.value = action.payload
        }
    }
})

export const {switchTheme} = currentThemeSlice.actions;

export const store = configureStore({
    reducer: {
        currentTheme: currentThemeSlice.reducer,
    },
})
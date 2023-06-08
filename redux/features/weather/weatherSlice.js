import { createSlice,  createAsyncThunk, isPending } from "@reduxjs/toolkit";

const intialState = {
    weatherResult: null,
    isSuccess: false,
    isLoading: false,
    isError: false, 
    message: ''
}

//Fetch the weather
export const fetchWeather = createAsyncThunk('weather/fetchweather', async(thunkAPI) => {
    try {
        const results = await fetchWeather();
        return results
    } catch (error) {
        const message = 
        (error.response && error.response.data 
            && error.response.data.message) || error.message || error.toString()
        return thunkAPI.rejectWithValue(message)
    }
})

export const weatherSlice = createSlice({
    name: 'weather',
    intialState,
    reducers : {
        reset: (state) => intialState
    },
    extraReducers : (builder) => {
        builder
            .addCase(fetchWeather.pending, (state) => {
                state.isLoading = true
            })
            .addCase(fetchWeather.fulfilled, (state) => {
                state.isLoading = false
                state.isSuccess = true
                state.weatherResult = action.payload
            })
            .addCase(fetchWeather.rejected, (state) => {
                state.isLoading = false
                state.isError = true
                state.message = action.payload
            })
    }
})


export const { reset } = weatherSlice.actions
export default weatherSlice.reducer
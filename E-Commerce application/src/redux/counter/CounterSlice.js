import { createSlice } from '@reduxjs/toolkit'
const initialState = {
  counts : {},
}

export const counterSlice = createSlice({
  name: 'counter',
  initialState,
  reducers: {
    increment: (state , action) => {
      const image = action.payload
      state.counts[image] = (state.counts[image] || 0) + 1

    },
    decrement: (state , action) => {
      const image = action.payload
      if(state.counts[image] >= 0){
        state.counts[image] = (state.counts[image] || 0) - 1
      }
      state.counts[image] = 0
      
    },
  },
})

export const { increment, decrement, incrementByAmount } = counterSlice.actions

export default counterSlice.reducer
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

export const fetchData = createAsyncThunk(
  'data/fetchData',
  async function () {
    try {
      const response = await fetch(`https://625d96c795cd5855d62318dc.mockapi.io/cocktail`)
        .then((res) => res.json())
        .then((data) => data);
      return response;
    } catch(err) {
      console.log(err.message);
    }
  }

)

export const fetchDetailData = createAsyncThunk(
  'data/fetchDetailData',
  async function ({ id }) {
    try {
      const response = await fetch(`https://625d96c795cd5855d62318dc.mockapi.io/cocktail/${id}`)
        .then((res) => res.json());
      return response;
    } catch(err) {
      console.log(err.message);
    }
  }
)

const initialState = {
  defaultData: [],
  data: [],
  detailData: [],
  status: 'Нет данных',
  statusDetail: 'Нет данных',
  filter: 0,
  searchValue: ''
};

export const dataSlice = createSlice({
  name: 'data',
  initialState,
  reducers: {
    setData(state, action) {
      state.data = action.payload
    },
    filterData(state, action) {
      let tag = action.payload;
      state.filter = state.filter === tag ? 0 : tag;
      state.data = state.defaultData;
      if (state.filter !== 0) {
        state.data = state.defaultData.filter(data => (data.tags.filter(tags => tags === state.filter) == state.filter) == true);
      }
    },
    searchCoctail(state, action) {
      state.searchValue = action.payload;
      state.data = state.defaultData;
      if (state.searchValue != '') {
        // state.data = state.defaultData.filter(data => data.name.toLowerCase().includes(state.searchValue.toLowerCase()));
        state.data = state.defaultData.filter(data => data.name.toLowerCase().startsWith(state.searchValue.toLowerCase()));
        if (state.data.length === 0) {
          state.data = [
            {
              name: "Пусто",
              shortDesciption: "Попробуйте изменить запрос",
              webpPrev: "/react-pub/images/no-result.webp",
              jpgPrev: "/react-pub/images/no-result.jpg"
            }
          ]
        }
      }
    },
  },
  extraReducers: {
    [fetchData.pending]: (state) => {
      state.status = "Загрузка";
      if (state.searchValue != '') {
        state.searchValue = '';
      }
    },
    [fetchData.fulfilled]: (state, action) => {
      state.status = "fulfilled";
      state.defaultData = action.payload;
      state.data = action.payload;
    },
    [fetchData.rejected]: (state) => {
      state.status = "Ошибка";
    },
    [fetchDetailData.pending]: (state) => {
      state.statusDetail = "Загрузка";
    },
    [fetchDetailData.fulfilled]: (state, action) => {
      state.statusDetail = "fulfilled";
      state.detailData = action.payload;
    },
    [fetchDetailData.rejected]: (state) => {
      state.statusDetail = "Ошибка";
    },
  },
});

export const { setData, filterData, searchCoctail } = dataSlice.actions;
export default dataSlice.reducer;
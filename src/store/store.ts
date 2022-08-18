import {configureStore, PreloadedState} from "@reduxjs/toolkit";
import {createWrapper} from "next-redux-wrapper";
import {kinoviewAPI} from "services/KinoviewService";
import { loadMoreReducer } from "./slices/loadMoreSlice";
import { filterReducer } from "./slices/filterSlice";
import { searchMovieReducer } from "./slices/searchMovieSlice";
import { paginationReducer } from "./slices/paginationSlice";
import { burgerReducer } from "./slices/burgerSlice";
import {useMemo} from 'react'
import {TypedUseSelectorHook, useSelector} from "react-redux";

let store: AppStore

export const initStore = (preloadedState = {}) => {
  return configureStore({
    reducer: {
      load: loadMoreReducer,
      search: searchMovieReducer,
      filter: filterReducer,
      paginate: paginationReducer,
      burger: burgerReducer,
      [kinoviewAPI.reducerPath]: kinoviewAPI.reducer,
    },
    preloadedState,
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(kinoviewAPI.middleware),
  });
}

export const initializeStore = (preloadedState: PreloadedState<RootState>) => {
  let _store = store ?? initStore(preloadedState)

  if (preloadedState && store) {
    _store = initStore({...store.getState(), ...preloadedState})
  }

  if (typeof window === 'undefined') return _store
  if (!store) store = _store

  return _store
}

export function useStore(initialState: RootState) {
  const store = useMemo(() => initializeStore(initialState), [initialState])
  return store
}

export type AppStore = ReturnType<typeof initStore>
export type AppDispatch = AppStore['dispatch']
export type RootState = ReturnType<AppStore['getState']>


export const useTypedSelector: TypedUseSelectorHook<RootState> = useSelector;
export const wrapper = createWrapper<AppStore>(initStore, {debug: false})
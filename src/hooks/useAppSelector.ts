import { TypedUseSelectorHook, useSelector } from 'react-redux'
import type { RootState } from '../components/store'

export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector

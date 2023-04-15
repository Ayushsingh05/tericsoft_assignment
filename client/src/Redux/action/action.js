
import { ADD_DATA } from './types';

export  const adddata=(data)=>(
    {
        type:ADD_DATA,
        payload:data,
    }
)

export const getFilteredData = (data) =>(
    {
        type:FILTER_DATA,
        payload:data,
    }
)
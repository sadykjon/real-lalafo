import { INCREMENT, DECROMENT } from '../types'

export const increment = () => {
    return {
      type: INCREMENT,
    };
  };
  
  export const decroment = () => {
    return {
      type: DECROMENT,
    };
  };
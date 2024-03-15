import {
    Review,
    ReviewActionTypes,
    LOAD_REVIEWS_SUCCESS,
    ADD_REVIEW
  } from '../types/reviewTypes';
    

  
  // Définissez l'état initial de votre reducer
  interface ReviewsState {
    reviews: Review[];
  }
  
  const initialState: ReviewsState = {
    reviews: [],
  };
  
  // Le reducer qui gère les actions liées aux critiques
  const reviewsReducer = (
    state = initialState,
    action: ReviewActionTypes
  ): ReviewsState => {
    switch (action.type) {
      case LOAD_REVIEWS_SUCCESS:
        return {
          ...state,
          reviews: action.payload,
        };
      case ADD_REVIEW:
        return {
          ...state,
          reviews: [...state.reviews, action.payload],
        };
      // Ajoutez d'autres cas ici pour gérer différentes actions
      default:
        return state;
    }
  };
  
  export default reviewsReducer;
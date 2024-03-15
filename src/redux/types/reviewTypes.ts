export const LOAD_REVIEWS_SUCCESS = 'LOAD_REVIEWS_SUCCESS';
export const ADD_REVIEW = 'ADD_REVIEW';
// Ajoutez d'autres types d'actions selon vos besoins

// Définissez une interface pour le type de l'état des critiques
export interface Review {
  id: number;
  name: string;
  review: string;
  date: string;
}

// Définissez les interfaces pour les actions
interface LoadReviewsSuccessAction {
  type: typeof LOAD_REVIEWS_SUCCESS;
  payload: Review[];
}

interface AddReviewAction {
  type: typeof ADD_REVIEW;
  payload: Review;
}

// Union des types d'actions
export type ReviewActionTypes = LoadReviewsSuccessAction | AddReviewAction;
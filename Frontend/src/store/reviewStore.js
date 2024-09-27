import {create} from 'zustand';

export const useReviewStore = create((set) => {
  // Retrieve existing reviews from local storage to ensure its permanent existence 
  const existingReviews = JSON.parse(localStorage.getItem('reviews')) || {};

  return {
    reviews: existingReviews,
    addReview: (bookTitle, review) => {
      set((state) => {
        const bookReviews = state.reviews[bookTitle] || [];
        const newReviews = { ...state.reviews, [bookTitle]: [...bookReviews, review] };
        
        // Saving to local storage
        localStorage.setItem('reviews', JSON.stringify(newReviews));

        return { reviews: newReviews };
      });
    },
  };
});

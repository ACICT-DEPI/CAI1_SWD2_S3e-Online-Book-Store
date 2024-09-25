import create from 'zustand';

export const useReviewStore = create((set) => ({
  reviews: {},
  addReview: (bookTitle, review) => set((state) => {
    const bookReviews = state.reviews[bookTitle] || [];
    return {
      reviews: { ...state.reviews, [bookTitle]: [...bookReviews, review] }
    };
  }),
}));

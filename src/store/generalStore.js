import create from 'zustand';

export const useStore = create((set) => ({
  general: {
    a: null,
    b: null,
    c: null
  },
  onSaveValues: (a, b, c) => (
    set(state => ({
      ...state,
      general: { a, b, c }
    }))
  )
}));
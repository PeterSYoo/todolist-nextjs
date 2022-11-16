import create from 'zustand';

interface SearchStore {
  searchTerm: string;
  updateSearchTerm: (st: string) => void;
}

export const useSearchStore = create<SearchStore>((set) => ({
  searchTerm: '',
  updateSearchTerm: (st: string) => set((state) => ({ searchTerm: st })),
}));

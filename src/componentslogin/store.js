import create from 'zustand';

const useStore = create(set => ({
  username: '',
  password: '',
  setUsername: (username) => set(() => ({ username })),
  setPassword: (password) => set(() => ({ password })),
}));

export default useStore;

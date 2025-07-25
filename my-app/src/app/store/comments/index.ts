import { create } from "zustand";

interface Comments {
  comments: [];
}

const useComments = create<Comments>((set) => ({
  comments: [],
}));

export default useComments;

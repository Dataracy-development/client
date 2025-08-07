import { create } from "zustand";

interface FindPwStore {
    email: string;
    isSent: boolean;

    setEmail: (email: string) => void;
    setIsSent: (isSent: boolean) => void;
}

export const useFindPwStore = create<FindPwStore>((set) => ({
    email: "",
    isSent: false,

    setEmail: (email) => set({ email }),
    setIsSent: (isSent) => set({ isSent }),
}));

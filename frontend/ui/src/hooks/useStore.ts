import { create } from 'zustand'
import { Stripe, loadStripe } from "@stripe/stripe-js";



interface User {
    id: number,
    email: string
}

interface UserState {
    user: User | null,
    setUser: (user: User | null) => void

}

export const useUserStore = create<UserState>((set) => ({
    user: null as User | null,
    setUser: (user: User | null) => set({ user }),
}))

interface ClientSecretState {
    clientSecret: string,
    setClientSecret: (clientSecret: string) => void
}
export const useClientSecretStore = create<ClientSecretState>((set) => ({
    clientSecret: '',
    setClientSecret: (clientSecret: string) => set({ clientSecret }),
}))

interface stripePromiseState {
    stripePromise: Promise<Stripe | null>,
}

const PK_KEY = import.meta.env.VITE_STRIPE_PUBLIC_KEY;

export const useStripePromiseStore = create<stripePromiseState>(() => ({
    stripePromise:loadStripe(PK_KEY)
}))
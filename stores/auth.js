// store/auth.ts
import { defineStore } from 'pinia'
import {useMyFetch} from "~/composables/useMyFetch.js";


export const useAuthStore = defineStore({
    id: 'auth',
    state: () => ({
        /* Initialize state from local storage to enable user to stay logged in */
        user: typeof window !== 'undefined' ? JSON.parse(localStorage.getItem('user')) : null,
        profile: {role: 'anon'}
    }),
    actions: {
        async login(loginForm) {
            await useMyFetch(`login`, {
                method: 'POST',
                body: loginForm,
                credentials: 'include'
            })
                .then(response => {
                    this.user = response.user
                    localStorage.setItem('user', JSON.stringify(this.user))
                })
                .catch(error => { throw error })
        },
        async logout() {
            await useMyFetch(`logout`, {
                method: 'POST',
                body: {},
                credentials: 'include'
            })
            this.user = null
            this.profile = {role: 'anon'}
            localStorage.removeItem('user')
        },
        async signup(registerForm) {
            await useMyFetch(`signup`, {
                method: 'POST',
                body: registerForm,
                credentials: 'include'
            })
                .then(response => {
                    this.user = response.user
                    localStorage.setItem('user', JSON.stringify(this.user))
                })
                .catch(error => { throw error })
        },
        async getProfile() {
            if (typeof window !== 'undefined') {
                await useMyFetch(`api/profile`, {
                    method: 'GET',
                    credentials: 'include'
                }).then(response => {
                    this.profile = response.user
                })
            }
        }
    }
})
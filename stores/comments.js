import { defineStore } from 'pinia'
import {useMyFetch} from "~/composables/useMyFetch.js";

// const config = useRuntimeConfig()
const baseUrl = 'http://localhost:8081' ///config.public.API

export const useCommentsStore = defineStore({
    id: 'comments',
    state: () => ({
        /* Initialize state from local storage to enable user to stay logged in */
        comments: []
    }),
    actions: {
        async getComments(post_id) {
            await useMyFetch(`comments/${post_id}`, {
                method: 'GET'
            })
                .then(response => {
                    this.comments = response.comments
                })
                .catch(error => {throw error})
        },
        async postComment(commentForm) {
            await useMyFetch(`comments`, {
                method: 'POST',
                body: commentForm,
                credentials: 'include'
            })
        }
    }
})
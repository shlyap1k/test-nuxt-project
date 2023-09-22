// store/auth.ts
import { defineStore } from 'pinia'
import {useMyFetch} from "~/composables/useMyFetch.js";

// const config = useRuntimeConfig()

export const usePostsStore = defineStore({
    id: 'posts',
    state: () => ({
        /* Initialize state from local storage to enable user to stay logged in */
        posts: [],
        post: {}
    }),
    actions: {
        async getPosts() {
            await useMyFetch(`posts`, {
                method: 'GET',
                server: true
            })
                .then(response => {
                    this.posts = response.posts
                })
                .catch(error => { throw error })
        },
        async getPost(post_id) {
            await useMyFetch(`posts/${post_id}`, {
                method: 'GET'
            })
                .then(response => {
                    this.post = response
                })
                .catch(error => {throw error})
        },
        async postPost(postForm) {
            await useMyFetch(`posts`, {
                method: 'POST',
                body: postForm,
                credentials: 'include'
            })
        }
    }
})
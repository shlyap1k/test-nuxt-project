export const useMyFetch = (request, opts) => {
    const config = useRuntimeConfig()
    return $fetch(request, { baseURL: config.public.API, ...opts })
}
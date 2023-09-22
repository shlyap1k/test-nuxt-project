export default () => {
    const config = useRuntimeConfig()
    return $fetch.create({
        baseURL: config.public.API
    })
}
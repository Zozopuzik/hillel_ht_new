
export const actionCreator = (type, payload) => {
    if (payload) {
        return { type, payload }
    } else {
        return { type }
    }

}
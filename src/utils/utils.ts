export const getApiMessage = (response: any) => {
    return response?.data || response?.data.message || 'Something went wrong'
}

export const checkApiResponse = (response: any) => {
    if (response?.status == 400 || response?.response == 'failure') {
        throw new Error(getApiMessage(response))
    }
}

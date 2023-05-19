const api = (() => {
    const BASE_URL = 'https://raw.githubusercontent.com/fnurhidayat/probable-garbanzo/main/data/'

    const getCars = async (): Promise<[]> => {
        const response = await fetch(`${BASE_URL}cars.min.json`)
        const responseJson = await response.json()
        return responseJson
    }

    return {
        getCars
    }
})()

export default api

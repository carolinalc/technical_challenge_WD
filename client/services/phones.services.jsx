import service from "./config.services";

const getAllPhonesService = () => {
    return service.get("/phones")
}

const getPhoneDetailsService = (id) => {
    return service.get(`/phone/${id}`)
}

export {
    getAllPhonesService,
    getPhoneDetailsService
}
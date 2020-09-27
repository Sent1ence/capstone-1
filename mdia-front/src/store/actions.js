import axios from './axiosConfig'

export default {
    async getUsers({ commit }) {
        const res = await axios.get('user')
        commit('updateUsers', res.data)
    },
    async getData({ commit }) {
        const res = await axios.get('water')
        commit('updateData', res.data)
    },
    async getEquipment({ commit }) {
        const res = await axios.get('equipment')
        commit('updateEquipment', res.data)
    },
    async postEquipment({ commit }, data) {
        const res = await axios.post('equipment', data)
        commit('updateEquipment', res.data)
    },
    async postEquipmentImage({ commit }, data) {
        let formData = new FormData();
        formData.append("image", data.equipment_image);
        formData.append("equipment_category", data.equipment_category);
        formData.append("equipment_name", data.equipment_name);
        try {
            const res = await axios.post('equipment/image', formData, {
                headers: { "Content-Type": "multipart/form-data" }
            });
            commit('updateEquipment', res.data)
        } catch (err) {
            console.log(err)
        }
    }
}   
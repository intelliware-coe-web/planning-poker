import {API_URL, putData} from '../../Fetch.api';

export const EstimateAPI = {
    update: (body) => putData(`${API_URL}/estimate`, body)
};
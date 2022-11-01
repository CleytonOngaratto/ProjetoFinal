import axios from 'axios';

const   DESTINO_API_BASE_URL = "http://localhost:8080/api/v1/destinos";

class DestinoService {

    getDestinos(){
        return axios.get(DESTINO_API_BASE_URL);
    }

    createDestino(destino){
        return axios.post(DESTINO_API_BASE_URL, destino);
    }

    getDestinoById(destinoId){
        return axios.get(DESTINO_API_BASE_URL + '/' + destinoId);
    }

    updateDestino(destino, destinoId){
        return axios.put(DESTINO_API_BASE_URL + '/' + destinoId, destino);
    }

    deleteDestino(destinoId){
        return axios.delete(DESTINO_API_BASE_URL + '/' + destinoId);
    }
}

export default new DestinoService();
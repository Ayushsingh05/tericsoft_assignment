import axios from "axios";
import http from "../http-common";

class AppServices {

    getAll(){
        return http.get('/');
    }
    getArmoury(){
        return http.get('/armoury');
    }
    getAquatics(){
        return http.get('/aquatics');
    }
    getCycling(){
        return http.get('/cycling');
    }
    getEquestrian(){
        return http.get('/equestrian');
    }
    getExtreme(){
        return http.get('/extreme');
    }
    getGolf(){
        return http.get('/golf');
    }
    getLakeAndSea(){
        return http.get('/lakeandsea');
    }
    getGymanstics(){
        return http.get('/gymnastics')
    }
}

export default new AppServices();
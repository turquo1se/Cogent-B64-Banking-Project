import axios from "axios"

class ApiService {
    fetchEmployee() {
        return axios.get('http://localhost:8081/employee/findAll');
    }
    fetchUsers() {
        return axios.get('https://jsonplaceholder.typicode.com/users');
    }
}
export default new ApiService();
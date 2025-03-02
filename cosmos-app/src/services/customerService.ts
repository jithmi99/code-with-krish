import axios from "axios";

const CUSTOMER_SERVICE_BASE_URL: string = 'http://localhost:3002/customers';

 export interface CustomerData {
    name: string;
    email: string;
    address: string;
 }

export const createCustomerService = async (customerData: CustomerData): Promise<any> => {
    return axios.post(CUSTOMER_SERVICE_BASE_URL, customerData);
}
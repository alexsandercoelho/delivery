const API_URL = 'http://192.168.5.167:8081';
//ou copie o endereco do heroku

export function fetchOrders(){
  return axios(`${API_URL}/orders`);
}

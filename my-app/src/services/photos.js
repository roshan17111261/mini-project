import axios from 'axios';


export const getPhotos = async() => {
    const response = await axios.get('https://jsonplaceholder.typicode.com/photos');
    if(response.status === 200){
        return response.data ;
    }
}
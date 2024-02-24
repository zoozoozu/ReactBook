import axios from 'axios';

const BOARD_API_BASE_URL = "http://localhost:8080/api/todo";

// class BoardService {
//     getBoards() {
//         return axios.get(BOARD_API_BASE_URL);
//     }
// }

interface ToDoListDto {
    key?:number;
    label:string;
}

export const ToDoListService = async(): Promise<ToDoListDto> => {
    const result = await axios.get(BOARD_API_BASE_URL);
    return result.data.slice(1,30);
}
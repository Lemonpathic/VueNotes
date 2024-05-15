import {defineStore} from "pinia"

export const useNumberStore = defineStore("numbers", {
    state: () =>{
        return{
            numbers: [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17]
        }
    }
})
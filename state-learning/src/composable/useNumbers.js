import {ref} from "vue";
export default function (){
    const numbers = ref([1,2,3])

    const addNumber = (num) =>{
        numbers.value.push(num)
    }


    return{
        numbers,
        addNumber
    }

}
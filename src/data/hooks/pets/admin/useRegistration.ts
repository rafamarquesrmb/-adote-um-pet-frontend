import { AxiosError } from "axios";
import { useState } from "react";
import { ApiService } from "../../../services/ApiService";


export function  useRegistration(){
    const [name, setName] = useState(''),
        [bioDescription, setBioDescription] = useState(''),
        [imgSlug, setImgSlug] = useState(''),
        [message, setMessage] = useState('');;

    function register(){
        if(formValidate()){
            ApiService.post('/pets/', {
                'name': name,
                'bio_description': bioDescription,
                'img_slug' : imgSlug
            })
            .then(()=>{
                cleanForm();
                setMessage('Pet cadastrado com sucesso!')
            })
            .catch((error: AxiosError)=>{
                setMessage(error.response?.data.message);
            })
            
        }else{
            setMessage('Preencha todos os campos')
        }
    }

    function formValidate(){
        return name.length > 2 && bioDescription.length > 20 && imgSlug.length>10
    }

    function cleanForm(){
        setName(''),
        setBioDescription(''),
        setImgSlug('')
    }

    return{
        name,
        bioDescription,
        imgSlug,
        setName,
        setBioDescription,
        setImgSlug,
        register,
        message,
        setMessage,
    }

}
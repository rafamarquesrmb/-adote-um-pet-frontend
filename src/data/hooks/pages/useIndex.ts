import { AxiosError } from "axios";
import { useEffect, useState } from "react";
import { Pet } from "../../@types/Pet";
import { ApiService } from "../../services/ApiService";


export function useIndex() {
    const [petsList, setPetsList] = useState<Pet[]>([]),
    [selectedPet, setSelectedPet] = useState<Pet | null>(null),
    [email,setEmail] = useState(''),
    [value,setValue] = useState(''),
    [snackMessage, setSnackMessage] = useState('');

    function adopt(){
        if(selectedPet !== null){
            if(adoptDataValidate()){
                ApiService.post('/adopt/',{
                    pet_id: selectedPet.id,
                    email: email,
                    value: value
                })
                .then(()=>{
                    setSelectedPet(null);
                    setSnackMessage('Pet adotado com sucesso!');
                    dialogReset();
                })
                .catch((error: AxiosError) => {
                    setSnackMessage(error.response?.data.message)
                })
            }else{
                setSnackMessage('Preencha todos os campos corretamente')
            }
        }else{
            setSnackMessage('Nenhum pet foi selecionado')
        }
    }

    function adoptDataValidate(){
        return email.length > 0 && value.length > 0
    }
    function dialogReset(){
        setEmail('');
        setValue('');
    }

    useEffect(()=>{
        ApiService.get('/pets/')
            .then((response)=>{
                setPetsList(response.data);
            })
    }, [])

    return {
        petsList,
        selectedPet,
        setSelectedPet,
        email,
        setEmail,
        value,
        setValue,
        snackMessage,
        setSnackMessage,
        adopt,
        dialogReset,
    };
}



// {
//     id: 1,
//     name: 'Bidu',
//     bio_description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolores ducimus architecto sit laborum praesentium inventore, officiis ullam assumenda asperiores, modi ratione quia vero voluptatem nostrum fugiat cupiditate at itaque rem.',
//     img_slug: 'https://media.gazetadopovo.com.br/viver-bem/2018/11/dog3-600x459-0e01be20.jpg',
// },
// {
//     id: 2,
//     name: 'Miau',
//     bio_description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolores ducimus architecto sit laborum praesentium inventore, officiis ullam assumenda asperiores, modi ratione quia vero voluptatem nostrum fugiat cupiditate at itaque rem.',
//     img_slug: 'https://www.granvitapet.com.br/sitedata//imgsdt/geral/gato-miando2.jpg',
// },
// {
//     id: 3,
//     name: 'Pluto',
//     bio_description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolores ducimus architecto sit laborum praesentium inventore, officiis ullam assumenda asperiores, modi ratione quia vero voluptatem nostrum fugiat cupiditate at itaque rem.',
//     img_slug: 'https://s2.glbimg.com/nvjFq8VRjyrpdQqaOeywz-5DFwY=/e.glbimg.com/og/ed/f/original/2021/08/27/captura_de_tela_2021-08-27_as_11.01.15.png',
// },
import { useState } from "react";
import { Pet } from "../../@types/Pet";


export function useIndex() {
    const [petsList, setPetsList] = useState(
        [
            {
                id: 1,
                name: 'Bidu',
                bio_description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolores ducimus architecto sit laborum praesentium inventore, officiis ullam assumenda asperiores, modi ratione quia vero voluptatem nostrum fugiat cupiditate at itaque rem.',
                img_slug: 'https://media.gazetadopovo.com.br/viver-bem/2018/11/dog3-600x459-0e01be20.jpg',
            },
            {
                id: 2,
                name: 'Miau',
                bio_description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolores ducimus architecto sit laborum praesentium inventore, officiis ullam assumenda asperiores, modi ratione quia vero voluptatem nostrum fugiat cupiditate at itaque rem.',
                img_slug: 'https://www.granvitapet.com.br/sitedata//imgsdt/geral/gato-miando2.jpg',
            },
            {
                id: 3,
                name: 'Pluto',
                bio_description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolores ducimus architecto sit laborum praesentium inventore, officiis ullam assumenda asperiores, modi ratione quia vero voluptatem nostrum fugiat cupiditate at itaque rem.',
                img_slug: 'https://s2.glbimg.com/nvjFq8VRjyrpdQqaOeywz-5DFwY=/e.glbimg.com/og/ed/f/original/2021/08/27/captura_de_tela_2021-08-27_as_11.01.15.png',
            },
        ]
    ),
    [selectedPet, setSelectedPet] = useState<Pet | null>(null),
    [email,setEmail] = useState(''),
    [value,setValue] = useState(''),
    [message, setMessage] = useState('');

    function adopt(){}



    return {
        petsList,
        selectedPet,
        setSelectedPet,
        email,
        setEmail,
        value,
        setValue,
        message,
        setMessage,
        adopt
    };
}
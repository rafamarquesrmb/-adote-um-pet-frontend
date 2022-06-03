import { Button } from "@mui/material"
import { Pet } from "../../../data/@types/Pet"
import { 
    ListStyled,
    ItemList,
    Photo,
    Informations,
    Name,
    Description
} from "./List.style"

import { TextService } from '../../../data/services/TextService';

interface ListProps{
    pets: Pet[];
}

export default function List(props: ListProps){
    const max_textsize = 190
    return(
        <ListStyled>

            {props.pets.map(pet =>(
                <ItemList key={pet.id}>
                <Photo src={pet.img_slug} alt={pet.name}/>
                <Informations>
                    <Name>{pet.name}</Name>
                    <Description>
                        {TextService.text_limit(pet.bio_description, max_textsize)}
                    </Description>
                    <Button
                        fullWidth 
                        variant={"contained"}>Adotar {pet.name}</Button>
                </Informations>
            </ItemList>
            ))}

            

        </ListStyled>        
    )
}
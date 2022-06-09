import { Link, Box } from '@mui/material';
import NextLink from 'next/link';
import {
    HeaderContainer,
    Logo,
    LinksContainer,

} from './HeaderAdmin.style';

export default function HeaderAdmin(){
    return(
        <HeaderContainer>
            <div>
                <Logo src="/images/logo.svg" alt="Adote um pet" />
                <LinksContainer>
                    <Link component={NextLink} href="/pets/admin/registration">
                        <a>
                            Cadastrar pet
                        </a>
                    </Link>
                    <Link component={NextLink} href="/pets/admin/report">
                        <a>
                            Reatório
                            <Box
                                component={'span'}
                                sx= {{display: {sm: 'initial', xs: 'none'}}}
                            >
                                {' '}de Adoção
                            </Box>
                        </a>
                        
                    </Link>
                </LinksContainer>
            </div>
        </HeaderContainer>
    )
}
import { styled } from "@mui/material";
export const HeaderContainer = styled('header')`
    padding: ${({theme})=> theme.spacing(1)} ${({theme})=> theme.spacing(3)};
    background-color: #f6f6f6;
    padding: ${({theme})=> theme.spacing(2)};
    

    div{
        width: 100%;
        max-width: 970px;
        display: flex;
        margin: 0 auto;
        justify-content: space-between;
        gap: ${({theme})=> theme.spacing(2)};
        align-items: center;
    }
    a{
        font-size:14px;
    }
`;
export const Logo = styled('img')`
    width:125px;
`;
export const LinksContainer = styled('nav')`
    display: flex;
    gap: ${({theme})=> theme.spacing(2)};
    flex-wrap: wrap;
    justify-content: flex-end;
`;

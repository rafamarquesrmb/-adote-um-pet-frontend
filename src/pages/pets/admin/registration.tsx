import { Button, Grid, Paper, Snackbar, TextField } from '@mui/material';
import { NextPage } from 'next';
import { useRegistration } from '../../../data/hooks/pets/admin/useRegistration';
import Title from '../../../ui/components/Title/Title';


const Registration: NextPage = () => {

    const {
        name,
        bioDescription,
        imgSlug,
        setName,
        setBioDescription,
        setImgSlug,
        register,
        message,
        setMessage,
    } = useRegistration();

    return (
        <>
            <Title
                title={'Cadastro de Pets para adoção'}
                subtitle={'Preencha os dados do novo Pet'}
            />
            <Paper sx={{ maxWidth: 970, mx: 'auto', p: 5 }}>
                <Grid container spacing={3}>
                    <Grid item xs={12}>
                        <TextField
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                            label={'Nome'}
                            placeholder={'Digite o nome do pet'}
                            fullWidth
                        />
                    </Grid>
                    <Grid item xs={12}>
                        <TextField
                            value={bioDescription}
                            onChange={(e) => setBioDescription(e.target.value)}
                            label={'História do Pet'}
                            placeholder={'Digite a história do pet'}
                            multiline
                            fullWidth
                            rows={4}
                        />
                    </Grid>
                    <Grid item xs={12}>
                        <TextField
                            value={imgSlug}
                            onChange={(e) => setImgSlug(e.target.value)}
                            label={'Foto (URL)'}
                            placeholder={'Digite a url da Imagem'}
                            fullWidth
                        />
                        <Button
                            variant={'contained'}
                            color={'secondary'}
                            sx={{ mt: 2 }}
                            component={'a'}
                            href={'https://imgur.com/upload'}
                            target={'_blank'}
                        >
                            Enviar imagem
                        </Button>
                    </Grid>
                    <Grid item xs={12} sx={{ textAlign: 'center' }}>
                        <Button
                            onClick={register}
                            variant={'contained'}
                            fullWidth
                            sx={{ maxWidth: { md: 200 }, mt: 4 }}
                        >
                            Cadastrar Pet
                        </Button>
                    </Grid>
                </Grid>
            </Paper>
            <Snackbar
                open={message.length > 0}
                autoHideDuration={2500}
                onClose={()=> setMessage('')}
                message={message}
            />
        </>
    )
}

export default Registration;
import type { NextPage } from 'next'
import List from '../ui/components/List.tsx/List'
import Title from '../ui/components/Title/Title'
import { Dialog, TextField, Grid , DialogActions, Button, Snackbar} from '@mui/material'
import { Pet } from '../data/@types/Pet'
import { useIndex } from '../data/hooks/pages/useIndex'



const Home: NextPage = () => {
  const {
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
  } = useIndex();
  return (
    <div>
      <Title title="Título" subtitle={
        <span>
          Como um pequeno valor mensal, você <br />
          pode <strong>adotar um pet virtualmente</strong>
        </span>
      }></Title>
      <List 
        onSelect={(pet)=> setSelectedPet(pet)} 
        pets={petsList}/>
      
      

      <Dialog 
        open={selectedPet !== null}
        fullWidth
        PaperProps={{sx:{ p:5}}}
        onClose={()=>setSelectedPet(null)}
        
      >
        <Grid container spacing={2}>
          <Grid item xs={12}>
            <TextField
              type={'email'}
              label={'E-mail'}
              value={email}
              onChange={(e)=>setEmail(e.target.value)}
              fullWidth
            />
        </Grid>
        <Grid item xs={12}>
          <TextField
            type={'number'}
            label={'Quantia por mês'}
            value={value}
              onChange={(e)=>setValue(e.target.value)}
            fullWidth
          />
        </Grid>
        </Grid>
        <DialogActions sx={{mt:5}} >
          <Button 
            color={'secondary'}
            onClick={()=>setSelectedPet(null)}
          >
            Cancelar
          </Button>
          <Button
            onClick={() => adopt()}
            variant={'contained'}
          >
            Confirmar adoção
          </Button>
        </DialogActions>
      </Dialog>
      <Snackbar
        open={ snackMessage.length > 0}
        message={snackMessage}
        autoHideDuration={2500}
        onClose={()=> setSnackMessage('')}
      />
    </div>
  )
}

export default Home

import type { NextPage } from 'next'
import List from '../ui/components/List.tsx/List'
import Title from '../ui/components/Title/Title'
import { Pet } from '../data/@types/Pet'

const pets_test = 
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
]

const Home: NextPage = () => {
  return (
    <div>
      <Title title="Título" subtitle={
        <span>
          Como um pequeno valor mensal, você <br />
          pode <strong>adotar um pet virtualmente</strong>
        </span>
      }></Title>
      <List pets={pets_test}></List>
    </div>
  )
}

export default Home

import * as S from '../../util/stylesheet/login/style'
import * as H from './style'
import { Image, StatusBar } from 'react-native';
import { Entypo, EvilIcons  } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';
import { propsDrawer } from '../../routes';



const Home: React.FC = () => {
    const navigation = useNavigation<propsDrawer>()
    return (
        <S.Container>
            <StatusBar backgroundColor="#e8e8e8" translucent={true} />
            <H.SearchView>
                <H.SearchColLeft onPress={() => navigation.openDrawer()}>
                  <Entypo name="menu" size={40} color="black" />
                </H.SearchColLeft>

                <H.SearchColRight>
                    <H.ViewSearchIcon>
                      <EvilIcons name="search" size={24} color="#707070" style={{opacity:0.7}} />
                    </H.ViewSearchIcon>
                    <H.SearchInput
                        placeholder='Busca'
                    />
                </H.SearchColRight>
            </H.SearchView>
            <S.TopView>
                <Image source={require('../../../assets/img/logo-share.png')} />
            </S.TopView>
            <H.CategoryTextTitle>Categorias de busca rápida</H.CategoryTextTitle>

            <H.ViewCategory>
                <H.ItemCategory>
                    <Image source={require('../../../assets/img/mecanico.png')}  />
                    <H.CategoryText>Mecânicos</H.CategoryText>
                </H.ItemCategory>

                <H.ItemCategory>
                    <Image source={require('../../../assets/img/gastronomia.png')} />
                    <H.CategoryText>Gastronomia</H.CategoryText>
                </H.ItemCategory>

                <H.ItemCategory>
                    <Image source={require('../../../assets/img/fotografos.png')} />
                    <H.CategoryText>Fotógrafos</H.CategoryText>
                </H.ItemCategory>
            </H.ViewCategory>

            <H.ViewCategory>
                <H.ItemCategory>
                    <Image source={require('../../../assets/img/ti.png')} />
                    <H.CategoryText>T.I.</H.CategoryText>
                </H.ItemCategory>

                <H.ItemCategory>
                    <Image source={require('../../../assets/img/transporte.png')} />
                    <H.CategoryText>Transporte</H.CategoryText>
                </H.ItemCategory>

                <H.ItemCategory>
                    <Image source={require('../../../assets/img/manutencao.png')} />
                    <H.CategoryText>Manutenção</H.CategoryText>
                </H.ItemCategory>
            </H.ViewCategory>

            <H.ViewCategory>
                <H.ItemCategory>
                    <Image source={require('../../../assets/img/dog.png')} />
                    <H.CategoryText>Serviços Pet</H.CategoryText>
                </H.ItemCategory>

                <H.ItemCategory>
                    <Image source={require('../../../assets/img/professor.png')} />
                    <H.CategoryText>Professores</H.CategoryText>
                </H.ItemCategory>

                <H.ItemCategory>
                    <Image source={require('../../../assets/img/outros.png')} />
                    <H.CategoryText>Outros</H.CategoryText>
                </H.ItemCategory>
            </H.ViewCategory>
        </S.Container>
    )
}

export default Home
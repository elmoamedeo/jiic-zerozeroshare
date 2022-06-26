import { useNavigation } from '@react-navigation/native';
import { StatusBar } from 'expo-status-bar';
import { propsStack } from '../../routes';
import * as S from '../../util/stylesheet/login/style';
import * as C from '../register/style'
import * as L from './style'
import { Image } from 'react-native';

const Landing: React.FC = () => {
    const navigation = useNavigation<propsStack>()
    return (
        <S.Container style={{justifyContent:'center'}}>
            <StatusBar backgroundColor="#fff" translucent={true} />

            <S.TopView>
                <Image source={require('../../../assets/img/logo-share.png')} />
            </S.TopView>

            <S.TextLogin>Bem vindo ao $hare</S.TextLogin>

            <L.SignIn onPress={() => navigation.navigate("Home")}>
                <S.TextSignIn>Continuar com minha conta $hare</S.TextSignIn>
            </L.SignIn>

            <L.CreateAccount onPress={() => navigation.navigate("Register")}>
                <S.TextSignIn>Ainda não tenho conta, quero criar</S.TextSignIn>
            </L.CreateAccount>

            <S.Link style={{marginBottom:50}}>Minha primeira vez aqui, mostre-me o tutorial</S.Link>

            <C.ViewPolicyAndPrivacy>
                <S.Text01 style={{ textAlign: 'center' }}>
                    Ao se inscrever, você concorda com os
                    <S.Link> Termos de Serviço </S.Link>
                    e
                    <S.Link> Política de Privacidade.</S.Link></S.Text01>
            </C.ViewPolicyAndPrivacy>

        </S.Container>
    )
}

export default Landing

import { useNavigation } from '@react-navigation/native';
import { propsStack } from '../../routes';
import * as S from '../../util/stylesheet/login/style';
import { Ionicons } from '@expo/vector-icons';
import { Image,StatusBar } from 'react-native';

const Login: React.FC = () => {
  const navigation = useNavigation<propsStack>()
    return (
        <S.Container>
            <StatusBar backgroundColor="#fff" translucent={true}  />
           <S.BackView onPress={() => navigation.goBack()}>

              <S.BackViewLeft>
                 <Ionicons name="chevron-back" size={24} color="#143bff" />
              </S.BackViewLeft>

              <S.BackViewRight>
                  <S.TextBack>Voltar</S.TextBack>
              </S.BackViewRight>
              
            </S.BackView> 
          <S.TopView>
            <Image source={require('../../../assets/img/logo-share.png')} />
          </S.TopView>
          <S.TextLogin>Entrar na minha conta $hare</S.TextLogin>
          <S.ViewInput>
            <S.Input placeholder='Insira seu email' />
            <S.Input placeholder='Insira sua senha' />
          </S.ViewInput>

          <S.SignIn>
              <S.TextSignIn>Entrar no $hare</S.TextSignIn>
          </S.SignIn>

          <S.Link>Esqueci minha senha</S.Link>

          <S.CreateAccount onPress={() => navigation.navigate("Register")}>
            <S.TextSignIn>Quero criar minha conta $hare</S.TextSignIn>
           </S.CreateAccount>
        </S.Container>
    )
}

export default Login

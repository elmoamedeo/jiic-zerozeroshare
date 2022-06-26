import { StatusBar } from 'react-native';
import { propsStack } from '../../routes';
import { useNavigation } from '@react-navigation/native';
import * as S from '../../util/stylesheet/login/style'
import * as C from './style'
import { Ionicons } from '@expo/vector-icons';
import { Image } from 'react-native';

const Register: React.FC = () => {
  const navigation = useNavigation<propsStack>()
  return (
    <S.Container>
      <StatusBar backgroundColor="#fff" translucent={true} />
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
      <S.ViewInput>
        <S.Input placeholder='Insira seu nome completo' />
        <S.Input placeholder='Insira seu email' />
        <S.Input placeholder='Insira seu email novamente' />
        <S.Input placeholder='Crie uma senha de 8 caracteres' />
        <S.Text01>Sua senha deve ter pelo menos uma letra maiúscula e um número </S.Text01>
        <S.Input placeholder='Insira sua senha novamente' />
      </S.ViewInput>

      <C.CreateAccount>
        <S.TextSignIn>Tudo pronto, criar minha conta $hare</S.TextSignIn>
      </C.CreateAccount>

      <C.ViewPolicyAndPrivacy>
        <S.Text01 style={{ textAlign: 'center' }}>
          Ao se inscrever, você concorda com os
          <S.Link> Termos de Serviço </S.Link>
          e
          <S.Link> Política de Privacidade.</S.Link></S.Text01>
      </C.ViewPolicyAndPrivacy>

      <S.CreateAccount onPress={() => navigation.navigate("Login")}>
        <S.TextSignIn>Já tenho conta, entrar</S.TextSignIn>
      </S.CreateAccount>
    </S.Container>
  )
}
export default Register

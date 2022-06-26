import styled from 'styled-components/native';

export const Container = styled.SafeAreaView`
    flex: 1;
    align-items: center;
    margin-top: 30px;
    background-color: #fff;
`;

export const TopView = styled.View`
    display: flex;
    align-items: center;
    width: 100%;
`;

export const Title = styled.Text`
    font-size: 30px;
    font-style: italic;
    font-weight: 700;
`;

export const TextTopView = styled.Text`
    font-size: 15px;
    font-weight: 700;
`;

export const TextLogin = styled.Text`
    font-size: 20px;
    color: #000;
    margin-bottom: 35px;
    margin-top: 60px;
`;

export const ViewInput = styled.View`
    display: flex;
    flex-direction: column;
    width: 80%;
    margin-bottom: 30px;
`;

export const Input = styled.TextInput`
    height: 26px;
    border: 1px solid #707070;
    font-size: 15px;
    color: #000;
    opacity: 0.5;
    margin: 10px;
    padding: 0px 10px;
`;

export const SignIn = styled.TouchableOpacity`
    display: flex;
    justify-content: center;
    align-items: center;
    height: 55px;
    width: 77%;
    border-radius: 10px;
    background: #2dcc70;
    border: 1px solid #707070;
    margin-bottom: 30px;
`;

export const TextSignIn = styled.Text`
   font-size: 20px;
   color: #fff;
   text-align: center;
`;

export const Link = styled.Text`
    color: #517aff;
    text-decoration: underline;
    text-decoration-color: #517aff;
    font-size: 13px;
    margin-bottom: 25px;
`;

export const CreateAccount = styled.TouchableOpacity`
    display: flex;
    justify-content: center;
    align-items: center;
    height: 55px;
    width: 77%;
    border: 1px solid #707070;
    border-radius: 10px;
    background: #4b4bf9;
`;

export const BackView = styled.TouchableOpacity`
    display: flex;
    flex-direction: row;
    width: 100%;
    padding: 0px 10px;
    margin-top: 20px;
    margin-bottom: 20px;
    align-items: center;
`;
export const BackViewRight = styled.View`
   
`;
export const BackViewLeft = styled.View`
`;

export const TextBack = styled.Text`
    font-size: 20px;
    color: #143bff;
`;

export const Text01 = styled.Text`
    color: #000;
    opacity: 0.75;
    font-size: 14px;
    padding: 0px 10px;
`;

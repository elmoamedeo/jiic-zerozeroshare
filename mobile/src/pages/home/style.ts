import styled from 'styled-components/native';


export const SearchView = styled.View`
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    padding: 0px 20px;
    height: 80px;
    width: 100%;
    background-color: #e8e8e8;
`;
export const SearchColLeft = styled.TouchableOpacity`
    width: 20%;

`;
export const SearchColRight = styled.View`
    display: flex;
    flex-direction: row;
    width: 80%;
    height: 27px;
    border-radius: 11px;
    border: 1px solid #707070;
    background-color: #fff;
`;

export const SearchInput = styled.TextInput`
    width: 88%;
    height: 100%;
    font-size: 13px;
    color: #707070;
`;

export const ViewSearchIcon = styled.TouchableOpacity`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 12%;
`;

export const CategoryTextTitle = styled.Text`
    color: #000;
    font-size: 18px;
    font-weight: 700;
    letter-spacing: 0.5px;
`;

export const CategoryText = styled.Text`
    color: #000;
    font-size: 13px;
    font-weight: normal;
    letter-spacing: 0.5px;
`;

export const ViewCategory = styled.View`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    padding: 0px 30px;
    margin-top: 35px;
    width: 100%;
`;

export const ItemCategory = styled.TouchableOpacity`
    width: 30%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`;
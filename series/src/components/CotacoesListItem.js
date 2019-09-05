import React from 'react';
import { Text, View, StyleSheet, Image, TouchableOpacity } from 'react-native';

const CotacoesListItem = props => {
    const { cotacao, navigation } = props;
    const { NumCotacao, NomeObra, StatusFormatado, Nivel, requisitante, Valor } = cotacao;

    onClickDetail = (cot) => {
        navigation.navigate('CotacaoDetail', { cotacao: cot })
    }

    return (

        < TouchableOpacity
            onPress={() => {
                this.onClickDetail(cotacao);

            }}
        >
            <View style={styles.line}>
                <Image style={styles.avatar} source={{ uri: 'https://banner2.cleanpng.com/20180920/yko/kisspng-computer-icons-portable-network-graphics-avatar-ic-5ba3c66df14d32.3051789815374598219884.jpg' }}
                />
                <Text style={styles.lineText}>
                    {` ${
                        'Cotação: ' + NumCotacao
                        } ${
                        StatusFormatado
                        } \n ${
                        'Obra: ' + NomeObra
                        }
                         `}
                </Text>


            </View>
        </TouchableOpacity >
    );
}

const styles = StyleSheet.create({
    line: {
        height: 110,
        borderBottomWidth: 1,
        borderBottomColor: '#bbb',
        alignItems: 'center',
        textAlign: 'left',
        flexDirection: 'row'
    },
    lineText: {
        fontSize: 20,
        paddingLeft: 15,
        flex: 7
    },
    avatar: {
        aspectRatio: 1,
        flex: 1,
        marginLeft: 15,
        borderRadius: 200
    }
});

export default CotacoesListItem; 
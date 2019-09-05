import React from 'react';
import {
    StyleSheet,
    FlatList,
    Text,
    Image,
    View,
} from 'react-native';

import Tabs from 'react-native-tabs';

class CotacaoDetailPage extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            isLoading: false,
            page: 'second',
            NomeFornecedor: '',
            FormaPagamentoFornecedor: '',
            FreteFornecedor: '',
            CpfCnpjFornecedor: '',
            ValorUnitarioFornecedor: '',
            ValorIPIFornecedor: '',
            ValorICMSFornecedor: '',
            ValorTotalFornecedor: ''
        }
    }

    onClickTab = (forn) => {
        this.setState({ page: forn });
        //F1 = Dados do fornecedor 1
        //F2 = Dados do fornecedor 2
        //F3 = Dados do fornecedor 3

        if (forn == "F1") {
            this.setState({ NomeFornecedor: params.cotacao.NomeFornecedor1 });
            this.setState({ FormaPagamentoFornecedor: params.cotacao.FormaPagamentoFornecedor1 });
            this.setState({ FreteFornecedor: params.cotacao.FreteFornecedor1 });
            this.setState({ CpfCnpjFornecedor: params.cotacao.CpfCnpjFornecedor1 });
            this.setState({ ValorUnitarioFornecedor: params.cotacao.ValorUnitarioFornecedor1 });
            this.setState({ ValorIPIFornecedor: params.cotacao.ValorIPIFornecedor1 });
            this.setState({ ValorICMSFornecedor: params.cotacao.ValorICMSFornecedor1 });
            this.setState({ ValorTotalFornecedor: params.cotacao.ValorTotalFornecedor1 });

        }
        else if (forn == "F2") {
            this.setState({ NomeFornecedor: params.cotacao.NomeFornecedor2 });
            this.setState({ FormaPagamentoFornecedor: params.cotacao.FormaPagamentoFornecedor2 });
            this.setState({ FreteFornecedor: params.cotacao.FreteFornecedor2 });
            this.setState({ CpfCnpjFornecedor: params.cotacao.CpfCnpjFornecedor2 });
            this.setState({ ValorUnitarioFornecedor: params.cotacao.ValorUnitarioFornecedor2 });
            this.setState({ ValorIPIFornecedor: params.cotacao.ValorIPIFornecedor2 });
            this.setState({ ValorICMSFornecedor: params.cotacao.ValorICMSFornecedor2 });
            this.setState({ ValorTotalFornecedor: params.cotacao.ValorTotalFornecedor2 });
        }
        else if (forn == "F3") {
            this.setState({ NomeFornecedor: params.cotacao.NomeFornecedor3 });
            this.setState({ FormaPagamentoFornecedor: params.cotacao.FormaPagamentoFornecedor3 });
            this.setState({ FreteFornecedor: params.cotacao.FreteFornecedor3 });
            this.setState({ CpfCnpjFornecedor: params.cotacao.CpfCnpjFornecedor3 });
            this.setState({ ValorUnitarioFornecedor: params.cotacao.ValorUnitarioFornecedor3 });
            this.setState({ ValorIPIFornecedor: params.cotacao.ValorIPIFornecedor3 });
            this.setState({ ValorICMSFornecedor: params.cotacao.ValorICMSFornecedor3 });
            this.setState({ ValorTotalFornecedor: params.cotacao.ValorTotalFornecedor3 });
        }
    }

    render() {
        const { navigation } = this.props;
        const { params } = navigation.state;
        return (
            <View style={styles.container}>
                <Tabs selected={this.state.page} style={{ backgroundColor: 'white' }}
                    selectedStyle={{ color: 'red' }} onSelect={el => this.setState({ page: el.props.name })}>
                    <Text name="IT" selectedIconStyle={{ borderTopWidth: 3, borderTopColor: 'red' }}>Itens</Text>
                    <Text name="F1" selectedIconStyle={{ borderTopWidth: 3, borderTopColor: 'red' }}>F1</Text>
                    <Text name="F2" selectedIconStyle={{ borderTopWidth: 3, borderTopColor: 'red' }}>F2</Text>
                    <Text name="F3" selectedIconStyle={{ borderTopWidth: 3, borderTopColor: 'red' }}>F3</Text>
                </Tabs>
                <Text style={styles.welcome}>
                    Dados do fornecedor
          </Text>
                <Text style={styles.instructions}>
                    Nome: {this.state.page}
                </Text>
                <Text>
                    {` ${
                        'Cotação: ' + params.cotacao.NumCotacao
                        } ${
                        params.cotacao.StatusFormatado
                        } \n ${
                        'Obra: ' + params.cotacao.NomeObra
                        }
                         `}

                </Text>

            </View>


        )
    }
}

const styles = StyleSheet.create({
    image: {
        aspectRatio: 1
    },
    button: {
        margin: 10
    },
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#F5FCFF',
    },
    welcome: {
        fontSize: 20,
        textAlign: 'center',
        margin: 10,
    },
    instructions: {
        textAlign: 'center',
        color: '#333333',
        marginBottom: 5,
    },
});

export default (CotacaoDetailPage);
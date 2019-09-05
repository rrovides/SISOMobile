import React from 'react';
import {
    StyleSheet,
    View,
    Picker,
    Text,
    ActivityIndicator,
    TouchableOpacity,
} from 'react-native';
import { Dimensions } from "react-native";
import { connect } from 'react-redux';
import { watchSeries } from '../actions';
import FormRow from '../components/FormRow';
import {
    setField
} from '../actions';

const width = Dimensions.get('window').width; //full width
const isEven = number => number % 2 === 0;

class CotacoesPage extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            obra: '0',
            nivel: '0',
            qtdN1: 0,
            qtdN2: 0,
            qtdN3: 0
        }
    }

    componentDidMount() {
        this.props.watchSeries();
    }

    changeObra(codObra) {
        this.setState({ obra: codObra });

        axios.get('http://rovidesapi.somee.com/api/GetquantidadeCotacoesPendentes',
            {
                params: {
                    obra: this.state.obra,
                },
                headers: {
                    Authorization: '0f32ae0d-c4e0-4aca-8367-0af88213d668'
                }
            }
        )
            .then(response => {
                const { quantidadePendetes } = response.data;
                this.setState({
                    qtdN1: quantidadePendetes.qtdN1,
                    qtdN2: quantidadePendetes.qtdN2,
                    qtdN3: quantidadePendetes.qtdN3,
                    loading: false,
                });
            });
    }

    render() {
        const { series, navigation } = this.props;
        if (series === null) {
            return <ActivityIndicator />;
        }

        return (
            <View>

                <Picker style={{ padding: 0, top: 0 }}
                    selectedValue={this.state.obra}
                    onValueChange={(itemValue, itemIndex) => changeObra(itemValue)}>
                    <Picker.Item label="Todas" value="0" />
                    <Picker.Item label="00 - Administração Elecnor do Brasil" value="132" />
                    <Picker.Item label="01 - Estructura Común  Transmisión - SANTANDER" value="212" />
                    <Picker.Item label="01 - Estructura Común Rio Transmisión" value="312" />
                    <Picker.Item label="10 - Pool Oficina São Paulo" value="432" />
                    <Picker.Item label="10 - Pool Oficina São Paulo" value="512" />
                    <Picker.Item label="12 - Ofertas SG SE" value="688" />
                    <Picker.Item label="15 - Pool Qualidade" value="789" />
                    <Picker.Item label="18 - Pool Meio Ambiente" value="885" />
                    <Picker.Item label="320011 - SE Santa Marta" value="421" />
                    <Picker.Item label="320011 - SE Santa Marta - Viagens" value="99" />
                    <Picker.Item label="320012 - Miracema" value="108" />
                    <Picker.Item label="320014 - Reator Imbirussu - Campo Grande" value="312" />
                    <Picker.Item label="X320015 - SE JANAÚBA" value="121" />
                    <Picker.Item label="320016 - SE BARREIRAS" value="198" />
                    <Picker.Item label="320018 - SE Marituba" value="189" />
                </Picker>

                <View style={styles.container} >
                    <TouchableOpacity
                        onPress={() => navigation.navigate('CotacoesList', { obra: this.state.obra, nivel: '3' })}
                    >
                        <View style={styles.ShapeNivel3} >
                            <Text style={styles.colorNumber}>Nível 3</Text>
                            <Text style={styles.sizeNumber}>{this.state.qtdN3}</Text>
                        </View>
                    </TouchableOpacity>
                    <TouchableOpacity
                        onPress={() => navigation.navigate('CotacoesList', { obra: this.state.obra, nivel: '2' })}
                    >
                        <View style={styles.ShapeNivel2} >
                            <Text style={styles.colorNumber}>Nível 2</Text>
                            <Text style={styles.sizeNumber}>{this.state.qtdN2}</Text>
                        </View>
                    </TouchableOpacity>
                    <TouchableOpacity
                        onPress={() => navigation.navigate('CotacoesList', { obra: this.state.obra, nivel: '1' })}
                    >
                        <View style={styles.ShapeNivel1} >
                            <Text style={styles.colorNumber}>Nível 1</Text>
                            <Text style={styles.sizeNumber}>{this.state.qtdN1}</Text>
                        </View>
                    </TouchableOpacity>
                </View>

            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        borderColor: '#666666',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#F5FCFF',
    },
    sizeNumber: {
        fontSize: 50,
        fontWeight: 'bold',
        color: '#ffffff'
    },
    colorNumber: {
        fontSize: 20,
        fontWeight: 'bold',
        color: '#ffffff'

    },

    ShapeNivel1: {
        marginTop: 5,
        borderRadius: 10,
        width: (width - 10),
        height: 120,
        backgroundColor: '#f37c00',
        justifyContent: 'center',
        alignItems: 'center',

    },
    ShapeNivel2: {
        marginTop: 5,
        borderRadius: 10,
        width: (width - 10),
        height: 120,
        backgroundColor: '#42b9f5',
        justifyContent: 'center',
        alignItems: 'center',

    },
    ShapeNivel3: {
        borderRadius: 10,
        width: (width - 10),
        height: 120,
        backgroundColor: '#f54257',
        justifyContent: 'center',
        alignItems: 'center',

    }
})

const mapStateToProps = state => {
    const { series } = state;
    if (series === null) {
        return { series }
    }

    const keys = Object.keys(series);
    const seriesWithKeys = keys.map(id => {
        return { ...series[id], id }
    });
    return { series: seriesWithKeys };
}

export default connect(
    mapStateToProps,
    { watchSeries }
)(CotacoesPage);
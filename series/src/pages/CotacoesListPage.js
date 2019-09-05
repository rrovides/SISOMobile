import React from 'react';
import {
	StyleSheet,
	FlatList,
	Text,
	Image,
	Button,
} from 'react-native';
import axios from 'axios';
import CotacoesListItem from './../components/CotacoesListItem';

class CotacoesListPage extends React.Component {

	constructor(props) {
		super(props);

		this.state = {
			isLoading: false,
			listCotacoes: []
		}
	}

	componentDidMount() {
		const { navigation } = this.props;
		const { params } = navigation.state;

		this.setState({ loading: true });
		console.log(params.obra);
		console.log(params.nivel);
		axios.get('http://rovidesapi.somee.com/api/cotacoes',
			{
				params: {
					obra: this.state.obra,
					nivel: params.nivel
				},
				headers: {
					Authorization: '0f32ae0d-c4e0-4aca-8367-0af88213d668'
				}
			}

		)
			.then(response => {
				const { cotacoes } = response.data;
				this.setState({
					listCotacoes: cotacoes,
					loading: false,
				});
			})
	}

	render() {

		<Text>{this.state.obra}</Text>

		return (

			<FlatList
				style={styles.container}
				data={this.state.listCotacoes}
				renderItem={({ item }) => (
					<CotacoesListItem
						cotacao={item}
						navigation={this.props.navigation}
					/>
				)}
				keyExtractor={item => item.NumCotacao}
			/>
		)
	}
}

const styles = StyleSheet.create({
	image: {
		aspectRatio: 1
	},
	button: {
		margin: 10
	}
});

export default (CotacoesListPage);
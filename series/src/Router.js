import { createAppContainer, createStackNavigator } from 'react-navigation';

import LoginPage from './pages/LoginPage';
import CotacoesPage from './pages/CotacoesPage';
import CotacaoDetailPage from './pages/CotacaoDetailPage';
import SerieDetailPage from './pages/SerieDetailPage';
import SerieFormPage from './pages/SerieFormPage';
import CotacoesListPage from './pages/CotacoesListPage';
import ActionBarImage from './components/ActionBarImage';


const AppNavigator = createStackNavigator({
    'Login': {
        screen: LoginPage,
        navigationOptions: {
            title: 'Bem vindo!',

        }
    },
    'CotacoesPage': {
        screen: CotacoesPage,
        navigationOptions: {
            title: 'Cotações pendentes',

        }
    },

    'CotacoesList': {
        screen: CotacoesListPage,
        navigationOptions: {
            title: 'Lista de cotações',

        }
    },
    'CotacaoDetail': {
        screen: CotacaoDetailPage,
        navigationOptions: {
            title: 'Detalhe',

        }
    },

    'SerieForm': {
        screen: SerieFormPage,
        navigationOptions: ({ navigation }) => {
            if (navigation.state.params && navigation.state.params.serieToEdit) {
                return {
                    title: navigation.state.params.serieToEdit.title,
                }
            }
            return {
                title: 'Nova série',
            };
        }
    },
    'SerieDetail': {
        screen: SerieDetailPage,
        navigationOptions: ({ navigation }) => {
            const { serie } = navigation.state.params;
            return {
                title: serie.title
            }
        }
    },
}, {
        defaultNavigationOptions: {
            title: "Series!",
            headerTintColor: 'white',

            headerStyle: {
                backgroundColor: '#6ca2f7',
                borderBottomWidth: 1,
                borderBottomColor: '#C5C5C5',

            },
            headerTitleStyle: {
                color: 'white',
                fontSize: 20,
            }
        }
    });

const AppContainer = createAppContainer(AppNavigator);

export default AppContainer;
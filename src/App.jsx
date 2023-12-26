import {BrowserRouter} from 'react-router-dom';
import {Provider} from 'react-redux';
import AppRoutes from './utility/router/AppRoutes';
import {store} from "./redux/app/Store.js";

function App() {
    return (
        <Provider store={store}>
            <BrowserRouter>
                <AppRoutes/>
            </BrowserRouter>
        </Provider>
    );
}

export default App;

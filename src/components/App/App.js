import "./App.scss";
import Header from "../Header/Header";
import AppContainer from "../AppContainer/AppContainer";
import store from "../features/store/store";
import { Provider } from "react-redux";

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <Header />
        <AppContainer />
      </div>
    </Provider>
  );
}

export default App;

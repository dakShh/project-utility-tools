import './App.css';
import "./css/main.css"
import 'bootstrap/dist/css/bootstrap.min.css';
import toast, { Toaster } from 'react-hot-toast';
import { UtilityContext } from "./components/utility-context"
import RoutesUtility from "./routes"
function App() {

  const createToast = (type, message) => {
    if (type == 'success') {
      toast.success(message ?? "")
    } else if (type == 'error') {
      toast.error(message ?? "")
    } else if (type == 'default') {
      toast(message ?? "")
    }
  }
  return (
    <UtilityContext.Provider value={{ createToast }}>
      <Toaster
        position="bottom-left"
        toastOptions={{
          className: '',
          style: {
            border: '1px solid #713200',
            color: '#713200',
          },
        }}
      />
      <RoutesUtility />
    </UtilityContext.Provider>
  );
}

export default App;

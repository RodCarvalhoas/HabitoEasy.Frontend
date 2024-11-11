import { QueryClient, QueryClientProvider } from 'react-query';
import { Route, Routes, useNavigate } from 'react-router-dom';
import LoginPage from './pages/loginPage/LoginPage';
import RegisterPage from './pages/registerPage/RegisterPage';
import AxiosConfig from './configs/AxiosConfig';
import { useSetRecoilState } from 'recoil';
import { authState } from './state/authState';
import { ProtectedRoute } from './helpers/ProtectedRoutesHelper';
import HomePage from './pages/homePage/HomePage';
import CommonContent from './pages/commonContent/CommonContent';

const queryClient = new QueryClient()

function App() {
  const navigate = useNavigate();
  const setAuth = useSetRecoilState(authState);
  AxiosConfig.initializeHooks(navigate, setAuth);
  AxiosConfig.init()

  return (
    <QueryClientProvider client={queryClient}>
        <Routes>
          <Route path="/auth" element={<LoginPage/>}/>
          <Route path="/auth/register" element={<RegisterPage/>}/>
          
          <Route element={<ProtectedRoute/>}>
            <Route element={<CommonContent/>}>
              <Route path="/" element={<HomePage/>}/>
              <Route path="/home" element={<HomePage/>}/>
            </Route>
          </Route>
        </Routes>
    </QueryClientProvider>
  );
}

export default App;
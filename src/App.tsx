// import { useFetchUser } from './apis/user.api';
// import CenterLoadingLayout from './layouts/CenterLoadingLayout/CenterLoadingLayout';
import AppRouter from './provider/App.Router';

export default function App() {
  // const { isLoading } = useFetchUser();
  return (
    <div className='App min-vh-100'>
      {/* {isLoading && <CenterLoadingLayout />} */}

      <AppRouter />
    </div>
  );
}

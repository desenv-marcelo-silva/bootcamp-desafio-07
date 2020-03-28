import Reactotron from 'reactotron-react-native';
import { reactotronRedux } from 'reactotron-redux';

if (process.env.NODE_ENV === 'development') {
  const tron = Reactotron.configure({ host: '172.30.172.10' })
    .useReactNative()
    .use(reactotronRedux())
    .connect();

  console.tron = tron;

  tron.clear();
}

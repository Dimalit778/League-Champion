import { AppProvider } from 'context/AppContext';
import { Slot, Stack } from 'expo-router';

const Root = () => {
  return (
    <AppProvider>
      <Slot />
    </AppProvider>
  );
};

export default Root;

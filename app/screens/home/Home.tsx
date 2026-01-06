import Button from '@/components/atoms/Button';
import { Label } from '@/components/atoms/Label';
import { logoutThunk } from '@/store/auth/auth.thunks';
import { useAppDispatch } from '@/store/hooks';
import { store } from '@/store/store';
import React from 'react';
import { Text } from 'react-native-paper';
import { SafeAreaView } from 'react-native-safe-area-context';

export const Home = () => {
  const dispatch = useAppDispatch();
    const idToken = store.getState().auth.idToken;

    return (
        <SafeAreaView>
            <Text>Ponte los panes</Text>
            <Button onPress={() => dispatch(logoutThunk(idToken!))}>
                <Label>Logout</Label>
            </Button>
        </SafeAreaView>
    );
};

export default Home;

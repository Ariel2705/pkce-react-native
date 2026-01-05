import { useThemeContext } from '@/app/context/ThemeContext';
import React from 'react';
import { StyleSheet } from 'react-native';
import { ButtonProps, Button as PaperButton } from 'react-native-paper';

export const Button: React.FC<ButtonProps> = ({style, ...props}) => {
    const { theme } = useThemeContext();

    const styles = StyleSheet.create({
        button: {
            borderRadius: 30,
            marginBottom: 12,
            height: 55,
            justifyContent: 'center',
            backgroundColor: theme.colors.primary
        },
        label: {
            color: '#FFFFFF',
            fontFamily: 'Bariol',
            fontWeight: '700',
            fontSize: 16,
        },
    });

    return (
        <PaperButton
            textColor={theme.colors.secondaryText}
            buttonColor={theme.colors.primary}
            style={[styles.button, style]}
            {...props}
        />
    )
};

export default Button;

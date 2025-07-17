import light from './light';
import dark from './dark';

export interface AppTheme {
  title: string;
  colors: {
    background: string;
    text: string;
    primary: string;
    card: string;
    border: string;
    notification: string;
  };
}

// garante que os objetos light e dark respeitem a estrutura
const lightTheme: AppTheme = light;
const darkTheme: AppTheme = dark;
export { lightTheme, darkTheme }; 
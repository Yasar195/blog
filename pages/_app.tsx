import '../styles/globals.css'
import type { AppProps } from 'next/app'
import { ThemeProvider } from 'styled-components';
import { lightTheme, darkTheme, GlobalStyles } from '../ThemeConfig';
import useStore from '../store/store';

export default function App({ Component, pageProps }: AppProps) {

  const theme = useStore((state: any) => state.theme)

  return (
    <ThemeProvider theme = {theme === "light"? lightTheme:darkTheme} >
      <GlobalStyles/>
      <Component {...pageProps} />
    </ThemeProvider>
  )
}

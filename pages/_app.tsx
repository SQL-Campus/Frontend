import { NextPage } from 'next';
import { AppProps } from 'next/app';
import NavigationBar from '../src/components/NavigationBar';
import MUIThemeProvider from '../src/components/helpers/MUIThemeProvider';
import { appWithTranslation } from 'next-i18next';

const MyApp: NextPage<AppProps> = ({ Component, pageProps }) => {
  return (
    <>
      <div className="root">
        <MUIThemeProvider>
          <NavigationBar />
            <main className="content">
              <Component {...pageProps} />
            </main>
        </MUIThemeProvider>
      </div>
    </>
  );
};

export default appWithTranslation(MyApp);
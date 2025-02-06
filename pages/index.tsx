import { Container, Typography } from '@mui/material';
import type { NextPage } from 'next';
import type { GetStaticProps, InferGetStaticPropsType } from 'next'
import { useTranslation } from 'next-i18next'
import { serverSideTranslations } from 'next-i18next/serverSideTranslations'
import { useRouter } from 'next/router';

type Props = {
  // Add custom props here
}

const Home: NextPage = (_props: InferGetStaticPropsType<typeof getStaticProps>) => {
  const router = useRouter()
  const { t } = useTranslation('common')

  return (
    <main className="main-content">
      <Container maxWidth="xl" sx={{ py: 4 }}>
        <Typography variant="h1" component="h1" gutterBottom>
          {t('welcome')}
        </Typography>
        <Typography variant="h2" component="h2" gutterBottom>
          {t('discover')}
        </Typography>
        <Typography variant="body1" component="p">
          {t('explore')}
        </Typography>
      </Container>
    </main>
  );
};

export const getStaticProps: GetStaticProps<Props> = async ({
  locale,
}) => ({
  props: {
    ...(await serverSideTranslations(locale ?? 'en', [
      'common',
    ])),
  },
})

export default Home;
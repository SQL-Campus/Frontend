import { useState } from 'react';
import {
  AppBar,
  Toolbar,
  Typography,
  IconButton,
  Drawer,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Divider,
  ButtonBase,
} from '@mui/material';
import {
  Menu as MenuIcon,
  Home as HomeIcon,
  Person as PersonIcon,
  Info as InfoIcon,
  Description as DescriptionIcon,
  Language as LanguageIcon,
} from '@mui/icons-material';
import { useRouter } from 'next/router';
import type { GetStaticProps, InferGetStaticPropsType } from 'next'

import { useTranslation, Trans } from 'next-i18next'
import { serverSideTranslations } from 'next-i18next/serverSideTranslations'
import { getStaticProps } from '../../pages';

interface INavigationItem {
  text: string;
  icon: React.ReactNode;
  href: string;
}

type Props = {
  // Add custom props here
}

const NavigationBar = (_props: InferGetStaticPropsType<typeof getStaticProps>) => {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);
  const router = useRouter();
  const { t, i18n } = useTranslation('common');

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const onToggleLanguageClick = (newLocale: string) => {
    const { pathname, asPath, query } = router
    router.push({ pathname, query }, asPath, { locale: newLocale })
  }

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const clientSideLanguageChange = (newLocale: string) => {
    i18n.changeLanguage(newLocale)
  }

  const changeTo = () => router.locale === 'en' ? 'de' : 'en'

  const navigationItems: INavigationItem[] = [
    { text: 'Home', icon: <HomeIcon />, href: '/' },
    { text: 'Profile', icon: <PersonIcon />, href: '/profile' },
    { text: 'About Us', icon: <InfoIcon />, href: '/about' },
    { text: 'Imprint', icon: <DescriptionIcon />, href: '/imprint' },
  ];

  const handleItemClick = (href: string) => {
    router.push(href);
    setIsDrawerOpen(false);
  };

  return (
    <>
      <AppBar position="static" sx={{ zIndex: (theme) => theme.zIndex.drawer + 1 }}>
        <Toolbar>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
            onClick={() => setIsDrawerOpen(true)}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" component="div">
            SQL-Campus
          </Typography>
          <IconButton
            size="large"
            color="inherit"
            aria-label="language"
            onClick={changeTo}
          >
            <LanguageIcon />
          </IconButton>
        </Toolbar>
      </AppBar>

      <Drawer
        anchor="left"
        open={isDrawerOpen}
        onClose={() => setIsDrawerOpen(false)}
        sx={{
          '& .MuiDrawer-paper': {
            width: 250,
            boxSizing: 'border-box',
            borderRight: 'none',
          },
        }}
      >
        <Toolbar />
        <List>
          {navigationItems.map((item, index) => (
            <ListItem key={index}>
              <ButtonBase
                sx={{
                  width: '100%',
                  px: 2,
                  py: 1.5,
                  borderRadius: 0.75,
                  '&:hover': {
                    backgroundColor: 'rgba(0, 0, 0, 0.05)',
                  },
                  '&.Mui-selected': {
                    backgroundColor: 'rgba(0, 0, 0, 0.1)',
                  },
                }}
                onClick={() => handleItemClick(item.href)}
              >
                <ListItemIcon>{item.icon}</ListItemIcon>
                <ListItemText primary={item.text} />
              </ButtonBase>
            </ListItem>
          ))}
        </List>
        <Divider />
      </Drawer>
    </>
  );
}

export default NavigationBar;
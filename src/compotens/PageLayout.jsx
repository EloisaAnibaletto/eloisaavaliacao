import MenuIcon from "@mui/icons-material/Menu";
import {
  AppBar,
  Box,
  Drawer,
  Grid,
  IconButton,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Toolbar,
  Typography,
} from "@mui/material";
import { useState } from "react";
import { Link, Outlet } from "react-router-dom";

export const PageLayout = () => {
  const DrawerApp = () => {
    return (
      <Box style={{ minWitch: "10px " }}>
        <Typography variant="h5">Meu menu</Typography>
        <List>
          <ListItem>
            <ListItemButton component="a" href="/">
              <ListItemText primary="Home" />
            </ListItemButton>
          </ListItem>
          <ListItem>
            <ListItemButton component="a" href="/sobrepag">
              <ListItemText primary="Sobre" />
            </ListItemButton>
          </ListItem>
          <ListItem>
            <ListItemButton component="a" href="/lancamentos">
              <ListItemText primary="Lancamentos" />
            </ListItemButton>
          </ListItem>
          <ListItem>
            <ListItemButton component="a" href="/noticias">
              <ListItemText primary="Notícias" />
            </ListItemButton>
          </ListItem>
          <ListItem>
            <ListItemButton component="a" href="/contato">
              <ListItemText primary="Contato" />
            </ListItemButton>
          </ListItem>
        </List>
      </Box>
    );
  };

  const ContainerMenu = () => {
    const [aberto, setAberto] = useState(false);

    const lideComOMenu = () => {
      setAberto(!aberto);
    };

    return (
      <Box>
        <AppBar>
          <Toolbar>
            <IconButton onClick={lideComOMenu}>
              <MenuIcon></MenuIcon>
            </IconButton>
            <div style={{ padding: "10px" }}>
              <img
                src={require("../Imagens/the.webp")}
                alt="logo"
                style={{ maxHeight: "60px", width: "auto" }}
              />
            </div>
          </Toolbar>
        </AppBar>
        <Box>
          <Drawer open={aberto} onClose={lideComOMenu}>
            <DrawerApp />
          </Drawer>
        </Box>
      </Box>
    );
  };

  return (
    <>
      <ContainerMenu />
      <Box style={{ marginTop: "80px" }}>
        <Grid style={{ maxWidth: "768px", margin: "0 auto" }}>
          <Outlet />
        </Grid>
      </Box>
    </>
  );
};

import { ImageList, imageListClasses, ImageListItem } from "@mui/material";

const itemData = [
  {
    img: "https://upload.wikimedia.org/wikipedia/pt/5/5f/Capa_TS.jpg",
    title: "The sims 1",
  },
  {
    img: "https://upload.wikimedia.org/wikipedia/pt/5/5f/Nova_capa_de_The_Sims_4.png",
    title: "The sims 2",
  },
  {
    img: "",
    title: "",
  },
  {
    img: "",
    title: "A Night at the Opera",
  },
  {
    img: "",
    title: "A Day at the Races",
  },
  {
    img: "",
    title: "News of the World",
  },
  {
    img: "",
    title: "Jazz",
  },
  {
    img: "",
    title: "The Game",
  },
];
const Lancamentos = () => {
  // const lista = imageListClasses();

  return (
    <ImageList sx={{ width: 500, height: 1100, margin: "0 auto" }} cols={1} >
      {itemData.map((item) => (
        <ImageListItem key={item.img}>
          <img
            src={`${item.img}?w=164&h=164&fit=crop&auto=format`}
            srcSet={`${item.img}?w=164&h=164&fit=crop&auto=format&dpr=2 2x`}
            alt={item.title}
            loading="lazy"
          />
        </ImageListItem>
      ))}
    </ImageList>
  );
};

export default Lancamentos;

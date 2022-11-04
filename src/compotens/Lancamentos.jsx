import { ImageList, imageListClasses, ImageListItem } from "@mui/material";

const itemData = [
  {
    img: "https://upload.wikimedia.org/wikipedia/pt/5/5f/Capa_TS.jpg",
    title: "The sims 1",
  },
  {
    img: "https://upload.wikimedia.org/wikipedia/pt/c/ca/Capa_TS2.jpg",
    title: "The sims 2",
  },
  {
    img: "https://upload.wikimedia.org/wikipedia/pt/5/5b/TheSims3_capa.jpg",
    title: "The sims 3",
  },
  {
    img: "https://upload.wikimedia.org/wikipedia/pt/3/34/Nova_capa_de_The_Sims_4.png",
    title: "The sims 4",
  }
];
const Lancamentos = () => {
  // const lista = imageListClasses();

  return (
    <ImageList sx={{ width: 500, height: 1000, margin: "0 auto" }} cols={2} >
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

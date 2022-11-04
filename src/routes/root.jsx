import { createBrowserRouter, createRoutesFromElements, Outlet, Route, RouterProvider, Routes } from "react-router-dom";
import Contato from "../compotens/Contato";
import Lancamentos from "../compotens/Lancamentos";
import Noticias from "../compotens/Noticias";
import { PageLayout } from "../compotens/PageLayout";
import SobrePag from "../compotens/SobrePag";
import BoasVindas from "../compotens/BoasVindas";


const route = createBrowserRouter(
    createRoutesFromElements(
            <Route path="/" element={<PageLayout />} >
                <Route index path="/" element={<BoasVindas />} />
                <Route path="sobrepag" element={<SobrePag />} />
                <Route path="noticias" element={<Noticias />} />
                <Route path="contato" element={<Contato />} />
                <Route path="lancamentos" element={<Lancamentos />} />
            </Route>
    )
)
const Root = () => {
    return <RouterProvider router={route} />
};

export default Root;
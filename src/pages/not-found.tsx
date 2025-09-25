import { Link } from "react-router-dom";
import ImageErro from "../img/ErroX.png"

export function NotFound(){
    return(
        <div className="text-center py-20 flex flex-col items-center">
            <h1 className="text-4xl font-bold mb-4">404 - Página não encontrada</h1>
            <p className="text-gray-600 mb-6">Ops! Parece que você se perdeu</p>
            <img src={ImageErro} alt="Imagem de Erro" className="w-40"/>
            <Link className="text-white bg-blue-600 p-2 rounded hover:underline" to="/">Voltar para Home</Link>
        </div>
    );
}
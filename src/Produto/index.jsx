import { useState } from "react";
import ListarProdutos from "../componentes/ListarProdutos";

export default function produtos(){
    const [produtos,setProdutos] = useState([
        {
            nome: "Charm Disney Carruagem Brilhante Da Cinderela - Pandora Rose™",
            colecao: ["Disney"],
            preco: "R$ 1.719,90",
            imagem: "https://pandorajoias.vtexassets.com/arquivos/ids/201624-800-800?v=638455162325970000&width=800&height=800&aspect=true",

        },

        {
            nome: "Charm Prata Pendente Disney Pato Donald",
            colecao: ["Disney"],
            preco: "R$ 910,90",
            imagem: "https://pandorajoias.vtexassets.com/arquivos/ids/217981-800-800?v=638539716154730000&width=800&height=800&aspect=true",

        },

        {
            nome: "Bracelete Pandora Moments Disney Com Fecho Carruagem Cinderela",
            colecao: ["Disney"],
            preco: "R$ 1.209,90",
            imagem: "https://pandorajoias.vtexassets.com/arquivos/ids/182697-800-800?v=637395330770370000&width=800&height=800&aspect=true",

        },

        {
            nome: "Bracelete Disney Pandora Moments",
            colecao: ["Disney"],
            preco: "R$ 1.920,95",
            imagem: "https://pandorajoias.vtexassets.com/arquivos/ids/185038-800-800?v=637644885900670000&width=800&height=800&aspect=true",

        },

        {
            nome: "Brinco de Ouro Pequeno Disney Concha de A Pequena Sereia",
            colecao: ["Disney"],
            preco: "R$ 1.300,90",
            imagem: "https://pandorajoias.vtexassets.com/arquivos/ids/220844-800-800?v=638554652588330000&width=800&height=800&aspect=true",

        },

        {
            nome: "Bracelete de Prata Rígido Marvel - Homem-Aranha",
            colecao: ["Marvel"],
            preco: "R$ 920,90",
            imagem: "https://pandorajoias.vtexassets.com/arquivos/ids/190122-800-800?v=638024794250300000&width=800&height=800&aspect=true",

        },

        {
            nome: "Bracelete de Prata e Fecho Marvel",
            colecao: ["Maevel"],
            preco: "R$ 1.515,95",
            imagem: "https://pandorajoias.vtexassets.com/arquivos/ids/190388-800-800?v=638121446952230000&width=800&height=800&aspect=true",

        },

        {
            nome: "Bracelete de Prata Marvel - Fecho Os Vingadores",
            colecao: ["Marvel"],
            preco: "R$ 1.335,95",
            imagem: "https://pandorajoias.vtexassets.com/arquivos/ids/188067-800-800?v=637801507800300000&width=800&height=800&aspect=true",

        },

        {
            nome: "Bracelete de Ouro Corrente de Links", 
            colecao: ["Pandora me"],
            preco: "R$ 2.125,90",
            imagem: "https://pandorajoias.vtexassets.com/arquivos/ids/220207-800-800?v=638550144461700000&width=800&height=800&aspect=true",

        },

        {
            nome: "Bracelete De Corrente De Links Pandora Me",
            colecao: ["Pandora me"],
            preco: "R$ 1.620,90",
            imagem: "https://pandorajoias.vtexassets.com/arquivos/ids/186534-800-800?v=637686129530430000&width=800&height=800&aspect=true",

        },

        {
            nome: "Charm Disney Jasmine De Aladdin",
            colecao: ["Disney"],
            preco: "R$ 821,90",
            imagem: "https://pandorajoias.vtexassets.com/arquivos/ids/201586-800-800?v=638455146370570000&width=800&height=800&aspect=true",

        },

        {
            nome: "Anel Ouro Rosé Pirâmide e Zircônias",
            colecao: ["Pandora me"],
            preco: "R$ 835,90",
            imagem: "https://pandorajoias.vtexassets.com/arquivos/ids/220437-800-800?v=638551055185570000&width=800&height=800&aspect=true",

        },

        {
            nome: "Charm Pendente Marvel - Pedras do Infinito de Os Vingadores",
            colecao: ["Marvel"],
            preco: "R$ 1.550,00",
            imagem: "https://pandorajoias.vtexassets.com/arquivos/ids/188103-800-800?v=637801518881230000&width=800&height=800&aspect=true",

        },

        {
            nome: "Charm Prata Marvel - Homem-Aranha",
            colecao: ["Marvel"],
            preco: "R$ 735,00",
            imagem: "https://pandorajoias.vtexassets.com/arquivos/ids/190139-800-800?v=638024812972170000&width=800&height=800&aspect=true",

        },

        {
            nome: "Charm Prata Pendente Marvel - Martelo do Thor de Os Vingadores",
            colecao: ["Marvel"],
            preco: "R$ 825,90",
            imagem: "https://pandorajoias.vtexassets.com/arquivos/ids/188158-800-800?v=637806575795500000&width=800&height=800&aspect=true",

        },
    ]);


return(
    <div>
        <ListarProdutos ListarProdutos={produtos}/>
    </div>

);
}
import { useState } from "react";

export default function Oferta(){
    const [produtos, setProdutos] = useState([
        {
            nome:"Charm de Ouro Marvel - Insignia Estrela Capitão Marvel",
            preco: "R$ 989,90",
            colecao: ["Marvel"],
            imagem: "https://pandorajoias.vtexassets.com/arquivos/ids/220105-800-800?v=638545071836500000&width=800&height=800&aspect=true",
        },

        {
            nome: "Charm Prata Marvel - Rocket Racoon de Guardiões da Galáxia",
            preco: "R$ 915,90",
            colecao: ["Marvel"],
            imagem: "https://pandorajoias.vtexassets.com/arquivos/ids/190443-800-800?v=638122507338970000&width=800&height=800&aspect=true",
        },

        {
            nome: "Charm Prata Pendente Disney Gênio e Lâmpada Mágica de Aladdin",                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                    
            colecao: ["Diney"],
            preco: "R$ 390,99",
            imagem: "https://pandorajoias.vtexassets.com/arquivos/ids/190174-800-800?v=638024935220770000&width=800&height=800&aspect=true",
        },

        {
            nome: "Charm Prata Disney Burro Bisonho de Ursinho Pooh",
            colecao: ["Disney"],
            preco: "R$ 950,00",
            imagem: "https://pandorajoias.vtexassets.com/arquivos/ids/189371-800-800?v=637945441298200000&width=800&height=800&aspect=true",
        },

        {
            nome: "Charm Prata Marvel - Emblema Rocket e Groot de Guardiões da Galáxia",
            colecao: ["Marvel"],
            preco: "R$ 870,90",
            imagem: "https://pandorajoias.vtexassets.com/arquivos/ids/190406-800-800?v=638121515517400000&width=800&height=800&aspect=true",
        },

        {
            nome: "Charm Prata Marvel - Hulk de Os Vingadores",
            colecao: ["Marvel"],
            preco: "790,90",
            imagem: "https://pandorajoias.vtexassets.com/arquivos/ids/188154-800-800?v=637806572254800000&width=800&height=800&aspect=true",
        },

        {
            nome: "Charm Reator Arc Homem De Ferro_ Os Vingadores Marvel",
            colecao: ["Marvel"],
            preco: "R$ 990,00",
            imagem: "https://pandorajoias.vtexassets.com/arquivos/ids/188150-800-800?v=637801545937500000&width=800&height=800&aspect=true",
        },

        {
            nome: "Charm de Ouro Marvel - Homem de Ferro de Os Vingadores",
            colecao: ["Marvel"],
            preco: "R$ 855,90",
            imagem: "https://pandorajoias.vtexassets.com/arquivos/ids/188095-800-800?v=637801515431330000&width=800&height=800&aspect=true",
        },

        {
            nome: "Charm Prata Disney Cadeado Mickey e Minnie",
            colecao: ["Disney"],
            preco: "R$ 778,00",
            imagem: "https://pandorajoias.vtexassets.com/arquivos/ids/187884-800-800?v=637789060100800000&width=800&height=800&aspect=true",
        },

        {
            nome:"Charm de Ouro Pendente Disney Maçã da Branca de Neve",
            colecao: ["Disney"],
            preco: "R$ 845,90",
            imagem: "https://pandorajoias.vtexassets.com/arquivos/ids/224303-800-800?v=638593315796830000&width=800&height=800&aspect=true",
        },
    ])

    return(
        <div>
            <ListarProdutos ListarProdutos={produtos}/>
        </div>

    
    );
}
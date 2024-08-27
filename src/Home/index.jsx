import React, { useState } from 'react'; 
export default function Home() {
    const [produtos, setProdutos] = useState([
        {
            nome:"Anel de Prata Disney Rainha Má da Branca de Neve",
            colecao:["Disney"],
            preco: "R$ 1.249,00",
            imagem: "https://pandorajoias.vtexassets.com/arquivos/ids/224291-800-800?v=638593313632070000&width=800&height=800&aspect=true",
        },

        {
            nome: "Anel de Prata Fila de Corações",
            colecao:["Prata"],
            preco: "R$ 659,00",
            imagem: "https://pandorajoias.vtexassets.com/arquivos/ids/224442-800-800?v=638593407058770000&width=800&height=800&aspect=true",
        },

        {
            nome: "Colar de Ouro Círculo Logo e Pavé",
            colecao:["Ouro"],
            preco: "R$ 2.309,00",
            imagem: "https://pandorajoias.vtexassets.com/arquivos/ids/185217-800-800?v=637645868220200000&width=800&height=800&aspect=true",
        },

        {
            nome: "Charm Prata Pendente Disney Rainha de Copas",
            colecao:["Disney"],
            preco: "R$ 989,00",
            imagem: "https://pandorajoias.vtexassets.com/arquivos/ids/224307-800-800?v=638593317491170000&width=800&height=800&aspect=true",
        },

        {
            nome: "Charm Prata Disney Malévola Brilha no Escuro",
            colecao:["Disney"],
            preco: "R$ 1.119,00",
            imagem: "https://pandorajoias.vtexassets.com/arquivos/ids/224311-800-800?v=638593319088170000&width=800&height=800&aspect=true",
         }
        
])
    return (
        <>
           
           <Carousel
           infiniteLoop
           useKeyboardArrows
           autoPlay
           showArrows={true}
           showStatus={false}
           showThumbs={false}
           >
    
        <div>
            <img src="https://pandorajoias.vtexassets.com/assets/vtex.file-manager-graphql/images/8e07ff63-6978-4670-9715-fff6c8095e34___9ace7c66ef94619931fb5d913a87905a.jpg"></img>
        </div>

        <div>
            <img src="https://pandorajoias.vtexassets.com/assets/vtex.file-manager-graphql/images/a97606f8-ce5c-44c8-af0a-f3b1b23ecf18___1a1d4fab647536293248aaa0f2a81e6e.png"></img>
        </div>

        <div>
            <img src="https://pandorajoias.vtexassets.com/assets/vtex.file-manager-graphql/images/e221d0b0-5b7f-427d-bba3-7e55b93a4ae4___49b6af3dc2f395f26e96e72d52260ba1.jpg"></img>
        </div>
        </Carousel>

        <div>
            <ListarProdutos ListarProdutos={produtos}/>
        </div>

     </>
    );
}
import { useState } from "react";
export default function ListarProdutos({ListarProdutos}){
    return(
        <div>
            {ListarProdutos.map((produto) =>
            <div>
                <p>{produto.nome}</p>
                <p>{produto.preco}</p>
                <p>{produto.colecao}</p>
                <p>{produto.imagem}</p>
            <img src= {produto.imagem}/>
        </div>
            )}
        </div>
    );
}
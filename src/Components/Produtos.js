import React from 'react'

const Produtos = ({data}) => {
  return (
    <div>
        <p>
            Nome: {data.nome}
        </p>

        <p>Preço : R$ {data.preco}</p>
        <img src={data.fotos[0].src} alt="" />
        <p>Descrição: {data.descricao}</p>
    </div>
  )
}

export default Produtos
// Quando o usuário clicar em um dos botões, faça um fetch do produto clicado utilizando a api abaixo
// https://ranekapi.origamid.dev/json/api/produto/notebook
// https://ranekapi.origamid.dev/json/api/produto/smartphone
// Mostre o nome e preço na tela (separe essa informação em um componente Produto.js)
// Defina o produto clicado como uma preferência do usuário no localStorage
// Quando o usuário entrar no site, se existe um produto no localStorage, faça o fetch do mesmo
import React from 'react'
import Produtos from './Components/Produtos'




const App = () => {
  const [dados, setDados] = React.useState()
  const [produto, setProduto] = React.useState()
  const [carregando, setCarregando] = React.useState()




  React.useEffect(() => {

    const dados = window.localStorage.getItem('dados');

    if (dados != null) {
      setDados(dados);
    }

  }, [])


  React.useEffect(() => {
        const fetch = async () =>{
          const response = await fetch(`https://ranekapi.origamid.dev/json/api/produto/${produto}`)
          const obj = await response.json();
    
          window.localStorage.setItem('dados', obj);
          setDados(obj)
          setCarregando(false)
   
        
        
 
      
      
      
      }
      fetch()
    }, [produto])




  return (
    <div>
      <button onClick={(e) => setProduto(e.target.innerText)}>notebook</button>
      <button onClick={(e) => setProduto(e.target.innerText)}>smartphone</button>
      {carregando && <p>Carregando ...</p>}
      {!carregando && dados && <Produtos data={dados} />}
    </div>

  )
}

export default App
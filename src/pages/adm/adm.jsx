import React, { useState } from "react";
import "./adm.scss";

const ADMpage = () => {
  const [produtos, setProdutos] = useState([
    { id: 1, nome: "Bolo de Chocolate", preco: 20.0 },
    { id: 2, nome: "Torta de Morango", preco: 15.0 },
  ]);

  const [pedidos, setPedidos] = useState([
    { id: 1, cliente: "Maria", produto: "Bolo de Chocolate", quantidade: 1, preco: 20.0, status: "Em Andamento" },
    { id: 2, cliente: "João", produto: "Torta de Morango", quantidade: 2, preco: 30.0, status: "Concluído" },
  ]);

  const [novoPedido, setNovoPedido] = useState({ cliente: "", produto: "", quantidade: 1, status: "Em Andamento" });
  const [lucrosTotais, setLucrosTotais] = useState(0);
  const [transacoes, setTransacoes] = useState([]);

  const adicionarPedido = () => {
    const produto = produtos.find((p) => p.nome === novoPedido.produto);
    if (!produto) {
      alert("Produto não encontrado.");
      return;
    }
    
    const precoTotal = produto.preco * novoPedido.quantidade;
    const pedidoComId = {
      id: Date.now(),
      ...novoPedido,
      preco: precoTotal,
    };

    setPedidos([...pedidos, pedidoComId]);
    setTransacoes([...transacoes, pedidoComId]);
    setLucrosTotais(lucrosTotais + precoTotal);
  };

  const atualizarPedido = (id, novoStatus) => {
    setPedidos(
      pedidos.map((pedido) =>
        pedido.id === id ? { ...pedido, status: novoStatus } : pedido
      )
    );
  };

  const calcularLucrosTotais = () => {
    return pedidos.reduce((total, pedido) => total + pedido.preco, 0);
  };

  return (
    <div className="pagina-adm">
      <header className="cabecalho-adm">
        <h1>Administração da Confeitaria</h1>
        <nav className="navegacao-adm">
          <a href="#painel">Painel</a>
          <a href="#produtos">Produtos</a>
          <a href="#pedidos">Pedidos</a>
          <a href="#transacoes">Transações</a>
        </nav>
      </header>

      <main className="conteudo-adm">
        <section id="painel" className="painel">
          <h2>Painel</h2>
          <p>Total de vendas: R${calcularLucrosTotais().toFixed(2)}</p>
          <p>Lucro total: R${lucrosTotais.toFixed(2)}</p>
        </section>

        <section id="produtos" className="produtos">
          <h2>Gerenciar Produtos</h2>
          <table>
            <thead>
              <tr>
                <th>ID</th>
                <th>Nome</th>
                <th>Preço</th>
              </tr>
            </thead>
            <tbody>
              {produtos.map((produto) => (
                <tr key={produto.id}>
                  <td>{produto.id}</td>
                  <td>{produto.nome}</td>
                  <td>R${produto.preco.toFixed(2)}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </section>

        <section id="pedidos" className="pedidos">
          <h2>Pedidos</h2>
          <div className="novo-pedido">
            <h3>Adicionar Novo Pedido</h3>
            <input
              type="text"
              placeholder="Nome do Cliente"
              value={novoPedido.cliente}
              onChange={(e) =>
                setNovoPedido({ ...novoPedido, cliente: e.target.value })
              }
            />
            <input
              type="text"
              placeholder="Nome do Produto"
              value={novoPedido.produto}
              onChange={(e) =>
                setNovoPedido({ ...novoPedido, produto: e.target.value })
              }
            />
            <input
              type="number"
              placeholder="Quantidade"
              min="1"
              value={novoPedido.quantidade}
              onChange={(e) =>
                setNovoPedido({ ...novoPedido, quantidade: parseInt(e.target.value) })
              }
            />
            <button onClick={adicionarPedido}>Adicionar Pedido</button>
          </div>

          <table>
            <thead>
              <tr>
                <th>ID</th>
                <th>Cliente</th>
                <th>Produto</th>
                <th>Quantidade</th>
                <th>Preço</th>
                <th>Status</th>
                <th>Ações</th>
              </tr>
            </thead>
            <tbody>
              {pedidos.map((pedido) => (
                <tr key={pedido.id}>
                  <td>{pedido.id}</td>
                  <td>{pedido.cliente}</td>
                  <td>{pedido.produto}</td>
                  <td>{pedido.quantidade}</td>
                  <td>R${pedido.preco.toFixed(2)}</td>
                  <td>{pedido.status}</td>
                  <td>
                    <button onClick={() => atualizarPedido(pedido.id, "Concluído")}>Concluir</button>
                    <button onClick={() => atualizarPedido(pedido.id, "Cancelado")}>Cancelar</button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </section>

        <section id="transacoes" className="transacoes">
          <h2>Transações</h2>
          <table>
            <thead>
              <tr>
                <th>ID</th>
                <th>Cliente</th>
                <th>Produto</th>
                <th>Quantidade</th>
                <th>Preço Total</th>
              </tr>
            </thead>
            <tbody>
              {transacoes.map((transacao) => (
                <tr key={transacao.id}>
                  <td>{transacao.id}</td>
                  <td>{transacao.cliente}</td>
                  <td>{transacao.produto}</td>
                  <td>{transacao.quantidade}</td>
                  <td>R${transacao.preco.toFixed(2)}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </section>
      </main>
    </div>
  );
};

export default ADMpage;



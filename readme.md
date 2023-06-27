<!DOCTYPE html>
<html>
<head>
  <title> Storage em JavaScript</title>
</head>
<body>
  <h1>localStorage e sessionStorage em JavaScript</h1>
 
 
  <h2>localStorage</h2>
  <p>O localStorage permite armazenar dados persistentes no navegador.</p>

  <h3>Armazenando dados no localStorage</h3>
  <pre><code>
localStorage.setItem('chave', 'valor');
  </code></pre>

  <h3>Recuperando dados do localStorage</h3>
  <pre><code>
const valor = localStorage.getItem('chave');
console.log(valor); // imprime o valor associado à chave
  </code></pre>

  <h3>Removendo um item do localStorage</h3>
  <pre><code>
localStorage.removeItem('chave');
  </code></pre>

  <h2>sessionStorage</h2>
  <p>O sessionStorage permite armazenar dados temporários durante a sessão do usuário.</p>

  <h3>Armazenando dados no sessionStorage</h3>
  <pre><code>
sessionStorage.setItem('chave', 'valor');
  </code></pre>

  <h3>Recuperando dados do sessionStorage</h3>
  <pre><code>
const valor = sessionStorage.getItem('chave');
console.log(valor); // imprime o valor associado à chave
  </code></pre>

  <h3>Removendo um item do sessionStorage</h3>
  <pre><code>
sessionStorage.removeItem('chave');
  </code></pre>

</body>
</html>

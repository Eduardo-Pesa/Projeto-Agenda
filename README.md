# Calculadora Financeira estilo HP-12C para App Store

Agora este repositório tem um **protótipo funcional web** para você já testar a calculadora no celular.

## Como usar (rápido)

1. No terminal, dentro da pasta do projeto, rode:

```bash
python3 -m http.server 8080
```

2. Abra no navegador:
- No computador: `http://localhost:8080`
- No celular (mesma rede): `http://SEU_IP_LOCAL:8080`

3. A calculadora vai aparecer na tela principal (`index.html`).

## Funcionalidades implementadas no protótipo

- Operações RPN (ENTER, +, -, ×, ÷)
- Pilha X/Y/Z/T visível
- Funções financeiras com registradores `n`, `i`, `PV`, `PMT`, `FV`
- Cálculo de `FV` e `PMT`
- Memória `STO` e `RCL` (slots 0 a 4)
- Ajuste de casas decimais (0 a 10)
- Troca de separador decimal (vírgula ou ponto)

## Arquivos principais

- `index.html` → Interface da calculadora
- `styles.css` → Estilo da interface
- `app.js` → Lógica RPN, memória e funções financeiras
- `MANUAL_HP12C_APP.md` → Manual detalhado com exemplos
- `ROADMAP_PRODUTO.md` → Plano de produto e App Store

## Observação importante

Se “não aparece nada”, normalmente é porque o arquivo foi aberto de forma incorreta.
Use sempre por servidor local (`python3 -m http.server`) e abra no navegador pelo endereço mostrado no terminal.

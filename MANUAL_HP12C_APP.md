# Manual de Uso — Calculadora Financeira estilo HP-12C (Celular)

## 1) Conceitos básicos

### 1.1 RPN (Notação Polonesa Reversa)
No modo RPN, você digita os números **antes** da operação.

Exemplo simples:
- Para calcular `8 + 2`:
  1. Digite `8` e pressione `ENTER`
  2. Digite `2`
  3. Pressione `+`
  4. Resultado: `10`

### 1.2 Pilha (stack)
A calculadora mantém uma pilha de registradores (X, Y, Z, T).
- `X` = valor exibido
- `ENTER` empilha valor
- Operações usam principalmente X e Y

---

## 2) Funções financeiras principais

### 2.1 Teclas financeiras
- `n` = número de períodos
- `i` = taxa de juros por período
- `PV` = valor presente
- `PMT` = pagamento periódico
- `FV` = valor futuro

### 2.2 Exemplo: valor futuro de investimento único
**Problema:** investir R$ 1.000,00 por 12 meses a 1% ao mês. Qual FV?

Passos:
1. `12` `n`
2. `1` `i`
3. `1000` `CHS` `PV` (PV como saída de caixa)
4. `0` `PMT`
5. `FV`

Resultado aproximado: **R$ 1.126,83**

### 2.3 Exemplo: prestação (PMT)
**Problema:** financiamento de R$ 20.000,00 por 24 meses a 1,5% ao mês.

Passos:
1. `24` `n`
2. `1.5` `i`
3. `20000` `PV`
4. `0` `FV`
5. `PMT`

O resultado de PMT será negativo (saída de caixa). Exibir opção no app para “valor absoluto”.

---

## 3) Como salvar valores na memória

## 3.1 Memória direta
- `STO` + número da memória (ex.: `STO 1`) salva o valor de X
- `RCL` + número (ex.: `RCL 1`) recupera o valor salvo

Exemplo:
1. Digite `2500`
2. `STO 1` (salva)
3. Digite `0`
4. `RCL 1` (volta para 2500)

## 3.2 Boas práticas de memória
- Memória 0: taxa padrão
- Memória 1: renda mensal
- Memória 2: custo fixo
- Memória 3: reserva

Assim o usuário pode manter uma convenção estável.

---

## 4) Fórmulas pré-configuradas

## 4.1 O que são
Atalhos com campos prontos para cálculos recorrentes.

Exemplos sugeridos:
1. Juros compostos (`FV = PV * (1+i)^n`)
2. Prestação (`PMT`)
3. Taxa implícita (`i`)
4. VPL (Valor Presente Líquido)
5. TIR (Taxa Interna de Retorno)

## 4.2 Como salvar uma fórmula pré-configurada
Fluxo sugerido no app:
1. Ir em **Fórmulas**
2. Tocar em **Nova fórmula**
3. Nomear (ex.: “Financiamento carro”)
4. Selecionar tipo (PMT, FV, VPL…)
5. Definir valores padrão (ex.: `n=36`, `i=1.2`)
6. Salvar

## 4.3 Como usar depois
1. Abrir **Fórmulas salvas**
2. Selecionar fórmula
3. Alterar apenas os campos necessários
4. Tocar em **Calcular**

---

## 5) Casas decimais

## 5.1 Aumentar ou diminuir
Adicionar opção em **Configurações > Exibição**:
- Casas decimais: 0 a 10
- Botões rápidos: `-` e `+`

Exemplo de comportamento:
- 2 casas: `1234,57`
- 4 casas: `1234,5678`

## 5.2 Atalho estilo HP
Se quiser fidelidade à HP-12C, incluir comando equivalente a `f` + `número` para configurar decimais.

---

## 6) Vírgula ou ponto decimal

## 6.1 Configuração regional
Em **Configurações > Número e idioma**:
- Separador decimal: `vírgula` ou `ponto`
- Separador de milhar: automático por região

## 6.2 Regras práticas
- Se decimal = vírgula: `1.234,56`
- Se decimal = ponto: `1,234.56`

## 6.3 Dica de UX
Permitir entrada com ambos (`.` e `,`) e converter internamente para o padrão escolhido pelo usuário.

---

## 7) Exemplos rápidos de cálculos de função

1. **Soma:** `10 ENTER 25 +` → `35`
2. **Porcentagem:** `200 ENTER 10 %` → `20`
3. **Acréscimo percentual:** `200 ENTER 10 % +` → `220`
4. **Desconto percentual:** `200 ENTER 10 % -` → `180`
5. **Potência:** `2 ENTER 5 y^x` → `32`

---

## 8) Estrutura recomendada do manual dentro do app

1. Comece aqui (RPN em 1 minuto)
2. Funções financeiras
3. Memórias (STO/RCL)
4. Fórmulas salvas
5. Configurações de número e casas decimais
6. FAQ

---

## 9) FAQ essencial

**“Por que meu PV aparece negativo?”**  
Porque a convenção financeira diferencia entrada e saída de caixa.

**“Posso usar ponto e vírgula juntos?”**  
Na entrada, sim (com normalização). Na exibição, usar apenas um padrão configurado.

**“Dá para importar/exportar fórmulas?”**  
Sim, sugerido via iCloud/JSON para backup e sincronização.

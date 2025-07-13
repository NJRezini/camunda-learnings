# Camunda Starter - Processo Simples de Aprovacao

Este projeto demonstra como rodar o Camunda 7 com Docker e implementar um processo BPMN simples com uma tarefa de aprovacao com formulario.

---

## 🐳 Rodando o Camunda com Docker

Certifique-se de que o Docker esteja instalado e em funcionamento no seu sistema (Linux, WSL, Windows ou macOS).

### 1. Suba o container Camunda

```bash
docker-compose up --build
```

### 2. Acesse o tasklist na url:
```bash
http://localhost:8080/camunda/app/tasklist

Usuário: demo
Senha: demo
```

### 3. Inicie o processo

    Clique em "Processes" no topo da tela

    Selecione "approval-process"

    Clique em "Start process"
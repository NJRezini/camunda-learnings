const axios = require('axios');

const camundaUrl = 'http://camunda:8080/engine-rest';

async function main() {
  console.log('Worker iniciado');

  while (true) {
    try {
      const res = await axios.post(`${camundaUrl}/external-task/fetchAndLock`, {
        workerId: 'worker-node',
        maxTasks: 1,
        usePriority: true,
        topics: [
          {
            topicName: 'process-order',
            lockDuration: 10000
          }
        ]
      });

      if (res.data.length === 0) {
        await new Promise(r => setTimeout(r, 2000));
        continue;
      }

      const task = res.data[0];
      console.log(`Processando tarefa ${task.id}`);

      // Simula o processamento
      await new Promise(r => setTimeout(r, 5000));

      await axios.post(`${camundaUrl}/external-task/${task.id}/complete`, {
        workerId: 'worker-node'
      });

      console.log(`Tarefa concluida: ${task.id}`);
    } catch (err) {
      console.error('Erro:', err.message);
      await new Promise(r => setTimeout(r, 5000));
    }
  }
}

main();

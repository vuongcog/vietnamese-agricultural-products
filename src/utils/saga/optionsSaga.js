import { sagaMiddleware } from "../../configStore/configStore"; // Đường dẫn đúng đến nơi bạn tạo store

const runningSagas = new Map();

export function runSaga(saga, sagaName) {
  if (runningSagas.has(sagaName)) {
    console.warn(`Saga with name ${sagaName} is already running.`);
    return;
  }
  const task = sagaMiddleware.run(saga);
  runningSagas.set(sagaName, task);
}

export function cancelSaga(sagaName) {
  const task = runningSagas.get(sagaName);
  if (task) {
    task.cancel();
    runningSagas.delete(sagaName);
  } else {
    console.warn(`No running saga found with name ${sagaName}.`);
  }
}

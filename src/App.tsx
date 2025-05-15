import { useState } from "react";
import { nanoid } from "nanoid";
import AddTaskForm from "./AddTaskForm";
import TodoItem from "./TodoItem";
import Modal from "./modal";

interface Task {
  id: string;
  name: string;
  completed: boolean;
}

const INITIAL_TASKS: Task[] = [
  { id: nanoid(), name: "Eat", completed: false },
  { id: nanoid(), name: "Sleep", completed: false },
  { id: nanoid(), name: "Repeat", completed: false },
];

function App() {
  const [taskList, setTaskList] = useState<Task[]>(INITIAL_TASKS);
  const [isModalOpen, setModalOpen] = useState<boolean>(false);

  const toggleTask = (id: string) => {
    setTaskList((prev) =>
      prev.map((task) =>
        task.id === id ? { ...task, completed: !task.completed } : task
      )
    );
  };

  const deleteTask = (id: string) => {
    setTaskList((prev) => prev.filter((task) => task.id !== id));
  };

  const addTask = (taskName: string) => {
    setTaskList((prev) => [
      ...prev,
      { id: nanoid(), name: taskName, completed: false },
    ]);
    setModalOpen(false);
  };

  return (
    <main className="m-4">
      <button
        onClick={() => setModalOpen(true)}
        className="mt-4 p-2 bg-blue-600 text-white rounded hover:bg-blue-700 active:bg-blue-800"
      >
        New Task
      </button>

      <section className="mt-4">
        <h1 className="text-xl font-bold">To do</h1>
        <ul>
          {taskList.map((task) => (
            <TodoItem
              key={task.id}
              task={task}
              onToggle={toggleTask}
              onDelete={deleteTask}
            />
          ))}
        </ul>
      </section>

      <Modal
        isOpen={isModalOpen}
        onCloseRequested={() => setModalOpen(false)}
        headerLabel="New Task"
      >
        <AddTaskForm onNewTask={addTask} />
      </Modal>
    </main>
  );
}

export default App;

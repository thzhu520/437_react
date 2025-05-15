interface TodoItemProps {
  task: { id: string; name: string; completed: boolean };
  onToggle: (id: string) => void;
  onDelete: (id: string) => void;
}

function TodoItem({ task, onToggle, onDelete }: TodoItemProps) {
  return (
    <li className="flex items-center gap-2">
      <label>
        <input
          type="checkbox"
          checked={task.completed}
          onChange={() => onToggle(task.id)}
        />
        <span className={task.completed ? 'font-bold' : ''}>{task.name}</span>
      </label>
      <button title="Delete" onClick={() => onDelete(task.id)}>
        🗑️
      </button>
    </li>
  );
}

export default TodoItem;

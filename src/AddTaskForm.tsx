import { useState } from 'react';

interface AddTaskFormProps {
  onNewTask: (taskName: string) => void;
}

function AddTaskForm({ onNewTask }: AddTaskFormProps) {
  const [text, setText] = useState('');

  function handleChange(e: React.ChangeEvent<HTMLInputElement>) {
    setText(e.target.value);
  }

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    onNewTask(text);
    setText('');
  }

  return (
    <form onSubmit={handleSubmit} className="flex gap-2">
      <input
        type="text"
        value={text}
        onChange={handleChange}
        placeholder="New task name"
        className="border rounded px-2 py-1 flex-grow"
      />
      <button type="submit" className="bg-blue-600 text-white px-3 rounded">
        Add task
      </button>
    </form>
  );
}

export default AddTaskForm;

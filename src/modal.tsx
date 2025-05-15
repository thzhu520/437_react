import { useRef, ReactNode } from "react";

interface ModalProps {
  isOpen: boolean;
  onCloseRequested: () => void;
  headerLabel: string;
  children: ReactNode;
}

function Modal({ isOpen, onCloseRequested, headerLabel, children }: ModalProps) {
  const dialogRef = useRef<HTMLDivElement>(null);

  if (!isOpen) return null;

  function handleOverlayClick(e: React.MouseEvent<HTMLDivElement>) {
    if (dialogRef.current && !dialogRef.current.contains(e.target as Node)) {
      onCloseRequested();
    }
  }

  return (
    <div
    className="fixed inset-0 bg-black/50 backdrop-blur-sm flex justify-center items-center z-50"
      onClick={handleOverlayClick}
    >
      <div ref={dialogRef} className="bg-white p-6 rounded-md shadow-lg w-96">
        <div className="flex justify-between items-center border-b pb-2 mb-4">
          <h2 className="text-lg font-semibold">{headerLabel}</h2>
          <button onClick={onCloseRequested} aria-label="Close">
            ×
          </button>
        </div>
        {children}
      </div>
    </div>
  );
}

export default Modal;

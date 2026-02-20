import { Button } from "./button";

interface AlertProps {
  text: string;
  onConfirm?: () => void;
  onCancel?: () => void;
}

const Alert = ({ text, onConfirm, onCancel }: AlertProps) => {
  return (
    <div
      className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded relative"
      role="alert"
    >
      <span className="block sm:inline">{text}</span>
      <span className="absolute top-0 bottom-0 right-0 px-4 py-3"></span>
      {onConfirm && (
        <Button
          onClick={onConfirm}
          variant="outline"
          className="alert-button confirm"
        >
          Confirm
        </Button>
      )}
      {onCancel && (
        <Button
          onClick={onCancel}
          variant="outline"
          className="alert-button cancel"
        >
          Cancel
        </Button>
      )}
    </div>
  );
};

export default Alert;

/*<div className={`alert alert-${type}`} role="alert">
      <p className="mt-1 text-sm/6 text-red-500">{text}</p>
      <div className="alert-actions p-4">
        {onConfirm && (
          <Button
            onClick={onConfirm}
            variant="outline"
            className="alert-button confirm"
          >
            Confirm
          </Button>
        )}
        {onCancel && (
          <Button
            onClick={onCancel}
            variant="outline"
            className="alert-button cancel"
          >
            Cancel
          </Button>
        )}
      </div>
    </div> */

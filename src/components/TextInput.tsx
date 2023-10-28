import { type JSX, splitProps } from "solid-js";
import "./styles/textInput.scss";

type TextInputProps = {
  name: string;
  type: "text" | "email";
  label?: string;
  placeholder?: string;
  value: string | undefined;
  error: string;
  required?: boolean;
  ref: (element: HTMLInputElement) => void;
  onInput: JSX.EventHandler<HTMLInputElement, InputEvent>;
  onChange: JSX.EventHandler<HTMLInputElement, Event>;
  onBlur: JSX.EventHandler<HTMLInputElement, FocusEvent>;
};

export function TextInput(props: TextInputProps) {
  const [, inputProps] = splitProps(props, ["value", "label", "error"]);

  return (
    <>
      <input
        id={props.name}
        class="input"
        {...inputProps}
        value={props.value || ""}
        aria-invalid={!!props.error}
        aria-errormessage={`${props.name}-error`}
      />
      {props.error && (
        <div id={`${props.name}-error`} class="error">
          {props.error}
        </div>
      )}
    </>
  );
}

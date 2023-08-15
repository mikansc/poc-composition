/* eslint-disable react/prop-types */
import styles from "./Form.module.scss";

export const Form = ({ children }) => {
  return <form className={styles.container}>{children}</form>;
};

const FieldGroup = ({ children }) => {
  return <div className={styles.fieldGroup}>{children}</div>;
};

const Label = ({ htmlFor, children }) => {
  return (
    <label className={styles.label} htmlFor={htmlFor}>
      {children}
    </label>
  );
};

const Input = ({ type, name, value, onChange, placeholder }) => {
  return (
    <input
      className={styles.input}
      type={type}
      name={name}
      value={value}
      onChange={onChange}
      placeholder={placeholder}
    />
  );
};

const Select = ({ name, value, onChange, children }) => {
  return (
    <select
      className={styles.select}
      name={name}
      value={value}
      onChange={onChange}
    >
      {children}
    </select>
  );
};

const TextArea = ({ name, value, onChange, placeholder }) => {
  return (
    <textarea
      className={styles.textarea}
      name={name}
      value={value}
      onChange={onChange}
      placeholder={placeholder}
    />
  );
};

const Action = ({ children }) => {
  return <div className={styles.action}>{children}</div>;
};

Object.assign(Form, {
  FieldGroup,
  Label,
  Input,
  Select,
  TextArea,
  Action,
});

Form.displayName = "Form";
FieldGroup.displayName = "FieldGroup";
Label.displayName = "Label";
Input.displayName = "Input";
Select.displayName = "Select";
TextArea.displayName = "TextArea";
Action.displayName = "Action";

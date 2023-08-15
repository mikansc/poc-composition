import { Form } from "../Form";

export const UserForm = () => {
  return (
    <Form>
      <Form.FieldGroup>
        <Form.Label>First Name</Form.Label>
        <Form.Input type="text" />
      </Form.FieldGroup>
      <Form.FieldGroup>
        <Form.Label>Last Name</Form.Label>
        <Form.Input type="text" />
      </Form.FieldGroup>
      <Form.FieldGroup>
        <Form.Label>Email</Form.Label>
        <Form.Input type="email" />
      </Form.FieldGroup>
      <Form.FieldGroup>
        <Form.Label>Sex</Form.Label>
        <Form.Select>
          <option value="0">M</option>
          <option value="1">F</option>
        </Form.Select>
      </Form.FieldGroup>
      <Form.Action>
        <button type="submit">Submit</button>
      </Form.Action>
    </Form>
  );
};

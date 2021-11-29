import { Form as FinalForm, Field as FinalFormField } from "react-final-form";
import { validateFormValues } from "../formHelpers";
import * as yup from "yup";
import { Form } from "semantic-ui-react";

const validationSchema = yup.object({
  test: yup.string().required().min(3).max(5),
});

const validate = validateFormValues({ schema: validationSchema });

const EditForm = ({ onSubmit, formId, isSubmitting }) => {
  return (
    <FinalForm
      onSubmit={onSubmit}
      validate={validate}
      render={({ handleSubmit }) => (
        <Form id={formId} onSubmit={handleSubmit}>
          <Form.Group>
            <FinalFormField
              name="test"
              type="text"
              render={({ input, meta }) => (
                <Form.Input
                  label="test"
                  {...input}
                  error={meta.error}
                  disabled={isSubmitting}
                />
              )}
            />
          </Form.Group>
        </Form>
      )}
    />
  );
};

export default EditForm;

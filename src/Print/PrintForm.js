import { Form } from "semantic-ui-react";
import { Form as FinalForm, Field as FinalFormField } from "react-final-form";
import * as yup from "yup";
import { validateFormValues } from "../formHelpers";

const validationSchema = yup.object({
  includeParts: yup.bool(),
  notes: yup.string().max(10),
});

const validate = validateFormValues({ schema: validationSchema });

const PrintForm = ({ onSubmit, formId, isSubmitting }) => (
  <FinalForm
    onSubmit={onSubmit}
    validate={validate}
    render={({ handleSubmit }) => (
      <Form id={formId} onSubmit={handleSubmit}>
        <Form.Group>
          <FinalFormField
            type="Checkbox"
            name="includeParts"
            render={({ input, meta }) => (
              <Form.Input
                label="include parts?"
                {...input}
                disabled={isSubmitting}
                error={meta.error}
              />
            )}
          />
        </Form.Group>
        <Form.Group>
          <FinalFormField
            type="text"
            name="notes"
            render={({ input, meta }) => (
              <div>
                <Form.Input
                  label="notes"
                  error={meta.error}
                  disabled={isSubmitting}
                  {...input}
                />
              </div>
            )}
          />
        </Form.Group>
      </Form>
    )}
  />
);

export default PrintForm;

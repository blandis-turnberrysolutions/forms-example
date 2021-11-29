import { setIn } from "final-form";

export const validateFormValues =
  ({ schema, initialValues }) =>
  async (values) => {
    // if initialValues exist then we pass schema the form values and initialValues so that we can check for a change
    const schemaToValidate =
      typeof schema === "function"
        ? schema(initialValues ? values : undefined, initialValues)
        : schema;

    try {
      await schemaToValidate.validate(values, { abortEarly: false });
    } catch (err) {
      const errors = err.inner.reduce(
        (formError, innerError) =>
          setIn(formError, innerError.path, innerError.message),
        {}
      );

      return errors;
    }
  };

import { Button } from "semantic-ui-react";

const EditPageHeader = ({
  setSubmitTypePrint,
  setSubmitTypeSave,
  formId,
  isSaving,
  isPrinting,
  isLoading,
}) => (
  <div>
    <div style={{ float: "left" }}>
      <h1>Edit</h1>
    </div>
    <Button
      type="submit"
      form={formId}
      onClick={setSubmitTypePrint}
      loading={isPrinting}
      disabled={isSaving || isPrinting || isLoading}
    >
      Print
    </Button>
    <Button
      type="submit"
      form={formId}
      primary
      onClick={setSubmitTypeSave}
      loading={isSaving}
      disabled={isSaving || isPrinting || isLoading}
    >
      Save
    </Button>
  </div>
);

export default EditPageHeader;

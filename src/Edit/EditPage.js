import { Container, Segment, Dimmer, Loader } from "semantic-ui-react";
import * as React from "react";
import EditPageHeader from "./EditPageHeader";
import PrintModal from "../Print/PrintModal";
import EditForm from "./EditForm";
import { load, save, print } from "../apiGateway";

function EditPage() {
  const editFormId = "testForm";
  const printSubmitType = "print";
  const saveSubmitType = "save";
  const [submitType, setSubmitType] = React.useState();
  const [printModalIsOpen, setPrintModalIsOpen] = React.useState(false);
  const [isSaving, setIsSaving] = React.useState(false);
  const [isPrinting, setIsPrinting] = React.useState(false);
  const [isLoading, setIsLoading] = React.useState(false);

  React.useEffect(() => {
    (async () => {
      setIsLoading(true);
      await load();
      setIsLoading(false);
    })();
  }, []);

  const submitPrint = async (values) => {
    setPrintModalIsOpen(false);
    setIsPrinting(true);
    await print(values);
    setIsPrinting(false);
  };

  const submitEdit = async (values) => {
    submitType === printSubmitType ? setIsPrinting(true) : setIsSaving(true);
    await save(values);
    submitType === printSubmitType ? setIsPrinting(false) : setIsSaving(false);
    if (submitType === printSubmitType) setPrintModalIsOpen(true);
  };

  return (
    <div>
      <Container>
        <EditPageHeader
          isLoading={isLoading}
          isSaving={isSaving}
          isPrinting={isPrinting}
          setSubmitTypePrint={() => setSubmitType(printSubmitType)}
          setSubmitTypeSave={() => setSubmitType(saveSubmitType)}
          formId={editFormId}
        />
      </Container>
      <Container>
        <PrintModal
          isSubmitting={isSaving || isPrinting}
          open={printModalIsOpen}
          onClose={() => setPrintModalIsOpen(false)}
          onSubmit={submitPrint}
        />
        <Segment>
          <Dimmer active={isLoading} inverted>
            <Loader>Loading</Loader>
          </Dimmer>
          <EditForm
            formId={editFormId}
            onSubmit={submitEdit}
            isSubmitting={isSaving || isPrinting}
          />
        </Segment>
      </Container>
    </div>
  );
}

export default EditPage;

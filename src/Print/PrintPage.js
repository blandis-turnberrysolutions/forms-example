import PrintForm from "./PrintForm";
import PrintPageHeader from "./PrintPageHeader";
import { Container, Button, Segment, Dimmer, Loader } from "semantic-ui-react";
import * as React from "react";
import { save, load } from "../apiGateway";

const formId = "printForm";

const PrintPage = () => {
  const [isSubmitting, setIsSubmitting] = React.useState(false);
  const [isLoading, setIsLoading] = React.useState(false);

  React.useEffect(() => {
    (async () => {
      setIsLoading(true);
      await load();
      setIsLoading(false);
    })();
  }, []);

  const onSubmit = async (values) => {
    setIsSubmitting(true);
    await save();
    setIsSubmitting(false);
  };

  return (
    <div>
      <Container>
        <PrintPageHeader></PrintPageHeader>
      </Container>
      <Container>
        <Segment>
          <Dimmer active={isLoading} inverted>
            <Loader>Loading</Loader>
          </Dimmer>

          <PrintForm
            onSubmit={onSubmit}
            isSubmitting={isSubmitting}
            formId={formId}
          />
          <Button form={formId} type="submit" primary loading={isSubmitting}>
            Print
          </Button>
        </Segment>
      </Container>
    </div>
  );
};

export default PrintPage;

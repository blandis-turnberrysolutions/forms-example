import { Modal, Button } from "semantic-ui-react";
import PrintForm from "./PrintForm";

const formId = "printForm";

const PrintModal = ({ open, onClose, onSubmit }) => {
  return (
    <Modal open={open}>
      <Modal.Header>Print</Modal.Header>
      <Modal.Content>
        <PrintForm onSubmit={onSubmit} formId={formId} />
      </Modal.Content>
      <Modal.Actions>
        <Button type="button" onClick={onClose}>
          Cancel
        </Button>
        <Button form={formId} type="submit" primary>
          Print
        </Button>
      </Modal.Actions>
    </Modal>
  );
};

export default PrintModal;

import React from "react";
import { Modal, Group, Button } from "@mantine/core";
const TaskModal = ({ setOpened, opened }) => {
  return (
    <div>
      <Modal
        opened={opened}
        onClose={() => setOpened(false)}
        title="Introduce yourself!"
      >
        {/* Modal content */}
      </Modal>
    </div>
  );
};

export default TaskModal;

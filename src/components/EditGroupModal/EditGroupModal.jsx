import {
  Modal,
  Paper,
  Typography,
  Button,
  Stack,
  Backdrop,
  Fade,
  TextField,
} from "@mui/material";
import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

// Base: edit name and income
// Stretch: add/remove users, delete group
const EditGroupModal = ({ openEditModal, handleEditClose, handleEditOpen }) => {
  const [editedGroupInfo, setEditedGroupInfo] = useState({
    name: "",
    income1: "",
    income2: "",
  });
  console.log(editedGroupInfo);

  const dispatch = useDispatch();

  const currentGroup = useSelector((store) => store.currentGroup);

  useEffect(() => {
    setEditedGroupInfo({...editedGroupInfo, name:  currentGroup.name})
  }, []);

  const style = {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: 400,
    bgcolor: "background.paper",
    border: "2px solid #000",
    boxShadow: 24,
    p: 4,
    outline: "none",
  };

  return (
    <div>
      <Modal
        aria-labelledby="transition-modal-title"
        aria-describedby="transition-modal-description"
        open={openEditModal}
        onClose={handleEditClose}
        closeAfterTransition
        slots={{ backdrop: Backdrop }}
        slotProps={{
          backdrop: {
            timeout: 500,
          },
        }}
      >
        <Fade in={openEditModal}>
          <Paper sx={{ ...style, border: "none" }}>
            <Typography id="transition-modal-title" variant="h5">
              Edit Group
            </Typography>

            <Stack direction="column" gap="20px" mt="20px" width="70%">
              <TextField
                type="text"
                label="Group Name"
                variant="outlined"
                value={editedGroupInfo.name}
                onChange={(e) =>
                  setEditedGroupInfo({ ...editedGroupInfo, name: e.target.value })
                }
              />
              <Stack direction="column" gap="10px">
                <Typography>Monthly Take Home</Typography>
                <TextField
                  type="number"
                  label="Income"
                  variant="outlined"
                  value={editedGroupInfo.income1}
                  onChange={(e) =>
                    setEditedGroupInfo({ ...editedGroupInfo, income1: e.target.value })
                  }
                />
                <TextField
                  type="number"
                  label="Second Income"
                  variant="outlined"
                  value={editedGroupInfo.income2}
                  onChange={(e) =>
                    setEditedGroupInfo({ ...editedGroupInfo, income2: e.target.value })
                  }
                />
              </Stack>
            </Stack>

            <Stack
              direction="row"
              sx={{ mt: "20px" }}
              justifyContent="flex-end"
              gap="20px"
            >
              <Button
                variant="contained"
                color="error"
                onClick={() => handleEditClose()}
              >
                Cancel
              </Button>
              <Button
                variant="contained"
                style={{ backgroundColor: "#5B4570" }}
              >
                Save
              </Button>
            </Stack>
          </Paper>
        </Fade>
      </Modal>
    </div>
  );
};

export default EditGroupModal;

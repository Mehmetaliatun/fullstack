import { Box, Button, Grid, Typography } from "@mui/material";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import FirmCard from "../components/FirmCard";
import FirmModal from "../components/modals/FirmModal";
import useStockCalls from "../hooks/useStockCalls";
// import axios from "axios";

// import { useDispatch, useSelector } from "react-redux";
// import { fetchFail, fetchStart, getSuccess } from "../features/stockSlice";

const Firms = () => {
  const { getFirms } = useStockCalls();
  const { firms } = useSelector((state) => state.stock);

  const [open, setOpen] = useState(false);
  // const handleOpen = () => setOpen(true);
  // const handleClose = () => setOpen(false);

  // const dispatch = useDispatch();

  // const { token } = useSelector((state) => state.auth);
  // const BASE_URL = "https://10001.fullstack.clarusway.com/";

  // const getFirms = async () => {
  //   const url = "firms";
  //   dispatch(fetchStart());
  //   try {
  //     const { data } = await axios.get(`${BASE_URL}stock/firms/`, {
  //       headers: { Authorization: `Token ${token}` },
  //     });
  //     console.log(data);
  //     dispatch(getSuccess({ data, url }));
  //   } catch (error) {
  //     dispatch(fetchFail());
  //     console.log(error);
  //   }
  // };

  useEffect(() => {
    getFirms();
  }, []);

  return (
    <Box>
      <Typography variant="h4" color="error">
        Firms
      </Typography>

      <Button variant="contained" onClick={() => setOpen(true)}>
        NEW FIRM
      </Button>

      <FirmModal open={open} setOpen={setOpen} />

      {firms?.length > 0 && (
        <Grid container justifyContent="center" gap={3}>
          {firms?.map((firm) => (
            <Grid item>
              <FirmCard key={firm.id} firm={firm} />
            </Grid>
          ))}
        </Grid>
      )}
    </Box>
  );
};

export default Firms;

// import { axiosWithToken } from "../service/axiosInstance";
import { useDispatch } from "react-redux";
import { fetchFail, fetchStart, getSuccess } from "../features/stockSlice";
import { toastErrorNotify, toastSuccessNotify } from "../helper/ToastNotify";
import useAxios from "./useAxios";

const useStockCalls = () => {
  const dispatch = useDispatch();
  const { axiosWithToken } = useAxios();

  //!------------GET CALL-------------
  const getStockData = async (url) => {
    dispatch(fetchStart());
    try {
      const { data } = await axiosWithToken.get(`stock/${url}/`);
      dispatch(getSuccess({ data, url }));
    } catch (error) {
      dispatch(fetchFail());
      console.log(error);
    }
  };

  const getFirms = () => getStockData("firms");
  const getSales = () => getStockData("sales");

  //!------------DELETE CALL-------------
  const deleteStockData = async (url, id) => {
    try {
      await axiosWithToken.delete(`stock/${url}/${id}/`);
      toastSuccessNotify(`${url} successfuly deleted`);
      getStockData(url);
    } catch (error) {
      console.log(error);
      toastErrorNotify(`${url} something went wrong`);
    }
  };

  const deleteFirm = (id) => deleteStockData("firms", id);

  //!------------POST CALL-------------

  const postStockData = async (info, url) => {
    try {
      await axiosWithToken.post(`stock/${url}/`, info);
      toastSuccessNotify(`${url} successfuly added`);
      getStockData(url);
    } catch (error) {
      console.log(error);
      toastErrorNotify(`${url} can not be added`);
    }
  };

  const postFirm = (info) => postStockData(info, "firms");

  return {
    postFirm,
    postStockData,
    getStockData,
    getFirms,
    getSales,
    deleteFirm,
  };
};

export default useStockCalls;

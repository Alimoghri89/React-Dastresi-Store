import React, { useEffect } from "react";
import AddBoxIcon from "@mui/icons-material/AddBox";
import EditIcon from "@mui/icons-material/Edit";
import DeleteForeverIcon from "@mui/icons-material/DeleteForever";
import BackupIcon from "@mui/icons-material/Backup";
import {
  setElectedCategory,
  setLoading,
  setError,
} from "../../Redux/ElectedCategory/ActionElectedCategory";
import { useDispatch, useSelector } from "react-redux";
import { useSWRConfig } from "swr";
import axios from "axios";
import ElectedCategory from "../ElectedCategory/ElectedCategory";
const EditCategory = () => {
  const { url } = useSWRConfig();
  const {
    electedCategory: data,
    loading,
    error,
  } = useSelector((state) => state.electedCategory);
  const dispatch = useDispatch();
  const fetchElectedCategory = async () => {
    try {
      dispatch(setLoading(false));
      let res = await axios.get(`../${url}`);
      dispatch(setElectedCategory(res.data));
    } catch {
      dispatch(setError(error.message));
      dispatch(setLoading(true));
    }
  };
  useEffect(() => {
    fetchElectedCategory();
  }, []);

  return (
    <div className="w-[calc(100vw-100px)] lg:w-[calc(100vw-300px)] h-[calc(100vh-60px)] bg-light_gray  rounded-se-2xl flex flex-col  items-center gap-2 py-2 px-2 md:px-4 xl:py-1 xl:px-1 lg:p-2">
      <div className=" w-[100%]  lg:w-[60%]  h-[60%]  flex flex-col justify-around items-center gap-2">
        <div className=" w-[70%] md:w-full h-fit shadow-md shadow-black/25 rounded-2xl overflow-hidden">
          <ElectedCategory />
        </div>
        <div className="w-full border-2  h-[40vh] md:h-fit overflow-hidden bg-medium_gray border-black rounded-2xl">
          <div className="w-full py-1 bg-dark_gray flex gap-2  justify-center items-center">
            <span className="font-shabnam-bold text-white text-sm lg:text-xl">
              اضافه کردن دسته بندی منتخب
            </span>
            <div className="w-fit h-fit flex text-[20px] lg:text-[35px]">
              <AddBoxIcon fontSize="inherit" className="text-white" />
            </div>
          </div>
          <div
            dir="rtl"
            className="p-2   grid  grid-rows-2 grid-cols-1 lg:grid-rows-1 lg:grid-cols-2  gap-2"
          >
            <div className="flex gap-2 h-[40px] lg:h-auto flex-row lg:flex-col justify-between items-center">
              <label
                className="text-dark_gray font-shabnam-medium text-sm lg:text-lg lg:self-start"
                htmlFor="file"
              >
                عکس محصول
              </label>
              <input
                type="file"
                name="file"
                className="rounded-lg bg-white w-[70%] h-[40px] lg:w-full lg:h-auto border-[1px] border-black "
              />
            </div>
            <div className="flex gap-2 h-[40px] lg:h-auto flex-row lg:flex-col justify-between items-center">
              <label
                className="text-dark_gray font-shabnam-medium text-sm lg:text-lg lg:self-start"
                htmlFor="category"
              >
                دسته بندی محصول
              </label>
              <select
                name="category"
                className="text-dark_gray font-shabnam-medium rounded-lg w-[70%] h-[40px] lg:w-full lg:h-auto border-[1px] border-black"
              >
                {data?.menu
                  ?.map((item) =>
                    item.submenu !== undefined ? item.submenu : undefined
                  )
                  .filter(Boolean)
                  .slice(0, -1)
                  .flatMap((item) => item)
                  .map((item, index) => {
                    return (
                      <option key={index} value={item}>
                        {item}
                      </option>
                    );
                  })}
              </select>
            </div>
          </div>
          <div className=" flex w-fit ml-4 mb-1  text-dark_blue"><BackupIcon fontSize="large"/></div>
        </div>
      </div>
      <div
        className="flex flex-col gap-2 h-[40%] w-[100%]  lg:w-[60%]"
        dir="rtl"
      >
        <div className=" overflow-hidden border-2 border-dark_gray rounded-2xl">
          <div className=" min-h-[200px] h-full overflow-scroll" dir="ltr">
            <table className=" border-dark_gray w-full" dir="rtl">
              <thead>
                <tr className="bg-dark_gray text-white font-shabnam-bold">
                  <th className="w-fit px-3 text-center text-nowrap">شماره</th>
                  <th className="w-fit px-3 text-center text-nowrap">
                    نام فایل
                  </th>
                  <th className="w-fit px-3 text-center text-nowrap">
                    پیش نمایش
                  </th>
                  <th className="w-fit px-3 text-center text-nowrap">ویرایش</th>
                  <th className="w-fit px-3 text-center text-nowrap">حذف</th>
                </tr>
              </thead>
              <tbody>
                {data?.electedCategory?.map((item, index) => {
                  return (
                    <tr
                      className="border-b-2 border-b-dark_gray  odd:text-dark_blue even:bg-soft_gray even:text-white"
                      key={index}
                    >
                      <td className="text-center font-shabnam-medium">
                        {index + 1}
                      </td>
                      <td className="text-center font-shabnam-medium">
                        {item.name}
                      </td>
                      <td className="flex justify-center py-2">
                        <img
                          className="w-[50px]"
                          src={`../../../${item.path}`}
                          alt={item.alt}
                        />
                      </td>
                      <td className="text-center">
                        <EditIcon className=" hover:text-light_red cursor-pointer" />
                      </td>
                      <td className="text-center ">
                        <DeleteForeverIcon className=" text-light_red hover:text-dark_red cursor-pointer" />
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EditCategory;

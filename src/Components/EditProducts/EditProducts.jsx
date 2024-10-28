import React, { useEffect } from "react";
import AddBoxIcon from "@mui/icons-material/AddBox";
import EditIcon from "@mui/icons-material/Edit";
import DeleteForeverIcon from "@mui/icons-material/DeleteForever";
import { useSWRConfig } from "swr";
import { useDispatch, useSelector } from "react-redux";
import {setProducts,setLoading,setError,} from "../../Redux/Products/ActionProducts";
import axios from "axios";
const EditProducts = () => {
  const { url } = useSWRConfig();
  const {
    products: data,
    loading,
    error,
  } = useSelector((state) => state.Product);
  const dispatch = useDispatch();
  const fetchProducts = async () => {
    try {
      dispatch(setLoading(false));
      let res = await axios.get("../../../db.json");
      dispatch(setProducts(res.data));
    } catch {
      dispatch(setError(error.message));
      dispatch(setLoading(true));
    }
  };
  useEffect(() => {
    fetchProducts();
  }, []);

  return (
    <div className="w-full  h-full bg-light_gray  rounded-se-2xl flex flex-col items-center justify-center gap-4  p-2 lg:p-16">
      <div className="w-full border-2 lg:h-[75vh] 2xl:h-fit overflow-hidden bg-medium_gray border-black rounded-2xl">
        <div className="w-full py-1 bg-dark_gray flex gap-2  justify-center items-center">
          <span className="font-shabnam-bold text-white text-sm lg:text-xl">
            اضافه کردن محصول
          </span>
          <div className="w-fit h-fit flex text-[20px] lg:text-[35px]"><AddBoxIcon fontSize="inherit" className="text-white" /></div>
        </div>
        <div dir="rtl" className="p-2   grid  grid-rows-6 grid-cols-1 lg:grid-rows-3 lg:grid-cols-2 2xl:grid-rows-1  2xl:grid-cols-6 gap-2">
          <div className="flex gap-2 h-[40px] lg:h-auto flex-row lg:flex-col justify-between items-center   ">
            <label
              className="text-dark_gray font-shabnam-medium text-sm lg:text-lg lg:self-start"
              htmlFor="filename"
            >
              نام محصول
            </label>
            <input type="text" name="fileName" className="rounded-lg w-[70%] h-[40px] lg:w-full lg:h-auto border-[1px] border-black" />
          </div>
          <div className="flex gap-2 h-[40px] lg:h-auto flex-row lg:flex-col  justify-between items-center ">
            <label
              className="text-dark_gray font-shabnam-medium text-sm lg:text-lg lg:self-start"
              htmlFor="alt"
            >
              نام جایگزین
            </label>
            <input type="text" name="alt" className="rounded-lg w-[70%] h-[40px] lg:w-full lg:h-auto border-[1px] border-black" />
          </div>
          <div className="flex gap-2 h-[40px] lg:h-auto flex-row lg:flex-col justify-between items-center">
            <label
              className="text-dark_gray font-shabnam-medium text-sm lg:text-lg lg:self-start"
              htmlFor="file"
            >
              عکس محصول
            </label>
            <input type="file" name="file" className="rounded-lg bg-white w-[70%] h-[40px] lg:w-full lg:h-auto border-[1px] border-black " />
          </div>
          <div className="flex gap-2 h-[40px] lg:h-auto flex-row lg:flex-col justify-between items-center">
            <label
              className="text-dark_gray font-shabnam-medium text-sm lg:text-lg lg:self-start"
              htmlFor="category"
            >
              دسته بندی محصول
            </label>
            <select name="category" className="text-dark_gray font-shabnam-medium rounded-lg w-[70%] h-[40px] lg:w-full lg:h-auto border-[1px] border-black">
              {data?.menu
                ?.map((item) =>
                  item.submenu !== undefined ? item.submenu : undefined
                )
                .filter(Boolean)
                .slice(0, -1)
                .flatMap((item) => item)
                .map((item, index) => {
                  return (
                    <option key={index} value={item} >
                      {item}
                    </option>
                  );
                })}
            </select>
          </div>
          <div className="flex gap-2 h-[40px] lg:h-auto flex-row lg:flex-col   justify-between items-center">
            <label
              className="text-dark_gray font-shabnam-medium text-sm lg:text-lg lg:self-start"
              htmlFor="discount" 
            >
              تخفیف محصول(٪)
            </label>
            <input type="number" min={0} max={100} placeholder=" بین ۰ تا ۱۰۰ "  name="discount" className="rounded-lg bg-white w-[70%] h-[40px] lg:w-full lg:h-auto placeholder:text-center border-[1px] border-black" />
          </div>
          <div className="flex gap-2 h-[40px] lg:h-auto flex-row lg:flex-col   justify-between items-center">
            <label
              className="text-dark_gray font-shabnam-medium text-sm lg:text-lg lg:self-start"
              htmlFor="discount" 
            >
              قیمت محصول(تومان)
            </label>
            <input type="number" name="discount" className="rounded-lg bg-white w-[70%] h-[40px] lg:w-full lg:h-auto border-[1px] border-black" />
          </div>
        </div>
      </div>
      <div
        className="flex flex-col border-2 border-black rounded-2xl overflow-hidden w-full"
        dir="rtl"
      >
        <div className="h-[25vh] lg:h-[50vh]  overflow-y-scroll" dir="ltr">
          <table
            className="border-2 border-dark_gray  w-full overflow-y-scroll"
            dir="rtl"
          >
            <thead>
              <tr className="bg-dark_gray text-white font-shabnam-bold">
                <th className="w-fit px-3 text-center">شماره</th>
                <th className="w-fit px-3 text-center">نام فایل</th>
                <th className="w-fit px-3 text-center">دسته بندی</th>
                <th className="w-fit px-3 text-center">تخفیف</th>
                <th className="w-fit px-3 text-center">قیمت</th>
                <th className="w-fit px-3 text-center">پیش نمایش</th>
                <th className="w-fit px-3 text-center">ویرایش</th>
                <th className="w-fit px-3 text-center">حذف</th>
              </tr>
            </thead>
            <tbody>
              {data?.products?.map((item, index) => {
                return (
                  <tr
                    className="border-b-2 border-b-dark_gray  odd:text-dark_blue even:bg-soft_gray even:text-white"
                    key={index}
                  >
                    <td className="text-center font-shabnam-medium">
                      {index+1}
                    </td>
                    <td className="text-center font-shabnam-medium min-w-[200px]">
                      {item.name}
                    </td>
                    <td className="text-center font-shabnam-medium">
                      {item.category}
                    </td>
                    <td className="text-center font-shabnam-medium">
                      {item.discount}
                    </td>
                    <td className="text-center font-shabnam-medium">
                      {item.price}
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
  );
};

export default EditProducts;

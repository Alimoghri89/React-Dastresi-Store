import React from "react";
import MainSlider from "../../Components/MainSlider/MainSlider";
import AddBoxIcon from "@mui/icons-material/AddBox";
import EditIcon from "@mui/icons-material/Edit";
import DeleteForeverIcon from "@mui/icons-material/DeleteForever";
import useSWR, { useSWRConfig } from "swr";
const EditProducts = () => {
  const { url } = useSWRConfig();
  const { data, error, isLoading } = useSWR(url);
  return (
    <div className="w-[calc(100vw-300px)] h-auto bg-medium_gray  rounded-se-2xl flex flex-col items-center gap-2  p-16">
      <div className=" w-[50%] h-fit shadow-md shadow-black/25 rounded-2xl overflow-hidden">
        <MainSlider />
      </div>

      <div className="flex flex-col  w-full" dir="rtl">
        <AddBoxIcon fontSize="large" className="text-dark_green" />
        <div className="h-[300px]  overflow-y-scroll" dir="ltr">
          <table
            className="border-2 border-dark_gray  w-full overflow-y-scroll"
            dir="rtl"
          >
            <thead>
              <tr className="bg-dark_gray text-white font-shabnam-bold">
                <th className="w-fit px-3 text-center">شماره</th>
                <th className="w-fit px-3 text-center">نام فایل</th>
                <th className="w-fit px-3 text-center">پیش نمایش</th>
                <th className="w-fit px-3 text-center">ویرایش</th>
                <th className="w-fit px-3 text-center">حذف</th>
              </tr>
            </thead>
            <tbody>
              {data?.mainSlider.map((item, index) => {
                return (
                  <>
                    <tr
                      className="border-b-2 border-b-dark_gray  odd:text-dark_blue even:bg-soft_gray even:text-white"
                      key={index}
                    >
                      <td className="text-center font-shabnam-medium">
                        {item.id}
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
                  </>
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

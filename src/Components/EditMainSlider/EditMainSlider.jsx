import React, { useState, useEffect } from "react";
import MainSlider from "../../Components/MainSlider/MainSlider";
import AddBoxIcon from "@mui/icons-material/AddBox";
import EditIcon from "@mui/icons-material/Edit";
import DeleteForeverIcon from "@mui/icons-material/DeleteForever";
import BackupIcon from "@mui/icons-material/Backup";
import {
  fetchMainSlider,
  addMainSlider,
  deleteMainSlider,
  editMainSlider,
} from "../../Redux/MainSlider/MainSliderSlice";
import { useDispatch, useSelector } from "react-redux";

const EditMainSlider = () => {
  const { mainSlider, loading, error } = useSelector(
    (state) => state.MainSlider
  );
  const handleAdd = (newSlider) => {
    dispatch(addMainSlider(newSlider));
  };
  const handleDelete = (id) => {
    dispatch(deleteMainSlider(id));
  };
  const handleEdit = (id, updatedData) => {
    dispatch(editMainSlider({ id, updatedData }));
  };
  const dispatch = useDispatch();
  const [fileName, setFileName] = useState([]);
  const [Name, setName] = useState("");
  const [altName, setAltName] = useState("");
  const submitHandler = (e) => {
    e.preventDefault();
    handleAdd({
      name: Name,
      alt: altName,
      path: `/public/mainSlider/${fileName}`,
    });
    setName("");
    setAltName("");
  };
  useEffect(() => {
    dispatch(fetchMainSlider());
  }, [fetchMainSlider]);
  return (
    <div className="w-[calc(100vw-100px)] lg:w-[calc(100vw-300px)] h-[calc(100vh-60px)] bg-light_gray  rounded-se-2xl flex flex-col  items-center gap-2 p-2 lg:p-2">
      <div className="w-full h-[60%]  flex flex-col justify-around items-center gap-2">
        <div className=" w-[100%] lg:w-[60%] h-fit shadow-md shadow-black/25 rounded-2xl overflow-hidden">
          <MainSlider />
        </div>
        <div
          className=" w-full lg:w-[60%] flex flex-col items-center  h-auto  overflow-hidden  rounded-2xl border-2 border-black"
          dir="rtl"
        >
          <div className=" w-full bg-dark_gray  flex px-1 lg:p-0 lg:justify-center items-center    ">
            <AddBoxIcon className="text-white" fontSize="medium" />
            <span className="font-shabnam-medium self-center text-white">
              اضافه کردن عکس به اسلایدر
            </span>
          </div>
          <form
            action="#"
            method="post"
            onSubmit={submitHandler}
            className="w-full item-center flex flex-col p-2 gap-4 bg-medium_gray"
          >
            <div className="flex lg:flex-row flex-col  gap-2">
              <div className="flex items-center justify-between font-shabnam-bold w-full gap-1">
                <label
                  className="text-nowrap text-dark_gray"
                  htmlFor="fileName"
                >
                  نام عکس
                </label>
                <input
                  type="text"
                  name="fileName"
                  value={Name}
                  className="rounded-md h-full lg:w-full w-[50%]"
                  onChange={(e) => setName(e.target.value)}
                />
              </div>
              <div className="flex items-center justify-between font-shabnam-bold w-full gap-1">
                <label className="text-nowrap text-dark_gray" htmlFor="fileAlt">
                  نام جایگزین
                </label>
                <input
                  type="text"
                  name="fileAlt"
                  value={altName}
                  className="rounded-md h-full w-[50%] lg:w-full"
                  onChange={(e) => setAltName(e.target.value)}
                />
              </div>
            </div>
            <div className=" flex gap-2">
              <input
                type="file"
                className="rounded-md h-full w-full bg-white"
                onChange={(e) => setFileName(e.target.files[0].name)}
              />
              <button>
                <BackupIcon className="text-dark_blue" fontSize="large" />
              </button>
            </div>
          </form>
        </div>
      </div>
      <div
        className="flex flex-col gap-2  h-[40%] w-[100%]  lg:w-[60%] "
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
                {mainSlider?.map((item, index) => {
                  return (
                    <tr
                      className="border-b-2 border-b-dark_gray  odd:text-dark_blue even:bg-soft_gray even:text-white"
                      key={item.id}
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
                        <DeleteForeverIcon
                          onClick={() => handleDelete(item.id)}
                          className=" text-light_red hover:text-dark_red cursor-pointer"
                        />
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

export default EditMainSlider;

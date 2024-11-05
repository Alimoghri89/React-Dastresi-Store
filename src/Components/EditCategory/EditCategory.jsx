import React, { useEffect, useState } from "react";
import AddBoxIcon from "@mui/icons-material/AddBox";
import EditIcon from "@mui/icons-material/Edit";
import DeleteForeverIcon from "@mui/icons-material/DeleteForever";
import BackupIcon from "@mui/icons-material/Backup";
import {
  fetchElectedCategory,
  addElectedCategory,
  deleteElectedCategory,
  editElectedCategory,
} from "../../Redux/ElectedCategory/ElectedCategorySlice";
import {fetchMenu} from "../../Redux/Menu/MenuSlice"
import { useDispatch, useSelector } from "react-redux";
import ElectedCategory from "../ElectedCategory/ElectedCategory";

const EditCategory = () => {
  const {
    electedCategory,
    loading,
    error,
  } = useSelector((state) => state.ElectedCategory);
  const {
    menu,
  } = useSelector((state) => state.Menu);
  const handleAdd = (newCategory) => {
    dispatch(addElectedCategory(newCategory));
  };
  
  const handleDelete = (id) => {
    dispatch(deleteElectedCategory(id));
  };

  const handleEdit = (id, updatedData) => {
    dispatch(editElectedCategory({ id, updatedData }));
  };
  const [editMode, setEditMode] = useState(false)
  const [editingcategoryId, setEditingCategoryId] = useState(null);

  const[fileName,setFileName] = useState("")
  const[file, setFile] = useState(null);
  const[productCategory,setProductCategory] = useState("")

  const handleEditIconClick = (category) => {
    setProductCategory(category.name)
    setFileName(category.path.split("/").pop())
    setEditMode(true);
    setEditingCategoryId(category.id);
  };
  const submitHandler = (e)=>{
    e.preventDefault()
    const categoryData = {
      name: productCategory,
      alt: productCategory,
      path: `/public/electedCategory/${fileName}`,
    };
   if(editMode){
    handleEdit(editingcategoryId,categoryData)
   }else{

    handleAdd(categoryData)

   }
   setEditMode(false)
   setProductCategory("");
   setFile(null);
  }
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchElectedCategory());
    dispatch(fetchMenu());
  }, []);

  return (
    <div className="w-[calc(100vw-100px)] lg:w-[calc(100vw-300px)] h-[calc(100vh-60px)] bg-light_gray  rounded-se-2xl flex flex-col  items-center gap-2 py-2 px-2 md:px-4 xl:py-1 xl:px-1 lg:p-2">
      <div className=" w-[100%]  lg:w-[60%]  h-[60%]  flex flex-col justify-around items-center gap-2">
        <div className=" w-[70%] md:w-full h-fit shadow-md shadow-black/25 rounded-2xl overflow-hidden">
          <ElectedCategory />
        </div>
        <form action="#" method="post" onSubmit={submitHandler}>
          <div className="w-full border-2   h-fit overflow-hidden bg-medium_gray border-black rounded-2xl ">
            <div className="w-full py-1 bg-dark_gray flex gap-2  justify-center items-center  ">
              <span className="font-shabnam-bold text-white text-sm lg:text-xl">
                اضافه کردن دسته بندی منتخب
              </span>
              <div className="w-fit h-fit flex text-[20px] lg:text-[35px]">
                <AddBoxIcon fontSize="inherit" className="text-white" />
              </div>
            </div>
            <div
              dir="rtl"
              className="p-2   grid  grid-rows-2 grid-cols-1 lg:grid-rows-1 lg:grid-cols-2  gap-2 x"
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
                  key={file ? file.name : "empty"}
                  className="rounded-lg bg-white w-[70%] h-[40px] lg:w-full lg:h-auto border-[1px] border-black "
                  onChange={(e)=>{
                    setFileName(e.target.files[0].name);
                    setFile(e.target.files[0]);
                  }}
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
                  value={productCategory}
                  className="text-dark_gray font-shabnam-medium rounded-lg w-[70%] h-[40px] lg:w-full lg:h-auto border-[1px] border-black"
                  onChange={(e)=>setProductCategory(e.target.value )}
                >
                  <option>لطفا انتخاب کنید</option>
                  {menu
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
            <div className=" flex w-fit ml-4 mb-1  text-dark_blue">
              <button >
                <BackupIcon fontSize="large" />
              </button>
            </div>
          </div>
        </form>
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
                     دسته بندی
                  </th>
                  <th className="w-fit px-3 text-center text-nowrap">
                    پیش نمایش
                  </th>
                  <th className="w-fit px-3 text-center text-nowrap">ویرایش</th>
                  <th className="w-fit px-3 text-center text-nowrap">حذف</th>
                </tr>
              </thead>
              <tbody>
                {electedCategory?.map((item, index) => {
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
                        <EditIcon 
                        onClick={()=>handleEditIconClick(item)}
                        className=" hover:text-light_red cursor-pointer" />
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

export default EditCategory;

import React, { useEffect,useState } from "react";
import AddBoxIcon from "@mui/icons-material/AddBox";
import EditIcon from "@mui/icons-material/Edit";
import DeleteForeverIcon from "@mui/icons-material/DeleteForever";
import { useDispatch, useSelector } from "react-redux";
import {
  fetchProducts,
  addProduct,
  deleteProduct,
  editProduct,
} from "../../Redux/Products/ProductsSlice";
import { fetchMenu } from "../../Redux/Menu/MenuSlice";
import BackupIcon from "@mui/icons-material/Backup";

const EditProducts = () => {
  const { products, loading, error } = useSelector((state) => state.Products);
  const dispatch = useDispatch();

  const { menu } = useSelector((state) => state.Menu);

  const handleAdd = (newProduct) => {
    dispatch(addProduct(newProduct));
  };

  const handleDelete = (id) => {
    console.log(id)
    dispatch(deleteProduct(id));
  };

  const handleEdit = (id, updatedData) => {
    dispatch(editProduct({ id, updatedData }));
  };
  const [editMode, setEditMode] = useState(false)
  const [editingProductId, setEditingProductId] = useState(null);

  const handleEditIconClick = (product) => {
    setName(product.name);
    setAltName(product.alt);
    setFileName(product.path); 
    setDiscount(product.discount);
    setPrice(product.price);
    setProductCategory(product.category);
    setEditMode(true);
    setEditingProductId(product.id);
    console.log("id:", editingProductId, "name:",name,"alt:",altName,"category:",productCategory,"fileName:",fileName,"discount:",discount,"price:",price)
  };

  const[name,setName] = useState("")
  const[altName,setAltName] = useState("")
  const[fileName,setFileName] = useState("")
  const[discount,setDiscount] = useState("")
  const[price,setPrice] = useState("")
  const[file, setFile] = useState(null);
  const[productCategory,setProductCategory] = useState("default")
  const submitHandler = (e)=>{
    if (editMode){
      e.preventDefault()
      handleEdit(editingProductId,{
        name: name,
        alt: altName,
        path: fileName,
        discount:  discount,
        price:  price,
        category: productCategory
      })
      setName("");
      setAltName("");
      setFile(null);
      setDiscount("");
      setPrice("");
      setProductCategory("default");
      setEditMode(false);
      setEditingProductId("");
    }else{
      e.preventDefault()
      console.log("name:",name,"alt:",altName,"category:",productCategory,"fileName:",fileName,"discount:",discount,"price:",price)
      handleAdd({"name": name, "alt":altName, "path": `/public/products/${fileName}`, "discount": discount,  "price": price, "category": productCategory});
      setName("");
      setAltName("");
      setFile(null);
      setDiscount("");
      setPrice("");
      setProductCategory("default");
    }
  }
  useEffect(() => {
    dispatch(fetchProducts());
    dispatch(fetchMenu());
  }, []);
  return (
    <div className="w-full  h-full bg-light_gray  rounded-se-2xl flex flex-col items-center justify-center gap-4  p-2 lg:p-16">
      <div className="w-full border-2 lg:h-[75vh] 2xl:h-fit overflow-hidden bg-medium_gray border-black rounded-2xl">
        <div className="w-full py-1 bg-dark_gray flex gap-2  justify-center items-center">
          <span className="font-shabnam-bold text-white text-sm lg:text-xl">
            اضافه کردن محصول
          </span>
          <div className="w-fit h-fit flex text-[20px] lg:text-[35px]">
            <AddBoxIcon fontSize="inherit" className="text-white" />
          </div>
        </div>
        <form
          action="#"
          method="post"
          dir="rtl"
          onSubmit={submitHandler}
          className="p-2   grid  grid-rows-6 grid-cols-1 lg:grid-rows-3 lg:grid-cols-2 2xl:grid-rows-1  2xl:grid-cols-6 gap-2"
        >
          <div className="flex gap-2 h-[40px] lg:h-auto flex-row lg:flex-col justify-between items-center   ">
            <label
              className="text-dark_gray font-shabnam-medium text-sm lg:text-lg lg:self-start"
              htmlFor="filename"
            >
              نام محصول
            </label>
            <input
              type="text"
              name="fileName"
              value={name}
              onChange={(e)=>setName(e.target.value)}
              className="rounded-lg w-[70%] h-[40px] lg:w-full lg:h-auto border-[1px] border-black"
            />
          </div>
          <div className="flex gap-2 h-[40px] lg:h-auto flex-row lg:flex-col  justify-between items-center ">
            <label
              className="text-dark_gray font-shabnam-medium text-sm lg:text-lg lg:self-start"
              htmlFor="alt"
            >
              نام جایگزین
            </label>
            <input
              type="text"
              name="alt"
              value={altName}
              onChange={(e)=>setAltName(e.target.value)}
              className="rounded-lg w-[70%] h-[40px] lg:w-full lg:h-auto border-[1px] border-black"
            />
          </div>
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
              onChange={(e)=>{
                setFileName(e.target.files[0].name);
                setFile(e.target.files[0]);
              }}
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
              value={productCategory}
              onChange={(e)=>setProductCategory(e.target.value)}
              className="text-dark_gray font-shabnam-medium rounded-lg w-[70%] h-[40px] lg:w-full lg:h-auto border-[1px] border-black"
            >
              <option>انتخاب کنید</option>
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
          <div className="flex gap-2 h-[40px] lg:h-auto flex-row lg:flex-col   justify-between items-center">
            <label
              className="text-dark_gray font-shabnam-medium text-sm lg:text-lg lg:self-start"
              htmlFor="discount"
            >
              تخفیف محصول(٪)
            </label>
            <input
              type="number"
              min={0}
              max={100}
              placeholder=" بین ۰ تا ۱۰۰ "
              name="discount"
              value={discount}
              onChange={(e)=>setDiscount(e.target.value)}
              className="rounded-lg bg-white w-[70%] h-[40px] lg:w-full lg:h-auto placeholder:text-center border-[1px] border-black"
            />
          </div>
          <div className="flex gap-2 h-[40px] lg:h-auto flex-row lg:flex-col   justify-between items-center">
            <label
              className="text-dark_gray font-shabnam-medium text-sm lg:text-lg lg:self-start"
              htmlFor="price"
            >
              قیمت محصول(تومان)
            </label>
            <div className="flex flex-row w-[70%] lg:w-full items-center gap-2 lg:gap-6">
              <input
                type="number"
                name="price"
                value={price}
                onChange={(e)=>setPrice(e.target.value)}
                className="rounded-lg bg-white  h-[40px] w-full lg:h-auto border-[1px] border-black"
              />
              <button><BackupIcon fontSize="large" className="text-dark_blue" /></button>
            </div>
          </div>
        </form>
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
              {products?.map((item, index) => {
                return (
                  <tr
                    className="border-b-2 border-b-dark_gray  odd:text-dark_blue even:bg-soft_gray even:text-white"
                    key={index}
                  >
                    <td className="text-center font-shabnam-medium">
                      {index + 1}
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
                      <EditIcon 
                      onClick={()=>handleEditIconClick(item)}
                      className=" hover:text-light_red cursor-pointer" />
                    </td>
                    <td className="text-center ">
                      <DeleteForeverIcon 
                      onClick = {()=>handleDelete(item.id)}
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
  );
};

export default EditProducts;

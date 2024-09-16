import * as YUP from 'yup'

let ProductSchema = YUP.object({
    title : YUP.string().required("Insert Product Title"),
      price : YUP.string().required("Insert Product Price"),
      category : YUP.string().required("Select Product Category"),
      subcategory : YUP.string().required("Select Product Sub-Category"),
      detail : YUP.string().required("Insert Product Detail"),
      discount : YUP.string().required("Insert Product Discount"),
      quantity : YUP.string().required("Insert Product Quantity"),
})

export default ProductSchema;
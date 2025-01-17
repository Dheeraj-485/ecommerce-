import axios from "axios";

// export function productListAPi(){
//  return new Promise(async (resolve) => {
//     const response =await axios.get('http://localhost:8000/products');
//     const data=await response.data;
//     console.log("APi response",data);
    
//     resolve({data})
//  })
 
// }

export const productListAPi = async () => {
   const response = await fetch('http://localhost:8000/products'); // Ensure this endpoint is correct
   const data = await response.json();
   console.log('API Data:', data); // Log data for debugging
   return data;
 };

 export const  productFilterApi=async(filter,sort)=>{
   let queryString='';
   for(let key in filter){
      const categoryValues=filter[key];
      if(categoryValues.length>0){
         const lastCategoryValues=categoryValues[categoryValues.length-1];

         queryString+=`${key}=${lastCategoryValues}`

      }
      for(let key in sort){
         queryString+=`${key}=${sort[key]}&`
      }
   }


      const response=await fetch('http://localhost:8000/products?'+queryString)
      const data=response.json();
      console.log("Fetch data",data);
      
      return data;
}


// export function productFilterApi(filter,sort){
//    let queryString='';
//    for(let key in filter){
//       const categoryValues=filter[key];
//       if(categoryValues.length>0){
//          const lastCategoryValues=categoryValues[categoryValues.length-1];

//          queryString+=`${key}=${lastCategoryValues}`

//       }
//       for(let key in sort){
//          queryString+=`${key}=${sort[key]}&`
//       }
//    }
//    return new Promise(async(resolve) => {

//       const response=await fetch('http://localhost:8000/products?'+queryString)
//       const data=response.json();
//       console.log("Fetch data",data);
      
//       resolve({data})
//    })
// }
export function productSortApi(Sort){
   // let queryString='';
   let queryString = Object.keys(Sort)
    .map((key) => `${encodeURIComponent(key)}=${encodeURIComponent(Sort[key])}`)
    .join("&");
   for(let key in Sort){
      queryString+=`${key}=${Sort[key]}&`
   }
   return new Promise(async(resolve) => {

      const response=await fetch('https://dummyjson.com/products?'+queryString)
      const data=response.json();
      console.log("APi sort: ",data);
      
      resolve({data})
   })
}

// export const productListApi=async()=>{
//     try {
//         const response = await fetch('https://dummyjson.com/products');
//         const data=await response.json();
//         return {data}

//     } catch (error) {
        
//     }
// }
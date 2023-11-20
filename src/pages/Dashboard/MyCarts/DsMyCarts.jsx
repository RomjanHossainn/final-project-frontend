
import Swal from "sweetalert2";
import useCarts from "../../../hooks/useCarts";
import { axiosSecure } from "../../../hooks/useAxiosSecure";


const DsMyCarts = () => {
    const [carts, refetch , isLoading] = useCarts();


    if (isLoading) {
      return <span className="loading absolute left-1/2 top-1/2 loading-spinner text-info"></span>;
    }

    const totalPrice = carts.reduce((total,item) => total + item.price ,0 )



    
    
    
    
    let count = 1;

    const handleDelete = (_id) => {
        Swal.fire({
          title: "Are you sure?",
          text: "You won't be able to revert this!",
          icon: "warning",
          showCancelButton: true,
          confirmButtonColor: "#3085d6",
          cancelButtonColor: "#d33",
          confirmButtonText: "Yes, delete it!",
        }).then((result) => {
          if (result.isConfirmed) {
            axiosSecure.delete(`/carts/${_id}`)
            .then(res => {
                if (res.data.deletedCount > 0){
                  Swal.fire({
                    title: "Deleted!",
                    text: "Your file has been deleted.",
                    icon: "success",
                  });
                  refetch();
                }
            })

          }
        });
    }


    

    return (
      <div className="px-10">
        <h1>{carts.length}</h1>
        <div className="flex justify-between">
          <h4 className="text-2xl">Total orders: {carts.length}</h4>
          <h4 className="text-2xl">total price: ${totalPrice}</h4>
          <button className="bg-orange-400 text-white rounded-md px-3 py-2">
            Pay
          </button>
          
        </div>
        <div className="relative overflow-x-auto shadow-md sm:rounded-lg mt-5">
          <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
            <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
              <tr>
                <th scope="col" className="px-6 py-3">
                  
                </th>
                <th scope="col" className="px-6 py-3">
                  Product name
                </th>

                <th scope="col" className="px-6 py-3">
                  Product Image
                </th>
                <th scope="col" className="px-6 py-3">
                  Price
                </th>
                <th scope="col" className="px-6 py-3">
                  Action
                </th>
              </tr>
            </thead>
            <tbody>
              {carts?.map((item) => 
                (
                
                <tr key={item._id} className="odd:bg-white odd:dark:bg-gray-900 even:bg-gray-50 even:dark:bg-gray-800 border-b dark:border-gray-700">
                  <td className="text-lg px-6">{count++}</td>
                  
                  <th
                    scope="row"
                    className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                  >
                    {item.name}
                  </th>

                  <td className="px-6 py-4">
                    <img className="w-20" src={item.image} alt="" />
                  </td>
                  <td className="px-6 py-4">${item.price}</td>
                  <td className="px-6 py-4">
                    <a onClick={() => handleDelete(item._id)}
                      href="#"
                      className="font-medium text-blue-600 dark:text-blue-500 hover:underline"
                    >
                      Delete
                    </a>
                  </td>
                  
                </tr>
              ))}
              {/* Repeat the pattern for other table rows */}
            </tbody>
          </table>
        </div>
      </div>
    );
};

export default DsMyCarts;
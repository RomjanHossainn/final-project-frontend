
import { useContext } from "react";
import Swal from "sweetalert2";
import { AuthContext } from "../../context/AuthProvider/AuthProvider";
import useAxiosSecure from "../../hooks/useAxiosSecure";
import useCarts from "../../hooks/useCarts";
import useAdmin from "../../hooks/useAdmin";

const ShareChefRecom = ({menu}) => {

    
    const [,refetch] = useCarts()

     const { image, name, price,category, recipe,_id } = menu || {};

     const {user} = useContext(AuthContext)

     const axiosSecure = useAxiosSecure();

     const [isAdmin] = useAdmin()

     const addToCart = () => {


        if(isAdmin){
          return Swal.fire({
            position: "top-end",
            icon: "warning",
            title: `${name} sorry you are admin`,
            showConfirmButton: false,
            timer: 2000,
          });
        }

        if(user && user?.email){
          const orderCarts = {
              menuId : _id,
              image,
              name,
              price,
              category,
              email : user?.email
          }

          axiosSecure.post('/carts',orderCarts)
          .then(result => {
            if(result.data.insertedId){
              Swal.fire({
                position: "top-end",
                icon: "success",
                title: `${name} successfully added carts`,
                showConfirmButton: false,
                timer: 1500,
              });
              refetch();
            }
          })
          
        }
     }

    return (
      <div className="card bg-[#F3F3F3] shadow-xl">
        <img src={image} alt="Shoes" className="rounded-xl" />

        <div className="card-body items-center text-center space-y-2">
          <h2 className="card-title">{name}</h2>
          <p>{recipe}</p>
          <div className="card-actions">
            <button onClick={addToCart} className="bg-[#E8E8E8] px-4 border-b-[4px] border-[#BB8506] rounded-md py-2">
              ADD TO CART
            </button>
          </div>
        </div>
      </div>
    );
};

export default ShareChefRecom;
import {
  useQuery,
} from '@tanstack/react-query'
import useAxiosSecure from '../../hooks/useAxiosSecure';
import { MdDelete } from 'react-icons/md';
import { FaUsers } from 'react-icons/fa6';
import Swal from 'sweetalert2';


const AllUsers = () => {

    const axiosSecure = useAxiosSecure();

    const {data : users = [],refetch} = useQuery({
        queryKey : ['publics'],
        queryFn : async () => {
            const publics = await axiosSecure.get("/publicinfo");
            return publics.data;
        }   
    })


    const handleDeleteUser = (_id) => {
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
            

            axiosSecure.delete(`/public/${_id}`).then((res) => {
              if(res.data.deletedCount > 0){
                Swal.fire({
                  title: "Deleted!",
                  text: "Your file has been deleted.",
                  icon: "success",
                });
                refetch();
              }
            });

          }
        });
    }



    const makeAdmin = (_id) => {
      axiosSecure.patch(`/make/admin/${_id}`)
      .then(result => {
        if(result.data.modifiedCount > 0){
          refetch();
        }
      })
    }

    

    return (
      <div>
        <div>
          <h1 className="text-3xl">Total users: {users.length}</h1>
        </div>
        <div className="overflow-x-auto">
          <table className="table table-zebra border-spacing-2 border-separate">
            {/* head */}
            <thead>
              <tr>
                <th>Name</th>
                <th>Email</th>
                <th>Roll</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {/* row 1 */}
              {users?.map((user, index) => (
                <tr key={user._id} className="">
                  <th>{index + 1}</th>
                  <th>{user.name}</th>
                  <td>{user.email}</td>
                  {user.role === "admin" ? (
                    <td className='cursor-pointer'>{user.role}</td>
                  ) : (
                    <td className="bg-[#D1A054] w-6 rounded-md ">
                      <FaUsers
                        onClick={() => makeAdmin(user._id)}
                        className="text-2xl cursor-pointer text-white "
                      ></FaUsers>
                    </td>
                  )}
                  <td>
                    <MdDelete
                      onClick={() => handleDeleteUser(user._id)}
                      className="text-3xl text-red-500 cursor-pointer"
                    ></MdDelete>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    );
};

export default AllUsers;
const users = [
  {  id : 1, name: "Venkatesh", role: "Frontend Developer" },
  {  id : 2, name: "Aadil", role: "Backend Developer" },
  { id : 3,  name: "Thayub", role: "Fullstack Developer" },
]; 

const UserCard = ({username,userRole}) => {
    return (
        <div className="cart">
            <h2>{username}</h2>
            <p>{userRole}</p>
        </div>
    )
}


const CreateUser = () => {
    return (
        users.map((user) => (
            <UserCard key = {user.id} username = {user.name} userRole = {user.role} />
        ))
    )
}


export default CreateUser;
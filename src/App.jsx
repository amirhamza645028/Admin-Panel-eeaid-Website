// import { useEffect, useState } from "react"



// function App() {
//   const [users,setUsers] = useState([]);
//   useEffect(()=>{
//     fetch('http://localhost:5000/user')
//       .then(res => res.json())
//       .then(data => setUsers(data))
//   },[])
//   const fromhadelar = (e)=>{
//     e.target.preventDefault();
//     const from = e.target;
//     const name = e.target.name.valu;
//     const userCrete = {name}
//     console.log(userCrete)
//     fetch('http://localhost:5000/user',{
//       method:"POST",
//       headers:{
//          "Content-Type": "application/json"
//       },
//       body:JSON.stringify(userCrete)
//     })
//       .then(res => res.json())
//       .then(data => setUsers(data))
//   }

//   }

//   return (
//     <>
      
//       <h1 className='text-5xl'>User length :{users.length} </h1>
//       <div>
//         {
//           users.map(user =><p  key={user.id}> {user.id} {user.name}</p>)
//         }
//       </div>
//       <form onSubmit={fromhadelar}>
//         <input type="text" name="name" placeholder="Type here" className="input" />
//       </form>
      
//     </>
//   )
// }

// export default App

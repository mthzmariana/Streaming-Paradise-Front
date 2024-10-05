// import React, { useEffect, useState } from 'react';
// import { useNavigate } from 'react-router-dom';
// import { Button } from '@mui/material'; // Importa el botón de Material UI

// const UserProfile = () => {
//   const [user, setUser] = useState(null);
//   const navigate = useNavigate();

//   useEffect(() => {
//     const storedUser = localStorage.getItem('user');
//     if (!storedUser) {
//       navigate('/login');
//     } else {
//       setUser(JSON.parse(storedUser));
//     }
//   }, [navigate]);

//   const handleLogout = () => {
//     localStorage.removeItem('token');
//     localStorage.removeItem('user');
//     navigate('/login');
//   };

//   return (
//     <div>
//       <Button
//         variant="contained"
//         color="error"
//         style={{ position: 'absolute', top: '10px', right: '10px' }}
//         onClick={handleLogout}
//       >
//         Cerrar Sesión
//       </Button>

//       <h2>Perfil del Usuario</h2>
//       {user ? (
//         <div>
//           <p><strong>Nombre:</strong> {user.name}</p>
//           <p><strong>Email:</strong> {user.email}</p>
//           <p><strong>Edad:</strong> {user.age}</p>
//           <p><strong>País:</strong> {user.country}</p>
//           <p><strong>Género Favorito:</strong> {user.favoriteGenre}</p>
//         </div>
//       ) : (
//         <p>Cargando...</p>
//       )}
//     </div>
//   );
// };

// export default UserProfile;

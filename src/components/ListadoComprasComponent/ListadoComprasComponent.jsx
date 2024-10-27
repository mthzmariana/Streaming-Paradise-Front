import React, { useState, useEffect } from 'react';
import { IoTrashOutline, IoPencilSharp, IoDuplicateOutline } from 'react-icons/io5';
import './ListadoComprasComponent.css';
import ReactPaginate from 'react-paginate';

function ListadoComprasComponent() {
  const [compras, setCompras] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [currentPage, setCurrentPage] = useState(0);
  const itemsPerPage = 10;
  const pagesVisited = currentPage * itemsPerPage;

  useEffect(() => {
    const fetchCompras = async () => {
      try {
        const response = await fetch('http://localhost:5000/purchase/compras'); 
        const data = await response.json();
        console.log(data); 
        setCompras(data);
        setIsLoading(false);
      } catch (error) {
        console.error('Error al obtener las Compras:', error);
        setIsLoading(false);
      }
    };

    fetchCompras();
  }, []);

  // Comentado porque no se requiere la edición de compras en este componente.
  // const handleEditClick = (idcompra) => {
  //   navigate(`/admin/permisos/editar/${idcompra}`);
  // };

  // const handleDeleteClick = (idcompra) => {
  //   setItemToDelete({ idcompra });
  // };

  const changePage = ({ selected }) => {
    setCurrentPage(selected);
  };

  const displayCompras = compras
    .slice(pagesVisited, pagesVisited + itemsPerPage)
    .map((item) => (
      <tr key={item.idcompra}>
        <td>{item.idcompra}</td> {/* Muestra el ID de la compra */}
        <td>{item.User.name}</td> {/* Muestra el nombre del usuario */}
        <td>{item.User.email}</td> {/* Muestra el correo del usuario */}
        <td>{item.Subscription.nombre}</td> {/* Muestra el nombre de la suscripción */}
        <td>{item.Subscription.precio}</td> {/* Muestra el precio de la suscripción */}
        {/* Comentando las acciones de editar y eliminar */}
        {/* 
        <td>
          <IoPencilSharp className="icon edit-icon" onClick={() => handleEditClick(item.idcompra)} />
          <IoTrashOutline className="icon delete-icon" onClick={() => handleDeleteClick(item.idcompra)} />
        </td>
        */}
      </tr>
    ));

  const pageCount = Math.ceil(compras.length / itemsPerPage);

  return (
    <div className="App-compras">
      <header className="App-header">
        <br />
        <br />
        <br />
        <h1 className="title-compras">Listado de Compras</h1>
      </header>
      <div className="table-container-compras">
        <table className="table-compras">
          <thead className="color-tabla">
            <tr>
              <th>ID Compra</th> 
              <th>Nombre Usuario</th> 
              <th>Email Usuario</th> 
              <th>Nombre Suscripción</th> 
              <th>Precio Suscripción</th> 
            </tr>
          </thead>
          <tbody>
            {isLoading ? (
              <tr>
                <td colSpan="5">Cargando...</td>
              </tr>
            ) : (
              displayCompras
            )}
          </tbody>
        </table>
      </div>

      <ReactPaginate
        previousLabel={"Anterior"}
        nextLabel={"Siguiente"}
        pageCount={pageCount}
        onPageChange={changePage}
        containerClassName={"paginationButtons"}
        previousLinkClassName={"previousButton"}
        nextLinkClassName={"nextButton"}
        disabledClassName={"paginationDisabled"}
        activeClassName={"paginationActive"}
      />
    </div>
  );
}

export default ListadoComprasComponent;

// ComprasComponent.jsx
import React, { useState, useEffect } from 'react';
import ReactApexChart from 'react-apexcharts';
import axios from 'axios';
import "./GraficasComponent.css";

const ComprasComponent = () => {
    const [chartData, setChartData] = useState({
        series: [{
            name: 'Ventas Totales',
            data: [] // Totales de cada mes
        }],
        options: {
            chart: {
                type: 'line', // Cambiar a línea
                height: 200,
            },
            stroke: {
                curve: 'smooth', // Hace que la línea sea suave
                width: 2,
            },
            xaxis: {
                categories: [], // Nombres de los últimos 6 meses
            },
            colors: ['#FF5733'], // Color de la línea
            markers: {
                size: 4, // Tamaño de los puntos en la línea
                colors: ['#FF5733'], // Color de los puntos
            },
           
        },
    });

    useEffect(() => {
        axios.get('http://localhost:5000/total-compras')
            .then(response => {
                const data = response.data;

                // Extraer los datos necesarios de la respuesta
                const ventasPorMes = data.map(item => item.total_ventas);
                const meses = data.map(item => item.mes); // Nombres de los meses

                setChartData(prevData => ({
                    ...prevData,
                    series: [{ ...prevData.series[0], data: ventasPorMes }],
                    options: {
                        ...prevData.options,
                        xaxis: { categories: meses },
                    },
                }));
            })
            .catch(error => console.error('Error al obtener los datos de ventas:', error));
    }, []);

    return (
        <div className="chart-container">
            <h3 className="chart-title">Ventas de los Últimos 6 Meses</h3>
            <ReactApexChart
                options={chartData.options}
                series={chartData.series}
                type="line" // Cambiar a línea
                height="200"
            />
        </div>
    );
};

export default ComprasComponent;

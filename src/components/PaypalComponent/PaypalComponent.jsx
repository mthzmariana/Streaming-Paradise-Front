import { useEffect } from 'react';

const PaypalButton = () => {
  useEffect(() => {
    const script = document.createElement('script');
    script.src = `https://www.paypal.com/sdk/js?client-id=AWGD2AfDr_V-jJDKsZURjp_8nX_V0f0HIOpjcHArkLuepfP3Bfpc2-JUyzj50kpABNYoOZrTXUadeYkN&currency=USD`;
    script.async = true;
    script.onload = () => {
      window.paypal.Buttons({
        createOrder: (data, actions) => {
          return actions.order.create({
            purchase_units: [{
              amount: {
                value: '100.00' // Cambia esto al monto deseado
              }
            }]
          });
        },
        onApprove: (data, actions) => {
          return actions.order.capture().then(details => {
            alert(`Transacción completada por ${details.payer.name.given_name}`);
          });
        }
      }).render('#paypal-button-container');

      window.paypal.Buttons({
        createOrder: (data, actions) => {
          return actions.order.create({
            purchase_units: [{
              amount: {
                value: '200.00' // Cambia esto al monto deseado
              }
            }]
          });
        },
        onApprove: (data, actions) => {
          return actions.order.capture().then(details => {
            alert(`Transacción completada por ${details.payer.name.given_name}`);
          });
        }
      }).render('#paypal-button-container');

      window.paypal.Buttons({
        createOrder: (data, actions) => {
          return actions.order.create({
            purchase_units: [{
              amount: {
                value: '300.00' // Cambia esto al monto deseado
              }
            }]
          });
        },
        onApprove: (data, actions) => {
          return actions.order.capture().then(details => {
            alert(`Transacción completada por ${details.payer.name.given_name}`);
          });
        }
      }).render('#paypal-button-container');




    };
    document.body.appendChild(script);
  }, []);

  return <div id="paypal-button-container"></div>;
};

export default PaypalButton;

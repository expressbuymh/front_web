import mastercard from "./ImagenesCard/mastercard.png"
import mp from "./ImagenesCard/mp.png"
import visa from "./ImagenesCard/visa.jpg"

export function CardSales(){
  const cardSaleArray = [
    {
      photo:mastercard,
      desription:"Realiza tu pedido el día que prefieras y programá tu entrega para el día Lunes.",
      procentaje:"%25"
    },
    {
      photo:visa,
      desription:"Realiza tu pedido el día que prefieras y programá tu entrega para el día Viernes con tu tarjeta Mastercard.",
      procentaje:"%20"
    },
    {
      photo:mp,
      desription:"Realiza tus compras los días Miércoles y programá tu entrega para el día que prefieras.",
      procentaje:"%15"
    }
  ]
  return (
    <div className="w-11/12 flex flex-col justify-center items-center lg:flex-row gap-3 my-6">
    {cardSaleArray.map(card =>(
      <div className="lg:w-1/3 w-2/3 bg-white min-h-[180px] flex items-center justify-center gap-3 border rounded-lg" key={card}>
        <img src={card.photo} alt="" className="w-1/5 " />
        <div className="w-3/5 text-sm">{card.desription}</div>
        <div className="w-1/5 font-bold text-lg flex flex-col items-center">{card.procentaje}<span className="text-sm font-light underline text-center p-1">Ver legales</span></div>
    </div>
    ))}
    
   </div>
  )
}


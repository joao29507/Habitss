export function TarjetaHabito({habito}){

    return(
        <ul>
            <li>
                <TarjetaHabito key={habito.id} nombre={habito.nombre} />
            </li>
        </ul>

    );
}

export default TarjetaHabito


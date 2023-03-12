import {Navigate, useLocation, useNavigate} from "react-router-dom";
import {fieldQuery, RequiredFields} from "../../config/environement";

import '../../App.css'
import {getSiretQuery, sendQuery} from "../../services/siret";

export default function Results() {
  if (!useLocation().state) {
    return (<Navigate to={'/siret/search'}/>);
  }
  // state
  const {fields, result} = useLocation().state;
  const navigate = useNavigate();

  //handlers
  const newResultHandle = async () => {
    const start = result.header.debut + result.header.nombre;
    const requiredFields: RequiredFields = [];
    const query = getSiretQuery({fields, requiredFields, start});
    const newResult = await sendQuery(query);
    navigate('/siret/results', {state: {fields, 'result': newResult, query}});
  }

  //renderer
  return (
    <div className="text-light">
      <h1>Search Result</h1>
      <div>
        {fields.map((field: fieldQuery) => (
          <div key={field.id}>
            <p>{field.field}: {field.value}</p>
          </div>
        ))}
      </div>
      <div>
        <p>Nombre total de résultats: {result.header.total}</p>
        <p>Début : {result.header.debut}</p>
        <button onClick={() => newResultHandle()}> {">>"} </button>
      </div>
      <div>
        {result.etablissements.map((e: any) => (
          <div key={e.siret} className='card text-start m-auto bg-dark text-light border-light mb-2'>
            <div className="card-body">
              <p>Siren: {e.siren} Siret: {e.siret}</p>
              <p>{e.uniteLegale.denominationUniteLegale}</p>
              <p>{e.adresseEtablissement.numeroVoieEtablissement} {e.adresseEtablissement.typeVoieEtablissement} {e.adresseEtablissement.libelleVoieEtablissement}{" "}
                - {e.adresseEtablissement.codePostalEtablissement} {e.adresseEtablissement.libelleCommuneEtablissement}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  )

}
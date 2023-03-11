import Select from "react-select";
import {useState} from "react";

import './fieldSearch.css';

const fields = [
  {value: 'siren', label: 'SIREN'},
  {value: 'denominationUniteLegale', label: 'Dénomination Unité Légale'},
  {value: 'activitePrincipaleUniteLegale', label: 'Activité Principale'},
  {value: 'prenom1UniteLegale', label: 'Prénom Unité Légale' },
  {value: 'nomUniteLegale', label: 'Nom Unité Légale'},
  {value: 'categorieJuridiqueUniteLegale', label: 'Catégorie Juridique'},
  {value: 'dateCreationUniteLegale', label: 'Date de création Unité Légale'},
];

const specialCases = [
  {value: 'startWith', label: 'Commence Par'},
  {value: 'exact', label: 'Pas de variation'},
  {value: 'approx', label: 'Approximation'},
];

function FieldSearch({queryInfo, handleAdd, onClickDelete}: any) {
  const [field, setField] = useState({value: '', label: ''});
  const [value, setValue] = useState('');
  const [specialCase, setSpecialCase] = useState({value: '', label: ''});
  const [state, setStatus] = useState(true)

  //handlers
  const selectFieldHandler = (event: any) => setField(event);
  const selectSpecialCasedHandler = (event: any) => setSpecialCase(event);
  const handleChange = (event: any) => setValue(event.target.value);

  const handleSubmit = (event: any) => {
    event.preventDefault();
    const query = {id: queryInfo.id, field: field.value, value: value, specialCase: specialCase.value}
    if (query.field !== '' && query.value !== '') {
      setStatus(false);
      handleAdd(query);
    }
  };

  // Renderer
  const addButton = () => { return state ? <button>Ajouter +</button> : null }

  return (
    <div className="FieldSearch">
      <form action={"submit"} onSubmit={handleSubmit}>
        <label htmlFor="field">Champs</label>
        <Select defaultValue={field} onChange={selectFieldHandler} options={fields} id="field" isDisabled={!state}/>
        <label htmlFor="specialCase">Cas Spéciaux</label>
        <Select defaultValue={specialCase} onChange={selectSpecialCasedHandler} options={specialCases} id="specialCase" isDisabled={!state}/>
        <input value={value} type="text" placeholder={!field ? '' : field.label} onChange={handleChange} id="value" disabled={!state}/>
        {addButton()}
      </form>
      <button onClick={onClickDelete}>Supprimer -</button>
    </div>
  );
}

export default FieldSearch;
import {useState} from "react";
import FieldSearch from "./FieldSearch/FieldSearch";

import {RequiredFields} from "../config/environement";
import {getSiretQuery, sendQuery} from "../services/siret";
import {useNavigate} from "react-router-dom";

function Search() {
  //state
  const [fieldQueries, setFieldFieldQueries] = useState([{id: new Date().getTime(), field: '', value: '', specialCase: ''}]);
  const navigate = useNavigate();

  // handlers
  const handleDelete = (id: number) => {
    const queriesCopy = [...fieldQueries];
    const queriesUpdated = queriesCopy.filter((query) => query.id !== id);
    if (queriesCopy.findIndex(query => query.id === id) === queriesCopy.length - 1) {
      queriesUpdated.push({id: 0, field: '', value: '', specialCase: ''});
    }
    setFieldFieldQueries(queriesUpdated);
  }
  const handleAddQuery = (query: any) => {
    const queriesCopy = [...fieldQueries];
    const queriesCopyUpdated = queriesCopy.map(q => q.id === query.id ? query : q);
    const newQuery = {id: new Date().getTime(), field: '', value: '', specialCase: ''};
    queriesCopyUpdated.push(newQuery);
    setFieldFieldQueries(queriesCopyUpdated);
  };
  const handleLaunchSearch = async () => {
    const fields = fieldQueries.filter(q => q.field !== '' && q.value !== '');
    const requiredFields: RequiredFields = [];
    const query = getSiretQuery({fields, requiredFields});
    const result = await sendQuery(query);
    // PUSH TO HISTORY
    navigate('/results', {state: {fields, result, query}});
  }

  //render
  return (
    <div className="Search">
      {fieldQueries.map((query) => (
        <FieldSearch key={query.id} queryInfo={query} handleAdd={handleAddQuery} onClickDelete={() => handleDelete(query.id)}/>
      ))}

      <div>
        <button onClick={handleLaunchSearch}>Lancer La recherche</button>
      </div>
    </div>
  );
}

export default Search;
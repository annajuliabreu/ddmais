import * as React from 'react';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
// import Icon from '@mdi/react';
// import { mdiFilterVariant } from '@mdi/js';



export default function Filtro(){
    const [age, setAge] = React.useState('');

    const handleChange = (event) => {
      setAge(event.target.value);
    };
  
    return (
      <FormControl sx={{ backgroundColor: '#F3EAFF', minWidth: 172 }} size="small">
        <InputLabel sx={{display: 'flex', alignItems: 'center'}} id="demo-select-small-label">
            {/* <Icon path={mdiFilterVariant} size={'22px'}/> */}
            <div sx={ { marginRight: '8px' } }>
                <span>Filtro</span>
            </div>
        </InputLabel>
        <Select
          labelId="demo-select-small-label"
          id="demo-select-small"
          value={age}
          label="Age"
          onChange={handleChange}
        >
            <MenuItem value={10}>Disciplina</MenuItem>
            <MenuItem value={10}>Metodologia</MenuItem>
            <MenuItem value={20}>Campos de criação</MenuItem>
            <MenuItem value={30}>Ferramenta</MenuItem>
            <MenuItem value={30}>Ano</MenuItem>
        </Select>
      </FormControl>
    );
}
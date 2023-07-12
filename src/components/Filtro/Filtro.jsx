import * as React from 'react';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
// import Icon from '@mdi/react';
// import { mdiFilterVariant } from '@mdi/js';



export default function Filtro({ value, onChange }){
    const handleChange = (event) => {
      onChange(event.target.value);
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
          value={value}
          label="Age"
          onChange={handleChange}
        >
            <MenuItem value={'title'}>Titulo</MenuItem>
            <MenuItem value={'subjects'}>Disciplina</MenuItem>
            <MenuItem value={'methodology'}>Metodologia</MenuItem>
            <MenuItem value={'creationFields'}>Campos de criação</MenuItem>
            <MenuItem value={'tools'}>Ferramenta</MenuItem>
            <MenuItem value={'years'}>Ano</MenuItem>
        </Select>
      </FormControl>
    );
}
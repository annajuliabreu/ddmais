import * as React from 'react';
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';

export default function Filtro() {
    const [age, setAge] = React.useState('');

    const handleChange = (event) => {
        setAge(event.target.value);
    };

    return (
        <Box sx={{ backgroundColor: '#F3EAFF', minWidth: 172 }}>
            <FormControl fullWidth>
                    <InputLabel id="demo-simple-select-label">Filtrar</InputLabel>
                    <Select
                        labelId="demo-simple-select-label"
                        id="demo-simple-select"
                        value={age}
                        label="Disciplina"
                        onChange={handleChange}
                    >
                        <MenuItem value={10}>Disciplina</MenuItem>
                        <MenuItem value={10}>Metodologia</MenuItem>
                        <MenuItem value={20}>Campos de criação</MenuItem>
                        <MenuItem value={30}>Ferramenta</MenuItem>
                        <MenuItem value={30}>Ano</MenuItem>
                    </Select>
                </FormControl>
        </Box>
    );
}
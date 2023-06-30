import "./ModalCadastrarProjeto.css";
import Icon from "@mdi/react";
import { mdiClose } from "@mdi/js";
import { TextField, Button } from "@mui/material";
import OutlinedInput from "@mui/material/OutlinedInput";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import ListItemText from "@mui/material/ListItemText";
import Select from "@mui/material/Select";
import Checkbox from "@mui/material/Checkbox";
import { useState } from "react";

const ITEM_HEIGHT = 48;
const ITEM_PADDING_TOP = 8;
const MenuProps = {
  PaperProps: {
    style: {
      maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
      width: 250,
    },
  },
};

const disciplinas = [
  "Processos de Criação",
  "Tipografia",
  "Multimídia",
  "User Experience",
  "Arquitetura da Informação",
  "Desenho I",
  "Desenho II",
  "História da Arte",
  "Direção de Arte",
  "Modelagem 3D",
  "História do Design",
];

const metodologias = [
  "Brainstorming",
  "Design Sprint",
  "Double Diamond",
  "Design Thinking",
  "Metodologia Ágil",
];

const camposDeCriacao = [
  "3D",
  "Animação",
  "Branding",
  "Ilustração",
  "Design Gráfico",
  "Direção artística",
  "Design UI/UX",
  "Design de Interações",
  "Identidade Visual",
  "Fotografia",
  "Web design"
];

const ferramentas = [
  "Figma",
  "Adobe Photoshop",
  "Adobe Illutrator",
  "GIMP",
  "Inkscape",
  "CorelDraw",
  "Blender",
  "Canva",
  "Krita",
  "Paint Tool SAI",
];

const anos = [
  "2015",
  "2016",
  "2017",
  "2018",
  "2019",
  "2020",
  "2021",
  "2022",
  "2023",
];

export default function ModalCadastrarProjeto() {
  const [personName, setPersonName] = useState([]);

  const handleChange = (event) => {
    const {
      target: { value },
    } = event;
    setPersonName(typeof value === "string" ? value.split(",") : value);
  };
  return (
    <div>
      <div>
        <div className="modal-overlay">
          <div className="voltar">
            <a href="/logged">
              <Icon path={mdiClose} size={1} />
            </a>
          </div>

          <div className="modal-content-project">

            <form className="create-project-form">
              <div className="upload">
                <div className="card-upload">
                  <span className="upload-title">Capa do projeto</span>
                  <div className="upload-area">
                    <div className="upload-content">
                      <Button
                        className="upload-button"
                        size="large"
                        style={{
                          textTransform: "none",
                          background: "#B276FF",
                          fontFamily: "Montserrat",
                          color: "#FFF",
                          padding: "6px 22px",
                        }}
                      >
                        Fazer upload da imagem
                      </Button>
                      <span className="upload-info">
                        Tamanho mínimo de "808x632px"
                      </span>
                    </div>
                  </div>
                </div>

                <div className="card-upload">
                  <span className="upload-title">Apresentação do projeto</span>
                  <div className="upload-area">
                    <div className="upload-content">
                      <Button
                        className="upload-button"
                        size="large"
                        style={{
                          textTransform: "none",
                          background: "#B276FF",
                          fontFamily: "Montserrat",
                          color: "#FFF",
                          padding: "6px 22px",
                        }}
                      >
                        Fazer upload da imagem
                      </Button>
                      <span className="upload-info">
                        Insira imagens no tamanho de "1920x1080px"
                      </span>
                    </div>
                  </div>
                </div>
              </div>

              <div className="inputs-fields">

                <div className="input-field-title"> 
                  <h1>Cadastrar projeto</h1>
                </div>

                <div className="create-project-field-wrap">
                  <TextField
                    id="standard-required"
                    label="Adicione o título do projeto"
                    variant="standard"
                    className="create-project-field"
                  />
                </div>

                <div className="create-project-field-wrap">
                  <TextField
                    // id="standard-required"
                    label="Adicione uma descrição do projeto"
                    // variant="standard"
                    className="create-project-field"
                    id="standard-multiline-flexible"
                  //  label="Multiline"
                    multiline
                  maxRows={4}
                  variant="standard"
                  />
                </div>
                <div className="create-project-field-wrap">
                  <FormControl className="create-project-field">
                    <InputLabel id="demo-multiple-checkbox-label">
                      Disciplina
                    </InputLabel>
                    <Select
                      labelId="demo-multiple-checkbox-label"
                      id="demo-multiple-checkbox"
                      multiple
                      value={personName}
                      onChange={handleChange}
                      input={<OutlinedInput label="Disciplina" />}
                      renderValue={(selected) => selected.join(", ")}
                      MenuProps={MenuProps}
                    >
                      {disciplinas.map((name) => (
                        <MenuItem key={name} value={name}>
                          <Checkbox checked={personName.indexOf(name) > -1} />
                          <ListItemText primary={name} />
                        </MenuItem>
                      ))}
                    </Select>
                  </FormControl>
                </div>
                <div className="create-project-field-wrap">
                  <FormControl className="create-project-field">
                    <InputLabel id="demo-multiple-checkbox-label">
                      Metodologia
                    </InputLabel>
                    <Select
                      labelId="demo-multiple-checkbox-label"
                      id="demo-multiple-checkbox"
                      multiple
                      value={personName}
                      onChange={handleChange}
                      input={<OutlinedInput label="Metodologia" />}
                      renderValue={(selected) => selected.join(", ")}
                      MenuProps={MenuProps}
                    >
                      {metodologias.map((name) => (
                        <MenuItem key={name} value={name}>
                          <Checkbox checked={personName.indexOf(name) > -1} />
                          <ListItemText primary={name} />
                        </MenuItem>
                      ))}
                    </Select>
                  </FormControl>
                </div>
                <div className="create-project-field-wrap">
                  <FormControl className="create-project-field">
                    <InputLabel id="demo-multiple-checkbox-label">
                      Campos de Criação
                    </InputLabel>
                    <Select
                      labelId="demo-multiple-checkbox-label"
                      id="demo-multiple-checkbox"
                      multiple
                      value={personName}
                      onChange={handleChange}
                      input={<OutlinedInput label="Campos de Criação" />}
                      renderValue={(selected) => selected.join(", ")}
                      MenuProps={MenuProps}
                    >
                      {camposDeCriacao.map((name) => (
                        <MenuItem key={name} value={name}>
                          <Checkbox checked={personName.indexOf(name) > -1} />
                          <ListItemText primary={name} />
                        </MenuItem>
                      ))}
                    </Select>
                  </FormControl>
                </div>
                <div className="create-project-field-wrap">
                  <FormControl className="create-project-field">
                    <InputLabel id="demo-multiple-checkbox-label">
                      Ferramentas
                    </InputLabel>
                    <Select
                      labelId="demo-multiple-checkbox-label"
                      id="demo-multiple-checkbox"
                      multiple
                      value={personName}
                      onChange={handleChange}
                      input={<OutlinedInput label="Ferramentas" />}
                      renderValue={(selected) => selected.join(", ")}
                      MenuProps={MenuProps}
                    >
                      {ferramentas.map((name) => (
                        <MenuItem key={name} value={name}>
                          <Checkbox checked={personName.indexOf(name) > -1} />
                          <ListItemText primary={name} />
                        </MenuItem>
                      ))}
                    </Select>
                  </FormControl>
                </div>
                <div className="create-project-field-wrap">
                  <FormControl className="create-project-field">
                    <InputLabel id="demo-multiple-checkbox-label">
                      Ano
                    </InputLabel>
                    <Select
                      labelId="demo-multiple-checkbox-label"
                      id="demo-multiple-checkbox"
                      multiple
                      value={personName}
                      onChange={handleChange}
                      input={<OutlinedInput label="Ano" />}
                      renderValue={(selected) => selected.join(", ")}
                      MenuProps={MenuProps}
                    >
                      {anos.map((name) => (
                        <MenuItem key={name} value={name}>
                          <Checkbox checked={personName.indexOf(name) > -1} />
                          <ListItemText primary={name} />
                        </MenuItem>
                      ))}
                    </Select>
                  </FormControl>
                </div>

                <div className="input-field-buttons">
                  <div className="buttons-wrap">
                    <a href="/logged">
                      <Button
                        size="large"
                        style={{
                          textTransform: "none",
                          background: "#FFFF",
                          fontFamily: "Montserrat",
                          color: "#B276FF",
                          padding: "6px 22px",
                          width: "224px"
                        }}
                      >
                        Descartar
                      </Button>
                    </a>
                    <Button
                      size="large"
                      style={{
                        textTransform: "none",
                        background: "#B276FF",
                        fontFamily: "Montserrat",
                        color: "#FFF",
                        padding: "6px 22px",
                        width: "224px"
                      }}
                    >
                      Cadastrar
                    </Button>
                  </div>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

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
import { useEffect, useState } from "react";
import api from "../../services/api";
import { useParams } from "react-router-dom";

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
  const [disciplinasSelecionadas, setDisciplinaSelecionadas] = useState([]);
  const [metodologiasSelecionadas, setMetodologiasSelecionadas] = useState([])
  const [camposCriacao, setCamposCriacao] = useState([])
  const [ferramentasSelecionadas, setFerramentasSelecionadas] = useState([])
  const [anosSelecionados, setAnosSelecionados] = useState([])
  const [titulo, setTitulo] = useState('')
  const [descricao, setDescricao] = useState('')
  const [cover, setCover] = useState()
  const [images, setImages] = useState()

  const { id } = useParams()

  useEffect(() => {
    if (id) {
      api.get(`/project/${id}`).then(({ data }) => {
        setTitulo(data.title)
        setDescricao(data.description)
        setDisciplinaSelecionadas(data.subjects)
        setMetodologiasSelecionadas(data.methodology)
        setCamposCriacao(data.creationFields)
        setFerramentasSelecionadas(data.tools)
        setAnosSelecionados(data.years)
      })
    }
  }, [])

  async function handleSubmit(event) {
    event.preventDefault()
    if (id) {
      await api.put(`/project/${id}`, {
        title: titulo,
        description: descricao,
        subjects: disciplinasSelecionadas,
        methodology: metodologiasSelecionadas,
        creationFields: camposCriacao,
        tools: ferramentasSelecionadas,
        years: anosSelecionados, 
      })

      const formDataCover = new FormData()
      formDataCover.append('cover', cover)
      formDataCover.append('projectId', id)

      const formDataImages = new FormData()
      for (const pic of images) {
        formDataImages.append('files', pic);
      }
      formDataImages.append('projectId', id)

      await api.post(`/file/cover`, formDataCover)
      await api.post(`/file/images`, formDataImages)
    } else {
      const { data: { _id } } = await api.post('/project', {
        title: titulo,
        description: descricao,
        subjects: disciplinasSelecionadas,
        methodology: metodologiasSelecionadas,
        creationFields: camposCriacao,
        tools: ferramentasSelecionadas,
        years: anosSelecionados, 
      })

      const formDataCover = new FormData()
      formDataCover.append('cover', cover)
      formDataCover.append('projectId', _id)

      const formDataImages = new FormData()
      for (const pic of images) {
        formDataImages.append('files', pic);
      }
      formDataImages.append('projectId', _id)

      await api.post(`/file/cover`, formDataCover)
      await api.post(`/file/images`, formDataImages)
    }
  }

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

            <form className="create-project-form" onSubmit={handleSubmit}>
              <div className="upload">
                <input id='cover' onChange={(evt) => setCover(evt.target.files[0])} type="file" style={{ display: 'none' }} accept=".jpg, .jpeg, .png" />
                <input id='otherImages' multiple onChange={(evt) => {
                  setImages(evt.target.files)
                }} type="file" style={{ display: 'none' }} accept=".jpg, .jpeg, .png" />
                <div className="card-upload">
                  <span className="upload-title">Capa do projeto</span>
                  <div className="upload-area">
                    <div className="upload-content">
                      <Button
                        type="button"
                        onClick={() => {
                          document.getElementById('cover').click()
                        }}
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
                        type="button"
                        onClick={() => {
                          document.getElementById('otherImages').click()
                        }}
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
                    value={titulo}
                    onChange={event => setTitulo(event.target.value)}
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
                    value={descricao}
                    onChange={event => setDescricao(event.target.value)}
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
                      value={disciplinasSelecionadas}
                      onChange={event => {
                        setDisciplinaSelecionadas(event.target.value)
                      }}
                      input={<OutlinedInput label="Disciplina" />}
                      renderValue={(selected) => selected.join(", ")}
                      MenuProps={MenuProps}
                    >
                      {disciplinas.map((name) => (
                        <MenuItem key={name} value={name}>
                          <Checkbox checked={disciplinasSelecionadas.indexOf(name) > -1} />
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
                      value={metodologiasSelecionadas}
                      onChange={event => setMetodologiasSelecionadas(event.target.value)}
                      input={<OutlinedInput label="Metodologia" />}
                      renderValue={(selected) => selected.join(", ")}
                      MenuProps={MenuProps}
                    >
                      {metodologias.map((name) => (
                        <MenuItem key={name} value={name}>
                          <Checkbox checked={metodologiasSelecionadas.indexOf(name) > -1} />
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
                      value={camposCriacao}
                      onChange={event => setCamposCriacao(event.target.value)}
                      input={<OutlinedInput label="Campos de Criação" />}
                      renderValue={(selected) => selected.join(", ")}
                      MenuProps={MenuProps}
                    >
                      {camposDeCriacao.map((name) => (
                        <MenuItem key={name} value={name}>
                          <Checkbox checked={camposCriacao.indexOf(name) > -1} />
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
                      value={ferramentasSelecionadas}
                      onChange={event => setFerramentasSelecionadas(event.target.value)}
                      input={<OutlinedInput label="Ferramentas" />}
                      renderValue={(selected) => selected.join(", ")}
                      MenuProps={MenuProps}
                    >
                      {ferramentas.map((name) => (
                        <MenuItem key={name} value={name}>
                          <Checkbox checked={ferramentasSelecionadas.indexOf(name) > -1} />
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
                      value={anosSelecionados}
                      onChange={event => setAnosSelecionados(event.target.value)}
                      input={<OutlinedInput label="Ano" />}
                      renderValue={(selected) => selected.join(", ")}
                      MenuProps={MenuProps}
                    >
                      {anos.map((name) => (
                        <MenuItem key={name} value={name}>
                          <Checkbox checked={anosSelecionados.indexOf(name) > -1} />
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
                      type="submit"
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
                      {id ? 'Salvar' : 'Cadastrar'}
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

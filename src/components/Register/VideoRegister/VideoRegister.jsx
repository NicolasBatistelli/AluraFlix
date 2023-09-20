import * as React from 'react';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import Container from '@mui/material/Container';
import TextField from '@mui/material/TextField';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import { validateTitle, validateImage, validateCategory, validateDate } from './validationsVideo';
import { Box, styled } from '@mui/material';

const CustomizedButton = styled(Box)`
display: flex;
justify-content: space-between;
margin-bottom: 1rem;
`

export default function FormVideo({handleSubmit}) {
  const [title, setTitle] = useState({value: '', valid: null})
  const [urlImage, setUrlImage] = useState({value: '', valid: null})
  const [category, setCategory] = useState({value: '', valid: null})
  const [releaseDate, setReleaseDate] = useState({value: '', valid: null})

  handleSubmit = (values) => {
    console.log('APPJS:', values)
  }

  return (

    <Container component="form" maxWidth="lg" onSubmit={(e) => {
      e.preventDefault()
      handleSubmit({
        title,
        urlImage,
        category,
        releaseDate
      })
    }}
    handleSubmit={handleSubmit}>

      <Typography variant='h3' align='center' component="h1">New Anime</Typography>

      <TextField 
      id="title" 
      label="Title" 
      variant="outlined" 
      fullWidth margin='normal'
      value={title.value}
      onChange={(input) => {
        const value = input.target.value
        const valid = validateTitle(value)
        setTitle({value,valid})
      }}
      error={title.valid == false}
      helperText={title.valid == false && 'The title cannot be empty'}/>

      <TextField 
      id="Urlimage" 
      label="Image URL" 
      variant="outlined" 
      fullWidth margin='normal'
      value={urlImage.value}
      onChange={(input) => {
        const value = input.target.value
        const valid = validateImage(value)
        setUrlImage({value,valid})
      }}
      error={urlImage.valid == false}
      helperText={urlImage.valid == false && 'The URL is invalid or empty'}/>

      <TextField 
      id="category" 
      label="Category" 
      variant="outlined" 
      fullWidth margin='normal'
      value={category.value}
      onChange={(input) => {
        const value = input.target.value
        const valid = validateCategory(value)
        setCategory({value,valid})
      }}
      error={category.valid == false}
      helperText={category.valid == false && 'The category cannot be empty'}/>

      <TextField 
      id="releaseDate" 
      label="Release Date" 
      variant="outlined" 
      fullWidth margin='normal'
      value={releaseDate.value}
      onChange={(input) => {
        const value = input.target.value
        const valid = validateDate(value)
        setReleaseDate({value,valid})
      }}
      error={releaseDate.valid == false}
      helperText={releaseDate.valid == false && 'The release date cannot be empty'}/>

      <CustomizedButton>
      <Button variant="contained" type='submit'>Guardar</Button>
      <Link to='/NewCategory'>
        <Button variant="contained" type='submit'>Nueva Categoría</Button>
      </Link>
      </CustomizedButton>
      
    </Container>
    
  );
}
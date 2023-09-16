import * as React from 'react';
import { useState } from 'react';
import Container from '@mui/material/Container';
import TextField from '@mui/material/TextField';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';

export default function Form({handleSubmit}) {
  const [title, setTitle] = useState('')
  const [urlImage, setUrlImage] = useState('')
  const [category, setCategory] = useState('')
  const [releaseDate, setReleaseDate] = useState('')
  const [errors, setErrors] = useState({
    title: {
      error: false,
      message: 'The title cannot be empty'
    }
  })

  function validateTitle(title){
    if(title.length === 0){
      return {title: {error:true, message: 'The title cannot be empty'}}
    }else{
      return {title: {error:false, message: ''}}
    }
  }

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

      <Typography variant='h3' align='center' component="h1">New Movie</Typography>

      <TextField 
      id="title" 
      label="Title" 
      variant="outlined" 
      fullWidth margin='normal'
      onChange={(e) => setTitle(e.target.value)}
      value={title}
      error={errors.title.error}
      helperText={errors.title.error ? errors.title.message : ''}
      onBlur={(e) => {
        setErrors(validateTitle(e.target.value))
        }}/>

      <TextField 
      id="Urlimage" 
      label="Image URL" 
      variant="outlined" 
      fullWidth margin='normal'
      value={urlImage}
      onChange={(e) => setUrlImage(e.target.value)}/>

      <TextField 
      id="category" 
      label="Category" 
      variant="outlined" 
      fullWidth margin='normal'
      value={category}
      onChange={(e) => setCategory(e.target.value)}/>

      <TextField 
      id="releaseDate" 
      label="Release Date" 
      variant="outlined" 
      fullWidth margin='normal'
      value={releaseDate}
      onChange={(e) => setReleaseDate(e.target.value)}/>

      <Button variant="contained" type='submit'>Guardar</Button>

    </Container>
    
  );
}
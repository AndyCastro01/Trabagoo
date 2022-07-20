import React, { Component } from 'react';
import Input from '../components/Input';
import TextArea from '../components/TextArea';
import Button from '../components/Button';
import Form from '../components/Form';
import { postPost } from '../utils/api';

import {toast, Toaster} from 'react-hot-toast'

class PostForm extends Component {
  constructor(props) {
    super(props);

    this.state = {
      title: '',
      body: '',
    }
  }

  handleChange = (e) => {
    const target = e.target;
    const name = target.name;
    const value = target.value;

    this.setState({
      [name]: value,
    })
  }

  handleSubmit = (e) => {
    e.preventDefault();

    postPost(this.state)
      .then(()=>{
        toast.success('Tu trabajo se ha guardado con exito puedes verificar en publicaciones', {
          style: {
            border: '1px solid #713200',
            padding: '16px',
            color: '#713200',
          },
          duration: 7000,
          iconTheme: {
            primary: '#713200',
            secondary: '#FFFAEE',
          },
        });
      })
      .catch((err) => console.log(err));

      this.state.body="";
      this.state.title="";

  }

  render() {
    const { title, body } = this.state;

    return (
      <Form onSubmit={this.handleSubmit}>
        <Input
          name="title"
          onChange={this.handleChange}
          placeholder="Titulo de tu Trabajo"
          value={title}
        />
        <TextArea
          name="body"
          onChange={this.handleChange}
          placeholder="Describe tu trabajo"
          value={body}
        />
        <Button>Enviar</Button>
      </Form>
    );
  }
}

export default PostForm;

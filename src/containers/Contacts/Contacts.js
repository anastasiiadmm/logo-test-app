import React, {useState} from 'react';
import BreadcrumbComponent from "components/BreadcrumbComponent/BreadcrumbComponent";
import letter from "assets/images/letter.png";
import {Box, FormControlLabel, Radio, TextField} from "@mui/material";
import "assets/scss/_contacts.scss";

const Contacts = () => {
  const [buttonText, setButtonText] = useState('Отправить');
  const [style, setStyle] = useState({
    button_img: false
  });
  const [state, setState] = useState({
    name: '',
    email: '',
    comment: ''
  });

  const handleClick = (e) => {
    e.preventDefault();
    setButtonText('Ваше сообщение отправлено!');
    setStyle({...style, button_img: true});

  }

  const handleChange = (e) => {
    const {name, value} = e.target;
    setState({...state, [name]: value});
  }

  return (
    <div className="contacts">
      <BreadcrumbComponent homeLink="Главная" textLink="Контакты"/>
      <div>
        <h1>Мы рядом</h1>
        <p>Заполните форму ниже и мы свяжемся с вами. Не любите формы? Напишите нам на почту <a>info@site.com</a></p>

        <Box
          style={{display: 'flex'}}
          component="form"
          sx={{
            '& .MuiTextField-root': {m: 1, width: '25ch'},
          }}
          noValidate
          autoComplete="off"
        >
          <div>
            <div>
              <TextField
                required
                id="filled-required"
                label="Ваше имя"
                multiline
                variant="standard"
                name="name"
                value={state.name}
                onChange={handleChange}
              />
              <TextField
                required
                id="filled-required"
                label="Ваш E-Mail"
                multiline
                variant="standard"
                name="email"
                value={state.email}
                onChange={handleChange}
              />
            </div>
            <div>
              <TextField
                style={{width: "91%"}}
                required
                id="filled-required"
                label="Комментарий"
                multiline
                variant="standard"
                name="comment"
                value={state.comment}
                onChange={handleChange}
              />
              <FormControlLabel value="female" control={<Radio/>}
                                style={{paddingLeft: 7}}
                                label={<p>Согласен с <a href="" className="contacts__link">Политикой
                                  конфиденциальности</a></p>}
              />
            </div>
          </div>
          <div className="contacts__button-content">
            <button className="contacts__button" type="submit"
                    onClick={handleClick}
            >
              <span>{buttonText}</span>
            </button>
            <img
              className={style.button_img ? 'button_img' : ""}
              src={letter} alt="letter"
            />
          </div>
        </Box>
      </div>
    </div>
  )
};

export default Contacts;
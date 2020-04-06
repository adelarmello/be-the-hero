import React, {useState} from 'react';
import {Link, useHistory} from 'react-router-dom';
import {FiArrowLeft} from 'react-icons/fi';

import api from '../../services/api';
import './styles.css';

import logoImg from '../../assets/logo.svg';

export default function Register() { //busca o dados dos input e manda pra api
    const [name, setName] = useState(''); //input nome da ong. Valor e função pra atualizar o valor
    const [email, setEmail] = useState(''); //input email da ong
    const [whatsapp, setWhatsapp] = useState(''); //input  watsapp da ong
    const [city, setCity] = useState(''); //input  city da ong
    const [uf, setUf] = useState(''); //input  UF da ong
    
    const history = useHistory(); //Faz a navegação qunado nós não podemos usar o Link.

    async function handleRegister(e){ //Fazer o cadastro da ONG
        e.preventDefault();//Não recarrega toda a página
        const data = {
            name,
            email,
            whatsapp,
            city,
            uf
        };
        try {
            const response = await api.post('ongs', data); // cadastro das ONGs
              alert(`Seu ID de acesso: ${response.data.id}`); //Mostra o ID
              history.push('/'); //Faz a navegação pra página inicial
        } catch (err) {
              alert(`Erro no cadastro, tente novamente`);
        }
    }
    return (
        <div className="register-container">
            <div className="content">
                <section>
                    <img src={logoImg} alt="Be The Hero" ></img>

                    <h1> Cadastro</h1>
                    <p> Faça seu cadastro, entre na plataforma e ajude as pessoas a encontrarem os casos da sua ONG.</p>
                    
                    <Link className="back-link" to="/">
                    <FiArrowLeft size={16} color = "#E02041" />
                        Voltar para o início
                    </Link>
                </section>

                <form onSubmit={handleRegister} > 
                <input placeholder="Nome da ONG" value={name} onChange={e => setName(e.target.value)}/>
                <input type="email" placeholder="E-mail" value={email} onChange={e => setEmail(e.target.value)}/>
                <input placeholder="Whatsapp" value={whatsapp} onChange={e => setWhatsapp(e.target.value)}/>
                <div className='input-group'>
                    <input placeholder="Cidade"  value={city} onChange={e => setCity(e.target.value)} />
                    <input placeholder="UF" style={{width: 80}}value={uf} onChange={e => setUf(e.target.value)}/>
                </div>
                <button className="button" type="submit" >Cadastrar</button>
                </form>
            </div>
        </div> 
    );    
}

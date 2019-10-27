import React, { Component } from 'react';
import api from '../../services/api';
import './styles.css';

export default class Main extends Component {

    state = {
        users: [],
        userInfo:{},
        page: 1,
    }

    componentDidMount() {
        this.loadUsers();
    };

    loadUsers = async (page = 1) => {

        const response = await api.get(`/users?page=${page}`);

        const {docs, ...userInfo} = response.data;

        this.setState({ users: docs, userInfo, page });
    };

    prevPage  = () =>{

        const{page, userInfo} = this.state;

        if(page === 1)return;

        const pageNumber = page - 1;
        
        this.loadUsers(pageNumber);


    };
    

    nextPage  = () =>{

        const{page, userInfo} = this.state;

        if(page === userInfo.pages)return;

        const pageNumber = page + 1;
        
        this.loadUsers(pageNumber);

    };

    render() {

        const { users, userInfo, page } = this.state;

        return (
            <div className='users-list'>

                {users.map(user => (
                    <article key={user._id}>
                        <strong>{user.nome}</strong>
                        <p>{user.email}</p>
                        <p>{user.status}</p>
                        <a href="">Acessar</a>
                    </article>
                ))}
                <div className="actions">

                    <button disabled={page===1} onClick={this.prevPage}>Anterior</button>
                    <button disabled={page===userInfo.pages} onClick={this.nextPage}>Próxima</button>

                </div>
            </div>

        );
    };

};
import React, {useEffect, useState} from 'react';
import StatisticsCard from '../../../../components/StatisticsCard';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import LastUsers from './LastUsers';
import MainTable from './MainTable';
import './index.scss';

const DashboardHome = () => {

    const [totalTowns, settotalTowns] = useState();

    const [totalComments, setComments] = useState();

    const [totalUsers, setUsers] = useState();

    const [lastUsers, setLatsUsers] = useState();

    const [listReview, setListReview] = useState();

    useEffect(() => {
        const getTownsAPI = async () => {
            const url = `${process.env.REACT_APP_BACKEND_URL}/towns`;
            const response = await fetch(url);
            const resultado = await response.json();
            setListReview(resultado.slice(-3,resultado.length));
            settotalTowns(resultado.length);
        }
        getTownsAPI();

        const getCommentsAPI = async () => {
            const url = `${process.env.REACT_APP_BACKEND_URL}/comments`;
            const response = await fetch(url);
            const resultado = await response.json();
            setComments(resultado.length)
        }
        getCommentsAPI();

        const getUsers = async () => {
            const url = `${process.env.REACT_APP_BACKEND_URL}/users`;
            const response = await fetch(url);
            const resultado = await response.json();
            setUsers(resultado.length);
            setLatsUsers(resultado.slice(-3,resultado.length))
        }
        getUsers()
    }, []);

    return (
        <div className='dashboardHome'>
            <Row className='firstContent'>
                <Col><StatisticsCard number={totalUsers} label='Usuarios' iconString='fa-user-plus' /></Col>
                <Col><StatisticsCard number={totalComments} label='Comentarios' iconString='fa-sticky-note-o'/></Col>
                <Col><StatisticsCard number={totalTowns} label='Reseñas' iconString='fa-plane'/></Col>
            </Row>
            <Row>
                <Col><MainTable listReview={listReview}/></Col>
                <Col><LastUsers lastUsers={lastUsers} /> </Col>
            </Row>
        </div>
    );
}

export default DashboardHome;
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './GameLeftSidePanel.css';

export default function GameLeftSidePanel() {
    const navigation = useNavigate();

    const [selectPanel, setSelectPanel] = useState({
        gameIsSelect: true,
        customerIsSelect: false,
        reportIsSelect: false,
        logoutIsSelect: false,
    })
    return (
        <div className='left-container'>
            <br />
            <p className='side-button' style={{fontWeight: selectPanel?.gameIsSelect ? '700': '400'}} onClick={() => {
                setSelectPanel({
                    gameIsSelect: true,
                    customerIsSelect: false,
                    reportIsSelect: false,
                    logoutIsSelect: false,
                })
            }}>Games</p>
            <p className='side-button' style={{fontWeight: selectPanel?.customerIsSelect ? '700': '400'}} onClick={() => {
                setSelectPanel({
                    gameIsSelect: false,
                    customerIsSelect: true,
                    reportIsSelect: false,
                    logoutIsSelect: false,
                })
            }}>Customers</p>
            <p className='side-button' style={{fontWeight: selectPanel?.reportIsSelect ? '700': '400'}} onClick={() => {
                setSelectPanel({
                    gameIsSelect: false,
                    customerIsSelect: false,
                    reportIsSelect: true,
                    logoutIsSelect: false,
                })
            }}> Reports</p>
            <p className='side-button' id='logout' style={{fontWeight: selectPanel?.logoutIsSelect ? '700': '400'}}
            onClick={() => {
                setSelectPanel({
                    gameIsSelect: false,
                    customerIsSelect: false,
                    reportIsSelect: false,
                    logoutIsSelect: true,
                })
                navigation('/')
            }}>Logout</p>



        </div>
    )
}

import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom'
import { portafolio } from '../../constants';
import './PortafolioNav.css'



function PortafolioNav({ id, name }) {

    const numericId = Number(id)




    useEffect(() => {
        setNextLinkMethod()
        setLastLinkMethod()
        fetchNextName()
        fetchLastName()
    }, [numericId, name])

    const [style, setStyle] = useState([{
        marginTop: '12px',
        margin: 'auto',
        marginBottom: '8px',
        textDecoration: 'none',
        color: 'black',
        fontSize: '1.5rem',
    },
    {
        marginTop: '12px',
        margin: 'auto',
        marginBottom: '8px',
        textDecoration: 'none',
        color: 'black',
        fontSize: '1.5rem',
    }]);

    const [styleNav, setStyleNav] = useState({
        border: 'solid',
        borderColor: 'black',
        borderLeft: 'none',
        borderRight: 'none',
        borderWidth: 'thin',
        height: '104px',
        textDecoration: 'none',
        width: '50%',
        justifySelf: 'flex-start',
        marginRight: 'auto',
        padding: "16px",
        boxSizing: 'border-box',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center'
    })

    const [displayNext, setDisplayNext] = useState(true)
    const [displayLast, setDisplayLast] = useState(false)
    const [linkNext, setNextLink] = useState(``)
    const [linkLast, setLastLink] = useState(`/portafolio/${numericId - 1}`)
    const [NameNext, setNameNext] = useState()
    const [NameLast, setNameLast] = useState()

    const fetchNextName = async () => {
        const found = portafolio.find(item => item.id === numericId + 1)
        if (!found) {
            setNameNext(undefined)
            return
        }
        setNameNext(found.name)
    }

    const fetchLastName = async () => {
        const found = portafolio.find(item => item.id === numericId - 1)
        if (!found) {
            setNameLast(undefined)
            return
        }
        setNameLast(found.name)
    }



    const setNextLinkMethod = () => {
        setNextLink(`/portafolio/${numericId + 1}`)

        numericId === 1 ? setDisplayLast(false) : setDisplayLast(true)
        numericId === portafolio.length ? setDisplayNext(false) : setDisplayNext(true)
    }

    const setLastLinkMethod = () => {
        setLastLink(`/portafolio/${numericId - 1}`)
    }






    return (
        <div className="portafolioNavWrapper" style={{
            display: 'flex',
            height: '104px',
            justifyContent: 'flex-end'
        }}>

            {
                displayLast ? (<Link to={linkLast} style={styleNav}>
                    <div className="Last" style={{ display: 'flex', flexDirection: 'column', color: 'black', transition: '0.5s ease-in-out', alignItems:'center', justifyContent:"center" }}>
                        <h3 style={style[0]}>{NameLast}</h3>
                        <h4 style={{ margin: 'auto' }}>Last Project</h4>
                    </div>
                </Link>) : null
            }
            {
                displayNext ? (<Link to={linkNext} style={{ border: 'solid', borderColor: 'black', borderRight: 'none', borderLeft: 'none', borderWidth: 'thin', height: '104px', textDecoration: 'none', width: '50%', padding: "16px", boxSizing: 'border-box', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                    <div className="Next" style={{ display: 'flex', flexDirection: 'column', color: 'black', transition: '0.5s ease-in-out', alignSelf:'center' }}>
                        <h3 style={style[1]}>{NameNext}</h3>
                        <h4 style={{ margin: '0px' }}>Next Project</h4>
                    </div>
                </Link>
                ) : null
            }
        </div>
    )
}


export default PortafolioNav
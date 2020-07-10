import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom'
import { portafolio } from '../../constants';
import './PortafolioNav.css'



function PortafolioNav({ id, name }) {




    useEffect(() => {
        console.log(id)
        setNextLinkMethod()
        setLastLinkMethod()
        fetchNextName()
        fetchLastName()
    }, [id, name])

    const [style, setStyle] = useState([{
        float: 'left',
        marginTop: '3%',
        marginLeft: '10%',
        marginBottom: '2%',
        textDecoration: 'none',
        color: 'black',
        fontSize: '2rem',
    },
    {
        float: 'right',
        marginTop: '3%',
        marginRight: '10%',
        marginBottom: '2%',
        textDecoration: 'none',
        color: 'black',
        fontSize: '2rem',
    }]);

    const [styleNav, setStyleNav] = useState({
        border: 'solid',
        borderColor: 'black',
        borderLeft: 'none',
        borderRight: 'none',
        borderWidth: 'thin',
        height: '110px',
        textDecoration: 'none',
        width: '50%',
        justifySelf: 'flex-start',
        marginRight: 'auto'
    })

    const [displayNext, setDisplayNext] = useState(true)
    const [displayLast, setDisplayLast] = useState(false)
    const [linkNext, setNextLink] = useState(``)
    const [linkLast, setLastLink] = useState(`/portafolio/${Number(id) - 1}`)
    const [NameNext, setNameNext] = useState()
    const [NameLast, setNameLast] = useState()

    const fetchNextName = async () => {
        const found = await portafolio.find(item => item.id == Number(id) + 1)
        if (!found) {
            return
        } else {
            setNameNext(found.name)
        }

    }

    const fetchLastName = async () => {
        const found = await portafolio.find(item => item.id == Number(id) - 1)
        if (!found) {
            return
        } else {
            setNameLast(found.name)
        }
    }



    const setNextLinkMethod = () => {
        setNextLink(`/portafolio/${Number(id) + 1}`)

        id == 1 ? setDisplayLast(false) : setDisplayLast(true)
        id == portafolio.length ? setDisplayNext(false) : setDisplayNext(true)

    }

    const setLastLinkMethod = () => {
        setLastLink(`/portafolio/${Number(id) - 1}`)
    }






    return (
        <div style={{
            marginTop: '20%',
            display: 'flex',
            height: '12vh',
            justifyContent: 'flex-end'
        }}>

            {
                displayLast ? (<Link to={linkLast} style={styleNav}>
                    <div className="Last" style={{ display: 'flex', flexDirection: 'column', color: 'black', transition: '0.5s ease-in-out', alignSelf:'center' }}>
                        <h3 style={style[0]}>{NameLast}</h3>
                        <h4 style={{ margin: '0px' }}>Last Project</h4>
                    </div>
                </Link>) : null
            }
            {
                displayNext ? (<Link to={linkNext} style={{ border: 'solid', borderColor: 'black', borderRight: 'none', borderWidth: 'thin', height: '110px', textDecoration: 'none', width: '50%' }}>
                    <div className="Next" style={{ display: 'flex', flexDirection: 'column', color: 'black', transition: '0.5s ease-in-out', alignSelf:'center' }}>
                        <h3 style={style[1]}>{NameNext}</h3>
                        <h4 style={{ margin: '0px' }}>Next Project</h4>
                    </div>
                </Link>
                ) : (<div to={linkLast} style={{border: 'solid', borderColor: 'black', borderRight: 'none', borderBottom:'none', borderTop:'none', borderWidth: 'thin', height: '112.5px', textDecoration: 'none', width: '50%' }}>
                    <div className="Last" style={{ display: 'flex', flexDirection: 'column', color: 'black', transition: '0.5s ease-in-out' }}>
                        <h3 style={style[0]}></h3>
                        <h4 style={{ margin: '0px' }}></h4>
                    </div>
                </div>)
            }
        </div>
    )
}


export default PortafolioNav
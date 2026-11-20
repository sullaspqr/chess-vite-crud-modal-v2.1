import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

export const SakkLista = () => {
    const [sakkozok, setSakkozok] = useState([]);
    const [tolt, setTolt] = useState(false);
    const [hiba, setHiba] = useState(null);

    useEffect(()=> {
        setTolt(true);
        axios
        .get("https://chess.sulla.hu/chess")
        .then((res) => setSakkozok(res.data))
        .catch((error) =>{
            setHiba(error);
            console.error("Hiba: ", hiba)})
        .finally(()=> setTolt(false));
        },[]);
return (
    <div className="p-5 m-auto text-center content bg-ivory">
        { tolt ? <div className="spinner-border text-warning" role="status"></div>
        : 
        <div>
            <h2>Sakkozók</h2>
            {sakkozok.map((sakkozo, index) => (
                <div className="card col-sm-3 d-inline-block m-1 p-2" key={index}>
                    <p className="text-dark">Sakkozó neve: {sakkozo.name}</p>
                    <p className="text-danger">Születési ideje: {sakkozo.birth_date}</p>
                    <p className="text-danger">Megnyert világbajnokságai: {sakkozo.world_ch_won}</p>
                    <div className="card-body">
                        <Link to={ sakkozo.profile_url } className="btn btn-primary" target="_blank">
                        Profil link</Link> <br /><br />                        
                        <Link to={ "/chess/" + sakkozo.id }>
                        <img alt={ sakkozo.name }
                        className="img-fluid"
                        style={{ maxHeight: 200 }}
                        src={ sakkozo.image_url || "https://placehold.co/400x800" } /></Link>
                        <br />
                        <Link to={ "/chess/" + sakkozo.id }>
                        <i className="bi bi-eye fs-5 me-2"></i></Link>
                        <Link to={ "/mod-chess/" + sakkozo.id }>
                        <i className="bi bi-pencil fs-5 me-2"></i></Link>
                        <Link to={ "/del-chess/" + sakkozo.id }>
                        <i className="bi bi-trash3 fs-5"></i></Link>
                    </div>
                </div>
            ))}
        </div>
        }
    </div>
);
};
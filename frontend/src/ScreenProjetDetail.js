import React from 'react';
import './App.css';
import {Link} from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';

const ScreenProjetDetail = (props) => {
    return (
        <div className="full-width bg-projet-detail">
            <Header/>
            <div className="full-width"> 

                <div style={{display:'flex', alignItems:'center'}}>

                    <img className="image-projet-detail" src="/images/detailprojet" alt="a generic background" />

                    <div>
                        <h1 className="titre-h1-page">Projet 1</h1>
                        <p className='text-projet-detail'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce aliquet aliquet tincidunt. Nam nec nisl ac quam lacinia iaculis vel nec lectus. Proin tortor enim, tempus eu condimentum a, laoreet nec diam. Donec vehicula erat eu lectus vulputate, sit amet consequat dui tempor. Sed pharetra bibendum nulla et vulputate. Vivamus sodales sollicitudin lectus in dignissim. Maecenas convallis nec enim ac commodo. Praesent non urna eget ipsum congue dapibus.</p>
                    </div>
                </div>

                <div style={{marginTop:'40px'}}> 
                    <div className='card-projet-detail' style={{display: 'flex'}}>
                        <div>
                            <p className='titre-compétences'>Compétences requises</p>
                            <p className="texte-competences-liste">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                            <p className="texte-competences-liste">Lorem ipsum dolor sit amet</p>
                            <p className="texte-competences-liste">Consectetur adipiscing elit.</p>
                        </div>
                    </div>
                </div>
                <div style={{marginTop:'50px'}}> 
                    <div className='card-projet-detail'>
                        <p className='text-dashboard'>Suspendisse nibh magna, commodo sed sollicitudin id, mattis id nisl. Morbi ex dui, tristique eu mauris a, gravida vestibulum dui. Duis bibendum justo mi. Sed cursus pretium eros, vitae pretium nunc sodales vitae. Maecenas et scelerisque ante. In iaculis mattis tortor, ac cursus purus. Fusce ante ex, varius vel dapibus non, tristique vel libero. Nunc vel magna sollicitudin augue venenatis ornare ac eu mi. Aenean eu risus sit amet tortor porttitor feugiat vitae id elit. Quisque vel maximus dui. Nulla volutpat fermentum porta. Cras tincidunt blandit nisi. Proin vel lorem venenatis, vulputate nisl sit amet, tempor justo.</p>  
                    </div>
                </div>
                <div style={{marginTop:'50px'}}> 
                    <div className='card-projet-detail'>
                        <p className='text-dashboard'>Nunc accumsan, lectus nec ullamcorper dapibus, velit magna commodo diam, quis blandit metus enim ac tellus. Phasellus egestas dui at interdum auctor. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Mauris semper vehicula porttitor. Interdum et malesuada fames ac ante ipsum primis in faucibus.</p>  
                    </div>
                </div>

                <div style={{marginTop:'60px', display:'flex', justifyContent:'center'}}>
                    <Link className='button-default'>POSTULER</Link>
                </div>

                <Footer/>
            </div>
        </div>
    );
}

export default ScreenProjetDetail;
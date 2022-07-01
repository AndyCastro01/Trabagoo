import React, { Component } from 'react';

class ListaCard extends Component {
    render() {
        return (

            <div className="container">
                <div className="card1" style={{ color: 'yellow' }}>
                    <div className="Imgprin">
                        <img src="img/Productos Amazon/Dot.jpg" className="card-img-top" />
                    </div>

                    <div className="contenedor">
                        <img src="img/starOfert.png" className="imgOfer" />
                        <div className="texto-encima"><a>Ofertas</a></div>
                        <div className="centrado"><h7 className="h7">50% descuento</h7></div>
                    </div>

                    <div className="imgProv">
                        <img src="https://logo-logos.com/wp-content/uploads/2016/12/Amazon_logo_logotype.png" alt="..." className="image-fluid pres rounded-circle image-thumbnail" />
                    </div>

                    <div className="card-body">
                        <h5 className="card-title">Card title</h5>
                        <p className="card-text">Este es un produto que es obtenido desde la empresa de Muebles Confi que te ofrece una variedad de produtos</p>
                        <a href="#" class="btn btn-primary ml-3">
                            <h10>Comprar Ahora </h10>
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-cart-plus" viewBox="0 0 16 16">
                                <path d="M9 5.5a.5.5 0 0 0-1 0V7H6.5a.5.5 0 0 0 0 1H8v1.5a.5.5 0 0 0 1 0V8h1.5a.5.5 0 0 0 0-1H9V5.5z" />
                                <path d="M.5 1a.5.5 0 0 0 0 1h1.11l.401 1.607 1.498 7.985A.5.5 0 0 0 4 12h1a2 2 0 1 0 0 4 2 2 0 0 0 0-4h7a2 2 0 1 0 0 4 2 2 0 0 0 0-4h1a.5.5 0 0 0 .491-.408l1.5-8A.5.5 0 0 0 14.5 3H2.89l-.405-1.621A.5.5 0 0 0 2 1H.5zm3.915 10L3.102 4h10.796l-1.313 7h-8.17zM6 14a1 1 0 1 1-2 0 1 1 0 0 1 2 0zm7 0a1 1 0 1 1-2 0 1 1 0 0 1 2 0z" />
                            </svg></a>
                    </div>
                </div>

                <div className="card1" style={{ color: 'red' }}>
                    <img src="https://images-na.ssl-images-amazon.com/images/I/81SS6xBc4tL._AC_SL1500_.jpg" className="card-img-top" alt="..." />
                    <div className="text-center">
                        <img src="http://www.pngall.com/wp-content/uploads/3/Alienware-Logo-PNG.png" alt="..." className="image-fluid pres2 rounded-circle image-thumbnail " width="100px" />
                    </div>
                    <div className="card-body">
                        <h5 class="card-title">Alienware m15 R3 15.6" FHD Gaming Laptop (Luna Light)</h5>
                        <p class="card-text">
                            Intel Core i7-10750H 10th Gen, 16GB DDR4 RAM, 512GB SSD, Nvidia GeForce RTX 2060 6GB GDDR6, Windows 10 Home (AWm15-7272WHT-PUS)
                            <p>
                                <a class="btn btn-primary" data-bs-toggle="collapse" href="#collapseExample" role="button" aria-expanded="false" aria-controls="collapseExample">
                                    <h10>Comprar Ahora </h10>
                                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-cart-plus-fill" viewBox="0 0 16 16">
                                        <path d="M.5 1a.5.5 0 0 0 0 1h1.11l.401 1.607 1.498 7.985A.5.5 0 0 0 4 12h1a2 2 0 1 0 0 4 2 2 0 0 0 0-4h7a2 2 0 1 0 0 4 2 2 0 0 0 0-4h1a.5.5 0 0 0 .491-.408l1.5-8A.5.5 0 0 0 14.5 3H2.89l-.405-1.621A.5.5 0 0 0 2 1H.5zM6 14a1 1 0 1 1-2 0 1 1 0 0 1 2 0zm7 0a1 1 0 1 1-2 0 1 1 0 0 1 2 0zM9 5.5V7h1.5a.5.5 0 0 1 0 1H9v1.5a.5.5 0 0 1-1 0V8H6.5a.5.5 0 0 1 0-1H8V5.5a.5.5 0 0 1 1 0z" />
                                    </svg>
                                </a>

                            </p>
                        </p>
                    </div>
                </div>

                <div className="card1" style={{ color: 'blue' }}>
                    <div className="Imgprin">
                        <img src="https://images-na.ssl-images-amazon.com/images/I/715HCLsOHbL.__AC_SY445_SX342_QL70_ML2_.jpg" className="card-img-top iph" alt="..." height="10px" />
                    </div>

                    <div className="text-center">
                        <img src="https://logo-logos.com/wp-content/uploads/2018/02/Apple_logo_hollow.png" alt="..." className="image-fluid pres rounded-circle image-thumbnail" width="100px" />
                    </div>
                    <div className="card-body">
                        <h5 className="card-title">Apple iPhone 11 (128 GB) - (Product) Red</h5>
                        <p className="card-text">Graba videos 4K y captura retratos y paisajes espectaculares con el nuevo sistema de dos cámaras.</p>
                        <a href="#" class="btn btn-primary ml-2">
                            <h10>Comprar Ahora </h10>
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-cart3" viewBox="0 0 16 16">
                                <path d="M0 1.5A.5.5 0 0 1 .5 1H2a.5.5 0 0 1 .485.379L2.89 3H14.5a.5.5 0 0 1 .49.598l-1 5a.5.5 0 0 1-.465.401l-9.397.472L4.415 11H13a.5.5 0 0 1 0 1H4a.5.5 0 0 1-.491-.408L2.01 3.607 1.61 2H.5a.5.5 0 0 1-.5-.5zM3.102 4l.84 4.479 9.144-.459L13.89 4H3.102zM5 12a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm7 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm-7 1a1 1 0 1 1 0 2 1 1 0 0 1 0-2zm7 0a1 1 0 1 1 0 2 1 1 0 0 1 0-2z" />
                            </svg></a>
                    </div>
                </div>

                <div className="card1" style={{ color: 'blue' }}>
                    <img src="https://images-na.ssl-images-amazon.com/images/I/61iMG1ddWZL._AC_SL1200_.jpg" className="card-img-top" alt="..." />

                    <br></br>
                    <div className="card-body">
                        <h5 className="card-title">Control Inalámbrico Xbox + Cable USB ( Compatible con Xbox Series X y Xbox One) - 8a Generación - Standard Edition - Color Negro</h5>
                        <p className="card-text">Funciona con cable o de forma inalámbrica con su Xbox One.</p>

                        <a href="#" class="btn btn-primary ml-2">
                            <h10>Comprar Ahora </h10>
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-cart3" viewBox="0 0 16 16">
                                <path d="M0 1.5A.5.5 0 0 1 .5 1H2a.5.5 0 0 1 .485.379L2.89 3H14.5a.5.5 0 0 1 .49.598l-1 5a.5.5 0 0 1-.465.401l-9.397.472L4.415 11H13a.5.5 0 0 1 0 1H4a.5.5 0 0 1-.491-.408L2.01 3.607 1.61 2H.5a.5.5 0 0 1-.5-.5zM3.102 4l.84 4.479 9.144-.459L13.89 4H3.102zM5 12a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm7 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm-7 1a1 1 0 1 1 0 2 1 1 0 0 1 0-2zm7 0a1 1 0 1 1 0 2 1 1 0 0 1 0-2z" />
                            </svg></a>
                    </div>
                </div>

                <div className="card1" style={{ color: 'blue' }}>
                    <img src="https://images-na.ssl-images-amazon.com/images/I/71tOxUZ-bgL._AC_SL1500_.jpg" className="card-img-top" alt="..." height="200px" />
                    <div className="card-body">
                        <h5 className="card-title">FurnitureR Sin Ensamblaje Mesa Plegable Auxiliar Escritorio Estilo Industrial Imitación Madera</h5>
                        <p className="card-text">Mesa plegable - PRÁCTICO Y FUNCIONAL: Su diseño industrial de líneas elegantes lo hace adecuado para el estudio.</p>
                        <a href="#" class="btn btn-primary ml-2">
                            <h10>Comprar Ahora </h10>
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-cart3" viewBox="0 0 16 16">
                                <path d="M0 1.5A.5.5 0 0 1 .5 1H2a.5.5 0 0 1 .485.379L2.89 3H14.5a.5.5 0 0 1 .49.598l-1 5a.5.5 0 0 1-.465.401l-9.397.472L4.415 11H13a.5.5 0 0 1 0 1H4a.5.5 0 0 1-.491-.408L2.01 3.607 1.61 2H.5a.5.5 0 0 1-.5-.5zM3.102 4l.84 4.479 9.144-.459L13.89 4H3.102zM5 12a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm7 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm-7 1a1 1 0 1 1 0 2 1 1 0 0 1 0-2zm7 0a1 1 0 1 1 0 2 1 1 0 0 1 0-2z" />
                            </svg></a>
                    </div>
                </div>

                <div className="card1" style={{ color: 'blue' }}>
                    <img src="https://images-na.ssl-images-amazon.com/images/I/91-gHZ%2BX9YL._AC_SL1500_.jpg" className="card-img-top" alt="..." />

                    <div className="card-body">
                        <h5 className="card-title">TV Samsung 43" 4K UHD Smart Tv LED UN43TU7000FXZX ( 2020 )</h5>
                        <p className="card-text">Crystal Display - con tecnología de panel basada en "partículas nano estructuradas en forma de cristal" garantizará que su imagen se mantenga nítida y vívida.</p>
                        <a href="#" class="btn btn-primary ml-2">
                            <h10>Comprar Ahora </h10>
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-cart3" viewBox="0 0 16 16">
                                <path d="M0 1.5A.5.5 0 0 1 .5 1H2a.5.5 0 0 1 .485.379L2.89 3H14.5a.5.5 0 0 1 .49.598l-1 5a.5.5 0 0 1-.465.401l-9.397.472L4.415 11H13a.5.5 0 0 1 0 1H4a.5.5 0 0 1-.491-.408L2.01 3.607 1.61 2H.5a.5.5 0 0 1-.5-.5zM3.102 4l.84 4.479 9.144-.459L13.89 4H3.102zM5 12a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm7 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm-7 1a1 1 0 1 1 0 2 1 1 0 0 1 0-2zm7 0a1 1 0 1 1 0 2 1 1 0 0 1 0-2z" />
                            </svg>
                        </a>
                    </div>
                </div>
            </div>

        );
    }
}

export default ListaCard;
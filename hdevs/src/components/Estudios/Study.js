import './Study.css'

const Study = () => {
    return (
        <section>
            <div className="description">
                <h1>Estudios Realizados</h1>
                <p>
                    Con entusiasmo y dedicación, he completado estudios especializados en desarrollo web, adquiriendo habilidades que van desde el diseño atractivo hasta la implementación de funcionalidades avanzadas. Mi pasión por la programación y la creatividad se refleja en cada línea de código. ¡Déjame llevar tus ideas al siguiente nivel en el ciberespacio!</p>
            </div>
            <div class="container mt-5">
                <div class="row">
                    <div class="col-md-6">
                        <div class="glass-card">
                            <div class="row">
                                <div class="col-4 text-right">
                                    <i class="fa-solid fa-user-graduate" id='icon-study'></i>
                                </div>
                                <div class="col-6">
                                    <h5 class="mt-3">Técnico laboral en
                                        programación con énfasis
                                        en desarrollo de
                                        aplicaciones web</h5>
                                    <p>Desarrollador Web Full Stack - UNAB</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="col-md-6">
                        <div class="glass-card">
                            <div class="row">
                                <div class="col-4 text-right">
                                    <i class="fa-solid fa-user-graduate" id='icon-study'></i>
                                </div>
                                <div class="col-6">
                                    <h5 class="mt-3">Oracle Next Education F2 T5 Front-end</h5>
                                    <p>Epecialización Frontend - Alura Latam</p>
                                    <p>BUSINESS AGILITY G5 - ONE</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )

}

export default Study;
const primarios = document.getElementById('personajes-primarios');
const secundarios = document.getElementById('personajes-secundarios');
const terciarios = document.getElementById('personajes-terciarios');

const lineaPrimarios = document.getElementById('linea-primarios');
const lineaSecundarios = document.getElementById('linea-secundarios');
const lineaTerciarios = document.getElementById('linea-terciarios');

let contadorPrimarios = 0;
let contadorSecundarios = 5;
let contadorTerciarios = 11;

const mostrarPrimarios = () => {
    contadorPrimarios++;
    if (contadorPrimarios >= 1 && contadorPrimarios <= 5) {
        fetch(`https://swapi.dev/api/people/${contadorPrimarios}`)
            .then(response => response.json())
            .then(data => {
                console.log(data)
                lineaPrimarios.innerHTML += `
                <div class="col-12 col-md-6 col-lg-4">
                    <div class="single-timeline-content d-flex wow fadeInLeft" data-wow-delay="0.3s" style="visibility: visible; animation-delay: 0.3s; animation-name: fadeInLeft;">
                        <div class="timeline-icon bg-danger"></div>
                        <div class="timeline-text">
                            <h6>${data.name}</h6>
                            <p>Estatura: ${data.height}cm. Peso: ${data.mass}kg.</p>
                        </div>
                    </div>
                </div>
                `
            })
    }
};

const mostrarSecundarios = () => {
    contadorSecundarios++;
    if (contadorSecundarios >= 6 && contadorSecundarios <= 11) {
        fetch(`https://swapi.dev/api/people/${contadorSecundarios}`)
            .then(response => response.json())
            .then(data => {
                console.log(data)
                lineaSecundarios.innerHTML += `
                <div class="col-12 col-md-6 col-lg-4">
                    <div class="single-timeline-content d-flex wow fadeInLeft" data-wow-delay="0.3s" style="visibility: visible; animation-delay: 0.3s; animation-name: fadeInLeft;">
                        <div class="timeline-icon bg-success"></div>
                        <div class="timeline-text">
                            <h6>${data.name}</h6>
                            <p>Estatura: ${data.height}cm. Peso: ${data.mass}kg.</p>
                        </div>
                    </div>
                </div>
                `
            })
    }
};

const mostrarTerciarios = () => {
    contadorTerciarios++;
    if (contadorTerciarios >= 12 && contadorTerciarios <= 16) {
        fetch(`https://swapi.dev/api/people/${contadorTerciarios}`)
            .then(response => response.json())
            .then(data => {
                console.log(data)
                lineaTerciarios.innerHTML += `
                <div class="col-12 col-md-6 col-lg-4">
                    <div class="single-timeline-content d-flex wow fadeInLeft" data-wow-delay="0.3s" style="visibility: visible; animation-delay: 0.3s; animation-name: fadeInLeft;">
                        <div class="timeline-icon bg-info"></div>
                        <div class="timeline-text">
                            <h6>${data.name}</h6>
                            <p>Estatura: ${data.height}cm. Peso: ${data.mass}kg.</p>
                        </div>
                    </div>
                </div>
                `
            })
    }
};
                

primarios.addEventListener('mouseover', mostrarPrimarios);
secundarios.addEventListener('mouseover', mostrarSecundarios);
terciarios.addEventListener('mouseover', mostrarTerciarios);

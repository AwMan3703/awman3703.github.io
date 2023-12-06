
let cat = document.getElementById('meow');
let hb = document.getElementById('hitbox');

function squishedcat() {
    cat.src = 'images/cat2.png';
    hb.style.cursor = 'grab';
    hb.style.top = '125px';
    hb.style.height = '80px';
}

function normalcat() {
    cat.src = 'images/cat.png';
    hb.style.cursor = 'pointer';
    hb.style.top = '115px';
    hb.style.height = '60px';
}

function getRandomInt(max) {
    return Math.floor(Math.random() * max) + 1;
}

function getRandomDistance(factor) {
    return (Math.random() - 0.5) * factor;
}

function animate_particle(particle, end_attributes) {
    let end_posX = end_attributes.posX;
    let end_posY = end_attributes.posY;
    let end_rotation = end_attributes.rotation;

    particle.style.left = end_posX;
    particle.style.top = end_posY;
    particle.style.transform = `rotate(${end_rotation}deg)`;
}

function heart_particles(e) {
    console.log('generating particles');
    let mx = e.clientX;
    let my = e.clientY;

    let particles_amount = getRandomInt(5);

    for (let i = 0; i < particles_amount; i++) {
        let particle_spX = mx + getRandomDistance(200); //start position
        let particle_spY = my + getRandomDistance(200);
        let particle_epX = particle_spX * 2; //end position
        let particle_epY = particle_spY * 2;

        //aspect & data
        let particle_rotation = getRandomInt(50);
        let particle_endRotation = particle_rotation+30;
        let particle_height = getRandomInt(10)+20;
        let particle_opacity = getRandomInt(75)+25;

        //spawn particle
        let particle = document.createElement('img');
        particle.src = 'images/heart48.png';
        particle.style.position = 'absolute';
        particle.style.left = `${particle_spX}px`;
        particle.style.top = `${particle_spY}px`;
        particle.style.opacity = `${particle_opacity}%`;
        if (particle_spX < mx) {
            particle_rotation = -particle_rotation;
            particle_endRotation = -particle_endRotation;
        }
        particle.style.transform = `rotate(${particle_rotation}deg)`;
        particle.style.height = `${particle_height}px`;
        particle.style.width = 'auto';

        particle.classList = 'heart_particles';

        console.log('appending');
        document.getElementById('wrapper').appendChild(particle);

        let particle_endAttributes = {
            posX : particle_epX,
            posY : particle_epY,
            rotation : particle_endRotation
        }

        setTimeout(()=>{
            animate_particle(particle, particle_endAttributes);
        }, 500)

        setTimeout(()=>{
            let hearts = document.getElementsByClassName('heart_particles');
            for (const element of hearts) {
                document.getElementById('wrapper').removeChild(element);
            }
        }, 500);
    }
}

hb.addEventListener('mousedown', squishedcat);
hb.addEventListener('mouseout', normalcat);
hb.addEventListener('mouseup', normalcat);
hb.addEventListener('click', heart_particles)

// Configuração básica da cena
const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
const renderer = new THREE.WebGLRenderer();

renderer.setSize(window.innerWidth, window.innerHeight);
document.body.appendChild(renderer.domElement);

// Adicionando luzes
const ambientLight = new THREE.AmbientLight(0x404040); // Luz ambiente
scene.add(ambientLight);

const pointLight = new THREE.PointLight(0xffffff, 1, 100);
pointLight.position.set(10, 10, 10);
scene.add(pointLight);

// Carregando o modelo .obj
const loader = new THREE.OBJLoader();
loader.load(
  './assets/avatar.obj', // Caminho para o arquivo .obj
  (object) => {
    scene.add(object);
    object.position.set(0, -1, 0); // Ajusta a posição do modelo
    object.scale.set(0.5, 0.5, 0.5); // Ajusta o tamanho do modelo
  },
  (xhr) => {
    console.log((xhr.loaded / xhr.total) * 100 + '% carregado');
  },
  (error) => {
    console.error('Erro ao carregar o modelo:', error);
  }
);

// Posicionando a câmera
camera.position.z = 5;

// Função de animação
function animate() {
  requestAnimationFrame(animate);
  renderer.render(scene, camera);
}
animate();

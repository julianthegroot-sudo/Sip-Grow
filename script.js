(() => {
  const canvas = document.getElementById('hero-canvas');
  if (!canvas || !window.THREE) return;

  const renderer = new THREE.WebGLRenderer({ canvas, antialias: true, alpha: true });
  renderer.setPixelRatio(Math.min(window.devicePixelRatio || 1, 2));
  renderer.outputColorSpace = THREE.SRGBColorSpace;
  renderer.toneMapping = THREE.ACESFilmicToneMapping;
  renderer.toneMappingExposure = 1.0;
  renderer.shadowMap.enabled = true;
  renderer.shadowMap.type = THREE.PCFSoftShadowMap;

  const scene = new THREE.Scene();

  const camera = new THREE.PerspectiveCamera(45, 1, 0.1, 100);
  camera.position.set(0, 0.2, 3.6);
  scene.add(camera);

  // Lights
  const hemi = new THREE.HemisphereLight(0xffffff, 0x4a90e2, 0.6);
  scene.add(hemi);
  const key = new THREE.DirectionalLight(0xffffff, 1.2);
  key.position.set(3, 4, 5);
  key.castShadow = true;
  key.shadow.mapSize.width = 2048;
  key.shadow.mapSize.height = 2048;
  scene.add(key);
  const rim = new THREE.DirectionalLight(0x87ceeb, 0.4);
  rim.position.set(-4, 3, -2);
  scene.add(rim);
  const fill = new THREE.DirectionalLight(0xffffff, 0.3);
  fill.position.set(-2, 2, 3);
  scene.add(fill);

  // Cup geometry (lathe with subtle taper)
  const points = [];
  const height = 1.6; // cup height
  const radiusTop = 0.55; // rim
  const radiusBottom = 0.35; // base
  const wallThickness = 0.06;
  const segments = 20;

  // Outer profile
  for (let i = 0; i <= segments; i++) {
    const t = i / segments;
    const y = -height / 2 + t * height; // from -h/2 to +h/2
    const r = radiusBottom + (radiusTop - radiusBottom) * Math.pow(t, 0.92) + 0.02 * Math.sin(t * Math.PI);
    points.push(new THREE.Vector2(r, y));
  }
  const outerGeo = new THREE.LatheGeometry(points, 96);

  // Inner profile (offset inward), invert normals by reversing points
  const innerPoints = [];
  for (let i = 0; i <= segments; i++) {
    const t = i / segments;
    const y = -height / 2 + t * height - 0.02; // slight inner offset
    const r = Math.max(0.01, (radiusBottom - wallThickness) + (radiusTop - wallThickness - (radiusBottom - wallThickness)) * Math.pow(t, 0.92));
    innerPoints.push(new THREE.Vector2(r, y));
  }
  const innerGeo = new THREE.LatheGeometry(innerPoints, 96);
  innerGeo.scale(1, 1, 1);
  innerGeo.rotateX(Math.PI); // flip normals

  // Base disk to close bottom
  const baseGeo = new THREE.CircleGeometry(radiusBottom - wallThickness * 0.7, 64);
  baseGeo.translate(0, -height / 2 + 0.02, 0);
  baseGeo.rotateX(-Math.PI / 2);

  // Merge into single geometry
  const geometries = [outerGeo, innerGeo, baseGeo];
  const cupGeometry = THREE.BufferGeometryUtils ? THREE.BufferGeometryUtils.mergeGeometries(geometries, false) : (() => {
    // Fallback: use a group if BufferGeometryUtils isn't available
    const group = new THREE.Group();
    geometries.forEach(g => group.add(new THREE.Mesh(g)));
    return group;
  })();

  const outerMat = new THREE.MeshPhysicalMaterial({
    color: 0x2dbb6f,
    metalness: 0.02,
    roughness: 0.15,
    clearcoat: 0.8,
    clearcoatRoughness: 0.1,
    sheen: 0.1,
    sheenColor: new THREE.Color(0xffffff),
    transmission: 0.0,
    envMapIntensity: 1.2,
    reflectivity: 0.9,
  });

  let cup;
  if (cupGeometry.isBufferGeometry) {
    cup = new THREE.Mesh(cupGeometry, outerMat);
  } else {
    // Fallback group path: apply material to children
    cup = cupGeometry;
    cup.children.forEach(child => {
      if (child.isMesh) child.material = outerMat;
    });
  }

  cup.castShadow = true; cup.receiveShadow = true;
  scene.add(cup);

  // Realistic ground reflection plane
  const ground = new THREE.Mesh(
    new THREE.CircleGeometry(3.2, 64),
    new THREE.MeshPhysicalMaterial({ 
      color: 0xe6f3ff, 
      roughness: 0.1, 
      metalness: 0.0, 
      transparent: true, 
      opacity: 0.3,
      clearcoat: 0.9,
      clearcoatRoughness: 0.1
    })
  );
  ground.rotateX(-Math.PI / 2);
  ground.position.y = -height / 2 - 0.05;
  ground.receiveShadow = true;
  scene.add(ground);

  function resize() {
    const width = canvas.clientWidth || window.innerWidth;
    const heightPx = canvas.clientHeight || window.innerHeight;
    const dpr = Math.min(window.devicePixelRatio || 1, 2);
    renderer.setSize(width, heightPx, false);
    renderer.setPixelRatio(dpr);
    camera.aspect = width / heightPx;
    camera.updateProjectionMatrix();
  }
  window.addEventListener('resize', resize);
  resize();

  let lastTime = performance.now();
  function animate(time) {
    const dt = Math.min(0.05, (time - lastTime) / 1000);
    lastTime = time;

    // Continuous spin
    cup.rotation.y += dt * 0.6;
    // Gentle hover
    cup.position.y = Math.sin(time * 0.0015) * 0.03;

    renderer.render(scene, camera);
    requestAnimationFrame(animate);
  }
  requestAnimationFrame(animate);

  // Gentle intro from small scale
  cup.scale.set(0.85, 0.85, 0.85);
  let s = 0.85;
  const introStart = performance.now();
  function intro(t) {
    const e = Math.min(1, (t - introStart) / 800);
    s = 0.85 + (1.0 - 0.85) * (1 - Math.pow(1 - e, 3));
    cup.scale.set(s, s, s);
    if (e < 1) requestAnimationFrame(intro);
  }
  requestAnimationFrame(intro);
})();



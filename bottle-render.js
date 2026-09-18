// Reuse the captured atmosphere for the interior optical pass. Draw the final
// background normally to preserve its display color and tone mapping.
export function renderBottleLayers({renderer,scene,camera,bottles,glassMeshes,liquidMeshes,labelMeshes,background,interior,target=null,surroundings=[]}){
 const visible=bottles.map(b=>b.visible),backdrop=scene.background;
 const surroundingsVisible=surroundings.map(g=>g.visible);
 try{
  bottles.forEach(b=>b.visible=false);
  renderer.setRenderTarget(background);renderer.render(scene,camera);
  bottles.forEach((b,i)=>b.visible=visible[i]);
  surroundings.forEach(g=>g.visible=false);
  if(surroundings.length)scene.background=background.texture;
  labelMeshes.forEach(m=>m.visible=false);
  glassMeshes.forEach(m=>m.visible=false);
  liquidMeshes.forEach(m=>m.visible=true);
  renderer.setRenderTarget(interior);renderer.render(scene,camera);
  labelMeshes.forEach(m=>m.visible=true);
  glassMeshes.forEach(m=>m.visible=true);
  liquidMeshes.forEach(m=>m.visible=false);
  scene.background=backdrop;
  surroundings.forEach((g,i)=>g.visible=surroundingsVisible[i]);
  renderer.setRenderTarget(target);renderer.render(scene,camera);
 }finally{
  scene.background=backdrop;
  surroundings.forEach((g,i)=>g.visible=surroundingsVisible[i]);
  bottles.forEach((b,i)=>b.visible=visible[i]);
 }
}

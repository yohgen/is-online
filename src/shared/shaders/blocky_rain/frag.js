export const frag = import.meta.env.PROD
  ? `varying vec2 v_uv;uniform float u_time;float rand(float m){return fract(sin(m*1234.)*5678.);}void main(){vec2 v=v_uv*2.-1.;v*=50.;vec2 m=floor(v);vec3 f=vec3(1);float r=u_time*1.75;if(mod(m.x,2.)==0.){float u=v.y*.4+rand(m.x)*1e2+r*rand(m.x)*3.;f=vec3(.8,.7,.5)*(max(mod(-u,20.),0.)/15.);}else f=vec3(0);gl_FragColor=vec4(f,1);}`
  : /* glsl */`
varying vec2 v_uv;

uniform float u_time;

float rand(float t) {
	return fract(sin(t * 1234.0) * 5678.0);
}

void main() {
  vec2 uv = v_uv * 2.0 - 1.0;
  
  uv *= 50.0;
  vec2 id = floor(uv);
  vec3 color = vec3(1.0, 1.0, 1.0);
  float t = u_time * 1.75;
  
  if (mod(id.x, 2.0) == 0.0) {
    float speed = 3.0;
    float y = uv.y * 0.4 + rand(id.x) * 100.0 + t * rand(id.x) * speed;
    float l = max(mod(-y, 20.0), 0.0) / 15.0;
    color = vec3(0.8, 0.7, 0.5) * l;

  } else {
    color = vec3(0.0);
  }

  gl_FragColor = vec4(color, 1.0);
}
`;

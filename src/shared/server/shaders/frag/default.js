export const indexFragShader = import.meta.env.PROD
  ? `varying vec2 v_uv;uniform float u_time;uniform sampler2D u_tex;void main(){vec2 c=v_uv;for(float u=1.;u<20.;u++)c.x+=.6/u*cos(u*2.5*c.y+u_time),c.y+=.6/u*cos(u*1.5*c.x+u_time);gl_FragColor=vec4(vec3(.1)/abs(sin(u_time-c.y-c.x)),1);}`
  : /* glsl */`
varying vec2 v_uv;

uniform float u_time;
uniform sampler2D u_tex;

void main() {
  vec2 uv = v_uv;

  for (float idx = 1.0; idx < 20.0; idx++) {
    uv.x += 0.6 / idx * cos(idx * 2.5 * uv.y + u_time);
    uv.y += 0.6 / idx * cos(idx * 1.5 * uv.x + u_time);
  }

  gl_FragColor = vec4(vec3(0.1) / abs(sin(u_time - uv.y - uv.x)), 1.0);
}
`;
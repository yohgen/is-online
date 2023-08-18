export const frag = import.meta.env.PROD
  ? `varying vec2 v_uv;uniform float u_time;float N21(vec2 v){return fract(sin(v.x*21.281+v.y*93.182)*5821.92);}float line(vec2 v){return smoothstep(0.,.05,v.x)-smoothstep(0.,.95,v.x);}void main(){vec2 v=v_uv*2.-1.,e=abs(v.yx)/vec2(30,5.2);v+=v*e*e;v=v*.5+.5;vec2 f=vec2(128,90),x=fract(v*f),y=floor(v*f);float s=N21(vec2(0,y.y));y.x+=floor(u_time*(s*2.-1.+.2)*30.);float l=N21(y);int u=int(y.y)%2;vec3 N=vec3(line(x))*float(l>.28)*float(u);N*=fract(sin(y.y))+.24;gl_FragColor=vec4(vec3(N),N.y*.2);}`
  : /* glsl */`
varying vec2 v_uv;

uniform float u_time;

float N21(vec2 uv) {
  return fract(sin(uv.x * 21.281 + uv.y * 93.182) * 5821.92);
}

float line(vec2 uv) {
  return smoothstep(0.0, 0.05, uv.x) - smoothstep(0.0, 0.95, uv.x);
}

void main() {
  vec2 uv = v_uv * 2.0 - 1.0;
  
  vec2 offset = abs(uv.yx) / vec2(30.0, 5.2);
  uv = uv + uv * offset * offset;
  uv = uv * 0.5 + 0.5;
  
  vec2 scale = vec2(64, 70);
  
  vec2 lUV = fract(uv * scale);
  vec2 gID = floor(uv * scale);

  float rowNoise = N21(vec2(0.0, gID.y));
  float dir = ((rowNoise * 2.0) - 1.0) + 0.2;
  gID.x += floor(u_time * dir * 30.);
  
  float cellNoise = N21(gID);
  float drawBlock = float(cellNoise > 0.28);
  int even = int(gID.y) % 2;

  vec3 color = vec3(line(lUV)) * drawBlock * float(even);
  color *= fract(sin(gID.y)) + 0.24;
  
  gl_FragColor = vec4(vec3(color), color.g * 0.2);
}
`;

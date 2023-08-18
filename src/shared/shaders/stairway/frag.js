export const frag = import.meta.env.PROD
  ? `varying vec2 v_uv;uniform float u_time;float rand(float m){return fract(sin(m*1234.)*5678.);}void main(){vec2 v=v_uv*2.-1.;v*=50.;vec2 m=floor(v);vec3 f=vec3(1);float r=u_time*1.75;if(mod(m.x,2.)==0.){float u=v.y*.4+rand(m.x)*1e2+r*rand(m.x)*3.;f=vec3(.8,.7,.5)*(max(mod(-u,20.),0.)/15.);}else f=vec3(0);gl_FragColor=vec4(f,1);}`
  : /* glsl */`
varying vec2 v_uv;

uniform float u_time;

#define t time
#define r resolution
#define FC gl_FragCoord
#define o gl_FragColor

#define X rotate2D

mat2 rotate2D(float a) {
    return mat2(cos(a), sin(a), -sin(a), cos(a));
}

void main(void) {
    vec3 P,Q,R;
    P.z=4.;
    P.zx*=X(t*.2);
    R=normalize(vec3((FC.xy*2.-r)/r.y,-1));
    R.zx*=X(t*.2);
    float d=1.;
    for(int i=0;i<99;i++){
        if(d<1e-4)break;
        Q=P;
        Q.yz*=X(.8);
        Q.z=fract(Q.z-t*2.)-.5;
        Q.zx=abs(Q.zx);
        d=Q.y+Q.z;
        P+=R*(d=max(Q.x-3.,(max(d,-d)-.5)/1.4))*.4;
        o+=exp(-d)*.01;
    }
    o.w=1.;
}
`;

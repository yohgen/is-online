export const frag = import.meta.env.PROD
  ? `varying vec2 v_uv;uniform float u_time;vec2 rotate(const vec2 f){float c=sin(2.98294),m=cos(2.98294);return mat2(m,-c,c,m)*f;}float brightnessContrast(const float f,const float v,const float c){float m=min(abs(c),abs(1.-c));return mix(c-m,c+m,(f-.5)*v+.5);}float _processRing(const vec2 f,const vec2 v){vec2 c=(fract(f)-.5)*2.;c=c*.5+.5;c=fract(c);c=c-.5+v;c=rotate(c)*2./vec2(4.001,.583);return pow(2.71828182845905,-.5*pow((max(0.,1.-length(c))-1.)/.25,2.));}float processRing(vec2 c){c=(c-.5)/.908;vec2 f=vec2(0);f.x=fract(.5+atan(c.y,c.x)/6.2832-3.65/6.2832);f.y=clamp(length(c)*2.-.276,0.,1.);float m=0.;for(float v=-2.;v<=2.;v++)for(float r=-1.;r<=1.;r++)m+=_processRing(f,vec2(v,r));return clamp(brightnessContrast(m,1.05227907,.4875),0.,1.)*clamp(length(c)*6.,0.,1.);}float hash1(const vec2 f,const float v){return fract(sin(dot(f+v/120.795,vec2(127.1+v/33.,311.7+v/35.)))*(43758.5453+v*101.3579));}vec2 hash2(vec2 f,const float v){f=vec2(dot(f,vec2(127.1,311.7)),dot(f,vec2(269.5,183.3)));return fract(sin(f+v)*(43758.5453+v));}float bias(const float f){return pow(f,log(.05)/log(.5));}vec2 gain(const vec2 f){vec2 v=f;if(f.x<.5)v.x=bias(2.*f.x)/2.;else v.x=1.-bias(2.-2.*f.x)/2.;if(f.y<.5)v.y=bias(2.*f.y)/2.;else v.y=1.-bias(2.-2.*f.y)/2.;return v;}float controllableBilinearLerp(const float f,const float c,const float v,const float m,const vec2 p){vec2 r=mix(gain(p),p*p*p*(p*(p*6.-15.)+10.),clamp(.796,0.,1.));return mix(mix(f,c,r.x),mix(v,m,r.x),r.y);}float valueNoise2d(vec2 f,const float c,const float v){f=f*c*2.;vec2 m=floor(f),p=fract(f);float x=hash1(mod(m,c*8.),v),r=hash1(mod(m+vec2(0,1),c*8.),v),y=hash1(mod(m+vec2(1,0),c*8.),v),a=hash1(mod(m+vec2(1),c*8.),v);vec2 h=hash2(mod(m+vec2(.5),c*8.),v+x);return controllableBilinearLerp(x,y,r,a,mix(clamp(mix(p,h,.65),0.,1.),p,clamp(pow(pow(pow(abs(p.x-.5)*2.,1.963)+pow(abs(p.y-.5)*2.,1.963),1./1.963),.65),0.,1.)));}float fractalValueNoise2d(const vec2 f){float c=0.,v=0.;vec2 m=vec2(cos(5.77013),sin(5.77013));for(float r=1.;r<=8.;r++){float h=1./pow(1./.605,abs(r-.224));c+=valueNoise2d(f-c*.324*m/mix(1.,pow(2.,r)/2.,.01),pow(2.,r),r)*h;v+=h;}return clamp(c/v,0.,1.);}float hardLightBlend(const float f,const float c,const float v){return mix(f,mix((255.-(255.-2.*(c*255.-128.))*(255.-f*255.)/256.)/255.,2.*c*f*255./256.,c>128./255.?0.:1.),v);}vec2 directionalWarpUv(vec2 f,const float c,const float v){float m=6.02906+(v*2.-1.)*.504*(2.*acos(-1.));return f-vec2(cos(m),sin(m))*(c*2.-1.)*-.04;}void main(){vec2 f=v_uv;f-=.6*(f-.5)*pow(clamp(1.-length(f-.5)*2.7,0.,1.),.45);float v=clamp(pow(max(0.,length(f-.5)-.5)/.5,3.),0.,1.);vec2 c=vec2(-.033,.0115)*u_time;float m=processRing(f),p=clamp(brightnessContrast(fractalValueNoise2d(f+c),1.04174604140042,.425),0.,1.),r=hardLightBlend(p,m,.681);vec2 x=directionalWarpUv(f,m-v*.5,p+v*.3);float h=processRing(x),a=clamp(brightnessContrast(fractalValueNoise2d(x+c),1.04174604140042,.425),0.,1.),y=hardLightBlend(a,h,.71),l=hardLightBlend(y,r,.9*(.4+.6*m));vec3 b=mix(vec3(0,0,.04),vec3(1,.97,.73),l);gl_FragColor=vec4(b+.299*b.x+.587*b.y+.114*b.z,1);}`
  : /* glsl */`
  varying vec2 v_uv;

  uniform float u_time;
  
  vec2 rotate(const in vec2 v, const in float a) {
    float s = sin(a);
    float c = cos(a);
    mat2 m = mat2(c, -s, s, c);
    return m * v;
  }
  
  float gaussian (const in vec2 cuv, const in float p) {
    float n = max(0., 1. - length(cuv));
    return pow(2.718281828459045, -0.5 * pow((n - 1.) / (p * 0.5), 2.));
  }
  
  float brightnessContrast (const in float v, const in float contrast, const in float midPoint) {
    float range = min(abs(midPoint), abs(1. - midPoint));
    return mix(midPoint - range, midPoint + range, (v - 0.5) * contrast + 0.5);
  }
  
  float _processRing (const in vec2 uv, const in vec2 offset) {
    vec2 cuv = (fract(uv) - 0.5) * 2.;
    cuv = cuv * 0.5 + 0.5;
    cuv = fract(cuv);
    cuv = cuv - 0.5 + offset;
    cuv = rotate(cuv, 2.98294) * 2. / vec2(4.001, 0.583);
    
    float v = gaussian(cuv, 0.5);
    
    return v;
  }
  
  float processRing (in vec2 uv) {
    uv = (uv - 0.5) / 0.908;
    vec2 nuv = vec2(0.);
    nuv.x = fract(0.5+atan(uv.y, uv.x) / 6.2832 - 3.65 / 6.2832);
    nuv.y = clamp(length(uv) * 2. - 0.138 * 2., 0., 1.);
    
    float value = 0.;
    for (float x = -2.; x <= 2.; x++) for (float y = -1.; y <= 1.; y++) {
        value+= _processRing(nuv, vec2(x, y));
    }
    
    return clamp(brightnessContrast(value, 1.05227907, 0.4875), 0., 1.) * clamp(length(uv)*6., 0., 1.);
  }
  
  
  float hash1 (const in vec2 n, const in float seed) {
    return fract(sin(dot(n + seed / 120.795,vec2(127.1 + seed/33., 311.7 +seed/35.)))*(43758.5453 + seed*101.3579));
  }
  
  vec2 hash2 (in vec2 p, const in float seed) {
    p = vec2(dot(p,vec2(127.1,311.7)), dot(p,vec2(269.5,183.3)) );
    return fract(sin(p + seed) * (43758.5453 + seed));
  }
  
  float bias (const in float b, const in float t) {
    return pow(t, log(b) / log(0.5));
  }
  
  vec2 gain (const in float g, const in vec2 t) {
  vec2 nt = t;
  if (t.x < 0.5) {
      nt.x = bias(1.-g, 2.*t.x) / 2.;
  } else {
      nt.x = 1. - bias(1.-g, 2. - 2. * t.x) / 2.;
  }
  if (t.y < 0.5) {
      nt.y = bias(1.-g, 2.*t.y) / 2.;
  } else {
      nt.y = 1. - bias(1.-g, 2. - 2. * t.y) / 2.;
  }
  return nt;
  }
  
  float controllableBilinearLerp (
  const in float p00,
  const in float p10,
  const in float p01,
  const in float p11,
  const in vec2 t,
  float smoothness
  ) {
  vec2 pt = mix(
      gain(0.95, t),
      t * t * t * (t * (t * 6. - 15.) + 10.),
      clamp(smoothness * 1.75 + 0.25, 0., 1.)
  );
  return mix(mix(p00, p10, pt.x), mix(p01, p11, pt.x), pt.y);
  }
  
  
  const float deformShape = 1.963;
  const float deformAmount = 0.65;
  const float smoothness = 0.312;
  const float displacementAngle = 5.77013;
  const float displacementAmount = 0.324;
  const float displacementSmoothing = 0.01;
  const float weightReduction = 0.395;
  
  float valueNoise2d(in vec2 uv, const in float scale, const in float seed) {
  uv = uv * scale * 2.;
  vec2 p = floor(uv);
  vec2 f = fract(uv);
  float p00 = hash1(mod(p, scale * 8.), seed);
  float p01 = hash1(mod(p + vec2(0., 1.), scale * 8.), seed);
  float p10 = hash1(mod(p + vec2(1., 0.), scale * 8.), seed);
  float p11 = hash1(mod(p + vec2(1., 1.), scale * 8.), seed);
  vec2 pd = hash2(mod(p + vec2(0.5), scale * 8.), seed + p00);
  float d = clamp(pow(
      pow(pow(abs(f.x - 0.5) * 2., deformShape) + pow(abs(f.y - 0.5) * 2., deformShape), 1. / deformShape)
      , deformAmount), 0., 1.);
  return controllableBilinearLerp(p00, p10, p01, p11, mix(clamp(mix(f, pd, deformAmount), 0., 1.), f, d), smoothness);
  }
  
  float fractalValueNoise2d (const in vec2 uv) {
  float f = 0.;
  float w = 0.;
  vec2 displacementDir = vec2(cos(displacementAngle),sin(displacementAngle));
  for (float octave = 1.; octave <= 8.; octave++) {
      float weight = 1. / pow(1. / (1. - weightReduction), abs(octave - 0.224));
      f+= valueNoise2d( uv - f * displacementAmount * displacementDir / mix(1., pow(2., octave) / 2., displacementSmoothing), pow(2., octave), octave) * weight;
      w+= weight;
  }
  return clamp(f / w, 0., 1.);
  }
  
  float hardLightBlend (const in float background, const in float foreground, const in float opacity) {
  return mix(background, mix(
      (255. -  ((255. - 2. * (foreground * 255. - 128.)) * (255. - background * 255.)) / 256.) / 255.,
      2. * foreground * background * 255. / 256.,
      foreground > 128. / 255. ? 0. : 1.
  ), opacity);
  }
  
  const float angle = 6.02906;
  const float intensity = -0.04;
  const float angleIntensity = 0.504;
  
  vec2 directionalWarpUv (in vec2 uv, const in float intensityMap, const in float angleMap) {
  float i = intensityMap * 2. - 1.;
  float a = angleMap * 2. - 1.;
  float iangle = angle + a * angleIntensity * 6.2831853071795;
  
  return uv - vec2(cos(iangle), sin(iangle)) * i * intensity;
  }
  
  void main () {
  vec2 uv = v_uv * 2.0 - 1.0;
  
  uv -= 0.6 * (uv - 0.5) * pow(clamp(1. - length(uv - 0.5) * 2.7, 0., 1.), 0.45);
  
  float f = clamp(pow(max(0., length(uv - 0.5) - 0.5) / 0.5, 3.0), 0., 1.);
  
  vec2 noiseOffset = vec2(-0.033, 0.0115) * u_time;
  
  float ring1 = processRing(uv);
  float noise1 = clamp(brightnessContrast(fractalValueNoise2d(uv + noiseOffset), 1.04174604140042, 0.425), 0., 1.);
  float v1 = hardLightBlend(noise1, ring1, 0.681);
  
  vec2 nuv = directionalWarpUv(uv, ring1 - f * 0.5, noise1 + f * 0.3);
  
  float ring2 = processRing(nuv);
  float noise2 = clamp(brightnessContrast(fractalValueNoise2d(nuv + noiseOffset), 1.04174604140042, 0.425), 0., 1.);
  float v2 = hardLightBlend(noise2, ring2, 0.71);
  
  float v = hardLightBlend(v2, v1, 0.9 * (0.4 + 0.6 * ring1));
  
  v = (pow(v, mix(4. - ring2 * 3., 1., clamp(uv.x * 0.2 + noise2 - 0.05, 0., 1.))) + v) * 0.525;
  // vec3 color = mix(vec3(0.0, 0.0, 0.04), vec3(1., 0.97, 0.73), v);
  
  gl_FragColor = vec4(mix(vec3(0.0, 0.0, 0.04), vec3(1., 0.97, 0.73), v), 1.0);
  // gl_FragColor = vec4(color + 0.299 * color.r + 0.587 * color.g + 0.114 * color.b, 1.0);
  }
`;

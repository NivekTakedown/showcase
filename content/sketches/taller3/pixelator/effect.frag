precision mediump float;

varying vec2 vTexCoord;

uniform sampler2D tex0;
uniform float tiles;

void main() {

  vec2 uv = vTexCoord;
  uv = 1.0 - uv;
  uv = floor(uv * tiles)/tiles;
  vec4 tex = texture2D(tex0, uv);
  gl_FragColor = tex;

  //ver cambio en la textura
  //gl_FragColor = vec4(uv.x, uv.y, 0.0, 1.0);
}
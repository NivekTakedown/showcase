precision mediump float;

uniform sampler2D texture;
uniform vec2 u_resolution;

void main() {
  vec2 st1 = gl_FragCoord.xy / u_resolution;
  gl_FragColor = texture2D(texture, vec2(st1.x,(1.0-st1.y)));
}

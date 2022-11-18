precision mediump float;

// uniforms are defined and sent by the sketch
uniform sampler2D texture;
// see emitResolution: https://github.com/VisualComputing/p5.treegl#macros
uniform vec2 u_resolution;
#define PI 3.14159265359
uniform vec2 u_mouse;
uniform float u_time;

void main() {
  vec2 st1 = gl_FragCoord.xy / u_resolution;
  gl_FragColor = texture2D(texture, vec2(st1.x,(1.0-st1.y)));
}

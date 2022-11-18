/*
Vertex shader code to be coupled with non_euclidean.frag 
Generated with treegl version 0.3.1
*/
precision mediump float;
attribute vec3 aPosition;
uniform mat4 uModelViewProjectionMatrix;
void main() {
  gl_Position = uModelViewProjectionMatrix * vec4(aPosition, 1.0);
}
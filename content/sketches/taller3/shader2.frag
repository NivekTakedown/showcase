// Author:Kevin Fabio Ramos López

#ifdef GL_ES
precision mediump float;
#endif

#define PI 3.14159265359

uniform vec2 u_resolution;
uniform vec2 u_mouse;
uniform float u_time;
uniform sampler2D tex;

float plot(vec2 st, float pct){
  return  smoothstep( pct-0.02, pct+0.02, st.y) -
          smoothstep( pct+.02, pct+0.02, st.y);
}//tomado de https://thebookofshaders.com/

void main() {
    float a=2.75;
  float time= 9.0;
    vec2 st = gl_FragCoord.xy/u_resolution;
    float x=st.x*(a+sin(u_time*time))-2.2-(-(cos(u_time*time)));
    // Smooth interpolation between 0.1 and 0.9
    float y = 0.89+(sqrt(-x*x+1.0)+pow(x*x, 1.0/ 3.0))/(a+sin(u_time*time));
	float z = 0.9+(-sqrt(-x*x+1.0)+pow(x*x, 1.0/ 3.0))/(a+sin(u_time*time));
    vec3 color = vec3(y);

    float pct = plot(st,y);
    float pct2 = plot(st,z);
    color = +pct*vec3(0.0,1.0,1.0)+pct2*vec3(0.0,1.0,1.0);

    gl_FragColor = vec4(.8,.8,.8,1.0)-vec4(color,abs(sin(u_time*time)));
}
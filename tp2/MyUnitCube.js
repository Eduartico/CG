import {CGFobject} from '../lib/CGF.js';
/**
 * MyDiamond
 * @constructor
 * @param scene - Reference to MyScene object
 */
export class MyUnitCube extends CGFobject {
	constructor(scene) {
		super(scene);
		this.initBuffers();
	}
	
	initBuffers() {
		this.vertices = [
                        -0.5, 0.5, -0.5,
                        0.5, 0.5, -0.5,
                        0.5, -0.5, -0.5,
                        -0.5, -0.5, -0.5,
                        -0.5, 0.5, 0.5,
                        0.5, 0.5, 0.5,
                        0.5, -0.5, 0.5,
                        -0.5, -0.5, 0.5
                ];

		//Counter-clockwise reference of vertices
		this.indices = [
                        0, 1, 2,
                        0, 2, 3,
                        
                        4, 6, 5,
                        4, 7, 6,

                        4, 5, 1,
                        4, 1, 0,

                        3, 2, 6,
                        3, 6, 7,

                        1, 5, 6,
                        1, 6, 2,

                        4, 0, 3,
                        4, 3, 7
                ];
                        
                        

		//The defined indices (and corresponding vertices)
		//will be read in groups of three to draw triangles
		this.primitiveType = this.scene.gl.TRIANGLES;

		this.initGLBuffers();
	}
}
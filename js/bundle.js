!function(){"use strict";var e,a=Laya.ClassUtils.regClass;!function(e){!function(e){class t extends Laya.Scene{constructor(){super()}createChildren(){super.createChildren(),this.loadScene("test/TestScene")}}e.TestSceneUI=t,a("ui.test.TestSceneUI",t)}(e.test||(e.test={}))}(e||(e={}));class t extends Laya.Script3D{constructor(){super(),this._tempVector3=new Laya.Vector3,this.yawPitchRoll=new Laya.Vector3,this.resultRotation=new Laya.Quaternion,this.tempRotationZ=new Laya.Quaternion,this.tempRotationX=new Laya.Quaternion,this.tempRotationY=new Laya.Quaternion,this.rotaionSpeed=6e-5}_updateRotation(){Math.abs(this.yawPitchRoll.y)<1.5&&(Laya.Quaternion.createFromYawPitchRoll(this.yawPitchRoll.x,this.yawPitchRoll.y,this.yawPitchRoll.z,this.tempRotationZ),this.tempRotationZ.cloneTo(this.camera.transform.localRotation),this.camera.transform.localRotation=this.camera.transform.localRotation)}onAwake(){Laya.stage.on(Laya.Event.RIGHT_MOUSE_DOWN,this,this.mouseDown),Laya.stage.on(Laya.Event.RIGHT_MOUSE_UP,this,this.mouseUp),this.camera=this.owner}onUpdate(){var e=Laya.timer.delta;if(!isNaN(this.lastMouseX)&&!isNaN(this.lastMouseY)&&this.isMouseDown){this.owner.scene;Laya.KeyBoardManager.hasKeyDown(87)&&this.moveForward(-.01*e),Laya.KeyBoardManager.hasKeyDown(83)&&this.moveForward(.01*e),Laya.KeyBoardManager.hasKeyDown(65)&&this.moveRight(-.01*e),Laya.KeyBoardManager.hasKeyDown(68)&&this.moveRight(.01*e),Laya.KeyBoardManager.hasKeyDown(81)&&this.moveVertical(.01*e),Laya.KeyBoardManager.hasKeyDown(69)&&this.moveVertical(-.01*e);var a=Laya.stage.mouseX-this.lastMouseX,t=Laya.stage.mouseY-this.lastMouseY,o=this.yawPitchRoll;o.x-=a*this.rotaionSpeed*e,o.y-=t*this.rotaionSpeed*e,this._updateRotation()}this.lastMouseX=Laya.stage.mouseX,this.lastMouseY=Laya.stage.mouseY}onDestroy(){Laya.stage.off(Laya.Event.RIGHT_MOUSE_DOWN,this,this.mouseDown),Laya.stage.off(Laya.Event.RIGHT_MOUSE_UP,this,this.mouseUp)}mouseDown(e){this.camera.transform.localRotation.getYawPitchRoll(this.yawPitchRoll),this.lastMouseX=Laya.stage.mouseX,this.lastMouseY=Laya.stage.mouseY,this.isMouseDown=!0}mouseUp(e){this.isMouseDown=!1}mouseOut(e){this.isMouseDown=!1}moveForward(e){this._tempVector3.x=this._tempVector3.y=0,this._tempVector3.z=e,this.camera.transform.translate(this._tempVector3)}moveRight(e){this._tempVector3.y=this._tempVector3.z=0,this._tempVector3.x=e,this.camera.transform.translate(this._tempVector3)}moveVertical(e){this._tempVector3.x=this._tempVector3.z=0,this._tempVector3.y=e,this.camera.transform.translate(this._tempVector3,!1)}}class o extends Laya.Material{constructor(){super(),this.setShaderName("CustomShader")}get diffuseTexture(){return this._shaderValues.getTexture(o.DIFFUSETEXTURE)}set diffuseTexture(e){this._shaderValues.setTexture(o.DIFFUSETEXTURE,e)}set marginalColor(e){this._shaderValues.setVector3(o.MARGINALCOLOR,e)}}o.DIFFUSETEXTURE=Laya.Shader3D.propertyNameToID("u_texture"),o.MARGINALCOLOR=Laya.Shader3D.propertyNameToID("u_marginalColor");class n extends e.test.TestSceneUI{constructor(){super(),this.initShader(),this.scene1=Laya.stage.addChild(new Laya.Scene3D);var e=this.scene1.addChild(new Laya.Camera(0,.1,1e3));e.transform.translate(new Laya.Vector3(0,.5,1.7)),e.transform.rotate(new Laya.Vector3(-15,0,0),!0,!1),e.addComponent(t),e.clearFlag=Laya.CameraClearFlags.Sky,this.directionLight=this.scene1.addChild(new Laya.DirectionLight),this.directionLight.color=new Laya.Vector3(1,1,1);var a=this.scene1.addChild(new Laya.MeshSprite3D(Laya.PrimitiveMesh.createSphere(.5,128,128)));this.exposureNumber=.5,Laya.Material.load("res/DawnDusk/SkyBox.lmat",Laya.Handler.create(this,function(e){var a=this.scene1.skyRenderer;a.mesh=Laya.SkyBox.instance,a.material=e,Laya.timer.frameLoop(1,this,this.onFrameLoop),console.log(this.scene1.skyRenderer),Laya.timer.frameLoop(1,this,function(){this.scene1.skyRenderer.material.exposure=Math.sin(this.exposureNumber+=.01)+1,this.scene1.skyRenderer.material.rotation+=.01})}));var n=new o;Laya.Texture2D.load("res/earth.png",Laya.Handler.create(null,function(e){n.diffuseTexture=e})),n.marginalColor=new Laya.Vector3(0,.3,1),a.meshRenderer.sharedMaterial=n,a.transform.localScale=new Laya.Vector3(.6,.6,.6),Laya.timer.frameLoop(1,this,function(){a.transform.rotate(new Laya.Vector3(0,.01,0),!0)})}onFrameLoop(){this.directionLight.transform.rotate(new Laya.Vector3(-.01,0,0))}initShader(){var e={a_Position:Laya.VertexMesh.MESH_POSITION0,a_Normal:Laya.VertexMesh.MESH_NORMAL0,a_Texcoord:Laya.VertexMesh.MESH_TEXTURECOORDINATE0,a_BoneWeights:Laya.VertexMesh.MESH_BLENDWEIGHT0,a_BoneIndices:Laya.VertexMesh.MESH_BLENDINDICES0},a={u_Bones:Laya.Shader3D.PERIOD_CUSTOM,u_CameraPos:Laya.Shader3D.PERIOD_CAMERA,u_MvpMatrix:Laya.Shader3D.PERIOD_SPRITE,u_WorldMat:Laya.Shader3D.PERIOD_SPRITE,u_texture:Laya.Shader3D.PERIOD_MATERIAL,u_marginalColor:Laya.Shader3D.PERIOD_MATERIAL,"u_SunLight.color":Laya.Shader3D.PERIOD_SCENE},t=Laya.Shader3D.add("CustomShader"),o=new Laya.SubShader(e,a);t.addSubShader(o),o.addShaderPass('\n        #include "Lighting.glsl";\n        attribute vec4 a_Position;\n        attribute vec2 a_Texcoord;\n        attribute vec3 a_Normal;\n        uniform mat4 u_MvpMatrix;\n        uniform mat4 u_WorldMat;\n        varying vec2 v_Texcoord;\n        varying vec3 v_Normal;\n        #ifdef BONE\n        attribute vec4 a_BoneIndices;\n        attribute vec4 a_BoneWeights;\n        const int c_MaxBoneCount = 24;\n        uniform mat4 u_Bones[c_MaxBoneCount];\n        #endif\n        #if defined(DIRECTIONLIGHT)\n        varying vec3 v_PositionWorld;\n        #endif\n        void main()\n        {\n        #ifdef BONE\n        mat4 skinTransform=mat4(0.0);\n        skinTransform += u_Bones[int(a_BoneIndices.x)] * a_BoneWeights.x;\n        skinTransform += u_Bones[int(a_BoneIndices.y)] * a_BoneWeights.y;\n        skinTransform += u_Bones[int(a_BoneIndices.z)] * a_BoneWeights.z;\n        skinTransform += u_Bones[int(a_BoneIndices.w)] * a_BoneWeights.w;\n        vec4 position = skinTransform * a_Position;\n        gl_Position=u_MvpMatrix * position;\n        mat3 worldMat=mat3(u_WorldMat * skinTransform);\n        #else\n        gl_Position=u_MvpMatrix * a_Position;\n        mat3 worldMat=mat3(u_WorldMat);\n        #endif\n        v_Texcoord=a_Texcoord;\n        v_Normal=worldMat*a_Normal;\n        #if defined(DIRECTIONLIGHT)\n        #ifdef BONE\n        v_PositionWorld=(u_WorldMat*position).xyz;\n        #else\n        v_PositionWorld=(u_WorldMat*a_Position).xyz;\n        #endif\n        #endif\n        gl_Position=remapGLPositionZ(gl_Position); \n        }','\n        #ifdef FSHIGHPRECISION\n            precision highp float;\n        #else\n            precision mediump float;\n        #endif\n        #include "Lighting.glsl";\n        varying vec2 v_Texcoord;\n        uniform sampler2D u_texture;\n        uniform vec3 u_marginalColor;\n        varying vec3 v_Normal;\n        #if defined(DIRECTIONLIGHT)\n            uniform vec3 u_CameraPos;\n            varying vec3 v_PositionWorld;\n            uniform DirectionLight u_SunLight;\n        #endif\n        void main()\n        {\n            gl_FragColor=texture2D(u_texture,v_Texcoord);\n            vec3 normal=normalize(v_Normal);\n            vec3 toEyeDir = normalize(u_CameraPos-v_PositionWorld);\n            float Rim = 1.0 - max(0.0,dot(toEyeDir, normal));\n            vec3 lightColor = u_SunLight.color;\n            vec3 Emissive = 2.0 * lightColor * u_marginalColor * pow(Rim,3.0);  \n            gl_FragColor = texture2D(u_texture, v_Texcoord) + vec4(Emissive,1.0);\n        }')}}class s{constructor(){}static init(){(0,Laya.ClassUtils.regClass)("script/GameUI.ts",n)}}s.width=640,s.height=1136,s.scaleMode="fixedwidth",s.screenMode="none",s.alignV="top",s.alignH="left",s.startScene="test/TestScene.scene",s.sceneRoot="",s.debug=!1,s.stat=!1,s.physicsDebug=!1,s.exportSceneToJson=!0,s.init();new class{constructor(){window.Laya3D?Laya3D.init(s.width,s.height):Laya.init(s.width,s.height,Laya.WebGL),Laya.Physics&&Laya.Physics.enable(),Laya.DebugPanel&&Laya.DebugPanel.enable(),Laya.stage.scaleMode=s.scaleMode,Laya.stage.screenMode=s.screenMode,Laya.stage.alignV=s.alignV,Laya.stage.alignH=s.alignH,Laya.URL.exportSceneToJson=s.exportSceneToJson,(s.debug||"true"==Laya.Utils.getQueryString("debug"))&&Laya.enableDebugPanel(),s.physicsDebug&&Laya.PhysicsDebugDraw&&Laya.PhysicsDebugDraw.enable(),s.stat&&Laya.Stat.show(),Laya.alertGlobalError(!0),Laya.ResourceVersion.enable("version.json",Laya.Handler.create(this,this.onVersionLoaded),Laya.ResourceVersion.FILENAME_VERSION)}onVersionLoaded(){Laya.AtlasInfoManager.enable("fileconfig.json",Laya.Handler.create(this,this.onConfigLoaded))}onConfigLoaded(){s.startScene&&Laya.Scene.open(s.startScene)}}}();
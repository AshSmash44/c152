AFRAME.registerComponent("move",{
    schema:{
        moveY:{type:"number",default:1},
    },
    tick:function(){
        var position = this.el.getAttribute("position");
        this.data.moveY = this.data.moveY + 0.01;
    }
});
AFRAME.registerComponent("camera-zoom-out",{
    schema:{
        moveZ:{type:"number",default:1},
    },
    tick:function(){
        var position = this.el.getAttribute("position");
        this.dara.moveZ = this.data.moveX + 0.01;
    }
});
AFRAME.registerComponent("fallDown",{
    schema:{
        moveY:{type:"number",default:0},
    },
    tick:function(){
        var position = this.el.getAttribute("position");
        this.data.moveY = this.data.moveY - 0.01;
    }
});
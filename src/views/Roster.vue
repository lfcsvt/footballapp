<template>
    <div class="field" style="-webkit-overflow-scrolling: touch;">
        <div class="goalkeeper">
            <p>q</p>
            <p style="color: black">{{getGoal}}</p>
            <h5 style="color: black">1</h5>
        </div>
        <div class="right-wing">
            <p>q</p>
            <p style="color: black">{{getRightWing}}</p>
            <h5 style="color: black">2</h5>
        </div>
        <div class="left-wing">
            <p>q</p>
            <p style="color: black">{{getLeftWing}}</p>
            <h5 style="color: black">6</h5>
        </div>
        <div class="left-back">
            <p>q</p>
            <p style="color: black">{{getCenterBack}}</p>
            <h5 style="color: black">3</h5>
        </div>
        <div class="center-back">
            <p>q</p>
            <p style="color: black">{{getLeftBack}}</p>
            <h5 style="color: black">4</h5>
        </div>
        <div class="defensive-midfield">
            <p>q</p>
            <p style="color: black">{{getMidDef}}</p>
            <h5 style="color: black">5</h5>
        </div>
        <div class="right-midfield">
            <p>q</p>
            <p style="color: black">{{getMidRig}}</p>
            <h5 style="color: black">8</h5>
        </div>
        <div class="left-midfield">
            <p>q</p>
            <p style="color: black">{{getMidLef}}</p>
            <h5 style="color: black">10</h5>
        </div>
        <div class="left-wingger">
            <p>q</p>
            <p style="color: black">{{getLefWin}}</p>
            <h5 style="color: black">11</h5>
        </div>
        <div class="right-wingger">
            <p>q</p>
            <p style="color: black">{{getRigWin}}</p>
            <h5 style="color: black">7</h5>
        </div>
        <div class="forward">
            <p>q</p>
            <p style="color: black">{{getNine}}</p>
            <h5 style="color: black">9</h5>
        </div>
    </div>
</template>
<script>
    export default {
        name: 'roster',
        data() {
            return {
                squad: this.$route.params.squad,
                colors: this.$route.params.colors
            }
        },

        created() {
            console.log(this.squad)

        },
        methods: {

        },
        computed: {
            getGoal() {
                var a = this.squad.filter(player => player.shirtNumber == 1)
                if (a.length != 0) {
                    var name = a[0].name.split(' ')
                    return name.slice(-1).pop()
                } else {
                    var a = this.squad.filter(player => player.position == "Goalkeeper")
                    var name = a[0].name.split(' ')
                    return name.slice(-1).pop()
                }
            },
            getRightWing() {
                var a = this.squad.filter(player => player.shirtNumber == 2)
                if (a.length != 0) {
                    var name = a[0].name.split(' ')
                    return name.slice(-1).pop()
                } else {
                    var a = this.squad.filter(player => player.position == "Defender")
                    var name = a[1].name.split(' ')
                    return name.slice(-1).pop()
                }
            },
            getLeftWing() {
                var a = this.squad.filter(player => player.shirtNumber == 6)
                if (a.length != 0) {
                    var name = a[0].name.split(' ')
                    return name.slice(-1).pop()
                } else {
                    var a = this.squad.filter(player => player.position == "Defender")
                    var name = a[2].name.split(' ')
                    return name.slice(-1).pop()
                }
            },
            getLeftBack() {
                var a = this.squad.filter(player => player.shirtNumber == 4)
                if (a.length != 0) {
                    var name = a[0].name.split(' ')
                    return name.slice(-1).pop()
                } else {
                    var a = this.squad.filter(player => player.position == "Defender")
                    var name = a[1].name.split(' ')
                    return name.slice(-1).pop()
                }
            },
            getCenterBack() {
                var a = this.squad.filter(player => player.shirtNumber == 3)
                if (a.length != 0) {
                    var name = a[0].name.split(' ')
                    return name.slice(-1).pop()
                } else {
                    var a = this.squad.filter(player => player.position == "Defender")
                    var name = a[3].name.split(' ')
                    return name.slice(-1).pop()
                }
            },
            getMidDef() {
                var a = this.squad.filter(player => player.shirtNumber == 5)
                if (a.length != 0) {
                    var name = a[0].name.split(' ')
                    return name.slice(-1).pop()
                } else {
                    var a = this.squad.filter(player => player.position == "Midfielder")
                    var name = a[2].name.split(' ')
                    return name.slice(-1).pop()
                }
            },
            getMidLef() {
                var a = this.squad.filter(player => player.shirtNumber == 10)
                if (a.length != 0) {
                    var name = a[0].name.split(' ')
                    return name.slice(-1).pop()
                } else {
                    var a = this.squad.filter(player => player.position == "Midfielder")
                    var name = a[2].name.split(' ')
                    return name.slice(-1).pop()
                }
            },
            getMidRig() {
                var a = this.squad.filter(player => player.shirtNumber == 8)
                if (a.length != 0) {
                    var name = a[0].name.split(' ')
                    return name.slice(-1).pop()
                } else {
                    var a = this.squad.filter(player => player.position == "Midfielder")
                    var name = a[3].name.split(' ')
                    return name.slice(-1).pop()
                }
            },
            getRigWin() {
                var a = this.squad.filter(player => player.shirtNumber == 7)
                if (a.length != 0) {
                    var name = a[0].name.split(' ')
                    return name.slice(-1).pop()
                } else {
                    var a = this.squad.filter(player => player.position == "Attacker")
                    var name = a[1].name.split(' ')
                    return name.slice(-1).pop()
                }
            },
            getLefWin() {
                var a = this.squad.filter(player => player.shirtNumber == 11)
                if (a.length != 0) {
                    var name = a[0].name.split(' ')
                    return name.slice(-1).pop()
                } else {
                    var a = this.squad.filter(player => player.position == "Attacker")
                    var name = a[2].name.split(' ')
                    return name.slice(-1).pop()
                }
            },
            getNine() {
                var a = this.squad.filter(player => player.shirtNumber == 9)
                if (a.length != 0) {
                    var name = a[0].name.split(' ')
                    return name.slice(-1).pop()
                } else {
                    var a = this.squad.filter(player => player.position == "Attacker")
                    var name = a[0].name.split(' ')
                    return name.slice(-1).pop()
                }
            }



        }
    }
</script>
<style scoped>
    img {
        height: 80px;
        width: 80px;

    }

    .field {
        height: 540px;
        width: 375px;
        background-image: url('../assets/field.jpg');
        background-size: cover;
        z-index: -1;
    }

    .goalkeeper {
        background-image: url('../assets/teamJersey2.png');
        position: relative;
        bottom: -450px;
        left: 150px;
        height: 80px;
        width: 80px;
    }

    .right-wing {
        background-image: url('../assets/teamJersey2.png');
        position: relative;
        top: 190px;
        left: 280px;
        height: 80px;
        width: 80px;
    }

    .left-wing {
        background-image: url('../assets/teamJersey2.png');
        position: relative;
        top: 110px;
        left: 30px;
        height: 80px;
        width: 80px;
    }

    .left-back {
        background-image: url('../assets/teamJersey2.png');
        position: relative;
        top: 120px;
        left: 75px;
        height: 80px;
        width: 80px;
    }

    .center-back {
        background-image: url('../assets/teamJersey2.png');
        position: relative;
        top: 40px;
        left: 220px;
        height: 80px;
        width: 80px;
    }

    .defensive-midfield {
        background-image: url('../assets/teamJersey2.png');
        position: relative;
        bottom: 120px;
        left: 150px;
        height: 80px;
        width: 80px;
    }

    .right-midfield {
        background-image: url('../assets/teamJersey2.png');
        position: relative;
        bottom: 320px;
        left: 250px;
        height: 80px;
        width: 80px;
    }

    .left-midfield {
        background-image: url('../assets/teamJersey2.png');
        position: relative;
        bottom: 400px;
        left: 50px;
        height: 80px;
        width: 80px;
    }

    .left-wingger {
        background-image: url('../assets/teamJersey2.png');
        position: relative;
        bottom: 580px;
        left: 20px;
        height: 80px;
        width: 80px;
    }

    .right-wingger {
        background-image: url('../assets/teamJersey2.png');
        position: relative;
        bottom: 650px;
        left: 280px;
        height: 80px;
        width: 80px;
    }

    .forward {
        background-image: url('../assets/teamJersey2.png');
        position: relative;
        bottom: 750px;
        left: 150px;
        height: 80px;
        width: 80px;
    }

    p {
        margin-bottom: 0px;
    }

    @media only screen and (orientation: landscape) {
        .field {
            height: 450px;
            width: 666px;
            background-image: url('../assets/field2.jpg');
            background-size: cover;
            z-index: -1;
        }

        .goalkeeper {
            background-image: url('../assets/teamJersey2.png');
            position: relative;
            bottom: -180px;
            left: 10px;
            height: 80px;
            width: 80px;
            z-index: 0;
            -webkit-transform: rotate(90deg);
        }

        .right-wing {
            background-image: url('../assets/teamJersey2.png');
            position: relative;
            top: 260px;
            left: 240px;
            height: 80px;
            width: 80px;
            -webkit-transform: rotate(90deg);
        }

        .left-wing {
            background-image: url('../assets/teamJersey2.png');
            position: relative;
            top: -130px;
            left: 240px;
            height: 80px;
            width: 80px;
            -webkit-transform: rotate(90deg);
        }

        .left-back {
            background-image: url('../assets/teamJersey2.png');
            position: relative;
            top: -140px;
            left: 130px;
            height: 80px;
            width: 80px;
            -webkit-transform: rotate(90deg);
        }

        .center-back {
            background-image: url('../assets/teamJersey2.png');
            position: relative;
            top: -20px;
            left: 130px;
            height: 80px;
            width: 80px;
            -webkit-transform: rotate(90deg);
        }

        .defensive-midfield {
            background-image: url('../assets/teamJersey2.png');
            position: relative;
            bottom: 210px;
            left: 260px;
            height: 80px;
            width: 80px;
            -webkit-transform: rotate(90deg);
        }

        .right-midfield {
            background-image: url('../assets/teamJersey2.png');
            position: relative;
            bottom: 130px;
            left: 360px;
            height: 80px;
            width: 80px;
            -webkit-transform: rotate(90deg);
        }

        .left-midfield {
            background-image: url('../assets/teamJersey2.png');
            position: relative;
            top: -530px;
            left: 360px;
            height: 80px;
            width: 80px;
            -webkit-transform: rotate(90deg);
        }

        .left-wingger {
            background-image: url('../assets/teamJersey2.png');
            position: relative;
            bottom: 630px;
            left: 520px;
            height: 80px;
            width: 80px;
            -webkit-transform: rotate(90deg);
        }

        .right-wingger {
            background-image: url('../assets/teamJersey2.png');
            position: relative;
            bottom: 350px;
            left: 520px;
            height: 80px;
            width: 80px;
            -webkit-transform: rotate(90deg);
        }

        .forward {
            background-image: url('../assets/teamJersey2.png');
            position: relative;
            bottom: 610px;
            left: 500px;
            height: 80px;
            width: 80px;
            -webkit-transform: rotate(90deg);
        }

        p {
            margin-bottom: 0px;
        }
    }
</style>
<template>
    <router-link style= "color: black; width: auto; text-decoration: none;" :to="'/stanovi'">
<div class="container" style="width:75%">
    <div class="shadow">   
        <div class="row">
            <div class="col-2" style="width:35%; padding:0">
                <div class="stupac1">
                    <img src="/images/card-image.jpg" alt="logo">
                </div>
            </div>

            <div class="col-4" style="width:64%; padding:0">
                <div class="stupac2">
                    <div class="title">
                    <h5>Stan Split Sućidar</h5>
                    </div>
                    <div class="podnaslov" style="margin-left: 25px">
                    <p>Stan u najam</p>
                    </div>
                    <div class="container" style="display: flex; padding:5px">
                        <div class="column">
                            <p> Broj soba: 3</p>
                        </div>
                        <div class="column">
                            <p> Godina izgradnje: 2003</p>
                        </div>
                        <div class="column">
                            <p> Kat: 4.</p>
                        </div>
                        <div class="column">
                            <p> Površina: 80m2</p>
                        </div>
	                </div>     
                </div>
                <hr>
                <div class="container" style="display: flex; padding:5px">
                        <div class="column1">
                            <p> <i class="fa fa-map-marker"></i> Splitsko-dalmatinska</p>
                        </div>
                        <div class="column1">
                            <p> <i class="fa fa-clock-o" aria-hidden="true"></i> Objavljeno prije 45 min</p>
                        </div>
                        <div class="column1">
                            <p> 465 € ~ 3.500kn</p>
                        </div>
	                </div> 
            </div>
        </div>
    </div>
</div>
</router-link>
</template>

<style scoped>
.shadow
{
  margin-top: 50px;
}
.column1
{
	  flex: 33.33%;
	  text-align: center;
	}
.column 
{
	  flex: 25%;
	  text-align: center;
	}
.title
{
  font-weight: bolder;
  font-family: 'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif;
  margin-left: 10px;
}
h5
{
  padding: 12px;
}

</style>
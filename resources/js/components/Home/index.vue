<template>
    <link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.1.0/css/all.css" integrity="sha384-lKuwvrZot6UHsBSfcMvOkWwlCMgc0TaWr+30HWe3a4ltaBwTZhyTEggF5tJv8tbt" crossorigin="anonymous">
<div class="container">
    <br/>
	<div class="row justify-content-center">
        
        <div class="col-12 col-md-10 col-lg-8" style="margin-top: 15%; width: 80%">
            <div style="text-align: center; font-size: 40px; font-weight:bold; color: #405d27">
            <p> Što tražite?
            </p>
        </div>
            <form class="card card-sm" style="box-shadow: 4px 4px 10px #adad85;">
                <div class="card-body row no-gutters align-items-center">
                    <div class="col-auto">
                        <i class="fas fa-search h4 text-body"></i>
                    </div>
                                    <!--end of col-->
                        <div class="col">
                            <input class="form-control form-control-lg form-control-borderless" type="search" placeholder="Upišite pojam...">
                        </div>
                                    <!--end of col-->
                    <div class="col-auto">
                        <button class="btn btn-lg btn-success" type="submit">Traži</button>
                    </div>

                </div>
            </form>
        </div>
                        <!--end of col-->
    </div>
</div>

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
<br>
<br>
</template>


<style scoped>

.form-control-borderless 
{
    border: none;
}

.shadow
{
  margin-top: 50px;
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

.column 
{
	  flex: 25%;
	  text-align: center;
	}

.column1
{
	  flex: 33.33%;
	  text-align: center;
	}

</style>